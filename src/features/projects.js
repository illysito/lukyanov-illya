import { gsap } from 'gsap'

function projects() {
  const main_project_frame = document.querySelector('.main-proj-img-pc')
  console.log('MAIN PROJECT FRAME: ', main_project_frame)

  function mainHover(event) {
    let mainProj = event.currentTarget
    let mainWrapper = mainProj.parentElement
    console.log(mainWrapper)
    console.log(mainProj, mainWrapper)
    gsap.to(mainProj, {
      scale: 1.05,
      borderRadius: 32,
      duration: 0.8,
      ease: 'power2.Out',
    })
    gsap.to(mainWrapper, {
      borderRadius: 32,
      duration: 0.8,
      ease: 'power2.Out',
    })
  }

  function mainHoverOut(event) {
    let mainProj = event.currentTarget
    let mainWrapper = mainProj.parentElement

    gsap.to(mainProj, {
      scale: 1,
      borderRadius: 4,
      duration: 0.8,
      ease: 'power2.Out',
    })
    gsap.to(mainWrapper, {
      borderRadius: 4,
      duration: 0.8,
      ease: 'power2.Out',
    })
  }

  // //prettier-ignore
  // main_project_frame.forEach((frame) => {
  //   frame.addEventListener('mouseover', () => console.log('hover in'))
  // })
  // //prettier-ignore
  // main_project_frame.forEach((frame) => {
  //   frame.addEventListener('mouseleave', () => console.log('hover out'))
  // })
  main_project_frame.addEventListener('mouseover', mainHover)
  main_project_frame.addEventListener('mouseleave', mainHoverOut)
}

export default projects
