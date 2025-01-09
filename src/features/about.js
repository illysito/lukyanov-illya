import { gsap } from 'gsap'
import SplitType from 'split-type'

function about() {
  // Cojo todos los headers
  const headings = document.querySelectorAll('.about-h')
  const services = document.querySelectorAll('.services-h')
  const headings_little = document.querySelectorAll('.about-h-little')
  const paragraphs = document.querySelectorAll('.about-p')

  paragraphs.forEach((item) => {
    const splitInstance = new SplitType(item, { types: 'lines' })
    const lines = splitInstance.lines
    // Wrap each line in a div with overflow hidden
    lines.forEach((line) => {
      const wrapper = document.createElement('div')
      wrapper.classList.add('reveal-line')
      wrapper.style.overflow = 'hidden'

      // Insert the wrapper and move the line inside it
      line.parentNode.insertBefore(wrapper, line)
      wrapper.appendChild(line)
      gsap.set(line, {
        yPercent: 100,
      })
      gsap.to(line, {
        yPercent: 0,
        duration: 1,
        ease: 'power2.Out',
        scrollTrigger: {
          trigger: line,
          start: 'top 98%',
          end: 'top 80%',
          markers: false,
        },
      })
    })
  })

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
  services.forEach((service) => {
    gsap.to(service, {
      y: 0,
      duration: 0.8,
      ease: 'power2.Out',
      scrollTrigger: {
        trigger: service,
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
