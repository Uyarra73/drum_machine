
import './App.css';

function App() {
  const drumKeys = [
    {
      keyCode: 81,
      text: "Q",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"
    },
    {
      keyCode: 87,
      text: "W",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"
    },
    {
      keyCode: 69,
      text: "E",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"
    },
    {
      keyCode: 65,
      text: "A",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"
    },
    {
      keyCode: 83,
      text: "S",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"
    },
    {
      keyCode: 68,
      text: "D",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"
    },
    {
      keyCode: 90,
      text: "Z",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"
    },
    {
      keyCode: 88,
      text: "X",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"
    },
    {
      keyCode: 67,
      text: "C",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"
    }
  ];

  const playSound = (selector) => {
    const audio = document.getElementById(selector);
    audio.play();
  }

  return (
    <div className="App">
      <h1>Drum Machine</h1>
      <div id="drum-machine">
        <div id="display"></div>
        <div className='pads-group'>
          {drumKeys.map(drumPad => {
            return (
                <div className='drum-pad'
                id={drumPad.src} onClick={() => playSound(drumPad.text)}>{drumPad.text}
                <audio src={drumPad.src} className='clip' id={drumPad.text}></audio>
                </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
