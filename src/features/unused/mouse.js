import { gsap } from 'gsap'

function mouse(circle) {
  const hero_section = document.querySelector('.hero-section')

  gsap.set(circle, {
    pointerEvents: 'none',
    // visibility: hidden,
  })
  // const circle = document.querySelector('.backdrop-circle')
  circle.style.visibility = 'hidden'
  // const body = document.body
  let mouseX = window.innerWidth / 2
  let mouseY = window.innerHeight / 2
  let current_left = mouseX
  let current_top = mouseY
  // let circleRadius = 0
  // let circleRadius = circle.offsetWidth / 8

  function lerp(start, end, t) {
    return start + (end - start) * t
  }

  function updateCircle() {
    let circleRect = circle.getBoundingClientRect()
    let scrollY = window.scrollY
    let target_left = mouseX - circleRect.width / 2
    let target_top = scrollY + mouseY - circleRect.height / 2

    current_left = lerp(current_left, target_left, 0.0005)
    current_top = lerp(current_top, target_top, 0.0005)

    if (
      Math.abs(current_left - target_left) > 0.5 ||
      Math.abs(current_top - target_top) > 0.5
    ) {
      gsap.set(circle, {
        left: current_left,
        top: current_top,
      })
      console.log(current_left)
    }
    requestAnimationFrame(updateCircle)
  }

  function scroll() {
    updateCircle()
  }

  function mousemove(event) {
    mouseX = event.clientX
    mouseY = event.clientY
    updateCircle()
  }

  // SOLO SI ESTA DENTRO DEL CUADRADO DE LAS IMAGENES DE PROYECTO
  function hideCircleIfNeeded() {
    // let bentoRect = hero_section.getBoundingClientRect()
    // let offset = circleRadius
    // if (
    //   mouseX < bentoRect.left + offset ||
    //   mouseX > bentoRect.right - offset ||
    //   mouseY < bentoRect.top + offset ||
    //   mouseY > bentoRect.bottom - offset
    // ) {
    //   circle.style.visibility = 'hidden'
    // } else {
    //   circle.style.visibility = 'visible'
    // }
    console.log('hey')
  }

  hero_section.addEventListener('mouseenter', () => {
    circle.style.visibility = 'visible'
  })

  window.addEventListener('mousemove', mousemove)
  window.addEventListener('mousemove', hideCircleIfNeeded)
  window.addEventListener('scroll', scroll)
  window.addEventListener('scroll', hideCircleIfNeeded)
}

export default mouse
