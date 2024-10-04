import { gsap } from 'gsap'

function about() {
  // Cojo todos los headers
  const headings = document.querySelectorAll('.about-h')
  const headings_little = document.querySelectorAll('.about-h-little')
  // Función que recorre todo aquello que fue observado y lo desplaza a su posición inicial con opacidad completa
  headings.forEach((heading) => {
    gsap.to(heading, {
      y: 0,
      duration: 0.8,
      ease: 'power2.Out',
      scrollTrigger: {
        trigger: heading,
        start: 'top 98%',
        end: 'top 80%',
        markers: false,
      },
    })
  })
  headings_little.forEach((heading) => {
    gsap.to(heading, {
      y: 0,
      duration: 0.8,
      ease: 'power2.Out',
      scrollTrigger: {
        trigger: heading,
        start: 'top 98%',
        end: 'top 80%',
        markers: false,
      },
    })
  })
}

export default about
