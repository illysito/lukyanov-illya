import { gsap } from 'gsap'

function bento_posters(posters_bento, posters_cont, posters) {
  const containerHeight = posters_bento.offsetHeight
  const totalHeight = Array.from(posters).reduce(
    (height, poster) => height + poster.offsetHeight,
    0
  )
  const moveDistance = totalHeight - containerHeight
  const tl = gsap.timeline({ repeat: -1, yoyo: true })
  let duration = 150

  function changeDurationUp() {
    duration = 75
    console.log(duration)
  }
  function changeDurationDown() {
    duration = 150
    console.log(duration)
  }

  tl.to(posters_cont, {
    y: -moveDistance,
    duration: duration,
    ease: 'linear',
  })
  posters_bento.addEventListener('mouseover', changeDurationUp)
  posters_bento.addEventListener('mouseleave', changeDurationDown)
}
export default bento_posters
