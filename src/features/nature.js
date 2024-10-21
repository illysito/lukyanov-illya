import { gsap } from 'gsap'

function nature() {
  const sun = document.querySelector('.side__sun')
  const moon_black = document.querySelector('.moon_black')
  const moon_white = document.querySelector('.moon_white')
  const tl = gsap.timeline()
  const duration = 6

  tl.to(sun, {
    y: 16,
    duration: duration,
    ease: 'power2.inOut',
    repeat: -1,
    repeatDelay: 3 * duration,
  })
    .to([moon_black, moon_white], {
      y: -200,
      duration: duration,
      ease: 'inOut',
      repeat: -1,
      repeatDelay: 3 * duration,
    })
    .to([moon_black, moon_white], {
      y: 16,
      duration: duration,
      ease: 'power2.inOut',
      repeat: -1,
      repeatDelay: 3 * duration,
    })
    .to(sun, {
      y: -200,
      duration: duration,
      ease: 'inOut',
      repeat: -1,
      repeatDelay: 3 * duration,
    })
}

export default nature
