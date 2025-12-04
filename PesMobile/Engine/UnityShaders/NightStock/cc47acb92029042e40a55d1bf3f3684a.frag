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
uniform highp vec4 pu_h[1];
uniform highp sampler2D ps0;
INTERFACE_LOCATION(0) in highp vec2 in_TEXCOORD0;
INTERFACE_LOCATION(0) out highp vec4 out_Target0;
void main()
{
	highp vec4 v0;
	highp vec4 v1;
	highp float f2;
	f2 = 0.000000e+00;
	highp float f3;
	f3 = 0.000000e+00;
	highp float f4;
	f4 = 0.000000e+00;
	highp float f5;
	f5 = 0.000000e+00;
	v1.xyzw = ((((textureLod(ps0,(in_TEXCOORD0+(pu_h[0].xy*vec2(-1.000000e+00,-1.000000e+00))),f2)+textureLod(ps0,(in_TEXCOORD0+(pu_h[0].xy*vec2(1.000000e+00,-1.000000e+00))),f3))+textureLod(ps0,(in_TEXCOORD0+(pu_h[0].xy*vec2(-1.000000e+00,1.000000e+00))),f4))+textureLod(ps0,(in_TEXCOORD0+pu_h[0].xy),f5))*vec4(2.500000e-01,2.500000e-01,2.500000e-01,2.500000e-01));
	v0.xyzw = v1;
	v0.xyz = max(vec3(0.000000e+00,0.000000e+00,0.000000e+00),v1.xyz);
	out_Target0.xyzw = v0;
}

