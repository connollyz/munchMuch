import React from 'react';
import Particles from 'react-particles-js';
import Start from '../src/components/Start.js';
import GameOver from '../src/components/GameOver.js';
import './App.css';


const particlesParams = {
  "particles": {
    "number": {
      "value": 160,
      "density": {
        "enable": false
      }
    },
    "shape": {
      "type": "polygon",
      "polygon": {
        "nb_sides": 4
      }
    },
    "color":{
      "value": ["#fff", "#ffc0cb", "#ff87c3"]
    },
    "size": {
      "value": 10,
      "random": true
    },
    "move": {
      "direction": "bottom",
      "out_mode": "out"
    },
    "line_linked": {
      "enable": false
    }
  },
  "interactivity": {
    "events": {
      "onclick": {
        "enable": true,
        "mode": "remove"
      },
      "onhover": {
        "enable": true,
        "mode": "repulse"
      }
    },
    "modes": {
      "remove": {
        "particles_nb": 10
      }
    }
  }
}


function App() {
  return (
    <main>  
      <Start/>
      <Particles className="particles-js" params={particlesParams} />
      <GameOver />
    </main>
  );
}

export default App;
