import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function main_scroll(isMobile) {
  // const hero_wrapper = document.querySelector('.hero-wrap')
  const nav = document.querySelector('.nav-section')
  const contact_section = document.querySelector('.contact-section')
  const about_section = document.querySelector('.about-section')
  const work_section = document.querySelector('.work-section')

  gsap.to(about_section, {
    y: 100,
    scrollTrigger: {
      trigger: work_section,
      start: 'top bottom',
      // endTrigger: '.parallax-section',
      end: 'top top',
      scrub: true,
      markers: false,
    },
  })

  if (!isMobile) {
    gsap.to(work_section, {
      y: 100,
      scrollTrigger: {
        trigger: contact_section,
        start: 'top bottom',
        // endTrigger: '.parallax-section',
        end: 'top top',
        scrub: 0.5,
        markers: false,
      },
    })
  }

  gsap.to(nav, {
    autoAlpha: 0,
    scrollTrigger: {
      trigger: contact_section,
      start: 'top 50%',
      // endTrigger: '.parallax-section',
      end: 'top 10%',
      scrub: true,
      markers: false,
    },
  })
}

export default main_scroll
