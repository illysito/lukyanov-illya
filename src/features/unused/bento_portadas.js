import { gsap } from 'gsap'

function bento_portadas(portadas_bento, portadas_cont, portadas) {
  const containerHeight = portadas_bento.offsetHeight
  const totalHeight = Array.from(portadas).reduce(
    (height, portada) => height + portada.offsetHeight,
    0
  )
  const moveDistance = totalHeight - containerHeight
  const tl = gsap.timeline({ repeat: -1, yoyo: true })
  tl.to(portadas_cont, {
    y: -moveDistance,
    duration: 120,
    ease: 'linear',
  })
}

export default bento_portadas
