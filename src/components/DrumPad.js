import React from "react";
import { Howl } from "howler";
import Button from "@mui/material/Button";

const DrumPad = ({ keyTrigger, soundSrc }) => {
  const playSound = () => {
    const sound = new Howl({
      src: [soundSrc],
    });
    sound.play();
  };

  return (
    <Button className="drum-pad" onClick={playSound}>
      {keyTrigger}
    </Button>
  );
};
export default DrumPad;
