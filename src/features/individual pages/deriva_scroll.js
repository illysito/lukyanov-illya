import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

function derivaScroll() {
  const text = document.querySelector('.deriva__type-column')
  const text_div = document.querySelector('.deriva__posters-column')
  const title = document.querySelector('.individual-project__heading')
  const desc_es = document.querySelector('.individual-project__desc-es')
  const desc_en = document.querySelector('.individual-project__desc-en')

  let description_es = new SplitType(desc_es, { types: 'lines' }).lines
  let description_en = new SplitType(desc_en, { types: 'lines' }).lines

  function wrapLinesAndApplyEffect(lines) {
    lines.forEach((line) => {
      // Create a wrapper div
      const wrapper = document.createElement('div')

      // Set overflow hidden for the wrapper div
      wrapper.style.overflow = 'hidden'
      // wrapper.style.position = 'relative'
      wrapper.style.width = '100%'
      wrapper.style.height = 'auto'

      // Insert the wrapper div around the line
      line.parentNode.insertBefore(wrapper, line)
      wrapper.appendChild(line) // Move the line inside the wrapper div

      line.style.width = '100%'
      // line.style.display = 'flex'
      // line.style.flexAlignment = 'justify-content'
      line.style.textAlign = 'justify'
      // Optionally, you can style the wrapper div, like setting a fixed height
      // line.style.position = 'relative' // Ensure the line itself is not absolutely positioned
    })
  }
  // Apply the wrap effect for both descriptions
  wrapLinesAndApplyEffect(description_es)
  wrapLinesAndApplyEffect(description_en)

  description_es.forEach((line) => {
    gsap.from(line, {
      yPercent: 100,
      duration: 0.8,
      ease: 'power2.Out',
      scrollTrigger: {
        trigger: line,
        start: 'top 98%',
        end: 'top 80%',
        markers: false,
      },
      stagger: 0.8,
    })
  })

  description_en.forEach((line) => {
    gsap.from(line, {
      yPercent: 100,
      duration: 0.8,
      ease: 'power2.Out',
      scrollTrigger: {
        trigger: line,
        start: 'top 98%',
        end: 'top 80%',
        markers: false,
      },
      stagger: 0.8,
    })
  })

  gsap.to(title, {
    y: 0,
    duration: 0.8,
    ease: 'power2.Out',
    scrollTrigger: {
      trigger: title,
      start: 'top 98%',
      end: 'top 80%',
      markers: false,
    },
  })

  gsap.to(text, {
    // y: 0,
    scrollTrigger: {
      trigger: text_div,
      start: 'top 12%',
      end: 'bottom 85%',
      pin: text,
      pinSpacing: false,
      markers: false,
    },
  })
}

export default derivaScroll
