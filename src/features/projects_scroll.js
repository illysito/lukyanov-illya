import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function projects_scroll() {
  const images = document.querySelectorAll('.work-img')
  const img_wrappers = document.querySelectorAll('.project__scroll-wrapper')
  const titles = document.querySelectorAll('.project__title-big')
  const descriptions = document.querySelectorAll('.project__explained')
  const circle = document.querySelector('.work__circle')
  const landscape = document.querySelector('.bento__effect_intro')
  // let currentIndex = 0

  // CIRCLE SCALING
  console.log(circle)
  gsap.to(landscape, {
    opacity: 0,
    // borderWidth: 0.03,
    scrollTrigger: {
      trigger: img_wrappers[0],
      start: 'top 24%',
      end: 'top 24%',
      scrub: true,
      markers: false,
    },
  })

  // EFECTO on PARALLAX sobre los HEADINGS
  images.forEach((img) => {
    gsap.to(img, {
      y: -100,
      scale: 1.01,
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

  // Enseñar y esconder descriptions y titles on SCROLL
  function show(index) {
    descriptions.forEach((desc, descIndex) => {
      gsap.to(desc, {
        autoAlpha: descIndex === index ? 1 : 0, // Show the active description, hide others
        duration: 0,
      })
    })
    titles.forEach((title) => {
      gsap.to(title, {
        yPercent: -100 * (index + 1),
        duration: 0.4,
        ease: 'power2.out',
      })
    })
  }

  function hide(index) {
    gsap.to(descriptions[index], {
      autoAlpha: 0, // Hide the description when scrolling back up
      duration: 0,
    })
    if (index === 0) {
      titles.forEach((title) => {
        gsap.to(title, {
          yPercent: 0,
          duration: 0.4,
          ease: 'power2.out',
        })
      })
    }
  }

  img_wrappers.forEach((image, index) => {
    ScrollTrigger.create({
      trigger: image, // The image that triggers the description change
      start: 'top 24%', // When the bottom of the image reaches 50% of the viewport
      end: 'bottom 24%', // When the bottom of the image reaches 10% of the viewport
      onEnter: () => show(index), // Show description when entering the viewport
      onLeaveBack: () => hide(index), // Hide description when scrolling back up
      onEnterBack: () => show(index),
      // scrub: 1,
      toggleActions: 'play reverse play reverse',
      markers: false, // For debugging, remove in production
    })
  })
}

export default projects_scroll
