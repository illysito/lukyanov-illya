import { AmbientLight } from 'three'

function createAmbLight() {
  const light = new AmbientLight('#fffbf6', 8)

  return light
}

export { createAmbLight }
