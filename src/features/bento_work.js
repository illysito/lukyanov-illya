import { gsap } from 'gsap'

function bento_work() {
  // WORK MARQUEE
  gsap.to('.is--left', {
    xPercent: -25,
    repeat: -1,
    duration: 8,
    ease: 'linear',
  })
  gsap.to('.is--right', {
    xPercent: 25,
    repeat: -1,
    duration: 8,
    ease: 'linear',
  })
}

export default bento_work
