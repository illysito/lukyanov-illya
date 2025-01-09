import GlslCanvas from 'glslCanvas'

import frag from './fbm_frag_shader'

function fbm(darkModeShader) {
  if (!document.querySelector('#main_canvas')) {
    return
  }
  if (darkModeShader) {
    console.log(darkModeShader)
  }
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
  if (darkModeShader) {
    sandbox.setUniform('darkMode', darkModeShader.current)
  }
  // andbox.setUniform('u_resolution', [canvas.width, canvas.height])
  //prettier-ignore
  function updateUniforms() {
    if (darkModeShader) {
      console.log('updating darkMode Uniform:', darkModeShader.current)
      sandbox.setUniform('darkMode', darkModeShader.current)
    }
  }

  return updateUniforms
}

export default fbm
