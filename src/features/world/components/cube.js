import {
  TorusGeometry,
  Mesh,
  MeshStandardMaterial,
  MathUtils,
  TextureLoader,
  RepeatWrapping,
} from 'three'

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

async function createSphere(r, x, y, z) {
  // const blue = 0x2323ff
  const texture = await loadTexture(
    'https://raw.githubusercontent.com/illysito/NeueRegrade/refs/heads/main/faroween%20texture.png'
  )
  const red = 0xff2233

  texture.wrapS = RepeatWrapping
  texture.wrapT = RepeatWrapping
  texture.repeat.set(5, 3)
  // create a geometry
  const geometry = new TorusGeometry(r / 1.5, 2.4 / 1.5, 60, 60)
  // create a default (white) Basic material
  const material = new MeshStandardMaterial({
    map: texture,
    color: red,
    metalness: 0.2,
    roughnes: 0,
    // transparent: true,
    opacity: 1,
  })
  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material)
  // place the cube
  cube.position.set(x, y, z)
  // cube.rotation.set(-1.8, -0.1, 2.4)

  // update the cube
  let radiansPerSecond = MathUtils.degToRad(6)
  let velocity = 100
  let counter = 0
  // let amplitude = 1
  cube.tick = (delta) => {
    cube.rotation.x += radiansPerSecond * velocity * delta
    // cube.position.x += amplitude * Math.sin(cube.rotation.x)
    cube.rotation.y += radiansPerSecond * velocity * delta
    cube.rotation.z += radiansPerSecond * velocity * delta
    texture.offset.x += 3 * radiansPerSecond * velocity * delta
    texture.offset.y += 3 * radiansPerSecond * velocity * delta
    counter += 0.01
    cube.scale.x += 0.001 * Math.sin(counter)
    cube.scale.y += 0.001 * Math.sin(counter)
    cube.scale.z += 0.001 * Math.sin(counter)
    // cube.position.z += amplitude * Math.sin(cube.rotation.x)
  }

  return cube
}

export { createSphere }
