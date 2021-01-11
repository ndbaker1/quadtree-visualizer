import { Rect } from './physics'

export interface QuadObject {
  insideRect: (rect: Rect) => boolean // whether the object in fully contained within a Rect
}

/**
 * Node of a QuadTree
 * carries data about its:
 *  - bounds
 *  - depth
 *  - children
 *  - containing objects
 */
export class QuadNode {
  public bounds: Rect
  public leaves!: Array<QuadNode> | null
  public quadObjects = new Array<QuadObject>()
  private depth: number
  constructor(bounds: Rect, depth: number) {
    this.bounds = bounds
    this.depth = depth
  }

  /**
   * cleanup references down the QuadTree recursively
   */
  clear(): void {
    this.quadObjects = new Array<QuadObject>()
    this.leaves?.forEach((leaf: QuadNode) => leaf.clear())
    this.leaves = null
  }

  /**
   * process any updates recursively down the tree
   */
  process(quadNodeProcedure: (quadNode: QuadNode) => void): void {
    quadNodeProcedure(this)
    this.leaves?.forEach((leaf: QuadNode) => leaf.process(quadNodeProcedure))
  }

  /**
   * Initialize the sub-quads of the current Node,
   * and test if any object fit into a deeper quad
   */
  subdivide(): void {
    // calculate new bounds of sub-quads
    const midW = this.bounds.w / 2
    const midH = this.bounds.h / 2
    const newDepth = this.depth + 1
    this.leaves = [
      new QuadNode(new Rect(this.bounds.x, this.bounds.y, midW, midH), newDepth),
      new QuadNode(new Rect(this.bounds.x + midW, this.bounds.y, midW, midH), newDepth),
      new QuadNode(new Rect(this.bounds.x, this.bounds.y + midH, midW, midH), newDepth),
      new QuadNode(new Rect(this.bounds.x + midW, this.bounds.y + midH, midW, midH), newDepth)
    ]

    /**
     * place current particles into newely created groups
     * removes the object from the current array if it fits into another node
     */
    this.quadObjects.forEach((object: QuadObject) => {
      this.leaves?.forEach((leaf: QuadNode) => {
        if (leaf.insert(object))
          this.quadObjects.splice(this.quadObjects.indexOf(object), 1) // remove from the 
      })
    })
  }

  /**
   * Inserts an object into the deepest point of the QuadTree it belongs
   * returns whether the object fit into the bounds of the currently attempted QuadNode 
   */
  insert(quadObject: QuadObject): boolean {
    // test if the quad bounds contains the object
    if (!quadObject.insideRect(this.bounds))
      return false

    // test if the max tree depth has been reached
    if (this.depth > QuadTree.maxDepth)
      return false

    // Node is safe to push object into
    // first try the leaves 
    if (this.leaves)
      for (const leaf of this.leaves)
        if (leaf.insert(quadObject))
          return true

    // if no leaves, or leaves fail to cover object, push current node
    this.quadObjects.push(quadObject)

    // test if max capacity for the node has been reached
    if (!this.leaves && this.quadObjects.length > QuadTree.capacity)
      this.subdivide() // divide and redistribute

    // object has been place into an array by this point
    return true
  }
}

/**
 * Root Reference for a QuadTree
 * primary interface for operations
 */
export class QuadTree {
  static readonly maxDepth = 10
  static readonly capacity = 10
  public bounds: Rect
  public quadRoot: QuadNode
  public quadObjects: Array<QuadObject>
  constructor(rect: Rect, objectArray: Array<QuadObject>) {
    this.bounds = rect
    this.quadObjects = objectArray
    this.quadRoot = new QuadNode(this.bounds, 0)
  }

  /**
   * Updates the QuadTree will most recent object positions and then recursively calls a procedure
   * @param quadNodeProcedure function to call on each node of the tree
   */
  process(quadNodeProcedure: (quadNode: QuadNode) => void): void {
    this.quadRoot.clear() // refresh the QuadNodes
    this.quadObjects.forEach((quadObject: QuadObject) => this.quadRoot.insert(quadObject)) // insert updated objects
    this.quadRoot.process(quadNodeProcedure) // call any user-defined, per-node procedure
  }

  /**
   * Inserts a QuadObject into the deepest level of the QuadTree it belong
   * @param quadObject object to insert into the QuadTree
   */
  insert(quadObject: QuadObject): void {
    this.quadObjects.push(quadObject) // update master object array
    this.quadRoot.insert(quadObject) // descend object into tree
  }
}