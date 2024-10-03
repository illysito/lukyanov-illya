import { BoxGeometry, Mesh, MeshStandardMaterial, MathUtils } from 'three'

function createCube(w, h, d, x, y, z) {
  // create a geometry
  const geometry = new BoxGeometry(w, h, d)
  // create a default (white) Basic material
  const material = new MeshStandardMaterial({ color: 0xffff00 })
  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material)
  // place the cube
  cube.position.set(x, y, z)
  cube.rotation.set(-0.5, 1, 1.5)

  // update the cube
  let radiansPerSecond = MathUtils.degToRad(30)
  let velocity = 1
  cube.tick = (delta) => {
    cube.rotation.x += radiansPerSecond * velocity * delta
    cube.rotation.y += radiansPerSecond * velocity * delta
    cube.rotation.z += radiansPerSecond * velocity * delta
  }

  return cube
}

export { createCube }
