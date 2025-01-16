import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

// IMPORTS!
import about from './features/about'
import dark_mode from './features/dark_mode'
// import ball from './features/experiments/gradient_ball'
// import line from './features/experiments/gradient_line'
import hero from './features/hero'
import barrrenaScroll from './features/individual pages/barrrena_scroll'
import derivaScroll from './features/individual pages/deriva_scroll'
import typeDance from './features/individual pages/deriva_type_dance'
// import bento_blur from './features/bento_blur'
// import bento_work from './features/bento_work'
import main_scroll from './features/main_scroll'
import menu from './features/menu'
import mousetrail from './features/mousetrail'
// import mouse from './features/unused/mouse'
// import nature from './features/nature'
import preloader_animation from './features/preloader_animation'
import preloader_count from './features/preloader_count'
// import observe from './features/observer'
import projects from './features/projects'
import projects_scroll from './features/projects_scroll'
// import set from './features/set'
// import breaths from './features/shaders/breaths'
// import fbm from './features/shaders/fbm'
// import kaleidoscope from './features/shaders/kaleidoscope'
// import mouse from './features/unused/mouse'
import variable_type from './features/variable_type'
import world_main from './features/world/world_main'

import './styles/style.css'

gsap.registerPlugin(ScrollTrigger)

// const circle = document.querySelector('.backdrop-circle')
// const rect = document.querySelector('.rect')
// const workHeader = document.querySelectorAll('.bento__work-header')
const contactHeader = document.querySelectorAll('.contact__work-header')
// const blob = document.querySelector('.gradball')
const trail_wrapper = document.querySelector('.trail-wrapper')
const trail_array = document.querySelectorAll('.trail')
const deriva_var_1 = document.querySelector('.deriva-variable-heading-1')
const deriva_var_2 = document.querySelector('.deriva-variable-heading-2')
// const darkModeShown = localStorage.getItem('darkModeShown')
// document.body.style.backgroundColor = darkModeShown ? '#0e0e0e' : '#fffbf6'
// console.log('darkmode: ' + darkModeShown)

function isMobile() {
  return window.innerWidth < 479
}

function isMobileOrBelow() {
  return window.innerWidth < 767
}

let isDarkMode = true
let darkShader = 0.0
const darkModeShader = { current: darkShader }

let isMobileVar = isMobile()
let isMobileOrBelowVar = isMobileOrBelow()

let counter = 0
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

// ------------ PRELOADER ----------------- //
function init() {
  // Check if the preloader has been shown before
  if (document.querySelector('.preloader-overlay')) {
    const preloaderShown = localStorage.getItem('preloaderShown')
    console.log('preloader shown: ' + preloaderShown)

    if (!preloaderShown) {
      // Show the preloader if it hasn't been shown before
      // prettier-ignore
      document.querySelector('.preloader-counter-wrapper').style.display = 'flex'
      document.querySelector('.preloader-overlay').style.display = 'flex'
      preloader_count()
      preloader_animation()
    } else {
      // Hide the preloader if it has been shown before
      // prettier-ignore
      document.querySelector('.preloader-counter-wrapper').style.display = 'none'
      document.querySelector('.preloader-overlay').style.display = 'none'
    }
  } else {
    console.error('No preloader!')
  }
}
init()
// ------------ HOME FUNCTIONS ------------ //

function runHomeFunctions() {
  // Funcion que hace que la bolita siga al MOUSE
  if (!isMobileOrBelowVar) {
    world_main()
  }
  hero()
  // fbm()
  // if (circle) {
  //   mouse(circle)
  // } else {
  //   console.log('theres no circle')
  // }
  // Funcion que hace VARIABLE TYPE en WORK: tiene counter -> necesita RAF

  // requestAnimationFrame(hero)
  function variableType() {
    counter++
    variable_type(counter, contactHeader)
    requestAnimationFrame(variableType)
  }
  requestAnimationFrame(variableType)
  // Funcion que hace el MOUSETRAIL de estrellitas
  dark_mode(isDarkMode, darkModeShader)
  menu()
  about()
  main_scroll(isMobileVar)
  if (!isMobileOrBelowVar) {
    console.log('SIZE ABOVE MOBILE')
    projects()
    projects_scroll()
  }
  mousetrail(trail_wrapper, trail_array)
  // observe()
  // Luna y Sol bajando y subiendo de la montaña
  // nature()
}

function runDerivaFunctions() {
  let deriva_array_1 = new SplitType(deriva_var_1, { types: 'chars' }).chars
  gsap.set(deriva_var_1, {
    fontWeight: 63.6,
  })
  let deriva_array_2 = new SplitType(deriva_var_2, { types: 'chars' }).chars
  gsap.set(deriva_var_2, {
    fontWeight: 63.6,
  })
  function derivaType() {
    counter++
    typeDance(counter, deriva_array_1, deriva_array_2)
    requestAnimationFrame(derivaType)
  }
  requestAnimationFrame(derivaType)
  derivaScroll()
}

function runBarrrenaFunctions() {
  barrrenaScroll()
}
// function runShaders() {
//   breaths()
//   kaleidoscope()
// }

// ---------- EXPERIMENTS ---------- Estas funciones son para lo de Padmi //

// function runExpFunctions() {
//   ball(blob)
//   line()
// }

// ---------- MAIN ----------- //

// if (document.body.classList.contains('body__home')) {
// runHomeFunctions()
// } else if (document.body.classList.contains('body__experiments')) {
// }
// set()
// runExpFunctions()
if (document.body.classList.contains('body__home')) runHomeFunctions()
if (document.body.classList.contains('body__deriva')) runDerivaFunctions()
if (document.body.classList.contains('body__barrrena')) runBarrrenaFunctions()
