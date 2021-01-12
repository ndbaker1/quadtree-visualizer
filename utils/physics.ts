import { Vector2D } from './vector2d'

interface PhysicsEnvironmentVariables {
  coefficientOfRestitution?: number
}
export class PhysicsEnvironment implements PhysicsEnvironmentVariables {
  public coefficientOfRestitution = 0.8
  public updateVar(vars: PhysicsEnvironmentVariables): void {
    if (vars.coefficientOfRestitution !== undefined)
      this.coefficientOfRestitution = vars.coefficientOfRestitution
  }
}

export interface PhysicsBody {
  position: Vector2D,
  velocity: Vector2D,
  mass: number
}

/**
 * Computes a collision for the environment
 * first - the resulting velocity vector for body1
 * second - the resulting velocity vector for body2
 * @param first the first physics body 
 * @param second the second physics body
 */
export function compute2DCollision(first: PhysicsBody, second: PhysicsBody, environment: PhysicsEnvironment): { first: Vector2D, second: Vector2D } {
  const jointMass = first.mass + second.mass
  const momemtumBody1 = { x: first.mass * first.velocity.x, y: first.mass * first.velocity.y }
  const momemtumBody2 = { x: second.mass * second.velocity.x, y: second.mass * second.velocity.y }
  return {
    first: new Vector2D(
      (environment.coefficientOfRestitution * second.mass * (second.velocity.x - first.velocity.x) + momemtumBody1.x + momemtumBody2.x),
      (environment.coefficientOfRestitution * second.mass * (second.velocity.y - first.velocity.y) + momemtumBody1.y + momemtumBody2.y)
    ).scale(1 / jointMass),
    second: new Vector2D(
      (environment.coefficientOfRestitution * first.mass * (first.velocity.x - second.velocity.x) + momemtumBody1.x + momemtumBody2.x),
      (environment.coefficientOfRestitution * first.mass * (first.velocity.y - second.velocity.y) + momemtumBody1.y + momemtumBody2.y)
    ).scale(1 / jointMass)
  }
}
