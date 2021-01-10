import { Rect, Vector2D } from '../../utils/physics'

export class Particle {
  radius: number
  position: Vector2D
  velocity: Vector2D
  constructor(posX?: number, posY?: number, velX?: number, velY?: number, radius?: number) {
    this.radius = radius || 10
    this.position = posX && posY && new Vector2D(posX, posY) || new Vector2D
    this.velocity = velX && velY && new Vector2D(velX, velY) || new Vector2D
  }
  tick(delta: number): void {
    this.position.add(this.velocity.scale(delta))
  }
  collide(particle: Particle): void {
    if (particle.position.difference(this.position).magnitude() < 2 * this.radius) {
      this.velocity = this.velocity.reversed()
      particle.velocity = particle.velocity.reversed()
    }
  }
  collideBounds(boundRect: Rect): void {
    switch (this.exitingBounds(boundRect)) {
      case 'TOP':
      case 'BOTTOM':
        this.velocity.y *= -1
        break
      case 'LEFT':
      case 'RIGHT':
        this.velocity.x *= -1
        break
      default: break
    }
  }
  intersectsRect(rect: Rect): boolean {
    return this.position.x - this.radius < rect.x + rect.w
      && this.position.x + this.radius > rect.x
      && this.position.y - this.radius < rect.y + rect.h
      && this.position.y + this.radius > rect.y
  }
  exitingBounds(rect: Rect): 'TOP' | 'LEFT' | 'BOTTOM' | 'RIGHT' | 'INSIDE' {
    if (this.position.x + this.radius > rect.x + rect.w) return 'RIGHT'
    if (this.position.x - this.radius < rect.x) return 'LEFT'
    if (this.position.y + this.radius > rect.y + rect.h) return 'BOTTOM'
    if (this.position.y - this.radius < rect.y) return 'TOP'
    return 'INSIDE'
  }
}


export class QuadNode {
  static readonly maxDepth = 10
  static readonly capacity = 5
  public bounds: Rect
  public leaves!: Array<QuadNode> | null
  private depth: number
  private particles = new Array<Particle>()
  constructor(rect: Rect, depth: number) {
    this.depth = depth
    this.bounds = rect
  }

  clear(): void {
    this.particles = new Array<Particle>()
    this.leaves?.forEach((leaf: QuadNode) => leaf.clear())
    this.leaves = null
  }

  processCollisions(): void {
    for (let i = 0; i < this.particles.length; i++)
      for (let j = i + 1; j < this.particles.length; j++) {
        this.particles[i].collide(this.particles[j])
      }
  }

  process(): void {
    this.leaves?.forEach((leaf: QuadNode) => {
      // process collision within quad and with any leaf quads
      leaf.process()
    })
  }

  subdivide(): void {
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
     */
    const temp = this.particles
    this.particles = []
    for (const particle of temp) {
      for (const leaf of this.leaves)
        if (leaf.insert(particle))
          continue
      this.particles.push(particle)
    }
  }

  insert(particle: Particle): boolean {
    if (particle.exitingBounds(this.bounds) !== 'INSIDE')
      return false

    if (this.depth > QuadNode.maxDepth)
      return false

    if (this.particles.length < QuadNode.capacity) {
      this.particles.push(particle)
      return true
    }

    if (!this.leaves)
      this.subdivide()

    if (this.leaves)
      for (const leaf of this.leaves)
        if (leaf.insert(particle))
          return true

    this.particles.push(particle)
    return true
  }
}

export class QuadTree {
  bounds: Rect
  quadRoot: QuadNode
  objectsRef: Array<Particle>
  constructor(rect: Rect, objectArray: Array<Particle>) {
    this.bounds = rect
    this.objectsRef = objectArray
    this.quadRoot = new QuadNode(this.bounds, 0)
  }

  process(): void {
    this.quadRoot.clear()
    this.objectsRef.forEach((particle: Particle) => this.quadRoot.insert(particle))
    this.quadRoot.process()
  }

  insert(particle: Particle): void {
    this.objectsRef.push(particle)
    this.quadRoot.insert(particle)
  }
}