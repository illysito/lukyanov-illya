import { gsap } from 'gsap'

function hero() {
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
