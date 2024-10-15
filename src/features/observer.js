import { gsap } from 'gsap'

function observe() {
  // Cojo todas las líneas
  const work_heading = document.querySelector('.work__header')
  const contact_heading = document.querySelector('.contact__header')
  // Establezco unos valores iniciales para evitar el flickering
  gsap.set([work_heading, contact_heading], {
    opacity: 0,
  })
  gsap.to(work_heading, {
    opacity: 1,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: work_heading,
      start: 'top 80%',
      // end: 'top 80%',
      // scrub: true,
      markers: false,
    },
  })
  gsap.to(contact_heading, {
    opacity: 1,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: contact_heading,
      start: 'top 80%',
      // end: 'top 80%',
      // scrub: true,
      markers: false,
    },
  })
  // // Función que recorre todo aquello que fue observado y lo desplaza a su posición inicial con opacidad completa
  // function handleIntersect(entries, observer) {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       console.log('im waiting for something to intersect')
  //     }
  //     // Evito que se repita el efecto cada vez que vuelven a aparecer los textos
  //     observer.unobserve(entry.target)
  //   })
  // }

  // // Condiciones de observación y llamada a función
  // const observer = new IntersectionObserver(handleIntersect, {
  //   threshold: 0.5, // Trigger callback when 50% of the element is in view
  // })
  // // Observo las lineas
  // observer.observe(work_heading)
}

export default observe
