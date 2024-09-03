import { gsap } from 'gsap'

function bento_posters(posters_bento, posters_cont, posters) {
  const containerHeight = posters_bento.offsetHeight
  const totalHeight = Array.from(posters).reduce(
    (height, poster) => height + poster.offsetHeight,
    0
  )
  const moveDistance = totalHeight - containerHeight
  const tl = gsap.timeline({ repeat: -1, yoyo: true })
  tl.to(posters_cont, {
    y: -moveDistance,
    duration: 150,
    ease: 'linear',
  })
}

export default bento_posters
