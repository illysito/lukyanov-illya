import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function main_scroll() {
  // const hero_wrapper = document.querySelector('.hero-wrap')
  const headings = document.querySelectorAll('.heading-1')
  const hero_p = document.querySelectorAll('.p-1')
  const bento = document.querySelector('.bento')
  const nav = document.querySelector('.nav-section')

  // EFECTO on PARALLAX sobre el HERO
  gsap.to(headings, {
    y: 200,
    scrollTrigger: {
      trigger: bento,
      start: 'top bottom',
      // endTrigger: '.parallax-section',
      end: 'top top',
      scrub: 1,
      markers: false,
    },
  })
  gsap.to(headings, {
    scale: 0.9,
    // filter: 'blur(20px)',
    scrollTrigger: {
      trigger: bento,
      start: 'top bottom',
      // endTrigger: '.parallax-section',
      end: 'top top',
      scrub: 1,
      markers: false,
    },
  })
  gsap.to(hero_p, {
    y: 200,
    scrollTrigger: {
      trigger: bento,
      start: 'top bottom',
      // endTrigger: '.parallax-section',
      end: 'top top',
      scrub: 1,
      markers: false,
    },
  })
  gsap.to(hero_p, {
    scale: 0.98,
    opacity: 0,
    // filter: 'blur(20px)',
    scrollTrigger: {
      trigger: bento,
      start: 'top bottom',
      // endTrigger: '.parallax-section',
      end: 'top 60%',
      scrub: 1,
      markers: false,
    },
  })
  gsap.to(nav, {
    autoAlpha: 0,
    scrollTrigger: {
      trigger: bento,
      start: 'top 50%',
      // endTrigger: '.parallax-section',
      end: 'top 10%',
      scrub: true,
      markers: false,
    },
  })
  // gsap.to(headings, {
  //   fontWeight: 300,
  //   // scale: 0.9,
  //   scrollTrigger: {
  //     trigger: bento,
  //     start: 'top bottom',
  //     // endTrigger: '.parallax-section',
  //     end: 'top top',
  //     scrub: 1,
  //     markers: false,
  //   },
  // })
}

export default main_scroll
