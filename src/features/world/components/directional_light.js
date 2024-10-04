import { DirectionalLight } from 'three'

function createDirLight(x, y, z, color) {
  const light = new DirectionalLight(color, 8)
  light.position.set(x, y, z)

  light.tick = (delta) => {
    console.log('light tick & delta = ' + delta)
  }

  return light
}

export { createDirLight }
