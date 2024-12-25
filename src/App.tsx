import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AudioClip } from './types';
import Drum from './Drum';

const _1_korg_minipops: AudioClip[] = [
  {
    name: "wood",
    keyTrigger: "Q",
    address: "../samples/Korg_Minipops/wood1.wav"
  },
  {
    name: "tom",
    keyTrigger: "W",
    address: "../samples/Korg_Minipops/tom2.wav"
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
    name: "bass drum",
    keyTrigger: "D",
    address: "../samples/Korg_Minipops/bd2.wav"
  }
];

let audioClips = _1_korg_minipops;

function App() {
  const playAudio = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const clip = audioClips.find((clip) => clip.keyTrigger === e.key.toUpperCase());
    if (!clip) return;
    (document.getElementById(clip.name) as HTMLAudioElement)?.play().catch(console.error);
    document.getElementById("drum-" + clip.keyTrigger)?.focus();
  }

  return (<div className="container" id="drum-machine" onKeyDown={playAudio}>
    <h1>drum machine</h1>
    <div className="whole-drum">
      {audioClips.map((clip) => <Drum audioClip={clip} key={clip.keyTrigger}/>)}
    </div>
  </div>
  )
}

export default App
