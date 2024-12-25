import { AudioClip } from "./types";

interface DrumProps {
  audioClip: AudioClip;
}

const Drum = ({ audioClip }: DrumProps) => {
    const playAudio = (clip: AudioClip) => {
        (document.getElementById(clip.name) as HTMLAudioElement)?.play().catch(console.error);
    };

  return (
    <div>
    <div>{audioClip.keyTrigger}</div>
    <button
      className="drum-pad"
      id={`drum-${audioClip.keyTrigger}`}
      onClick={() => playAudio(audioClip)}
    >
      <audio src={audioClip.address} id={audioClip.name} className="clip"/>
      {audioClip.name}
    </button>
    </div>
  );
};

export default Drum;
