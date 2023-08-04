import React, { useEffect, useState } from "react";
import kick from "../assets/audio/Kick-Drum.mp3";
import cymbalCrash from "../assets/audio/China-Cymbal-Crash-Level-6A.mp3";
import cymbalHitA from "../assets/audio/Crash-Cymbal-Hit-A.mp3";
import floorTom from "../assets/audio/Floor-Tom-Drum-Hit-Level-6B.mp3";
import hiHatA2 from "../assets/audio/Hi-Hat-Closed-Hit-A2.mp3";
import hiHatE1 from "../assets/audio/Hi-Hat-Closed-Hit-E1.mp3";
import highTom from "../assets/audio/high-tom_F_minor.wav";
import mediumTom from "../assets/audio/Medium-Tom-Drum-Hit-Level-7A.mp3";
import smallTom from "../assets/audio/Small-Tom-Drum-Hit-Level-4A.mp3";
import snareDrum from "../assets/audio/Snare-Drum-Hit-Level-6a.mp3";
import SplashCymbal from "../assets/audio/Splash-Cymbal-Hit-C.mp3";
import { Howl } from "howler";
import "../assets/css/drum.css";
import { Typography } from "@mui/material";
const drumPads = [
  { id: 1, name: "close", key: "S", soundSrc: hiHatA2 },
  { id: 2, name: "crashL", key: "E", soundSrc: cymbalCrash },
  { id: 3, name: "splash", key: "R", soundSrc: SplashCymbal },
  { id: 4, name: "crashR", key: "U", soundSrc: cymbalCrash },
  { id: 5, name: "ride", key: "J", soundSrc: cymbalHitA },
  { id: 6, name: "open", key: "Y", soundSrc: hiHatE1 },
  { id: 7, name: "tomR", key: "H", soundSrc: smallTom },
  { id: 8, name: "tomL", key: "D", soundSrc: highTom },
  { id: 9, name: "tomM", key: "F", soundSrc: mediumTom },
  { id: 10, name: "snare", key: "G", soundSrc: snareDrum },
  { id: 11, name: "kickL", key: "V", soundSrc: kick },
  { id: 12, name: "kickR", key: "B", soundSrc: kick },
  { id: 13, name: "floor", key: "M", soundSrc: floorTom },
];
function Drum() {
  const [isShow, setIsShow] = useState(true);
  const playSound = (name, soundSrc) => {
    const element = document.getElementById(name).classList;
    console.log(element);
    setTimeout(() => {
      element?.add("animation");
    }, 100);
    setTimeout(() => {
      element?.remove("animation");
    }, 300);
    const sound = new Howl({
      src: [soundSrc],
      preload: true,
    });
    sound.play();
  };
  const onKeyPlaySound = (e) => {
    const keyPressed = e.code.replace("Key", "");
    const drumPad = drumPads.find((pad) => pad.key === keyPressed);
    if (drumPad) {
      playSound(drumPad.name, drumPad.soundSrc);
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
      <Typography className="heading" fontFamily={"fantasy"} variant="h5">
        Virtual Drum set
      </Typography>
      <Typography
        className="toggle"
        fontFamily={"fantasy"}
        variant="h5"
        onClick={() => setIsShow(!isShow)}
      >
        {isShow ? "Hide Drum Key" : "Show Drum Key"}
      </Typography>
      <div className="drumSet">
        {drumPads.map((drumPad, index) => {
          const { key, soundSrc, name } = drumPad;
          return (
            <>
              <div
                key={index}
                id={name}
                className="element"
                onClick={(e) => playSound(name, soundSrc)}
              >
                <div></div>
              </div>
              {isShow ? (
                <Typography
                  onClick={(e) => playSound(name, soundSrc)}
                  className={`${name}-letter font`}
                >
                  {key}
                </Typography>
              ) : null}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Drum;
