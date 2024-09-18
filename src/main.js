import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// IMPORTS

// import bento_blur from './features/bento_blur'
// import bento_work from './features/bento_work'
import bento_work_variable from './features/bento_work_variable'
// import ball from './features/experiments/gradient_ball'
import mousetrail from './features/experiments/mousetrail'
// import line from './features/experiments/gradient_line'
import mouse from './features/mouse'

import './styles/style.css'

gsap.registerPlugin(ScrollTrigger)

// const circle = document.querySelector('.backdrop-circle')
const rect = document.querySelector('.backdrop-rect')
const workHeader = document.querySelectorAll('.bento__work-header')
// const blob = document.querySelector('.gradball__home')
const trail_wrapper = document.querySelector('.trail-wrapper')
const trail_array = document.querySelectorAll('.trail')

let counter = 0
let frameCount = 0
let lastTime = performance.now()

function updateFPS() {
  const now = performance.now()
  const deltaTime = now - lastTime

  frameCount++

  // Calculate FPS every second
  if (deltaTime >= 1000) {
    const fps = (frameCount / deltaTime) * 1000
    console.log(`FPS: ${Math.round(fps)}`)

    frameCount = 0
    lastTime = now
  }
  requestAnimationFrame(updateFPS)
}
// Start the FPS counter
requestAnimationFrame(updateFPS)

// ------------ HOME FUNCTIONS ------------ //

function runHomeFunctions() {
  // Funcion que hace que la bolita siga al MOUSE
  if (rect) {
    mouse(rect)
  } else {
    console.log('theres no circle')
  }
  // Funcion que hace VARIABLE TYPE en WORK: tiene counter -> necesita RAF
  function bentoWorkVariable() {
    counter++
    bento_work_variable(counter, workHeader)
    requestAnimationFrame(bentoWorkVariable)
  }
  requestAnimationFrame(bentoWorkVariable)
  // Blurred blob
  mousetrail(trail_wrapper, trail_array)
}

// ---------- EXPERIMENTS ---------- Estas funciones son para lo de Padmi //

// function runExpFunctions() {
//   ball()
//   line()
// }

// ---------- MAIN ----------- //

// if (document.body.classList.contains('body__home')) {
runHomeFunctions()
// } else if (document.body.classList.contains('body__experiments')) {
//   runExpFunctions()
// }
