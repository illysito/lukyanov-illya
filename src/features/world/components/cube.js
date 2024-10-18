import {
  TorusGeometry,
  Mesh,
  MeshStandardMaterial,
  MathUtils,
  // TextureLoader,
  // RepeatWrapping,
} from 'three'

// function loadTexture(url) {
//   return new Promise((resolve, reject) => {
//     const loader = new TextureLoader()
//     loader.load(
//       url,
//       (texture) => resolve(texture), // Resolve with the loaded font
//       undefined,
//       (error) => reject(error) // Reject on error
//     )
//   })
// }

async function createSphere(r, x, y, z, r1, r2, r3, color) {
  // const blue = 0x2323ff
  // const texture = await loadTexture(
  //   'https://raw.githubusercontent.com/illysito/NeueRegrade/refs/heads/main/faroween%20texture.png'
  // )
  // // const red = 0xff2233

  // texture.wrapS = RepeatWrapping
  // texture.wrapT = RepeatWrapping
  // texture.repeat.set(5, 3)
  // create a geometry
  const geometry = new TorusGeometry(r / 3.4, 2.4 / 3.4, 60, 60)
  // create a default (white) Basic material
  const material = new MeshStandardMaterial({
    // map: texture,
    color: color,
    metalness: 0.2,
    roughness: 0,
    // transparent: true,
    opacity: 1,
  })
  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material)
  // place the cube
  cube.position.set(x, y, z)
  cube.rotation.set(r1, r2, r3)

  // update the cube
  let radiansPerSecond = MathUtils.degToRad(6)
  let velocity = 60
  let counter = 0
  // let amplitude = 1
  cube.tick = (delta) => {
    cube.rotation.x += radiansPerSecond * velocity * delta
    // cube.position.x += amplitude * Math.sin(cube.rotation.x)
    cube.rotation.y += radiansPerSecond * velocity * delta
    cube.rotation.z += radiansPerSecond * velocity * delta
    // texture.offset.x += 3 * radiansPerSecond * velocity * delta
    // texture.offset.y += 3 * radiansPerSecond * velocity * delta
    counter += 0.01
    cube.scale.x += 0.001 * Math.sin(counter)
    cube.scale.y += 0.001 * Math.sin(counter)
    cube.scale.z += 0.001 * Math.sin(counter)
    // cube.position.z += amplitude * Math.sin(cube.rotation.x)
  }

  return cube
}

export { createSphere }
