#version 310 es
#define UE_EXT_shader_framebuffer_fetch 1

#define INTERFACE_LOCATION(Pos) layout(location=Pos) 
#define INTERFACE_BLOCK(Pos, Interp, Modifiers, Semantic, PreType, PostType) layout(location=Pos) Modifiers Semantic { PreType PostType; }
#define HLSLCC_DX11ClipSpace 1 


// end extensions
precision mediump float;
precision mediump int;
layout(std140) uniform pb0
{
#define Material_VectorExpressions Material_VectorExpressionspb0
	vec4 Material_VectorExpressions[2];
#define Material_ScalarExpressions Material_ScalarExpressionspb0
	vec4 Material_ScalarExpressions[1];
};


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
INTERFACE_LOCATION(2) in highp vec2 in_TEXCOORD0;
INTERFACE_LOCATION(0) out vec4 out_Target0;
void main()
{
	vec4 v0;
	v0.xyzw = texture(ps0,in_TEXCOORD0);
	vec4 v1;
	v1.xyz = max((v0.xyz*Material_VectorExpressions[1].xyz),vec3(0.000000e+00,0.000000e+00,0.000000e+00));
	v1.w = clamp((v0.w*Material_ScalarExpressions[0].x),0.000000e+00,1.000000e+00);
	out_Target0.xyzw = v1;
}

