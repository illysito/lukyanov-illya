import {
  Mesh,
  MeshStandardMaterial,
  // MeshLambertMaterial,
  MeshPhysicalMaterial,
  MathUtils,
  Group,
  Box3,
  Vector3,
  DoubleSide,
  TextureLoader,
  // Color,
} from 'three'
import { FontLoader } from 'three/addons/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'

function loadFont(url) {
  return new Promise((resolve, reject) => {
    const loader = new FontLoader()
    loader.load(
      url,
      (font) => resolve(font), // Resolve with the loaded font
      undefined,
      (error) => reject(error) // Reject on error
    )
  })
}

function loadTexture(url) {
  return new Promise((resolve, reject) => {
    const loader = new TextureLoader()
    loader.load(
      url,
      (texture) => resolve(texture), // Resolve with the loaded font
      undefined,
      (error) => reject(error) // Reject on error
    )
  })
}

async function createText(text, x, y, z, index) {
  // font loading
  // resource URL
  const url =
    'https://raw.githubusercontent.com/illysito/NeueRegrade/refs/heads/main/Neue%20Regrade_Bold.json?token=GHSAT0AAAAAACYIDOOULFZ5F7HA6NN5LTDWZX64AVQ'

  const font = await loadFont(url)
  // onLoad callback
  // do something with the font
  // create a geometry
  const textGeometry = new TextGeometry(text, {
    font: font,
    size: window.innerWidth / 180,
    depth: 1.2, // Extrusion depth
    curveSegments: 30,
    bevelEnabled: true,
    bevelThickness: 0.2, // How deep into the text the bevel goes
    bevelSize: 0.08, // Distance from the text's edge to start beveling
    bevelOffset: 0, // How far the bevel is offset from the text geometry
    bevelSegments: 5, // Number of bevel segments (higher is smoother)
  })

  const red = 0xff2233
  const blue = 0x2323ff
  const yellow = 0xff8500
  const blackie = 0x0e0e0e
  // const white = 0xfffbf6
  let material = []

  const redGradient = await loadTexture(
    'https://raw.githubusercontent.com/illysito/NeueRegrade/110cf58630047f652f70c1af6d7be4fa858b2aa6/red-gradient-grain.png'
  )
  const blueGradient = await loadTexture(
    'https://raw.githubusercontent.com/illysito/NeueRegrade/refs/heads/main/blue-gradient-2.png'
  )
  const paper = await loadTexture(
    'https://raw.githubusercontent.com/illysito/NeueRegrade/d4c8a2dcaba93f628f7d44295ad5921cbaa35a51/6.%20FULL%20VERSION%20ON%20hellomocku.com.png'
  )

  paper.repeat.set(1, 1)
  redGradient.repeat.set(4, 4)
  blueGradient.repeat.set(4, 4)
  // create a default (white) Basic material
  if (index === 0) {
    material = [
      new MeshPhysicalMaterial({
        color: red,
        clearcoat: 1,
        transparent: true,
        opacity: 0.95,
        // metalness: 0.5,
        roughness: 0.5,
      }), // Front
      new MeshPhysicalMaterial({ color: blue }), // Sides
      new MeshPhysicalMaterial({ color: yellow, side: DoubleSide }), // Back
    ]
  } else if (index === 2) {
    material = [
      new MeshStandardMaterial({
        color: blue,
        transparent: true,
        opacity: 0.88,
        roughness: 0.5,
      }), // Front
      new MeshPhysicalMaterial({
        color: yellow,
        transparent: true,
        opacity: 0.95,
      }), // Sides
      new MeshPhysicalMaterial({ color: red, side: DoubleSide }), // Back
    ]
  } else if (index === 1) {
    material = [
      new MeshStandardMaterial({
        color: yellow,
        transparent: true,
        opacity: 0.95,
        roughness: 0.5,
      }), // Front
      new MeshPhysicalMaterial({
        color: blackie,
      }), // Sides
      new MeshPhysicalMaterial({ color: blue, side: DoubleSide }), // Back
    ]
  } else if (index === 3) {
    material = [
      new MeshStandardMaterial({
        color: red,
        roughness: 0.5,
        metalness: 0,
        transparent: true,
        opacity: 0.95,
      }), // Front
      new MeshPhysicalMaterial({ color: blackie }), // Sides
      new MeshPhysicalMaterial({ color: blue, side: DoubleSide }), // Back
    ]
  }

  // create a Mesh containing the geometry and material
  const type = new Mesh(textGeometry, material)
  const group = new Group()
  group.add(type)

  // place the text
  type.position.set(x, y, z)
  if (index === 0) {
    type.rotation.set(0, 0, MathUtils.degToRad(15))
  } else if (index === 1) {
    type.rotation.set(0, 0, MathUtils.degToRad(-15))
  } else if (index === 2) {
    type.rotation.set(0, 0, MathUtils.degToRad(0))
  } else if (index === 3) {
    type.rotation.set(0, 0, MathUtils.degToRad(5))
  }

  const box = new Box3().setFromObject(type)
  const center = box.getCenter(new Vector3())
  type.position.sub(center) // Center the text around the origin
  // Set the position of the group to where you want it
  group.position.set(x + 0.4, y - 2, z)
  group.rotation.z = MathUtils.degToRad(0)

  // update the text
  let radiansPerSecond = MathUtils.degToRad(50)
  let velocity_x = 1
  let velocity_y = 1
  let rotation_y = 0
  let rotation_x = 0
  let amplitude = 0.2
  let phase = 2 * index

  group.tick = (delta) => {
    rotation_x += radiansPerSecond * velocity_x * delta
    rotation_y -= radiansPerSecond * velocity_y * delta
    // if (
    //   rotation_x >= MathUtils.degToRad(30) ||
    //   rotation_x <= MathUtils.degToRad(-30)
    // ) {
    //   velocity_x *= -1
    // }
    // if (
    //   rotation_y >= MathUtils.degToRad(15) ||
    //   rotation_y <= MathUtils.degToRad(-15)
    // ) {
    //   velocity_y *= -1
    // }
    type.rotation.x = amplitude * Math.sin(rotation_x + phase)
    type.rotation.y = amplitude * Math.sin(rotation_y + phase)
    // console.log('rotationX: ' + group.rotation.x)
    // console.log('rotationY: ' + group.rotation.y)
    // group.rotation.z = rotation_y
    // function updateSize() {
    //   console.log('youre rsizing me!')
    //   if (type) {
    //     textGeometry.font = window.innerWidth / 180
    //   }
    // }

    // window.addEventListener('resize', () => {
    //   updateSize()
    // })
  }
  // onProgress callback
  return group
}

export { createText }
