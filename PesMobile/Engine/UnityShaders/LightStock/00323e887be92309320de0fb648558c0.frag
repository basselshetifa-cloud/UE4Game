precision mediump float;
uniform float uFpsData[64];
varying vec2 varTexCoord;
void main() {
	int id = int(varTexCoord.x * (64.0 - 0.001));
	float diff = uFpsData[id];
	if ((1.0-varTexCoord.y) < diff)
		gl_FragColor = vec4(1.0,1.0,0.0,0.7);
	else
		gl_FragColor = vec4(0.0,0.0,0.0,0.3);
}