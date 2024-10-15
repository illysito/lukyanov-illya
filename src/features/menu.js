import { gsap } from 'gsap'

function menu() {
  const menu = document.querySelector('.nav-p')
  const marker = document.querySelector('.nav-marker')
  const logo = document.querySelector('.logo')

  let isClicked = false

  gsap.set(marker, {
    opacity: 0,
  })

  function hoverIn() {
    gsap.to(menu, {
      scale: 1.03,
      duration: 0.5,
      ease: 'power2.out',
    })
    gsap.to(marker, {
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out',
    })
  }

  function hoverOut() {
    gsap.to(menu, {
      scale: 1,
      duration: 0.5,
      ease: 'power2.out',
    })
    gsap.to(marker, {
      opacity: 0,
      duration: 0.2,
      ease: 'power2.out',
    })
  }

  function clicked() {
    if (!isClicked) {
      console.log('menuIn')
    } else {
      console.log('menuOut')
    }
    isClicked = !isClicked
  }

  function hoverInLogo() {
    gsap.to(logo, {
      scale: 1.03,
      duration: 0.5,
      ease: 'power2.out',
    })
  }

  function hoverOutLogo() {
    gsap.to(logo, {
      scale: 1,
      duration: 0.5,
      ease: 'power2.out',
    })
  }

  menu.addEventListener('mouseover', hoverIn)
  menu.addEventListener('mouseleave', hoverOut)
  menu.addEventListener('click', clicked)
  logo.addEventListener('mouseover', hoverInLogo)
  logo.addEventListener('mouseleave', hoverOutLogo)
}

export default menu
