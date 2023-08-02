import React, { useEffect } from "react";
import DrumPad from "./DrumPad";
import tom from "../assets/audio/Small-Tom-Drum-Hit-Level-4A.mp3";
import kick from "../assets/audio/Kick-Drum.mp3";
import cymbalCrash from "../assets/audio/China-Cymbal-Crash-Level-6A.mp3";
import cymbalSideB from "../assets/audio/China-Cymbal-Slide-Scrape-B.mp3";
import cymbalSideC from "../assets/audio/China-Cymbal-Slide-Scrape-C.mp3";
import cymbalSideD from "../assets/audio/China-Cymbal-Slide-Scrape-D.mp3";
import cymbalHitA from "../assets/audio/Crash-Cymbal-Hit-A.mp3";
import cymbalHitC from "../assets/audio/Crash-Cymbal-Hit-C.mp3";
import floorTom from "../assets/audio/Floor-Tom-Drum-Hit-Level-6B.mp3";
import hiHatA2 from "../assets/audio/Hi-Hat-Closed-Hit-A2.mp3";
import hiHatE1 from "../assets/audio/Hi-Hat-Closed-Hit-E1.mp3";
import hiHatFoot from "../assets/audio/Hi-Hat-Foot-Pedal-Close-B.mp3";
import highTom from "../assets/audio/high-tom_F_minor.wav";
import mediumTom from "../assets/audio/Medium-Tom-Drum-Hit-Level-7A.mp3";
import smallTom from "../assets/audio/Small-Tom-Drum-Hit-Level-4A.mp3";
import snareDrum from "../assets/audio/Snare-Drum-Hit-Level-6a.mp3";
import SplashCymbal from "../assets/audio/Splash-Cymbal-Hit-C.mp3";

import { Howl } from "howler";
import { Button } from "@mui/material";
function Drum() {
  const drumPads = [
    { name: "cymbalCrash", key: "Q", soundSrc: cymbalCrash },
    { name: "cymbalSideB", key: "W", soundSrc: cymbalSideB },
    { name: "cymbalSideC", key: "E", soundSrc: cymbalSideC },
    { name: "cymbalSideD", key: "R", soundSrc: cymbalSideD },
    { name: "cymbalHitA", key: "T", soundSrc: cymbalHitA },
    { name: "cymbalHitC", key: "Y", soundSrc: cymbalHitC },
    { name: "SplashCymbal", key: "U", soundSrc: SplashCymbal },
    { name: "hiHatA2", key: "K", soundSrc: hiHatA2 },
    { name: "hiHatE1", key: "L", soundSrc: hiHatE1 },
    { name: "hiHatFoot", key: "J", soundSrc: hiHatFoot },
    { name: "highTom", key: "G", soundSrc: highTom },
    { name: "mediumTom", key: "H", soundSrc: mediumTom },
    { name: "smallTom", key: "D", soundSrc: smallTom },
    { name: "Tom", key: "A", soundSrc: tom },
    { name: "floorTom", key: "F", soundSrc: floorTom },
    { name: "snareDrum", key: "S", soundSrc: snareDrum },
    { name: "Kick", key: "B", soundSrc: kick },
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
      <div className=""></div>
      {drumPads.map((drumPad, index) => {
        const { key, soundSrc, name } = drumPad;
        return (
          <Button
            key={index}
            className="drum-pad"
            onClick={() => playSound(soundSrc)}
            // onKeyPress={(e) => onKeyPlaySound(e)}
          >
            {name} {key}
          </Button>
        );
      })}
    </div>
  );
}

export default Drum;
