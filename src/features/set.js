import { gsap } from 'gsap'

function set() {
  const descriptions = document.querySelectorAll('.project__explained')
  // const titles = document.querySelectorAll('.project__title-big')

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
