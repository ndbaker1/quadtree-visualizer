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
  add(vector: Vector2D): void { this.x += vector.x; this.y += vector.y }

  difference(vector: Vector2D): Vector2D { return new Vector2D(this.x - vector.x, this.y - vector.y) }
  scale(factor: number): Vector2D { return new Vector2D(this.x * factor, this.y * factor) }
  reversed(): Vector2D { return this.scale(-1) }
}
