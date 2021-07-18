import Head from 'next/head'
import Home from "../components/Home";
import Terminal from '../components/Terminal';
import { useState } from "react";
import { TerminalContextProvider } from "react-terminal";
import Nav from '../components/Nav';

export default function App() {

  const [showTerminal, setShowTerminal] = useState(false);
  return (
    <TerminalContextProvider>
      <div className="">
        <Head>
          <title>Preveen Raj's World</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="relative">
          <Nav />
          <div className="h-screen">
            <Home />
          </div>
          <div
            id="terminal"
            className="h-[456px] px-4 flex flex-col items-center justify-center gap-2">
            <span className="rounded-lg font-semibold text-blue-500">Let's talk Developer to Developer!</span>
            {showTerminal ?
              (
                <>
                  <span className="rounded-lg bg-gray-300 p-2 md:w-3/12 text-xs flex whitespace-pre justify-center">Type <p className="font-bold mx-1">help</p> for more Information.</span>
                  <Terminal />
                </>
              ) :
              <span
                onClick={() => setShowTerminal(!showTerminal)}
                className="animate-pulse font-bold rounded bg-gray-100 cursor-pointer border-4 border-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="72" height="72"><path fill="none" d="M0 0h24v24H0z" /><path d="M11 12l-7.071 7.071-1.414-1.414L8.172 12 2.515 6.343 3.929 4.93 11 12zm0 7h10v2H11v-2z" /></svg>
              </span>}
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
