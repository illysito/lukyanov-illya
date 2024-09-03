function mouse() {
  const circle = document.querySelector('.backdrop-circle')
  const body = document.body
  let mouseX = window.innerWidth / 2
  let mouseY = window.innerHeight / 2
  let current_left = 0
  let current_top = 0
  function lerp(start, end, t) {
    return start + (end - start) * t
  }
  function updateCircle() {
    circle.style.pointerEvents = 'none'
    let circleRect = circle.getBoundingClientRect()
    let scrollY = window.scrollY
    let target_left = mouseX - circleRect.width / 2
    let target_top = scrollY + mouseY - circleRect.height / 2
    current_left = lerp(current_left, target_left, 0.5)
    current_top = lerp(current_top, target_top, 0.5)
    circle.style.left = `${current_left}px`
    circle.style.top = `${current_top}px`
  }

  function scroll() {
    updateCircle()
  }

  function mousemove(event) {
    mouseX = event.clientX
    mouseY = event.clientY
    updateCircle()
  }

  body.addEventListener('mousemove', mousemove)
  window.addEventListener('scroll', scroll)

  updateCircle()
}

export default mouse
