import { gsap } from 'gsap'

function hero() {
  // GSAP
  const hero = document.querySelector('.scene__container')
  const scroll_p = document.querySelector('.scroll-p')
  const work_p = document.querySelector('.work-p')
  gsap.to(hero, {
    y: 200,
    scale: 1.1,
    scrollTrigger: {
      trigger: hero,
      start: 'bottom bottom',
      end: 'bottom 20%',
      scrub: true,
      // markers: true,
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
  gsap.to(work_p, {
    opacity: 0,
    y: 30,
    scrollTrigger: {
      trigger: work_p,
      start: 'top 52%',
      end: 'top 16%',
      scrub: true,
      markers: false,
    },
  })
}

export default hero
