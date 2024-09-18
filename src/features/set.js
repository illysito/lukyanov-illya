import { gsap } from 'gsap'

function set() {
  const descriptions = document.querySelectorAll('.project__explained')
  const images = document.querySelectorAll('.project__img')

  images.forEach((img) => {
    gsap.set(img, {
      opacity: 0,
      visibility: 'none',
    })
  })
  descriptions.forEach((desc) => {
    gsap.set(desc, {
      opacity: 0,
      visibility: 'none',
    })
  })
}

export default set
