const frag = `
// No version directive for WebGL 1.0
precision mediump float;  // Specify float precision for WebGL 1.0

uniform float u_time;
uniform sampler2D displacement;

varying vec2 v_texcoord;  // Use 'varying' for passing data from the vertex shader to fragment shader

vec4 rgb(float r, float g, float b) {
    return vec4(r / 255.0, g / 255.0, b / 255.0, 1.0);
}

void main(void) {
    // Update texture coordinate calculation for WebGL 1.0

    vec2 uv = v_texcoord;
    
    vec2 point = fract(uv * 0.05 + 0.025 * u_time);
    
    // Use 'texture2D' instead of 'texture' for sampling in WebGL 1.0
    vec4 dispColor = texture2D(displacement, point);

    float dispX = mix(-0.5, 0.5, dispColor.r);
    float dispY = mix(-0.5, 0.5, dispColor.b);

    // Define colors as RGB
    vec4 blue = rgb(35.0, 35.0, 255.0);
    vec4 red = rgb(255.0, 34.0, 51.0);
    vec4 yellow = rgb(255.0, 133.0, 0.0);
    vec4 beige = rgb(255.0, 251.0, 246.0);
    
    // Create gradients based on texture displacement
    vec4 gradient1 = mix(blue, red, uv.x + dispX);
    vec4 gradient2 = mix(yellow, beige, uv.x + dispX);
    
    vec4 gradientMix = mix(gradient1, gradient2, uv.y + dispY);
   
    gl_FragColor = gradientMix;  // Set the final color of the fragment
}

`
export default frag
