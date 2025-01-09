import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function projects_scroll() {
  const images = document.querySelectorAll('.work-img')
  const titles = document.querySelectorAll('.project__heading')
  // const image_2 = document.querySelector('.work-img-2')
  const work_col = document.querySelectorAll('.work-col')
  const overlay = document.querySelectorAll('.project-overlay')
  // const arrow = document.querySelectorAll('.arrow')
  const randomFactor = 1
  let delay

  images.forEach((img) => {
    // let random = Math.random() * randomFactor + 1 - randomFactor / 2
    let random = randomFactor
    // if (index === 0) random = 0.4
    gsap.to(img, {
      y: -80 * random,
      scale: 1.02,
      scrollTrigger: {
        trigger: img,
        start: 'top bottom',
        // endTrigger: '.parallax-section',
        end: 'bottom top',
        scrub: true,
        markers: false,
      },
    })
  })

  work_col.forEach((img, index) => {
    let random = Math.random() * randomFactor + 1 - randomFactor / 2
    if (index === 1) random = 0
    gsap.to(img, {
      y: 0 * random,
      scale: 1.02,
      scrollTrigger: {
        trigger: img,
        start: 'top bottom',
        // endTrigger: '.parallax-section',
        end: 'bottom top',
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

  function hover(event) {
    let overlay = event.currentTarget
    let img = overlay.previousElementSibling
    let arrow = overlay.firstElementChild
    let coming_soon = overlay.lastElementChild
    // const i = [images].indexOf(img)
    // if (i === 2) {
    //   gsap.to(img, {
    //     opacity: 0,
    //     duration: 0.2,
    //     ease: 'power2.out',
    //   })
    //   gsap.to(image_2, {
    //     opacity: 1,
    //     duration: 0.2,
    //     ease: 'power2.out',
    //   })
    // } else {
    gsap.to(overlay, {
      opacity: 1,
      borderRadius: 20,
      duration: 0.5,
      ease: 'power2.out',
    })
    gsap.to(img, {
      borderRadius: 20,
      duration: 0.5,
      ease: 'power2.out',
    })
    gsap.to(arrow, {
      opacity: 1,
      yPercent: -40,
      duration: 0.5,
      ease: 'power2.out',
    })
    gsap.to(coming_soon, {
      opacity: 1,
      yPercent: 40,
      duration: 0.5,
      ease: 'power2.out',
    })
    // }
  }

  function hoverOut(event) {
    let overlay = event.currentTarget
    let arrow = overlay.firstElementChild
    let img = overlay.previousElementSibling
    let coming_soon = overlay.lastElementChild
    gsap.to(overlay, {
      opacity: 0,
      borderRadius: 0,
      duration: 0.5,
      ease: 'power2.out',
    })
    gsap.to(img, {
      borderRadius: 0,
      duration: 0.5,
      ease: 'power2.out',
    })
    gsap.to(arrow, {
      opacity: 0,
      yPercent: 0,
      duration: 0.5,
      ease: 'power2.out',
    })
    gsap.to(coming_soon, {
      opacity: 0,
      yPercent: 0,
      duration: 0.5,
      ease: 'power2.out',
    })
  }

  overlay.forEach((ovly) => {
    ovly.addEventListener('mouseover', hover)
  })
  overlay.forEach((ovly) => {
    ovly.addEventListener('mouseleave', hoverOut)
  })
}

export default projects_scroll
