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
uniform highp vec4 vu_h[6];
INTERFACE_LOCATION(0) in highp vec4 in_ATTRIBUTE0;
INTERFACE_LOCATION(1) in highp vec2 in_ATTRIBUTE1;
INTERFACE_LOCATION(0) out highp vec4 var_TEXCOORD0;
INTERFACE_LOCATION(1) out highp vec4 var_TEXCOORD1;
INTERFACE_LOCATION(2) out highp vec4 var_TEXCOORD2;
INTERFACE_LOCATION(3) out highp vec2 var_TEXCOORD3;
INTERFACE_LOCATION(4) out highp vec2 var_TEXCOORD4;
INTERFACE_LOCATION(5) out highp vec2 var_TEXCOORD5;
INTERFACE_LOCATION(6) out highp vec2 var_TEXCOORD6;
INTERFACE_LOCATION(7) out highp vec2 var_TEXCOORD7;
INTERFACE_LOCATION(8) out highp vec4 var_FRINGE_COORDS;
void main()
{
	highp float f0;
	f0 = vu_h[5].x;
	highp vec4 v1;
	highp vec2 v2;
	v2.xy = in_ATTRIBUTE1;
	highp vec4 v3;
	highp vec4 v4;
	highp vec4 v5;
	highp vec2 v6;
	highp vec2 v7;
	highp vec2 v8;
	highp vec2 v9;
	highp vec4 v10;
	v2.y = (1.000000e+00+(-in_ATTRIBUTE1.y));
	highp vec4 v11;
	v11.xyzw = in_ATTRIBUTE0;
	v11.xy = (vec2(-1.000000e+00,-1.000000e+00)+((vec2(2.000000e+00,2.000000e+00)*(DrawRectangleParameters_PosScaleBias.zw+(in_ATTRIBUTE0.xy*DrawRectangleParameters_PosScaleBias.xy)))*DrawRectangleParameters_InvTargetSizeAndTextureSize.xy));
	v11.xy = (v11.xy*vec2(1.000000e+00,-1.000000e+00));
	v3.xy = ((DrawRectangleParameters_UVScaleBias.zw+(v2*DrawRectangleParameters_UVScaleBias.xy))*DrawRectangleParameters_InvTargetSizeAndTextureSize.zw);
	highp vec4 v12;
	v12.xy = v3.xy;
	v12.zw = v11.xy;
	v4.xy = (v3.xy+(vu_h[0].zw*vec2(-5.000000e-01,5.000000e-01)));
	v5.xy = ((v11.xy*vec2(5.000000e-01,-5.000000e-01))+vec2(5.000000e-01,5.000000e-01));
	v5.y = (1.000000e+00+(-v5.y));
	v5.zw = (v5.xy+(vu_h[1].zw*vec2(2.500000e-01,-5.000000e-01)));
	v4.zw = (v5.xy+vu_h[3].xy);
	v6.xy = (v3.xy+(vu_h[0].zw*vec2(0.000000e+00,-1.000000e+00)));
	v7.xy = (v3.xy+(vu_h[0].zw*vec2(1.000000e+00,0.000000e+00)));
	v8.xy = (v3.xy+(vu_h[0].zw*vec2(-1.000000e+00,0.000000e+00)));
	v9.xy = (v3.xy+(vu_h[0].zw*vec2(0.000000e+00,1.000000e+00)));
	highp vec2 v13;
	highp vec2 v14;
	v14.x = 1.000000e+00;
	v14.y = (vu_h[2].y*vu_h[2].z);
	v13.xy = ((in_ATTRIBUTE0.xy*v14)*vec2((1.414214e+00/sqrt((1.000000e+00+((vu_h[2].y*vu_h[2].z)*(vu_h[2].y*vu_h[2].z)))))));
	if ((f0>0.000000e+00))
	{
		highp vec2 v15;
		highp vec2 v16;
		v16.xy = v12.xy;
		v16.y = (1.000000e+00+(-v12.y));
		v15.xy = (((v16*vu_h[0].xy)+(-vu_h[4].zw))/vu_h[4].xy);
		highp vec2 v17;
		highp vec2 v18;
		highp float f19;
		f19 = 5.935999e-01;
		v18.xy = ((((v15*vec2((1.0/((1.000000e+00+(f0*f19))))))*vu_h[4].xy)+vu_h[4].zw)*vu_h[0].zw);
		v17.xy = v18;
		v17.y = (1.000000e+00+(-v18.y));
		v10.xy = v17;
		highp vec2 v20;
		highp vec2 v21;
		highp float f22;
		f22 = 1.029000e+00;
		v21.xy = ((((v15*vec2((1.0/((1.000000e+00+(f0*f22))))))*vu_h[4].xy)+vu_h[4].zw)*vu_h[0].zw);
		v20.xy = v21;
		v20.y = (1.000000e+00+(-v21.y));
		v10.zw = v20;
	}
	else
	{
		v10.xyzw = vec4(0.000000e+00,0.000000e+00,0.000000e+00,0.000000e+00);
	}
	v1.xyzw = v11;
	var_TEXCOORD0.xyzw = v12;
	var_TEXCOORD1.xyzw = v4;
	var_TEXCOORD2.xyzw = v5;
	var_TEXCOORD3.xy = v13;
	var_TEXCOORD4.xy = v6;
	var_TEXCOORD5.xy = v7;
	var_TEXCOORD6.xy = v8;
	var_TEXCOORD7.xy = v9;
	var_FRINGE_COORDS.xyzw = v10;
	compiler_internal_AdjustOutputSemantic(v1);
	gl_Position.xyzw = v1;
}

