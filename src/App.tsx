import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AudioClip } from './types';
import Drum from './Drum';

const _1_korg_minipops: AudioClip[] = [
  {
    name: "bass drum",
    keyTrigger: "D",
    address: "../samples/Korg_Minipops/bd2.wav"
  },
  {
    name: "hi-hat",
    keyTrigger: "A",
    address: "../samples/Korg_Minipops/hihat2.wav"
  },
  {
    name: "snare drum",
    keyTrigger: "S",
    address: "../samples/Korg_Minipops/sd2.wav"
  },
  {
    name: "tom",
    keyTrigger: "W",
    address: "../samples/Korg_Minipops/tom2.wav"
  },
  {
    name: "wood",
    keyTrigger: "E",
    address: "../samples/Korg_Minipops/wood1.wav"
  }
];

let audioClips = _1_korg_minipops;

function App() {
  const [count, setCount] = useState(0)

  return (<div className="container" id="drum-machine">
    <h1>drum machine</h1>
    <div className="whole-drum">
      {audioClips.map((clip) => <Drum audioClip={clip} key={clip.keyTrigger}/>)}
    </div>
  </div>
  )
}

export default App
