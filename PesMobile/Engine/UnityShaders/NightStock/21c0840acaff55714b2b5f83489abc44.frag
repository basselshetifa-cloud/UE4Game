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
uniform vec4 pu_m[1];
uniform highp vec4 pu_h[1];
uniform highp sampler2D ps0;
INTERFACE_LOCATION(0) in highp vec2 in_TEXCOORD0;
INTERFACE_LOCATION(1) in highp vec4 in_TEXCOORD1;
INTERFACE_LOCATION(0) out highp vec4 out_Target0;
void main()
{
	highp vec4 v0;
	v0.xyzw = texture(ps0,in_TEXCOORD0);
	highp vec4 v1;
	v1.xyzw = v0;
	highp vec4 v2;
	v2.xyzw = pu_m[0];
	v1.w = dot(v0,v2);
	out_Target0.xyzw = ((v1*in_TEXCOORD1)+pu_h[0]);
}

