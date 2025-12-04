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
uniform highp sampler2D ps0;
INTERFACE_LOCATION(2) in highp vec4 in_TEXCOORD0;
INTERFACE_LOCATION(3) in vec4 in_TEXCOORD7;
INTERFACE_LOCATION(4) in highp vec4 in_TEXCOORD8;
INTERFACE_LOCATION(0) out vec4 out_Target0;
void main()
{
	vec4 v0;
	vec2 v1;
	vec2 v2;
	v2.xy = in_TEXCOORD0.xy;
	v1.xy = v2;
	vec2 v3;
	v3.x = v1.x;
	v3.y = (v1.y*5.000000e-01);
	highp vec2 v4;
	v4.xy = v3;
	v0.xyz = ((max(texture(ps0,v4).xyz,vec3(0.000000e+00,0.000000e+00,0.000000e+00))*in_TEXCOORD7.www)+in_TEXCOORD7.xyz);
	v0.w = 0.000000e+00;
	float h5;
	h5 = min(in_TEXCOORD8.w,6.550000e+04);
	v0.w = h5;
	out_Target0.xyzw = v0;
}

