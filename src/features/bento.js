import { gsap } from 'gsap'

function bento(categories) {
  function show_cat(event) {
    let category = event.target.firstElementChild
    gsap.to(category, {
      opacity: 1,
      duration: 0.1,
      ease: 'linear',
    })
  }
  function hide_cat(event) {
    let category = event.target.firstElementChild
    gsap.to(category, {
      opacity: 0,
      duration: 0.1,
      ease: 'linear',
    })
  }
  categories.forEach((cat) => {
    cat.addEventListener('mouseenter', show_cat)
    cat.addEventListener('mouseleave', hide_cat)
  })
}

export default bento
