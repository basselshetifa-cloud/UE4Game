uniform mediump vec4 _ucolor;
void main(){
mediump vec4 _utexColor = _ucolor;
(gl_FragColor = _utexColor);
}
