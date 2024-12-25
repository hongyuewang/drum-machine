import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import { AudioClip } from "./types";
import Drum from "./Drum";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {theme} from "./Theme";

const _1_korg_minipops: AudioClip[] = [
  {
    name: "wood",
    keyTrigger: "Q",
    address: "../samples/Korg_Minipops/wood1.wav",
  },
  {
    name: "tom",
    keyTrigger: "W",
    address: "../samples/Korg_Minipops/tom2.wav",
  },
  {
    name: "hi-hat",
    keyTrigger: "A",
    address: "../samples/Korg_Minipops/hihat2.wav",
  },
  {
    name: "snare",
    keyTrigger: "S",
    address: "../samples/Korg_Minipops/sd2.wav",
  },
  {
    name: "bass",
    keyTrigger: "D",
    address: "../samples/Korg_Minipops/bd2.wav",
  },
];

let audioClips = _1_korg_minipops;

function App() {
  const playAudio = (e: KeyboardEvent) => {
    const clip = audioClips.find(
      (clip) => clip.keyTrigger === e.key.toUpperCase()
    );
    if (!clip) return;
    (document.getElementById(clip.keyTrigger) as HTMLAudioElement)
      ?.play()
      .catch(console.error);
    document.getElementById("drum-" + clip.keyTrigger)?.focus();
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => playAudio(e));
    return () => document.removeEventListener("keydown", (e) => playAudio(e));
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme/>
    <Container className="container" id="drum-machine" maxWidth="sm">
      <h1>drum machine</h1>
      <Grid container className="whole-drum" display="flex" spacing={2} alignItems="center" justifyContent="center">
        {audioClips.map((clip) => (
          <Grid size={4}>
            <Drum audioClip={clip} key={clip.keyTrigger} />
          </Grid>
        ))}
      </Grid>
    </Container>
  </ThemeProvider>
  );
}

export default App;
