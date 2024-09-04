import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import bento from './features/bento'
// import bento_blur from './features/bento_blur'
import bento_logos from './features/bento_logos'
import bento_portadas from './features/bento_portadas'
import bento_posters from './features/bento_posters'
// import bento_work from './features/bento_work'
import bento_work_variable from './features/bento_work_variable'
import mouse from './features/mouse'

import './styles/style.css'

gsap.registerPlugin(ScrollTrigger)

const circle = document.querySelector('.backdrop-circle')
const categories = document.querySelectorAll('.is--category')
const workHeader = document.querySelectorAll('.bento__work-header')
const portadas_bento = document.querySelector('.bento__portadas')
const portadas_cont = document.querySelector('.bento__portadas-cont')
const portadas = document.querySelectorAll('.bento__portada-img')
const posters_bento = document.querySelector('.bento__posters')
const posters_cont = document.querySelector('.bento__posters-cont')
const posters = document.querySelectorAll('.bento__poster-img')

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

//------------ FUNCTIONS ------------//
if (circle) {
  mouse(circle)
} else {
  console.log('theres no circle')
}
bento(categories)
// bento_work()
// bento_blur()
function bentoWorkVariable() {
  counter++
  bento_work_variable(counter, workHeader)
  requestAnimationFrame(bentoWorkVariable)
}
requestAnimationFrame(bentoWorkVariable)
bento_logos()
bento_posters(posters_bento, posters_cont, posters)
bento_portadas(portadas_bento, portadas_cont, portadas)
