import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function projects_scroll() {
  const images = document.querySelectorAll('.work-img')
  const titles = document.querySelectorAll('.project__heading')
  const randomFactor = 1
  let delay

  images.forEach((img, index) => {
    let random = Math.random() * randomFactor + 1 - randomFactor / 2
    if (index === 0) random = 0.4
    gsap.to(img, {
      y: -100 * random,
      scale: 1.02,
      scrollTrigger: {
        trigger: img,
        start: 'top bottom',
        // endTrigger: '.parallax-section',
        end: 'bottom 50%',
        scrub: true,
        markers: false,
      },
    })
  })

  titles.forEach((title, index) => {
    if (index % 2 === 0) {
      delay = 0.2
    } else {
      delay = 0
    }
    gsap.to(title, {
      y: 0,
      delay: delay,
      scrollTrigger: {
        trigger: title,
        start: 'top 98%',
        // endTrigger: '.parallax-section',
        scrub: false,
        markers: false,
      },
    })
  })
}

export default projects_scroll
