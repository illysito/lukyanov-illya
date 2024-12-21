import GlslCanvas from 'glslCanvas'

import frag from './kal_frag_shader'

function kaleidoscope() {
  const canvas = document.querySelector('#kal_canvas')
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

  const calcSize = function () {
    // let ww = window.innerWidth
    let wh = window.innerHeight
    let dpi = window.devicePixelRatio

    canvas.width = wh * dpi
    canvas.height = wh * dpi
  }

  calcSize()

  const fragment_shader = frag
  sandbox.load(fragment_shader)
  //prettier-ignore
  sandbox.setUniform('displacement', 'https://raw.githubusercontent.com/illysito/lukyanov-illya/c1073a3112aaadb6f12e6647924f72153fbbc83b/piesitos-edit.jpg')
}

export default kaleidoscope
