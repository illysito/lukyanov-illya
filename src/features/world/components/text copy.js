import {
  Mesh,
  // MeshStandardMaterial,
  // MeshLambertMaterial,
  // MeshPhysicalMaterial,
  ShaderMaterial,
  MathUtils,
  Group,
  Box3,
  Vector3,
  DoubleSide,
  // TextureLoader,
  Color,
} from 'three'
import { FontLoader } from 'three/addons/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'

import i_frag from '../../shaders/i'
import l_frag from '../../shaders/l'
import l2_frag from '../../shaders/l2'
import y_frag from '../../shaders/y'

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

async function createText(text, x, y, z, size, depth, index) {
  // font loading
  // resource URL
  const url =
    'https://raw.githubusercontent.com/illysito/NeueRegrade/d5a1e43aab6950247fdceecc09c74ff8e0172b80/Neue%20Regrade_Bold.json'

  const font = await loadFont(url)
  // onLoad callback
  // do something with the font
  // create a geometry
  const textGeometry = new TextGeometry(text, {
    font: font,
    size: window.innerWidth / size,
    depth: depth, // Extrusion depth
    curveSegments: 30,
    bevelEnabled: true,
    bevelThickness: 0.2, // How deep into the text the bevel goes
    bevelSize: 0.08, // Distance from the text's edge to start beveling
    bevelOffset: 0, // How far the bevel is offset from the text geometry
    bevelSegments: 5, // Number of bevel segments (higher is smoother)
  })

  let grainMaterial
  // console.log('index:' + index)
  if (index === 0) {
    grainMaterial = new ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uRed: { value: new Color(0xff2233) }, // Front face color
        uBlue: { value: new Color(0x2323ff) }, // Back face color
        uYellow: { value: new Color(0xffb43b) }, // Text base color
      },
      vertexShader: `
      varying vec3 vNormal;
      varying vec2 vUv;
      varying vec3 vWorldPosition;
  
      void main() {
        vNormal = normalize(normal); // Pass the normal to the fragment shader
        vUv = uv; // Pass UV coordinates for grain effect
        vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz; // Transform position to world space
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
      fragmentShader: i_frag,
      side: DoubleSide,
    })
  } else if (index === 1) {
    grainMaterial = new ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uRed: { value: new Color(0xff2233) }, // Front face color
        uBlue: { value: new Color(0x2323ff) }, // Back face color
        uYellow: { value: new Color(0xffb43b) }, // Text base color
        uBlack: { value: new Color(0x020202) },
      },
      vertexShader: `
      varying vec3 vNormal;
      varying vec2 vUv;
  
      void main() {
        vNormal = normalize(normal); // Pass the normal to the fragment shader
        vUv = uv; // Pass UV coordinates for grain effect
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
      fragmentShader: l_frag,
      side: DoubleSide,
    })
  } else if (index === 2) {
    grainMaterial = new ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uRed: { value: new Color(0xff2233) }, // Front face color
        uBlue: { value: new Color(0x2323ff) }, // Back face color
        uYellow: { value: new Color(0xffb43b) }, // Text base color
      },
      vertexShader: `
      varying vec3 vNormal;
      varying vec2 vUv;
  
      void main() {
        vNormal = normalize(normal); // Pass the normal to the fragment shader
        vUv = uv; // Pass UV coordinates for grain effect
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
      fragmentShader: l2_frag,
      side: DoubleSide,
    })
  } else if (index === 3) {
    grainMaterial = new ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uRed: { value: new Color(0xff2233) }, // Front face color
        uBlue: { value: new Color(0x2323ff) }, // Back face color
        uYellow: { value: new Color(0xffb43b) }, // Text base color
      },
      vertexShader: `
      varying vec3 vNormal;
      varying vec2 vUv;
  
      void main() {
        vNormal = normalize(normal); // Pass the normal to the fragment shader
        vUv = uv; // Pass UV coordinates for grain effect
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
      fragmentShader: y_frag,
      side: DoubleSide,
    })
  }

  // create a Mesh containing the geometry and material
  const type = new Mesh(textGeometry, grainMaterial)
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
