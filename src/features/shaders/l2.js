const l2_frag = `
varying vec3 vNormal;
    varying vec2 vUv;

    uniform vec3 uRed;
    uniform vec3 uBlue;
    uniform vec3 uYellow;
    uniform vec3 uBlack;
    uniform float uTime;

    // Random noise function
    float random(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
    }

    void main() {
      vec3 baseColor;

      // Determine which side of the geometry to color
      if (vNormal.z > 0.5) {
        // Front face
        baseColor = uBlue;
      } else if (vNormal.z < -0.5){
        baseColor = uBlue;
      } else if (vNormal.x > 0.5) {
        // Back face
        baseColor = uYellow;
      } else if (vNormal.x < -0.5){
        // Side faces
        baseColor = uYellow;
      } else if (vNormal.y > 0.5){
        baseColor = uBlack;
      } else {
        baseColor = uBlack;
      }

      // Grain effect
      vec2 grainUV = vUv * 50.0 + uTime * 0.5; // Increase UV density and animate with time
      float grain = random(grainUV);          // Generate grain noise

      // Blend grain with the base color
      vec3 finalColor = baseColor + vec3(grain * 0.2);

      gl_FragColor = vec4(finalColor, 0.85);
    }
  `

export default l2_frag
