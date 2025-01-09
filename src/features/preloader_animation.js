import { gsap } from 'gsap'

function preloader_animation() {
  const preloader_overlay = document.querySelector('.preloader-overlay')
  // function isMobile() {
  //   return window.innerWidth <= 478 // or use any threshold you consider as mobile
  // }
  // if (isMobile()) {
  //   console.log('mobile')
  //   gsap.to('.preloader-counter-wrapper', {
  //     opacity: 0,
  //     delay: 4,
  //     duration: 1,
  //   })
  // } else {
  gsap.to('.preloader-counter-wrapper', {
    opacity: 0,
    delay: 4,
    duration: 1,
  })
  gsap.to(preloader_overlay, {
    delay: 4,
    opacity: 0,
    stagger: {
      amount: 1.2,
      from: 'random',
    },
    ease: 'power4.inOut',
    onComplete: () => {
      document.querySelector('.preloader-counter-wrapper').style.zIndez = 0
      document.querySelector('.preloader-overlay').style.zIndex = 0
      document.querySelector('.preloader-counter-wrapper').style.display =
        'none'
      document.querySelector('.preloader-overlay').style.display = 'none'
    },
  })
  // }
}

export default preloader_animation
