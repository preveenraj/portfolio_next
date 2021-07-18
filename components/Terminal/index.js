import { ReactTerminal } from "react-terminal";
import React from 'react';

/* 
docs::
https://dev.to/bony2023/why-i-added-a-terminal-on-my-website-and-how-you-can-do-it-too-nd5?fbclid=IwAR0-rEZQdoV2bDbsMRi8RnYWKwrmTvqRGSWzian5pF7zWlXwK1OGA5gZluo
*/
function Terminal(props) {

  const help = () => {

    return (<div>
      List of commands:<br />
      {Object.keys(commands).reduce((result, key) => {
        if (key !== 'help') {
          result.push(<>$ {key} <br /></>);
        }
        return result;
      }, [])}
    </div>);
  }

  // Define commands here
  const commands = {
    help,
    whoareyou: "A Software Engineer",
    whereareyou: "I chill at Kottayam working remotely.",
    'preveen.about': (<>
      You know who I am :)
      <br />
      For those who don't.
      <br /> I am many things, but not evil.
      <br /> I seek for happiness, that doesn't mean I can't be sad at moments.
      <br /> Empathy works for me than sympathy.
      <br /> Hardwork comes over talent.
      <br /> Boring ain't a word I use often, because something I love is always with me: the passion to code.
    </>),
    // cd: (directory) => `changed path to ${directory}`
  };


  return (
    <div className="h-full w-1/2">
      <ReactTerminal
        name="TechrushTerminal"
        showControlButtons={true}
        prompt=">>"
        welcomeMessage=""
        theme="dark"
        errorMessage="Sorry, can't understand your English"
        commands={commands}
      />
    </div>

  );
}


export default Terminal;