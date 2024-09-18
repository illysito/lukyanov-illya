import { gsap } from 'gsap'

function mousetrail(trail, trail_array) {
  gsap.set(trail, {
    pointerEvents: 'none',
    opacity: 'none',
    // visibility: hidden,
  })

  let mouseX = 0
  let mouseY = 0
  let current_left = mouseX
  let current_top = mouseY
  let isVisible = false
  let counter = 10

  function lerp(start, end, t) {
    return start + (end - start) * t
  }

  function updateTrail() {
    let trailRect = trail.getBoundingClientRect()
    let scrollY = window.scrollY
    let target_left = mouseX - trailRect.width / 2
    let target_top = scrollY + mouseY - trailRect.height / 2

    current_left = lerp(current_left, target_left, 0.8)
    current_top = lerp(current_top, target_top, 0.8)

    gsap.to(trail_array, {
      left: current_left,
      top: current_top,
      stagger: 0.1,
    })
    gsap.to(trail_array, {
      opacity: 0, // Make it disappear
      stagger: 0.1,
      delay: 0.8, // Delay the fade-out to create the flash effect
      duration: 0.1,
      // ease: 'power2.inOut',
    })
    if (!isVisible) {
      isVisible = true
      gsap.to(trail_array, {
        opacity: 1,
        stagger: 0.1,
      })
    }
    // }
    // requestAnimationFrame(updateTrail)
  }

  // function scroll() {
  //   updateTrail()
  // }

  function hideTrail() {
    counter--
    if (counter < 0) isVisible = false
  }

  function mousemove(event) {
    mouseX = event.clientX
    mouseY = event.clientY
    counter = 10
    // if (counter > 0) updateTrail()
    updateTrail()
  }

  setInterval(hideTrail, 30)
  window.addEventListener('mousemove', mousemove)
  // window.addEventListener('scroll', scroll)
}

export default mousetrail
