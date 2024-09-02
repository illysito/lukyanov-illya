import { gsap } from 'gsap'

function bento_posters() {
  const poster_bento = document.querySelector('.bento__posters')
  const poster_cont = document.querySelector('.bento__posters-cont')
  const containerHeight = poster_bento.offsetHeight
  const posters = document.querySelectorAll(
    '.bento__posters-cont .bento__poster-img'
  )
  const totalHeight = Array.from(posters).reduce(
    (height, poster) => height + poster.offsetHeight,
    0
  )
  const moveDistance = totalHeight - containerHeight
  const tl = gsap.timeline({ repeat: -1, yoyo: true })
  tl.to(poster_cont, {
    y: -moveDistance,
    duration: 150,
    ease: 'linear',
  })
}

export default bento_posters
