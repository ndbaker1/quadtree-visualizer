import Head from 'next/head'

import CollisionSimulator from '../components/collision-simulator/collision-simulator'

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Quadtree Visualizer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <CollisionSimulator />
      </main>
    </div>
  )
}
