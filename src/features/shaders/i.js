const i_frag = `
varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;

    uniform vec3 uRed;
    uniform vec3 uBlue;
    uniform vec3 uYellow;
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
      } else if (vNormal.x > 0.5) {
        // Back face
        baseColor = uRed;
      } else if (vNormal.x < -0.5){
        // Side faces
        baseColor = uYellow;
      } else if (vNormal.y < -0.5){
        baseColor = uRed;
      } else {
        baseColor = uBlue;
      }

      // Grain effect
      vec2 grainUV = vWorldPosition.xy * 50.0; // Increase UV density and animate with time
      float grain = random(grainUV);          // Generate grain noise

      // Blend grain with the base color
      vec3 finalColor = baseColor + vec3(grain * 0.2);

      gl_FragColor = vec4(finalColor, 0.85);
    }
  `

export default i_frag
