import { gsap } from 'gsap'

function line() {
  const bentos = document.querySelectorAll('.transp-bento')

  function updateLine(event) {
    const actualBento = event.target
    const actualLine = actualBento.querySelector('.gradient-line')
    gsap.to(actualLine, {
      y: '-400%',
      opacity: 1,
      duration: 1.2,
      ease: 'power3.out',
    })
  }

  function resetLine(event) {
    const actualBento = event.target
    const actualLine = actualBento.querySelector('.gradient-line')
    gsap.to(actualLine, {
      y: '0%',
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
    })
  }

  bentos.forEach((bento) => {
    bento.addEventListener('mouseover', updateLine)
    bento.addEventListener('mouseout', resetLine)
  })
}

export default line
