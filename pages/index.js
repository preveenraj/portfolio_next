import Head from 'next/head'
import Home from "../components/Home";

export default function App() {
  return (
    <div className="">
      <Head>
        <title>Preveen Raj's World</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Home />

      </main>

      <footer>
      </footer>
    </div>
  )
}
