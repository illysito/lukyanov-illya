import { gsap } from 'gsap'

function bento_blur() {
  // VARIABLES
  const workHeader = document.querySelector('.bento__work-header')
  const workBento = document.querySelector('.bento__work')
  const workBentoRect = workBento.getBoundingClientRect()
  const workHeaderRect = workHeader.getBoundingClientRect()
  let centerX = workHeaderRect.right - workHeaderRect.width / 2
  let centerY = scrollY + workHeaderRect.bottom - workHeaderRect.height / 2
  const MAX_DISTANCE = workBentoRect.width / 2
  // console.log('center: ' + centerX, centerY)
  // console.log('bento width: ' + workHeaderRect.width)
  // console.log('bento height: ' + workHeaderRect.height)
  // console.log('bento left: ' + workHeaderRect.left)
  // console.log('bento right: ' + workHeaderRect.right)
  // console.log('bento top: ' + workHeaderRect.top)
  // console.log('bento bottom: ' + workHeaderRect.bottom)

  // BLUR FILTER
  function blur(event) {
    let mouseX = event.clientX
    let mouseY = event.clientY + scrollY
    let distanceX = centerX - mouseX
    let distanceY = centerY - mouseY
    let distance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2))
    if (distance > MAX_DISTANCE) {
      distance = MAX_DISTANCE
    }
    // if (distance < 0) {
    //   distance = 0
    // }
    let std = gsap.utils.mapRange(MAX_DISTANCE, 0, 0, 5, distance)
    console.log('distance: ' + distance)
    console.log('std: ' + std)
    gsap.to('.blur', {
      duration: 1,
      ease: 'power4.inOut',
      onUpdate: function () {
        document
          .querySelector('.blur')
          .setAttribute('stdDeviation', `${std} ${std}`)
      },
    })
  }

  workBento.addEventListener('mousemove', blur)
}

export default bento_blur
