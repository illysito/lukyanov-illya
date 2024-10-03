// import { gsap } from 'gsap'
import { World } from './World.js'

function hero() {
  // GSAP
  // const hero_letters = document.querySelectorAll('.hero-illy')
  // gsap.from(hero_letters, {
  //   opacity: 0,
  //   duration: 0.8,
  //   ease: 'power2.inOut',
  // })

  // THREE.JS
  const container = document.querySelector('#scene-container')
  const world = new World(container)

  let mouseX = 0
  let mouseY = 0
  let currentX = 0
  let currentY = 0

  world.start()
  window.addEventListener('mousemove', (event) => {
    mouseX = event.clientX
    mouseY = event.clientY
    currentX = world.lerp(currentX, mouseX, 1)
    currentY = world.lerp(currentY, mouseY, 1)
    world.rotateCube(currentX, currentY)
  })
}

export default hero
