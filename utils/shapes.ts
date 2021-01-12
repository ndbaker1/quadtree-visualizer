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
