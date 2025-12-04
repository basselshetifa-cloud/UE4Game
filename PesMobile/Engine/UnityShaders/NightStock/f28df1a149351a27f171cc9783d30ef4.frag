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
uniform vec4 pu_m[2];
uniform highp sampler2D ps0;
INTERFACE_LOCATION(0) in highp vec2 in_TEXCOORD0;
INTERFACE_LOCATION(1) in highp vec4 in_TEXCOORD1;
INTERFACE_LOCATION(0) out highp vec4 out_Target0;
void main()
{
	float h0;
	h0 = pu_m[1].x;
	highp vec4 v1;
	highp vec4 v2;
	v2.xyzw = texture(ps0,in_TEXCOORD0);
	highp vec4 v3;
	v3.xyzw = v2;
	highp vec4 v4;
	v4.xyzw = pu_m[0];
	v3.w = dot(v2,v4);
	highp vec4 v5;
	v5.xyzw = (v3*in_TEXCOORD1);
	v1.xyzw = v5;
	if ((h0!=1.000000e+00))
	{
		highp float f6;
		f6 = h0;
		v1.xyz = pow(clamp(v5.xyz,vec3(0.000000e+00,0.000000e+00,0.000000e+00),vec3(1.000000e+00,1.000000e+00,1.000000e+00)),vec3(f6));
	}
	out_Target0.xyzw = v1;
}

