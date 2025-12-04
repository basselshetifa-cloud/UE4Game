#version 310 es

#define INTERFACE_LOCATION(Pos) layout(location=Pos) 
#define INTERFACE_BLOCK(Pos, Interp, Modifiers, Semantic, PreType, PostType) layout(location=Pos) Modifiers Semantic { PreType PostType; }
#define HLSLCC_DX11ClipSpace 1 


// end extensions
layout(std140) uniform vb0
{
#define DrawRectangleParameters_PosScaleBias DrawRectangleParameters_PosScaleBiasvb0
	highp vec4 DrawRectangleParameters_PosScaleBias;
#define DrawRectangleParameters_UVScaleBias DrawRectangleParameters_UVScaleBiasvb0
	highp vec4 DrawRectangleParameters_UVScaleBias;
#define DrawRectangleParameters_InvTargetSizeAndTextureSize DrawRectangleParameters_InvTargetSizeAndTextureSizevb0
	highp vec4 DrawRectangleParameters_InvTargetSizeAndTextureSize;
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
INTERFACE_LOCATION(0) in highp vec4 in_ATTRIBUTE0;
INTERFACE_LOCATION(1) in highp vec2 in_ATTRIBUTE1;
INTERFACE_LOCATION(0) out highp vec4 var_TEXCOORD0;
void main()
{
	highp vec4 v0;
	highp vec4 v1;
	highp vec4 v2;
	v2.xyzw = in_ATTRIBUTE0;
	v2.xy = (vec2(-1.000000e+00,-1.000000e+00)+((vec2(2.000000e+00,2.000000e+00)*(DrawRectangleParameters_PosScaleBias.zw+(in_ATTRIBUTE0.xy*DrawRectangleParameters_PosScaleBias.xy)))*DrawRectangleParameters_InvTargetSizeAndTextureSize.xy));
	v2.xy = (v2.xy*vec2(1.000000e+00,-1.000000e+00));
	v1.xy = ((DrawRectangleParameters_UVScaleBias.zw+(in_ATTRIBUTE1*DrawRectangleParameters_UVScaleBias.xy))*DrawRectangleParameters_InvTargetSizeAndTextureSize.zw);
	v1.zw = v2.xy;
	v0.xyzw = v2;
	var_TEXCOORD0.xyzw = v1;
	compiler_internal_AdjustOutputSemantic(v0);
	gl_Position.xyzw = v0;
}

