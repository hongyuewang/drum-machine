import Button from "@mui/material/Button";
import { AudioClip } from "./types";
import { ThemeProvider } from "@mui/material";
import { theme } from "./Theme";

interface DrumProps {
  audioClip: AudioClip;
}

const Drum = ({ audioClip }: DrumProps) => {
  const playAudio = (clip: AudioClip) => {
    (document.getElementById(clip.keyTrigger) as HTMLAudioElement)
      ?.play()
      .catch(console.error);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <div>{audioClip.name}</div>
        <Button
          className="drum-pad"
          id={`drum-${audioClip.keyTrigger}`}
          onClick={() => playAudio(audioClip)}
          variant="contained"
          size="large"
          color="secondary"
          sx={{ width: 150, height: 150 }}
        >
          <audio
            src={audioClip.address}
            id={audioClip.keyTrigger}
            className="clip"
          />
          {audioClip.keyTrigger}
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default Drum;
