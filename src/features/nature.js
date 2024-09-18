import { gsap } from 'gsap'

function nature() {
  const sun = document.querySelector('.side__sun')
  const moon = document.querySelector('.side__moon')
  const tl = gsap.timeline()
  const duration = 4

  tl.to(sun, {
    y: 16,
    duration: duration,
    ease: 'power2.inOut',
    repeat: -1,
    repeatDelay: 3 * duration,
  })
    .to(moon, {
      y: -200,
      duration: duration,
      ease: 'inOut',
      repeat: -1,
      repeatDelay: 3 * duration,
    })
    .to(moon, {
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
