import Head from 'next/head'
import Home from "../components/Home";
import Terminal from '../components/Terminal';
import { TerminalContextProvider } from "react-terminal";

export default function App() {
  return (
    <TerminalContextProvider>
      <div className="">
        <Head>
          <title>Preveen Raj's World</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <div className="h-screen">
            <Home />
          </div>
          <div className="">

          </div>
          <div className="h-[456px] px-4 flex flex-col items-center justify-center gap-2">
            <span className="rounded-lg font-semibold text-blue-500">Let's talk developer to developer!</span>
            <span className="rounded-lg bg-gray-300 p-2 md:w-3/12 text-xs flex whitespace-pre justify-center">Type <p className="font-bold mx-1">help</p> for more Information.</span>
            <Terminal />
          </div>
          <div className="h-screen flex justify-center items-center">
            <h1 className="text-3xl text-gray-300">Coming S0000N</h1>
          </div>
          <div className="h-screen flex justify-center items-center">
            <h1 className="text-3xl text-gray-300">Coming S0000N</h1>
          </div>
          <div className="h-screen flex justify-center items-center">
            <h1 className="text-3xl text-gray-300">Coming S0000N</h1>
          </div>
        </main>

        <footer>
        </footer>
      </div>
    </TerminalContextProvider>
  )
}
