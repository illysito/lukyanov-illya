import { Color, Scene } from 'three'

function createScene() {
  const scene = new Scene()

  scene.background = new Color('#000000')
  scene.background = null

  return scene
}

export { createScene }
