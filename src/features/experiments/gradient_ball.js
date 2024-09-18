import { gsap } from 'gsap'

function ball(grad_ball) {
  // const grad_ball = document.querySelector('.gradball')
  const ball_rect = grad_ball.getBoundingClientRect()
  const tl = gsap.timeline()
  let mouseX = 0
  let mouseY = 0
  let currentX = mouseX
  let currentY = mouseY
  let targetX = currentX
  let targetY = currentY

  function lerp(start, end, t) {
    return start + (end - start) * t
  }

  function updateBall(event) {
    mouseX = event.clientX
    mouseY = event.clientY + window.scrollY
    targetX = mouseX - ball_rect.width / 2
    targetY = window.scrollY + mouseY - ball_rect.height / 2
    currentX = lerp(currentX, targetX, 0.25)
    currentY = lerp(currentY, targetY, 0.25)
    gsap.to(grad_ball, {
      left: currentX,
      top: currentY,
      // duration: 0.2,
    })
  }

  tl.to(
    grad_ball,
    {
      rotate: 360,
      duration: 18,
      repeat: -1,
      ease: 'linear',
    },
    0
  )
    .to(
      grad_ball,
      {
        scaleX: 1,
        scaleY: 1.15,
        duration: 6,
        repeat: -1,
        repeatDelay: 6,
        ease: 'linear',
      },
      0
    )
    .to(
      grad_ball,
      {
        scaleX: 1,
        scaleY: 1,
        duration: 6,
        repeat: -1,
        repeatDelay: 6,
        ease: 'linear',
      },
      6
    )

  window.addEventListener('mousemove', updateBall)
}
export default ball
