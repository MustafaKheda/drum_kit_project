import React from "react";
import DrumPad from "./DrumPad";

function Drum() {
  const drumPads = [
    { key: "Q", soundSrc: "path/to/sound1.mp3" },
    { key: "W", soundSrc: "path/to/sound2.mp3" },
    // Add more drum pads as needed
  ];
  return (
    <div className="drum-kit">
      {drumPads.map((drumPad) => {
        console.log(drumPad);
        return (
          <DrumPad
            key={drumPad.key}
            keyTrigger={drumPad.key}
            soundSrc={drumPad.soundSrc}
          />
        );
      })}
    </div>
  );
}

export default Drum;
