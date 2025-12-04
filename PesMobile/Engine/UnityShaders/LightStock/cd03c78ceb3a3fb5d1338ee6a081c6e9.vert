attribute vec4 vPosition;
attribute vec4 vTexCoord;
uniform vec4 uScale;
uniform vec4 uTranslate;
varying vec2 varTexCoord;
void main() {
 gl_Position = uScale*vPosition+uTranslate;
 varTexCoord = vec2(vTexCoord.x,vTexCoord.y);
}