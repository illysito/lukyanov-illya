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

    const light1 = createLight(-12, 5, 2, 100, 'white')
    const light2 = createLight(12, -5, 2, 100, 'white')
    const light3 = createLight(0, 0, 3, 50, 'white')
    const light_up = createLight(0, 8, 0, 100, 'white')
    const light_down = createLight(0, -8, 0, 100, 'white')
    this.mouse_light = createLight(0, 0, 3.6, 50, 'white')
    const directional_light = createDirLight(0, 0, -40)
    const ambient_light = createAmbLight(4)

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
      light_down,
      this.mouse_light,
      directional_light
    )

    this.initText()

    const resizer = new Resizer(container, camera, renderer)
    console.log(resizer)
  }
  //
  async initText() {
    // Create the text and add it to the scene
    this.i = await createText('I', -window.innerWidth / 140, -1, -2, 0)
    this.l1 = await createText('L', -window.innerWidth / 360, 1, -2, 1)
    this.l2 = await createText('L', window.innerWidth / 720, -1, -1, 2)
    this.y = await createText('Y', window.innerWidth / 180, 0.5, -1, 3)
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

  rotateText(mouseX, mouseY) {
    let rotationDimmerX = 0.0008
    let rotationDimmerY = 0.0005
    this.i.rotation.x += mouseY * rotationDimmerY
    this.i.rotation.y += mouseX * rotationDimmerX
    this.l1.rotation.x += mouseY * rotationDimmerY
    this.l1.rotation.y += mouseX * rotationDimmerX
    this.l2.rotation.x += mouseY * rotationDimmerY
    this.l2.rotation.y += mouseX * rotationDimmerX
    this.y.rotation.x += mouseY * rotationDimmerY
    this.y.rotation.y += mouseX * rotationDimmerX
  }

  scrollText(scrollY) {
    let scrollDimmer = 0.006
    this.i.rotation.x += scrollY * scrollDimmer
    this.l1.rotation.x += scrollY * scrollDimmer * 1.2
    this.l2.rotation.x += scrollY * scrollDimmer * 1.4
    this.y.rotation.x += scrollY * scrollDimmer * 1.6
  }

  updateMouseLight(mouseX, mouseY) {
    let lightX = gsap.utils.mapRange(
      -window.innerWidth / 2,
      window.innerWidth / 2,
      -20,
      20,
      mouseX
    )
    let lightY = gsap.utils.mapRange(
      -window.innerHeight / 2,
      window.innerHeight / 2,
      -16,
      16,
      mouseY
    )
    this.mouse_light.position.x = lightX
    this.mouse_light.position.y = -lightY
    // console.log('mouseX & mouseY: ' + mouseX + ' ' + mouseY)
    // console.log('lightX & lightY: ' + lightX + ' ' + lightY)
  }
}

export { World }
