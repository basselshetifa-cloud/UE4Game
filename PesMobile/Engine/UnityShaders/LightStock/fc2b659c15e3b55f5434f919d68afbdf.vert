#version 310 es

#define INTERFACE_LOCATION(Pos) layout(location=Pos) 
#define INTERFACE_BLOCK(Pos, Interp, Modifiers, Semantic, PreType, PostType) layout(location=Pos) Modifiers Semantic { PreType PostType; }
#define HLSLCC_DX11ClipSpace 1 


// end extensions

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
uniform highp vec4 vu_h[5];
INTERFACE_LOCATION(0) in highp vec4 in_ATTRIBUTE0;
INTERFACE_LOCATION(1) in highp vec2 in_ATTRIBUTE1;
INTERFACE_LOCATION(2) in highp vec4 in_ATTRIBUTE2;
INTERFACE_LOCATION(3) in highp vec4 in_ATTRIBUTE3;
INTERFACE_LOCATION(0) out highp vec2 var_TEXCOORD0;
INTERFACE_LOCATION(1) out highp vec4 var_TEXCOORD1;
INTERFACE_LOCATION(2) out highp vec4 var_TEXCOORD2;
void main()
{
	highp vec4 v0;
	highp vec4 v1;
	highp vec4 v2;
	v2.xyzw = ((vu_h[3]*in_ATTRIBUTE0.wwww)+((vu_h[2]*in_ATTRIBUTE0.zzzz)+((vu_h[1]*in_ATTRIBUTE0.yyyy)+(vu_h[0]*in_ATTRIBUTE0.xxxx))));
	v1.xyzw = v2;
	v1.y = (v2.y*vu_h[4].x);
	v0.xyzw = v1;
	var_TEXCOORD0.xy = in_ATTRIBUTE1;
	var_TEXCOORD1.xyzw = in_ATTRIBUTE2;
	var_TEXCOORD2.xyzw = in_ATTRIBUTE3;
	compiler_internal_AdjustOutputSemantic(v0);
	gl_Position.xyzw = v0;
}

