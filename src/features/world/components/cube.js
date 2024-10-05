import {
  SphereGeometry,
  Mesh,
  MeshStandardMaterial,
  MathUtils,
  // TextureLoader,
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

function createSphere(r, x, y, z) {
  const blue = 0x2323ff
  // const blueBlackGradient = await loadTexture(
  //   'https://raw.githubusercontent.com/illysito/NeueRegrade/refs/heads/main/blueblackgradient.png'
  // )
  // console.log(blueBlackGradient)
  // create a geometry
  const geometry = new SphereGeometry(r, 64, 64)
  // create a default (white) Basic material
  const material = new MeshStandardMaterial({
    color: blue,
    metalness: 1,
    // map: blueBlackGradient,
  })
  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material)
  // place the cube
  cube.position.set(x, y, z)
  cube.rotation.set(-0.5, 1, 1.5)

  // update the cube
  let radiansPerSecond = MathUtils.degToRad(60)
  let velocity = 1
  let amplitude = 0.02
  cube.tick = (delta) => {
    cube.rotation.x += radiansPerSecond * velocity * delta
    cube.position.x += amplitude * Math.sin(cube.rotation.x)
    cube.rotation.y += radiansPerSecond * velocity * delta
    cube.rotation.z += radiansPerSecond * velocity * delta
    cube.position.z += amplitude * Math.sin(cube.rotation.x)
  }

  return cube
}

export { createSphere }
