import GlslCanvas from 'glslCanvas'
import { gsap } from 'gsap'

import frag from './beaths_frag_shader'

function breaths() {
  const inhale = document.querySelector('.inhala')
  const exhale = document.querySelector('.exhala')
  const canvas = document.querySelector('#breathing_canvas')
  // const gl = canvas.getContext('webgl')
  // if (!gl) {
  //   console.error('WebGL not supported!')
  // } else {
  //   console.log('WebGL is working!')
  // }
  // if (!canvas) {
  //   console.error('Canvas element not found!')
  //   return
  // }
  const sandbox = new GlslCanvas(canvas)
  console.log(frag)
  const fragment_shader = frag

  sandbox.load(fragment_shader)
  //prettier-ignore
  sandbox.setUniform('displacement', 'https://raw.githubusercontent.com/illysito/lukyanov-illya/4b22fc05cbe3d5b0874616c47908697ecc040ba6/displacement_2.png');

  gsap.from(canvas, {
    scale: 1.05,
    duration: 6,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut',
  })

  gsap.to(inhale, {
    opacity: 0.6,
    scale: 0.75,
    duration: 6,
    repeat: -1,
    yoyo: true,
    ease: 'power2.inOut',
  })
  gsap.from(exhale, {
    opacity: 0.6,
    scale: 0.75,
    duration: 6,
    repeat: -1,
    yoyo: true,
    ease: 'power2.inOut',
  })
}

export default breaths
