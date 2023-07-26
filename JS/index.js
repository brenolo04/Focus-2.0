import Timer from './timer.js'
import Control from './controls.js'
import Event from './events.js'
import Sound from './audios.js'

const display = {
  minutes: document.getElementById('minutes'),
  seconds: document.getElementById('seconds')
};

const controls = {
  play: document.getElementById('play'),
  pause: document.getElementById('pause'),
  stop: document.getElementById('stop'),
  increase: document.getElementById('up'),
  decrease: document.getElementById('down'),
};

const BtnSound = {
  jungle: document.getElementById('jungle'),
  rain: document.getElementById('rain'),
  coffeshop: document.getElementById('coffeshop'),
  fireplace:document.getElementById('fireplace')
};

const btnMode = {
  sun: document.getElementById('sun'),
  moon: document.getElementById('moon')
}

const sound = Sound()
const timer = Timer({display, sound})
const control = Control({controls, timer, sound})
Event({controls, control, btnMode, BtnSound, sound})