# QuadTree Collision Visualizer

gh-page: https://ndbaker1.github.io/quadtree-visualizer/

## Development

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).  
Run the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Background 

`Quadtrees` help with gathering information about which collisions in an environment are worth testing by only making computations between objects in similar quads.

> Quadtree nodes split into four evenly-sized leaf nodes when the number of objects inside them reach a certain __capacity__.  
> 
> Objects are inserted into a fresh Quadtree every iteration, which places each object in its __deepest possible node__.  
> 
> Rather than a naive collision calculation at θ( __n<sup>2</sup>__ ) for __n__ elements, the Quadtree algorithm achieves O( __n<sup>2</sup>__ ) > runtime( __n__ ) > Ω( __n logn__ )
>
> _Quadtrees based on pixels are incidentally a type of trie._

This Visualizer provides an interactive environment where you can change configurations of the Quadtree, Physics, and Simulation at runtime.

Under the hood, there is also a `2D Collision System` with a configurable __coefficient of restitution__ used to adjust between __elastic__ and __inelastic__ collisions.

