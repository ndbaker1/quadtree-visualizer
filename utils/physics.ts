import { QuadObject } from './quadtree'

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

export class Vector2D {
  x: number
  y: number
  constructor(x?: number, y?: number) {
    this.x = x || 0
    this.y = y || 0
  }

  magnitude(): number { return Math.sqrt(this.x * this.x + this.y * this.y) }
  angle(): number { return Math.atan2(-this.y, this.x) }
  angleBetween(vector: Vector2D): number { return (this.angle() - vector.angle() + 2 * Math.PI) % Math.PI }
  add(vector: Vector2D): void { this.x += vector.x; this.y += vector.y }

  rotated(angle: number): Vector2D { return new Vector2D(this.x * Math.cos(angle) - this.y * Math.sin(angle), this.x * Math.sin(angle) - this.y * Math.cos(angle)) }
  difference(vector: Vector2D): Vector2D { return new Vector2D(this.x - vector.x, this.y - vector.y) }
  scale(factor: number): Vector2D { return new Vector2D(this.x * factor, this.y * factor) }
  reversed(): Vector2D { return this.scale(-1) }
  normalized(): Vector2D { const mag = this.magnitude(); return new Vector2D(this.x / mag, this.y / mag) }
}

type BoundType = 'TOP' | 'LEFT' | 'BOTTOM' | 'RIGHT' | 'INSIDE'
export class CircleBody implements QuadObject {
  radius: number
  mass: number
  position: Vector2D
  velocity: Vector2D
  constructor(posX?: number, posY?: number, velX?: number, velY?: number, radius?: number) {
    this.radius = radius || 10
    this.mass = this.radius // mass proportionate to size
    this.position = (posX || posY) && new Vector2D(posX, posY) || new Vector2D
    this.velocity = (velX || velY) && new Vector2D(velX, velY) || new Vector2D
  }
  tick(delta: number): void {
    this.position.add(this.velocity.scale(delta))
  }

  collide(circle: CircleBody): void {
    const collisionVector = circle.position.difference(this.position)
    if (collisionVector.magnitude() < this.radius + circle.radius) {
      // TODO - slighty working but defferred

      // const computeScale = (mass: number, velocityVec: Vector2D): number => (mass) ^ 5
      // this.velocity.add(collisionVector.normalized().scale(-computeScale(circle.mass, circle.velocity)))
      // circle.velocity.add(collisionVector.normalized().scale(computeScale(this.mass, this.velocity)))

      // this.velocity = this.velocity.rotated(2 * ((Math.PI / 2) - this.velocity.angleBetween(differenceVector)))
      // circle.velocity = circle.velocity.rotated(2 * ((Math.PI / 2) - circle.velocity.angleBetween(differenceVector.reversed())))
    }
  }
  collideBounds(boundRect: Rect): void {
    switch (this.exitingBounds(boundRect)) {
      case 'TOP':
        this.position.y = this.radius
        this.velocity.y *= -1
        break
      case 'BOTTOM':
        this.position.y = boundRect.y + boundRect.h - this.radius
        this.velocity.y *= -1
        break
      case 'LEFT':
        this.position.x = this.radius
        this.velocity.x *= -1
        break
      case 'RIGHT':
        this.position.x = boundRect.x + boundRect.w - this.radius
        this.velocity.x *= -1
        break
      default: break
    }
  }

  exitingBounds(rect: Rect): BoundType {
    if (this.position.x + this.radius > rect.x + rect.w) return 'RIGHT'
    if (this.position.x - this.radius < rect.x) return 'LEFT'
    if (this.position.y + this.radius > rect.y + rect.h) return 'BOTTOM'
    if (this.position.y - this.radius < rect.y) return 'TOP'
    return 'INSIDE'
  }

  insideRect(rect: Rect): boolean {
    return this.position.x + this.radius <= rect.x + rect.w
      && this.position.x - this.radius >= rect.x
      && this.position.y + this.radius <= rect.y + rect.h
      && this.position.y - this.radius >= rect.y
  }
}