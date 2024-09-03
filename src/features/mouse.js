import { gsap } from 'gsap'

function mouse(circle) {
  // const circle = document.querySelector('.backdrop-circle')
  // circle.style.visibility = 'hidden'
  gsap.set(circle, {
    autoAlpha: 0,
  })
  const work_bento = document.querySelector('.bento__work')
  const body = document.body
  let mouseX = window.innerWidth / 2
  let mouseY = window.innerHeight / 2
  let current_left = mouseX
  let current_top = mouseY
  // let circleRadius = circle.offsetWidth / 8

  function lerp(start, end, t) {
    return start + (end - start) * (t / 1000)
  }

  function updateCircle() {
    gsap.set(circle, {
      autoAlpha: 1,
    })
    circle.style.pointerEvents = 'none'
    circle.style.opacity = '1'
    let circleRect = circle.getBoundingClientRect()
    let scrollY = window.scrollY
    let target_left = mouseX - circleRect.width / 2
    let target_top = scrollY + mouseY - circleRect.height / 2
    current_left = lerp(current_left, target_left, 2.5)
    current_top = lerp(current_top, target_top, 2.5)
    circle.style.left = `${current_left}px`
    circle.style.top = `${current_top}px`

    requestAnimationFrame(updateCircle)
  }

  function scroll() {
    updateCircle()
  }

  function mousemove(event) {
    mouseX = event.clientX
    mouseY = event.clientY
    updateCircle()
  }

  // function hideCircleIfNeeded() {
  //   let bentoRect = work_bento.getBoundingClientRect()
  //   let offset = circleRadius
  //   if (
  //     mouseX < bentoRect.left + offset ||
  //     mouseX > bentoRect.right - offset ||
  //     mouseY < bentoRect.top + offset ||
  //     mouseY > bentoRect.bottom - offset
  //   ) {
  //     circle.style.visibility = 'hidden'
  //   } else {
  //     circle.style.visibility = 'visible'
  //   }
  // }

  // work_bento.addEventListener('mouseenter', () => {
  //   circle.style.visibility = 'visible'
  // })
  console.log(work_bento)

  body.addEventListener('mousemove', mousemove)
  // body.addEventListener('mousemove', hideCircleIfNeeded)
  window.addEventListener('scroll', scroll)
  // window.addEventListener('scroll', hideCircleIfNeeded)

  updateCircle()
}

export default mouse
