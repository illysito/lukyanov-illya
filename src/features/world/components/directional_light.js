import { DirectionalLight } from 'three'

function createDirLight(x, y, z) {
  const light = new DirectionalLight('#fffbf6', 8)
  light.position.set(x, y, z)

  light.tick = (delta) => {
    console.log('light tick & delta = ' + delta)
  }

  return light
}

export { createDirLight }
