# QuadTree Collision Visualizer

[Demo ✨](https://ndbaker1.github.io/quadtree-visualizer/)   

A Visual demonstration of how `Quadtrees` group entities and perform in order to optimize collision detection alogrithms

## Background 

`Quadtrees` help with gathering information about which collisions in an environment are worth testing by only making computations between objects in similar nodes/quads.

> - Quadtree nodes split into four evenly-sized leaf nodes when the number of objects inside them reach a certain capacity.  
> - Objects are inserted into a fresh Quadtree every iteration, which places each object in its __deepest possible node__.  
> - The Quadtree algorithm improves upon the naive *T(n) = θ(n<sup>2</sup>)* algorithm and achieves *T(n) = O(n<sup>2</sup>), T(n) = Ω(nlog(n))*.
> - Quadtrees based on pixels are incidentally a type of trie.

## Simulation

This Visualizer provides an interactive environment where you can change configurations of the __Quadtree__ and __Physics__ at runtime.  
The Quadtree visualization sits atop a `2D Collision System` with a configurable __coefficient of restitution__, used to adjust between __elastic__ and __inelastic__ collisions.

## Development

Run the development server:
```bash
npm run dev
```
Opens on [http://localhost:3000](http://localhost:3000).
