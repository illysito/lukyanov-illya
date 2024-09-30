import { gsap } from 'gsap'

function hero() {
  const headings = document.querySelectorAll('.heading-1')
  // const overflow_hiddens = document.querySelectorAll('.overflow-hidden-hero')
  const hero_p = document.querySelectorAll('.p-1')
  gsap.from(headings, {
    yPercent: 200,
    // scale: 0.9,
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
    stagger: 0.3,
  })
  gsap.from(hero_p, {
    yPercent: 200,
    // scale: 0.9,
    // opacity: 0,
    duration: 1,
    ease: 'power2.out',
    stagger: 0.3,
  })

  // overflow_hiddens[2].addEventListener('mouseover', (event) => {
  //   console.log(event)
  //   gsap.to([headings[2], headings[3]], {
  //     yPercent: -130,
  //     duraion: 0.8,
  //     ease: 'power2.out',
  //   })
  // })
  // overflow_hiddens[2].addEventListener('mouseleave', (event) => {
  //   console.log(event)
  //   gsap.to([headings[2], headings[3]], {
  //     yPercent: 0,
  //     duraion: 0.8,
  //     ease: 'power2.out',
  //   })
  // })
}

export default hero
