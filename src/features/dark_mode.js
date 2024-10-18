import { gsap } from 'gsap'

function dark_mode(isDarkMode) {
  // const hero_wrapper = document.querySelector('.hero-wrap')
  const white = '#fffbf6'
  const black = '#0e0e0e'

  const nav_p = document.querySelector('.nav-p')
  const scroll_p = document.querySelector('.scroll-p')
  const about_h = document.querySelectorAll('.about-h')
  const about_h_lil = document.querySelectorAll('.about-h-little')
  const about_p = document.querySelectorAll('.about-p')
  const proj_heading = document.querySelectorAll('.project__heading')
  const proj_desc = document.querySelectorAll('.project__description')
  const tag_text = document.querySelectorAll('.tag__text')
  const tag_wrapper = document.querySelectorAll('.tag_wrapper')
  const illy_black = document.querySelector('.me-blackie')
  const illy_white = document.querySelector('.me')
  const logo_black = document.querySelector('.logo-whitey')
  const logo = document.querySelector('.logo')
  const star_black = document.querySelectorAll('.trail__img')
  const star_white = document.querySelectorAll('.trail__img_white')
  const link = document.querySelectorAll('.link')

  const moon = document.querySelector('.moon')

  const button = document.querySelector('.darkmode-button')
  const body = document.body

  const dur = 0.5
  const ez = 'power2.inOut'
  const textArray = [
    about_h,
    about_h_lil,
    about_p,
    proj_heading,
    proj_desc,
    link,
  ]
  const singleTextArray = [nav_p, scroll_p]

  // let isDarkMode = false

  function darkMode() {
    // BACKGROUNDS:
    // IMAGE SHIFTING:
    gsap.to([illy_white, logo, moon], {
      opacity: 0,
      duration: 1 * dur,
      ease: ez,
      onComplete: () => {
        gsap.to(button, {
          backgroundColor: white,
          duration: dur,
          ease: ez,
        })
        gsap.to(body, {
          backgroundColor: black,
          duration: dur,
          ease: ez,
        })
        star_black.forEach((star) => {
          gsap.to(star, {
            opacity: 0,
            duration: 1 * dur,
            ease: ez,
          })
        })
        star_white.forEach((star) => {
          gsap.to(star, {
            opacity: 1,
            duration: 1 * dur,
            ease: ez,
          })
        })
        gsap.to(tag_wrapper, {
          backgroundColor: white,
          duration: dur,
          ease: ez,
        })
        // TYPE TO WHITE:
        for (let i = 0; i < textArray.length; i++) {
          textArray[i].forEach((el) => {
            gsap.to(el, {
              color: white,
              duration: dur,
              ease: ez,
            })
          })
        }
        gsap.to(singleTextArray, {
          color: white,
          duration: dur,
          ease: ez,
        })
        gsap.to(tag_text, {
          color: black,
          duration: dur,
          ease: ez,
          onComplete: () => {
            gsap.to([illy_black, logo_black], {
              opacity: 1,
              duration: 1.5 * dur,
              ease: ez,
            })
            // console.log('should be dark')
          },
        })
      },
    })
  }

  function lightMode() {
    // BACKGROUNDS:
    gsap.to([illy_black, logo_black], {
      opacity: 0,
      duration: 0.5 * dur,
      ease: ez,
      onComplete: () => {
        gsap.to(button, {
          backgroundColor: '#00000000',
          duration: dur,
          ease: ez,
        })
        gsap.to(body, {
          backgroundColor: white,
          duration: dur,
          ease: ez,
        })
        star_black.forEach((star) => {
          gsap.to(star, {
            opacity: 1,
            duration: 1 * dur,
            ease: ez,
          })
        })
        star_white.forEach((star) => {
          gsap.to(star, {
            opacity: 0,
            duration: 1 * dur,
            ease: ez,
          })
        })
        gsap.to(tag_wrapper, {
          backgroundColor: black,
          duration: dur,
          ease: ez,
        })
        // TYPE TO White:
        for (let i = 0; i < textArray.length; i++) {
          textArray[i].forEach((el) => {
            gsap.to(el, {
              color: black,
              duration: dur,
              ease: ez,
            })
          })
        }
        gsap.to(singleTextArray, {
          color: black,
          duration: dur,
          ease: ez,
        })
        // TYPE TO Black:
        gsap.to(tag_text, {
          color: white,
          duration: dur,
          ease: ez,
          onComplete: () => {
            gsap.to([illy_white, logo, moon], {
              opacity: 1,
              duration: 1.5 * dur,
              delay: 0.5 * dur,
              ease: ez,
            })
          },
        })
        // IMAGE SHIFTING:
        // console.log('should be light')
      },
    })
  }

  function handleModes() {
    if (!isDarkMode) {
      darkMode()
    } else {
      lightMode()
    }
    isDarkMode = !isDarkMode
  }

  function hoverIn() {
    gsap.to(button, {
      scale: 1.05,
      duration: 0.5 * dur,
      ease: ez,
    })
  }

  function hoverOut() {
    gsap.to(button, {
      scale: 1,
      duration: 0.5 * dur,
      ease: ez,
    })
  }

  handleModes()
  // console.log('isDarkMode: ' + isDarkMode)

  button.addEventListener('click', handleModes)
  button.addEventListener('mouseover', hoverIn)
  button.addEventListener('mouseleave', hoverOut)
}

export default dark_mode
