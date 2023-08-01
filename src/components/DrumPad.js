import React from "react";
import { Howl } from "howler";
import Button from "@mui/material/Button";
import audio from "./stomp.mp3";

const DrumPad = ({ keyTrigger, soundSrc }) => {
  console.log(soundSrc);
  const playSound = () => {
    const sound = new Howl({
      src: [soundSrc],
    });
    sound.play();
  };

  return (
    <Button className="drum-pad" onClick={playSound} onKeyPress={playSound}>
      {keyTrigger}
    </Button>
  );
};
export default DrumPad;
