import React, { useEffect } from "react";
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
import "../assets/css/drum.css";
function Drum() {
  const drumPads = [
    { id: 1, name: "close", key: "W", soundSrc: hiHatA2 },
    { id: 2, name: "crashL", key: "Q", soundSrc: cymbalCrash },
    { id: 3, name: "splash", key: "E", soundSrc: SplashCymbal },
    { id: 4, name: "crashR", key: "R", soundSrc: cymbalCrash },
    { id: 5, name: "ride", key: "T", soundSrc: cymbalHitA },
    { id: 6, name: "open", key: "Y", soundSrc: hiHatE1 },
    { id: 7, name: "tomR", key: "D", soundSrc: smallTom },
    { id: 8, name: "tomL", key: "G", soundSrc: highTom },
    { id: 9, name: "tomM", key: "H", soundSrc: mediumTom },
    { id: 10, name: "snare", key: "S", soundSrc: snareDrum },
    { id: 11, name: "kickL", key: "B", soundSrc: kick },
    { id: 12, name: "kickR", key: "B", soundSrc: kick },
    { id: 13, name: "floor", key: "F", soundSrc: floorTom },
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
    <div className="drumKit">
      <div className="drumSet">
        {drumPads.map((drumPad, index) => {
          const { key, soundSrc, name } = drumPad;
          return (
            <div
              key={index}
              id={name}
              className="element"
              onClick={() => playSound(soundSrc)}
            >
              <div></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Drum;
