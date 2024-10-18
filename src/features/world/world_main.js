import { gsap } from 'gsap'

import { World } from './World.js'

function hero() {
  // THREE.JS
  // FLAG ARRAY RESPONSIVE
  let flagArray
  function isMobile() {
    return window.innerWidth < 479
  }
  function isLandscape() {
    return window.innerWidth >= 479 && window.innerWidth < 767
  }
  function isTablet() {
    return window.innerWidth >= 767 && window.innerWidth < 991
  }
  function isPC() {
    return window.innerWidth >= 991
  }
  flagArray = [isMobile(), isLandscape(), isTablet(), isPC()]
  console.log('flagArray: ' + flagArray)

  // CONST
  const CONTAINER = document.querySelector('#scene-container')
  const CONTAINER_2 = document.querySelector('#scene-container-2')
  const WORLD = new World(CONTAINER, false, true, flagArray)
  const WORLD_2 = new World(CONTAINER_2, true, false, flagArray)

  // VARIABLES
  let mouseX = 0
  let mouseY = 0
  let previousMouseX = 0
  let previousMouseY = 0
  let previousScrollY = window.scrollY

  // INIT
  WORLD.start()
  WORLD_2.start()

  // EVENT LISTENERS
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
    WORLD.rotateText(deltaX, deltaY)
    WORLD.updateMouseLight(mouseX, mouseY)
    previousMouseX = mouseX
    previousMouseY = mouseY
  })
  window.addEventListener('scroll', (event) => {
    // console.log(event)
    if (event) {
      let currentScrollY = window.scrollY
      let scrollDelta = currentScrollY - previousScrollY
      WORLD.scrollText(scrollDelta)
      previousScrollY = currentScrollY
    }
  })
  window.addEventListener('resize', () => {
    flagArray = [isMobile(), isLandscape(), isTablet(), isPC()]
    console.log('flagArray: ' + flagArray)
  })

  // GSAP
  const hero = document.querySelector('.scene__container')
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
}

export default hero
