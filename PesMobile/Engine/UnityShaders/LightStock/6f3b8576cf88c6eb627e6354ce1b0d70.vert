attribute highp float _ua_index;
attribute highp vec4 _ua_position;
uniform highp vec2 _uquad[4];
uniform highp mat4 _umatrix;
uniform highp vec2 _udummy_uniform;
varying highp vec2 _udummy_varying;
void main(){
highp int _uvertex_index = int(_ua_index);
highp vec4 _upos = vec4(_uquad[int(clamp(float(_uvertex_index), 0.0, float(3)))], _ua_position.z, _ua_position.w);
(gl_Position = (_umatrix * _upos));
(_udummy_varying = _udummy_uniform);
}
