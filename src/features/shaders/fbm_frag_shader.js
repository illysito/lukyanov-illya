const frag = `
#ifdef GL_ES
precision highp float;
#endif

#define GRAIN_MULT 0.35

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

varying vec2 v_texcoord;

#define NUM_OCTAVES 5

float rand(vec2 n) { 
    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float noise(vec2 p){
    vec2 ip = floor(p);
    vec2 u = fract(p);
    u = u*u*(3.0-2.0*u);
    
    float res = mix(
        mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
        mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
    return res*res;
}

float fbm(vec2 x) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100);
    // Rotate to reduce axial bias
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
    for (int i = 0; i < NUM_OCTAVES; ++i) {
        v += a * noise(x);
        x = rot * x * 2.0 + shift;
        a *= 0.5;
    }
    return v;
}

mat2 rotation2d(float angle){
    float s = sin(angle);
    float c = cos(angle);
    
    return mat2(
        c, -s,
        s, c
        );
}

void main(void)
{

    vec2 uv = v_texcoord;
    // Compensate for the aspect ratio
    uv.x *= u_resolution.x / u_resolution.y;
    // gl_FragCoord.xy / u_resolution;
    // uv = uv * 2.0 - 1.0;

    vec2 mouse = u_mouse / u_resolution;
    float dist = distance(mouse, uv);
    float strength = smoothstep(1.0, 0.0, dist);
    
    vec4 blue = vec4(1.0,0.9,0.85,1.0);
    vec4 violet = vec4(1.0,0.98,0.96,1.0);
    
    // inicializazo mixFactor
    float mixFactor = 0.0;
    
    // movement & rotation for FBM
    vec2 move = vec2(0.001 * u_time, 0.005 * u_time);
    move *= rotation2d(0.00001 * u_time);
    
    // mixFactor + FBM
    mixFactor = fbm(uv + move);
    mixFactor *= 24.0;
    mixFactor += mix(-0.01, 0.015, rand(uv));
    mixFactor += 0.1 * u_time;
    mixFactor = fract(mixFactor);
    
    mixFactor = smoothstep(0.0, 0.1, mixFactor) - smoothstep(0.1, 0.2, mixFactor);
    // mixFactor *= 10.0;
    
    // normalización
    // mixFactor = smoothstep(0.0, 1.0, mixFactor);
    
    // mixFactor + GRAIN
    // mixFactor += strength * GRAIN_MULT * rand(uv);
    // mixFactor = smoothstep(0.0, 1.0 + GRAIN_MULT, mixFactor);
    
    mixFactor = 1.0 * fract(mixFactor);

    // Fade edges by blending UV distance to center or edges
    float edgeFade = smoothstep(0.0, 0.1, uv.x) * smoothstep(0.0, 0.1, uv.y) *
                    smoothstep(0.0, 0.1, 1.0 - uv.x) * smoothstep(0.0, 0.1, 1.0 - uv.y);

    // Apply edge fade to mixFactor
    mixFactor *= edgeFade;
    
    vec4 color = mix(violet, blue, mixFactor);
    
    gl_FragColor = color;

}
`
export default frag
