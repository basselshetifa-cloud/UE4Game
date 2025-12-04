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
uniform highp vec4 vu_h[3];
INTERFACE_LOCATION(0) in highp vec4 in_ATTRIBUTE0;
INTERFACE_LOCATION(1) in highp vec2 in_ATTRIBUTE1;
INTERFACE_LOCATION(0) out highp vec4 var_TEXCOORD0;
INTERFACE_LOCATION(1) out highp vec4 var_TEXCOORD1;
INTERFACE_LOCATION(2) out highp vec4 var_TEXCOORD2;
INTERFACE_LOCATION(3) out highp vec4 var_TEXCOORD3;
INTERFACE_LOCATION(4) out highp vec4 var_TEXCOORD4;
INTERFACE_LOCATION(5) out highp vec4 var_TEXCOORD5;
INTERFACE_LOCATION(6) out highp vec4 var_TEXCOORD6;
INTERFACE_LOCATION(7) out highp vec4 var_TEXCOORD7;
void main()
{
	highp vec4 v0;
	highp vec4 v1;
	highp vec4 v2;
	highp vec4 v3;
	highp vec4 v4;
	highp vec4 v5;
	highp vec4 v6;
	highp vec4 v7;
	highp vec4 v8;
	highp vec4 v9;
	highp vec2 v10;
	v9.xyzw = in_ATTRIBUTE0;
	v9.xy = (vec2(-1.000000e+00,-1.000000e+00)+((vec2(2.000000e+00,2.000000e+00)*(DrawRectangleParameters_PosScaleBias.zw+(in_ATTRIBUTE0.xy*DrawRectangleParameters_PosScaleBias.xy)))*DrawRectangleParameters_InvTargetSizeAndTextureSize.xy));
	v9.xy = (v9.xy*vec2(1.000000e+00,-1.000000e+00));
	v10.xy = ((DrawRectangleParameters_UVScaleBias.zw+(in_ATTRIBUTE1*DrawRectangleParameters_UVScaleBias.xy))*DrawRectangleParameters_InvTargetSizeAndTextureSize.zw);
	v1.xy = v10;
	highp vec2 v11;
	v11.x = 1.000000e+00;
	v11.y = (vu_h[1].y*vu_h[1].z);
	v1.zw = ((v9.xy*v11)*vec2((1.414214e+00/sqrt((1.000000e+00+((vu_h[1].y*vu_h[1].z)*(vu_h[1].y*vu_h[1].z)))))));
	v2.xy = (v10+(vec2(1.128666e-01,3.100986e-01)*vu_h[0].zw));
	v3.xy = (v10+(vec2(3.249866e-01,5.730399e-02)*vu_h[0].zw));
	v4.xy = (v10+(vec2(2.121200e-01,-2.527946e-01)*vu_h[0].zw));
	v5.xy = (v10+(vec2(-1.128664e-01,-3.100986e-01)*vu_h[0].zw));
	v6.xy = (v10+(vec2(-3.249865e-01,-5.730420e-02)*vu_h[0].zw));
	v7.xy = (v10+(vec2(-2.121202e-01,2.527944e-01)*vu_h[0].zw));
	v2.zw = ((mix(vu_h[2].xy,v9.xy,vec2(7.578125e-01,7.578125e-01))*vec2(5.000000e-01,-5.000000e-01))+vec2(5.000000e-01,5.000000e-01));
	v3.zw = ((mix(vu_h[2].xy,v9.xy,vec2(7.890625e-01,7.890625e-01))*vec2(5.000000e-01,-5.000000e-01))+vec2(5.000000e-01,5.000000e-01));
	v4.zw = ((mix(vu_h[2].xy,v9.xy,vec2(8.203125e-01,8.203125e-01))*vec2(5.000000e-01,-5.000000e-01))+vec2(5.000000e-01,5.000000e-01));
	v5.zw = ((mix(vu_h[2].xy,v9.xy,vec2(8.515625e-01,8.515625e-01))*vec2(5.000000e-01,-5.000000e-01))+vec2(5.000000e-01,5.000000e-01));
	v6.zw = ((mix(vu_h[2].xy,v9.xy,vec2(8.828125e-01,8.828125e-01))*vec2(5.000000e-01,-5.000000e-01))+vec2(5.000000e-01,5.000000e-01));
	v7.zw = ((mix(vu_h[2].xy,v9.xy,vec2(9.140625e-01,9.140625e-01))*vec2(5.000000e-01,-5.000000e-01))+vec2(5.000000e-01,5.000000e-01));
	v8.xy = ((mix(vu_h[2].xy,v9.xy,vec2(9.453125e-01,9.453125e-01))*vec2(5.000000e-01,-5.000000e-01))+vec2(5.000000e-01,5.000000e-01));
	v8.zw = vec2(0.000000e+00,0.000000e+00);
	v0.xyzw = v9;
	var_TEXCOORD0.xyzw = v1;
	var_TEXCOORD1.xyzw = v2;
	var_TEXCOORD2.xyzw = v3;
	var_TEXCOORD3.xyzw = v4;
	var_TEXCOORD4.xyzw = v5;
	var_TEXCOORD5.xyzw = v6;
	var_TEXCOORD6.xyzw = v7;
	var_TEXCOORD7.xyzw = v8;
	compiler_internal_AdjustOutputSemantic(v0);
	gl_Position.xyzw = v0;
}

