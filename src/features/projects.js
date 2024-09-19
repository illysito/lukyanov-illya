import { gsap } from 'gsap'

function projects() {
  const titles = document.querySelectorAll('.project__title')
  const descriptions = document.querySelectorAll('.project__explained')
  const images = document.querySelectorAll('.project__img')
  let currentIndex = 0
  console.log(currentIndex)

  // EFECTO on HOVER sobre los HEADINGS
  function handleTitleHover(event) {
    // Cojo el titulo y también su INDEX
    let actualTitle = event.currentTarget
    currentIndex = Array.prototype.indexOf.call(titles, actualTitle)
    // Efecto sobre el titulo
    gsap.to(actualTitle, {
      fontWeight: 450,
      x: 8,
      color: '#ffd4e3',
      duration: 0.3,
      ease: 'power2.Out',
    })
    // Escondo todas las descripciones y las imagenes
    images.forEach((image) => {
      gsap.to(image, {
        autoAlpha: 0,
        visibility: 'none',
        duration: 0,
      })
    })
    descriptions.forEach((desc) => {
      gsap.to(desc, {
        autoAlpha: 0,
        visibility: 'none',
        duration: 0,
      })
    })
    gsap.to(descriptions[currentIndex], {
      autoAlpha: 1,
      visibility: 'block',
      duration: 0,
    })
    gsap.to(images[currentIndex], {
      autoAlpha: 1,
      visibility: 'block',
      duration: 0,
    })
  }

  function handleTitleHoverOut(event) {
    let actualTitle = event.currentTarget
    gsap.to(actualTitle, {
      fontWeight: 300,
      x: 0,
      color: '#fffbf6',
      duration: 0.3,
      ease: 'power2.Out',
    })
  }

  function handleImgHover(event) {
    let actualImg = event.currentTarget
    gsap.to(actualImg, {
      scale: 1.02,
      duration: 0.6,
      ease: 'power2.Out',
    })
  }

  function handleImgHoverOut(event) {
    let actualImg = event.currentTarget
    gsap.to(actualImg, {
      scale: 1,
      duration: 0.6,
      ease: 'power2.Out',
    })
  }

  titles.forEach((title) => {
    title.addEventListener('mouseover', handleTitleHover)
    title.addEventListener('mouseleave', handleTitleHoverOut)
  })
  images.forEach((image) => {
    image.addEventListener('mouseover', handleImgHover)
    image.addEventListener('mouseleave', handleImgHoverOut)
  })
}

export default projects
