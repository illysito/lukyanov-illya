import { gsap } from 'gsap'

function menu() {
  const menu = document.querySelector('.nav-p')
  const marker = document.querySelector('.nav-marker')
  const logo = document.querySelector('.logo')
  const menu_section = document.querySelector('.menu-section')
  const menu_items = document.querySelectorAll('.menu-heading')
  const menu_item_cont = document.querySelectorAll('.overflow-hidden-menu')
  const x_container = document.querySelector('.x-container')
  const aspa_1 = document.querySelector('.aspa-1')
  const aspa_2 = document.querySelector('.aspa-2')

  // let isClicked = false

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

  function hoverXIn() {
    gsap.to(aspa_1, {
      scale: 1.01,
      rotate: 270,
      duration: 0.6,
    })
    gsap.to(aspa_2, {
      scale: 1.01,
      rotate: 180,
      duration: 0.6,
    })
  }

  function hoverXOut() {
    gsap.to(aspa_1, {
      scale: 1,
      rotate: 0,
      duration: 0.6,
    })
    gsap.to(aspa_2, {
      scale: 1,
      rotate: 90,
      duration: 0.6,
    })
  }

  function hoverHeaderIn(event) {
    gsap.to(event.currentTarget, {
      x: 10,
      duration: 0.3,
    })
  }

  function hoverHeaderOut(event) {
    gsap.to(event.currentTarget, {
      x: 0,
      duration: 0.3,
    })
  }

  function showMenu() {
    gsap.to(menu_section, {
      yPercent: 100,
      duration: 0.8,
      ease: 'power3.inOut',
    })
    gsap.to(menu_items, {
      yPercent: -100,
      duration: 0.8,
      ease: 'power2.Out',
      stagger: 0.2,
      delay: 0.4,
    })
  }

  function hideMenu() {
    gsap.to(menu_items, {
      yPercent: 0,
      duration: 0.8,
      ease: 'power2.inOut',
      onComplete: () => {
        gsap.to(menu_section, {
          yPercent: 0,
          duration: 0.8,
          ease: 'power2.inOut',
        })
      },
    })
  }

  // function clicked() {
  //   if (!isClicked) {
  //     console.log('menuIn')
  //     showMenu()
  //   } else {
  //     console.log('menuOut')
  //     hideMenu()
  //   }
  //   isClicked = !isClicked
  // }

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
  menu.addEventListener('click', showMenu)
  logo.addEventListener('mouseover', hoverInLogo)
  logo.addEventListener('mouseleave', hoverOutLogo)
  x_container.addEventListener('click', hideMenu)
  x_container.addEventListener('mouseover', hoverXIn)
  x_container.addEventListener('mouseleave', hoverXOut)
  menu_item_cont.forEach((item) => {
    item.addEventListener('mouseover', hoverHeaderIn)
    item.addEventListener('mouseleave', hoverHeaderOut)
    item.addEventListener('click', hideMenu)
  })
}

export default menu
