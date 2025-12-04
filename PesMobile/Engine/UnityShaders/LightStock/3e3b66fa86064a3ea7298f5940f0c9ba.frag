#version 310 es
#define UE_EXT_shader_framebuffer_fetch 1

#define INTERFACE_LOCATION(Pos) layout(location=Pos) 
#define INTERFACE_BLOCK(Pos, Interp, Modifiers, Semantic, PreType, PostType) layout(location=Pos) Modifiers Semantic { PreType PostType; }
#define HLSLCC_DX11ClipSpace 1 


// end extensions
precision mediump float;
precision mediump int;

void compiler_internal_AdjustInputSemantic(inout vec4 TempVariable)
{
#if HLSLCC_DX11ClipSpace
	TempVariable.y = -TempVariable.y;
	TempVariable.z = ( TempVariable.z + TempVariable.w ) / 2.0;
#endif
}

void compiler_internal_AdjustOutputSemantic(inout vec4 Src)
{
#if HLSLCC_DX11ClipSpace
	Src.y = -Src.y;
	Src.z = ( 2.0 * Src.z ) - Src.w;
#endif
}

bool compiler_internal_AdjustIsFrontFacing(bool isFrontFacing)
{
#if HLSLCC_DX11ClipSpace
	return !isFrontFacing;
#else
	return isFrontFacing;
#endif
}
uniform ivec4 pu_i[1];
uniform highp samplerCube ps0;
INTERFACE_LOCATION(0) out highp vec4 out_Target0;
void main()
{
	highp int i0;
	i0 = pu_i[0].x;
	highp float f1;
	f1 = float((i0+-1));
	highp float f2;
	f2 = float((i0+-1));
	highp vec3 v3;
	v3.xyz = textureLod(ps0,vec3(1.000000e+00,0.000000e+00,0.000000e+00),f1).xyz;
	highp vec3 v4;
	v4.xyz = textureLod(ps0,vec3(-1.000000e+00,0.000000e+00,0.000000e+00),f2).xyz;
	highp float f5;
	f5 = float((i0+-1));
	highp vec3 v6;
	v6.xyz = textureLod(ps0,vec3(0.000000e+00,1.000000e+00,0.000000e+00),f5).xyz;
	highp float f7;
	f7 = float((i0+-1));
	highp vec3 v8;
	v8.xyz = textureLod(ps0,vec3(0.000000e+00,-1.000000e+00,0.000000e+00),f7).xyz;
	highp float f9;
	f9 = float((i0+-1));
	highp vec3 v10;
	v10.xyz = textureLod(ps0,vec3(0.000000e+00,0.000000e+00,1.000000e+00),f9).xyz;
	highp float f11;
	f11 = float((i0+-1));
	highp vec3 v12;
	v12.xyz = textureLod(ps0,vec3(0.000000e+00,0.000000e+00,-1.000000e+00),f11).xyz;
	out_Target0.xyzw = vec4(dot(((((((v3+v4)+v6)+v8)+v10)+v12)/vec3(6.000000e+00,6.000000e+00,6.000000e+00)),vec3(3.333000e-01,3.333000e-01,3.333000e-01)));
}

