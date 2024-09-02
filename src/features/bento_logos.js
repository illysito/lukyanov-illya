import { gsap } from 'gsap'

function bento_logos() {
  // LOGOS MARQUEE
  const logos_number = 7
  const scroll_distance_percent = (logos_number - 1) * 100
  gsap.to('.bento__logos-cont', {
    xPercent: -scroll_distance_percent,
    repeat: -1,
    duration: 80,
    ease: 'linear',
  })
}

export default bento_logos
