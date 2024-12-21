const frag = `
#ifdef GL_ES
precision highp float;
#endif

#define SEGMENTS 36.0
#define PI 3.14159265359

uniform float u_time;
uniform float u_resolution;
uniform float u_mouse;

uniform sampler2D image;

varying vec3 v_normal;
varying vec2 v_texcoord;

void main(void)
{
    // multiplica el rango x2 y se mueve uno hacia atrás,
    // haciendo que sea de -1 a 1 y con el (0,0) en el centro
    vec2 uv = v_texcoord;
    uv *= 2.0;
    uv -= 1.0;
    
    // obtengo radio y angulo para ponerlo todo en polares
    float r = length(uv);
    float angle = atan(uv.y, uv.x);
    
    angle /= PI*2.0;
    angle *= SEGMENTS;
    
    if(mod(angle, 6.0) >= 1.0){
        angle = fract(angle);
    }else{
        angle= 1.0-fract(angle);
    }
    
    angle += 0.05*u_time;
    
    angle /= SEGMENTS;
    angle *= PI*2.0;
    
    // es lo mismo que x e y 
    vec2 point = vec2(r * cos(angle - 0.125*u_time), r * sin(angle + 0.075*u_time));
    point = fract(point);
    
    vec4 color = texture2D(image, point);
    
    gl_FragColor = color;

}
`
export default frag
