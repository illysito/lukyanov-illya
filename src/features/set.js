import { gsap } from 'gsap'

function set() {
  const descriptions = document.querySelectorAll('.project__explained')
  // const titles = document.querySelectorAll('.project__title-big')
  // const headings = document.querySelectorAll('.about-h')
  // const headings_little = document.querySelectorAll('.about-h-little')

  // headings.forEach((heading) => {
  //   gsap.set(heading, {
  //     y: 20,
  //   })
  // })
  // headings_little.forEach((heading) => {
  //   gsap.set(heading, {
  //     y: 20,
  //   })
  // })
  descriptions.forEach((desc) => {
    gsap.set(desc, {
      opacity: 0,
      visibility: 'none',
    })
  })
  // titles.forEach((title) => {
  //   gsap.set(title, {
  //     opacity: 0,
  //     visibility: 'none',
  //   })
  // })
}

export default set
