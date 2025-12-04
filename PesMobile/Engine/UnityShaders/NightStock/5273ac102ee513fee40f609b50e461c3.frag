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
uniform highp vec4 pu_h[4];
uniform highp sampler2D ps0;
INTERFACE_LOCATION(1) in highp vec2 in_TEXCOORD1;
INTERFACE_LOCATION(2) in highp vec2 in_TEXCOORD2;
INTERFACE_LOCATION(3) in highp vec2 in_TEXCOORD3;
INTERFACE_LOCATION(4) in highp vec2 in_TEXCOORD4;
INTERFACE_LOCATION(0) out vec4 out_Target0;
void main()
{
	highp float f0;
	f0 = 0.000000e+00;
	highp float f1;
	f1 = 0.000000e+00;
	vec4 v2;
	v2.xyzw = (textureLod(ps0,in_TEXCOORD1,f0)*pu_h[0]);
	vec4 v3;
	v3.xyzw = (textureLod(ps0,in_TEXCOORD2,f1)*pu_h[1]);
	highp float f4;
	f4 = 0.000000e+00;
	vec4 v5;
	v5.xyzw = (textureLod(ps0,in_TEXCOORD3,f4)*pu_h[2]);
	highp float f6;
	f6 = 0.000000e+00;
	vec4 v7;
	v7.xyzw = (textureLod(ps0,in_TEXCOORD4,f6)*pu_h[3]);
	out_Target0.xyzw = (((v2+v3)+v5)+v7);
}

