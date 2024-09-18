import { gsap } from 'gsap'

function bento_logos() {
  // LOGOS MARQUEE
  // const logos_number = 7
  // const logos_width = 0.125
  // const scroll_distance_percent = logos_number * logos_width * 100
  gsap.to('.bento__logos-cont', {
    xPercent: -70,
    repeat: -1,
    duration: 60,
    ease: 'linear',
  })
}

export default bento_logos
