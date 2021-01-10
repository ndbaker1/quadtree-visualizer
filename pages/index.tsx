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
        <div className="main-content">
          <CollisionSimulator
            width={1024}
            height={800}
          />
        </div>
      </main>
    </div>
  )
}
