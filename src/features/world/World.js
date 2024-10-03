import { gsap } from 'gsap'
import { AxesHelper } from 'three'

import { createAmbLight } from './components/ambient_light.js'
import { createCamera } from './components/camera.js'
import { createCube } from './components/cube.js'
import { createDirLight } from './components/directional_light.js'
import { createLight } from './components/light.js'
import { createScene } from './components/scene.js'
import { createText } from './components/text.js'
import { Loop } from './systems/Loop.js'
import { createRenderer } from './systems/renderer.js'
import { Resizer } from './systems/Resizer.js'

let camera
let renderer
let scene
let loop

class World {
  // 1. Create an instance of the World app
  constructor(container) {
    camera = createCamera()
    scene = createScene()
    renderer = createRenderer()
    loop = new Loop(camera, scene, renderer)
    container.append(renderer.domElement)

    this.cube1 = createCube(2, 2, 2, 0, 0, 0)

    const light1 = createLight(-12, 5, 2, 100)
    const light2 = createLight(12, -5, 2, 100)
    const light3 = createLight(0, 0, 3, 1)
    const light_up = createLight(0, 8, 0, 10)
    const light_down = createLight(0, -8, 0, 10)
    const directional_light = createDirLight(0, 0, -40)
    const ambient_light = createAmbLight(0xff0000, 100)

    const axisHelper = new AxesHelper(16)
    console.log(axisHelper)

    loop.updatables.push(this.cube1)
    console.log(directional_light)

    scene.add(
      ambient_light,
      light1,
      light2,
      light3,
      light_up,
      light_down
      // directional_light
    )

    this.initText()

    const resizer = new Resizer(container, camera, renderer)
    console.log(resizer)
  }
  //
  async initText() {
    // Create the text and add it to the scene
    this.i = await createText('I', -10, 0, -2, 0)
    this.l1 = await createText('L', -4, 0, -2, 1)
    this.l2 = await createText('L', 2, 0, -4, 2)
    this.y = await createText('Y', 8, 0, 0, 3)
    scene.add(this.i, this.l1, this.l2, this.y) // Add the text to the scene
    loop.updatables.push(this.i, this.l1, this.l2, this.y)
  }
  // 2. Render the scene
  render() {
    renderer.render(scene, camera)
  }

  lerp(start, end, t) {
    return start + (end - start) * t
  }

  start() {
    loop.start()
  }

  stop() {
    loop.stop()
  }

  rotateCube(mouseX, mouseY) {
    console.log('mouseX & mouseY: ' + mouseX + ' ' + mouseY)
    let rotationDimmer = 0.0001
    let mappedX = gsap.utils.mapRange(
      0.02 * window.innerWidth,
      0.98 * window.innerWidth,
      -20,
      20,
      mouseX
    )
    let mappedY = gsap.utils.mapRange(0, window.innerHeight, -6, 6, mouseY)
    this.i.rotation.x += mappedY * rotationDimmer
    this.i.rotation.y += mappedX * rotationDimmer
    this.l1.rotation.x += mappedY * rotationDimmer
    this.l1.rotation.y -= mappedX * rotationDimmer
    this.l2.rotation.x += mappedY * rotationDimmer
    this.l2.rotation.y -= mappedX * rotationDimmer
    this.y.rotation.x += mappedY * rotationDimmer
    this.y.rotation.y -= mappedX * rotationDimmer
  }
}

export { World }
