import { gsap } from 'gsap'

function projects() {
  const titles = document.querySelectorAll('.project__title')
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
      color: '#ffd41d',
      duration: 0.3,
      ease: 'power2.Out',
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

  titles.forEach((title) => {
    title.addEventListener('mouseover', handleTitleHover)
    title.addEventListener('mouseleave', handleTitleHoverOut)
  })
  // images.forEach((image) => {
  //   image.addEventListener('mouseover', handleImgHover)
  //   image.addEventListener('mouseleave', handleImgHoverOut)
  // })
}

export default projects
