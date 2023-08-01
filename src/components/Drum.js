import React, { useEffect } from "react";
import DrumPad from "./DrumPad";
import tom from "../assets/audio/stomp.mp3";
import kick from "../assets/audio/kickDrum.mp3";
import { Howl } from "howler";
import { Button } from "@mui/material";
function Drum() {
  const drumPads = [
    { name: "Tom", key: "Q", soundSrc: tom },
    { name: "Kick", key: "W", soundSrc: kick },
    { name: "E", key: "E", soundSrc: tom },
    { name: "R", key: "R", soundSrc: kick },
    { name: "H", key: "H", soundSrc: tom },
  ];

  const playSound = (soundSrc) => {
    const sound = new Howl({
      src: [soundSrc],
    });
    sound.play();
  };

  // const onKeyPlaySound = (e) => {
  //   console.log(e.code);
  //   if (e.code === "KeyQ") {
  //     playSound(tom);
  //   }
  //   if (e.code === "KeyW") {
  //     playSound(kick);
  //   }
  // };
  const onKeyPlaySound = (e) => {
    const keyPressed = e.code.replace("Key", "");
    const drumPad = drumPads.find((pad) => pad.key === keyPressed);
    if (drumPad) {
      playSound(drumPad.soundSrc);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyPlaySound);
    return () => {
      document.removeEventListener("keydown", onKeyPlaySound);
    };
  }, []);

  return (
    <div className="drum-kit">
      {drumPads.map((drumPad, index) => {
        const { key, soundSrc, name } = drumPad;
        return (
          <Button
            key={index}
            className="drum-pad"
            onClick={() => playSound(soundSrc)}
            // onKeyPress={(e) => onKeyPlaySound(e)}
          >
            {name}
          </Button>
        );
      })}
      {/* <DrumPad
        key={drumPad.key}
        keyTrigger={drumPad.key}
        soundSrc={drumPad.soundSrc}
      /> */}
    </div>
  );
}

export default Drum;
