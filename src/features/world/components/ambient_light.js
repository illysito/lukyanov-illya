import { AmbientLight } from 'three'

function createAmbLight(i) {
  const light = new AmbientLight('#fffbf6', i)

  return light
}

export { createAmbLight }
