export class Rect {
  x: number
  y: number
  w: number
  h: number
  constructor(x?: number, y?: number, w?: number, h?: number) {
    this.x = x || 0
    this.y = y || 0
    this.w = w || 0
    this.h = h || 0
  }
}

class Vector2D {
  x: number
  y: number
  constructor(x?: number, y?: number) {
    this.x = x || 0
    this.y = y || 0
  }
  magnitude = () => Math.sqrt(this.x * this.x + this.y * this.y)
  add = (vector: Vector2D) => { this.x += vector.x; this.y += vector.y }
  difference = (vector: Vector2D) => new Vector2D(this.x - vector.x, this.y - vector.y)
  scale = (factor: number) => new Vector2D(this.x * factor, this.y * factor)
  reversed = () => this.scale(-1)
}

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
  exitingBounds(rect: Rect): 'TOP' | 'LEFT' | 'BOTTOM' | 'RIGHT' | 'NONE' {
    if (this.position.x + this.radius > rect.x + rect.w) return 'RIGHT'
    if (this.position.x - this.radius < rect.x) return 'LEFT'
    if (this.position.y + this.radius > rect.y + rect.h) return 'BOTTOM'
    if (this.position.y - this.radius < rect.y) return 'TOP'
    return 'NONE'
  }
}

export class QuadNode {
  static readonly capacity = 3
  rect = new Rect
  leaves = new Array<QuadNode>()
  particles = new Array<Particle>()
  constructor(rect: Rect) {
    this.rect = rect
  }

  processCollisions(): void {
    for (let i = 0; i < this.particles.length; i++)
      for (let j = i + 1; j < this.particles.length; j++) {
        this.particles[i].collide(this.particles[j])
      }
  }

  update(): void {
    this.processCollisions()
    this.leaves.forEach((leaf: QuadNode) => leaf.update())
  }

  subdivide(): void {
    const midW = this.rect.w / 2
    const midH = this.rect.h / 2
    this.leaves = [
      new QuadNode(new Rect(this.rect.x, this.rect.y, midW, midH)),
      new QuadNode(new Rect(this.rect.x + midW, this.rect.y, midW, midH)),
      new QuadNode(new Rect(this.rect.x, this.rect.y + midH, midW, midH)),
      new QuadNode(new Rect(this.rect.x + midW, this.rect.y + midH, midW, midH))
    ]
  }

  insert(particle: Particle): boolean {
    if (!particle.intersectsRect(this.rect))
      return false

    if (this.particles.length < QuadNode.capacity) {
      this.particles.push(particle)
      return true
    }

    if (this.leaves.length === 0)
      this.subdivide()

    let inserted = false
    for (const leaf of this.leaves)
      if (leaf.insert(particle))
        inserted = true

    return inserted
  }
}

export class QuadTree {
  particleArray = new Array<Particle>()
  quadRoot: QuadNode
  constructor(rect: Rect) {
    this.quadRoot = new QuadNode(rect)
  }

  update(): void {
    this.quadRoot.leaves = []
    this.particleArray.forEach((particle: Particle) => this.quadRoot.insert(particle))
    this.quadRoot.update()
  }

  insert(particle: Particle): void {
    this.particleArray.push(particle)
    this.quadRoot.insert(particle)
  }
}