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
INTERFACE_LOCATION(0) in highp vec4 in_TEXCOORD0;
INTERFACE_LOCATION(0) out vec4 out_Target0;
void main()
{
	vec4 v0;
	v0.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	highp vec2 v1;
	v1.xy = (in_TEXCOORD0.zw*pu_h[0].ww);
	highp float f2;
	f2 = (1.0/((dot(v1,v1)+1.000000e+00)));
	float h3;
	h3 = (f2*f2);
	v0.w = h3;
	v0.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	out_Target0.xyzw = v0;
}

