import { gsap } from 'gsap'

import { World } from './World.js'

function hero() {
  // GSAP
  const hero = document.querySelector('.scene__container')
  const hero_heading_up = document.querySelector('.hero-h')
  const scroll_p = document.querySelector('.scroll-p')
  gsap.to(hero, {
    y: 200,
    scale: 1.1,
    scrollTrigger: {
      trigger: hero,
      start: 'bottom bottom',
      end: 'bottom 20%',
      scrub: true,
    },
  })
  gsap.to(hero_heading_up, {
    y: 300,
    scrollTrigger: {
      trigger: hero,
      start: 'bottom bottom',
      end: 'bottom 20%',
      scrub: true,
    },
  })
  gsap.to(scroll_p, {
    opacity: 0,
    scrollTrigger: {
      trigger: scroll_p,
      start: 'top 92%',
      end: 'top 86%',
      scrub: true,
      markers: false,
    },
  })

  // THREE.JS
  const container = document.querySelector('#scene-container')
  const world = new World(container)

  let mouseX = 0
  let mouseY = 0
  // let currentX = 0
  // let currentY = 0
  let previousMouseX = 0
  let previousMouseY = 0
  let previousScrollY = window.scrollY

  world.start()
  window.addEventListener('mousemove', (event) => {
    mouseX = event.clientX
    mouseY = event.clientY
    mouseX = gsap.utils.mapRange(
      0.02 * window.innerWidth,
      0.98 * window.innerWidth,
      -window.innerWidth / 2,
      window.innerWidth / 2,
      mouseX
    )
    mouseY = gsap.utils.mapRange(
      0.02 * window.innerHeight,
      0.98 * window.innerHeight,
      -window.innerHeight / 2,
      window.innerHeight / 2,
      mouseY
    )
    const deltaX = mouseX - previousMouseX
    const deltaY = mouseY - previousMouseY
    // currentX = world.lerp(deltaX, mouseX, 1)
    // currentY = world.lerp(currentY, mouseY, 1)
    world.rotateText(deltaX, deltaY)
    world.updateMouseLight(mouseX, mouseY)
    previousMouseX = mouseX
    previousMouseY = mouseY
  })
  window.addEventListener('scroll', (event) => {
    // console.log(event)
    if (event) {
      let currentScrollY = window.scrollY
      let scrollDelta = currentScrollY - previousScrollY
      world.scrollText(scrollDelta)
      previousScrollY = currentScrollY
    }
  })
}

export default hero
