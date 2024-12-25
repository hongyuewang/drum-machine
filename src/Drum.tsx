import { AudioClip } from "./types";

interface DrumProps {
  audioClip: AudioClip;
}

const Drum = ({ audioClip }: DrumProps) => {
    const playAudio = (clip: AudioClip) => {
        (document.getElementById(clip.keyTrigger) as HTMLAudioElement)?.play().catch(console.error);
    };

  return (
    <div>
    <div>{audioClip.name}</div>
    <button
      className="drum-pad"
      id={`drum-${audioClip.keyTrigger}`}
      onClick={() => playAudio(audioClip)}
    >
      <audio src={audioClip.address} id={audioClip.keyTrigger} className="clip"/>
      {audioClip.keyTrigger}
    </button>
    </div>
  );
};

export default Drum;
