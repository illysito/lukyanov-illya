import GlslCanvas from 'glslCanvas'

import frag from './fbm_frag_shader'

function fbm() {
  const canvas = document.querySelector('#main_canvas')
  const gl = canvas.getContext('webgl')
  if (!gl) {
    console.error('WebGL not supported!')
  } else {
    console.log('WebGL is working!')
  }
  if (!canvas) {
    console.error('Canvas element not found!')
    return
  }
  const sandbox = new GlslCanvas(canvas)

  const calcSize = function () {
    // let ww = window.innerWidth
    let wh = window.innerHeight
    let dpi = window.devicePixelRatio

    canvas.width = wh * dpi
    canvas.height = wh * dpi
  }

  calcSize()
  window.addEventListener('resize', function () {
    calcSize()
  })

  const fragment_shader = frag
  sandbox.load(fragment_shader)
  sandbox.setUniform('u_resolution', [canvas.width, canvas.height])
  //prettier-ignore
}

export default fbm
