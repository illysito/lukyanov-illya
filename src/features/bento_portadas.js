import { gsap } from 'gsap'

function bento_portadas() {
  const portada_bento = document.querySelector('.bento__portadas')
  const portadas_cont = document.querySelector('.bento__portadas-cont')
  const containerHeight = portada_bento.offsetHeight
  const portadas = document.querySelectorAll('.bento__portada-img')
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
