import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// IMPORTS
import about from './features/about'
import dark_mode from './features/dark_mode'
// import bento_blur from './features/bento_blur'
// import bento_work from './features/bento_work'
import main_scroll from './features/main_scroll'
import menu from './features/menu'
// import ball from './features/experiments/gradient_ball'
import mousetrail from './features/mousetrail'
// import line from './features/experiments/gradient_line'
// import mouse from './features/unused/mouse'
import nature from './features/nature'
import observe from './features/observer'
import projects from './features/projects'
import projects_scroll from './features/projects_scroll'
import set from './features/set'
import mouse from './features/unused/mouse'
// import variable_type from './features/variable_type'
import hero from './features/world/world_main'

import './styles/style.css'

gsap.registerPlugin(ScrollTrigger)

const circle = document.querySelector('.backdrop-circle')
// const rect = document.querySelector('.rect')
// const workHeader = document.querySelectorAll('.bento__work-header')
// const contactHeader = document.querySelectorAll('.contact__work-header')
// const blob = document.querySelector('.gradball__home')
const trail_wrapper = document.querySelector('.trail-wrapper')
const trail_array = document.querySelectorAll('.trail')

let isDarkMode = false

// let counter = 0
console.log('counter: ')
// let frameCount = 0
// let lastTime = performance.now()

// function updateFPS() {
//   const now = performance.now()
//   const deltaTime = now - lastTime

//   frameCount++

//   // Calculate FPS every second
//   if (deltaTime >= 1000) {
//     const fps = (frameCount / deltaTime) * 1000
//     console.log(`FPS: ${Math.round(fps)}`)

//     frameCount = 0
//     lastTime = now
//   }
//   requestAnimationFrame(updateFPS)
// }
// // Start the FPS counter
// requestAnimationFrame(updateFPS)

// ------------ RESIZE ------------ //
let resizeTimeout

window.addEventListener('resize', () => {
  // Clear the previous timeout if the user is still resizing
  clearTimeout(resizeTimeout)

  // Set a new timeout to trigger ScrollTrigger.refresh() after resizing stops
  resizeTimeout = setTimeout(() => {
    console.log('Resize finished, recalculating ScrollTrigger')
    ScrollTrigger.refresh()
  }, 200) // Adjust the timeout value as needed
})

// ------------ HOME FUNCTIONS ------------ //

function runHomeFunctions() {
  // Funcion que hace que la bolita siga al MOUSE
  hero()
  if (circle) {
    mouse(circle)
  } else {
    console.log('theres no circle')
  }
  // Funcion que hace VARIABLE TYPE en WORK: tiene counter -> necesita RAF
  // function variableType() {
  //   counter++
  //   if (workHeader) {
  //     variable_type(counter, workHeader, contactHeader)
  //   }
  //   requestAnimationFrame(variableType)
  // }
  // requestAnimationFrame(variableType)
  // Funcion que hace el MOUSETRAIL de estrellitas
  dark_mode(isDarkMode)
  menu()
  about()
  main_scroll()
  projects_scroll()
  mousetrail(trail_wrapper, trail_array)
  observe()
  projects()
  // Luna y Sol bajando y subiendo de la montaña
  nature()
}

// ---------- EXPERIMENTS ---------- Estas funciones son para lo de Padmi //

// function runExpFunctions() {
//   ball()
//   line()
// }

// ---------- MAIN ----------- //

// if (document.body.classList.contains('body__home')) {
// runHomeFunctions()
// } else if (document.body.classList.contains('body__experiments')) {
//   runExpFunctions()
// }
set()
runHomeFunctions()
