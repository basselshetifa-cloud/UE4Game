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
uniform uvec4 pu_u[1];
uniform highp samplerCube ps0;
INTERFACE_LOCATION(0) out highp vec4 out_Target0;
void main()
{
	highp uint u0;
	u0 = pu_u[0].x;
	highp vec4 v1;
	highp float f2;
	f2 = float(u0);
	highp float f3;
	f3 = float(u0);
	highp float f4;
	f4 = float(u0);
	highp float f5;
	f5 = float(u0);
	highp float f6;
	f6 = float(u0);
	highp float f7;
	f7 = float(u0);
	v1.xyzw = (((((textureLod(ps0,vec3(1.000000e+00,0.000000e+00,0.000000e+00),f2)+textureLod(ps0,vec3(-1.000000e+00,0.000000e+00,0.000000e+00),f3))+textureLod(ps0,vec3(0.000000e+00,1.000000e+00,0.000000e+00),f4))+textureLod(ps0,vec3(0.000000e+00,-1.000000e+00,0.000000e+00),f5))+textureLod(ps0,vec3(0.000000e+00,0.000000e+00,1.000000e+00),f6))+textureLod(ps0,vec3(0.000000e+00,0.000000e+00,-1.000000e+00),f7));
	highp vec4 v8;
	v8.w = 0.000000e+00;
	highp float f9;
	f9 = 1.256637e+01;
	v8.xyz = ((vec3(f9)*v1.xyz)/vec3(max(v1.w,1.000000e-05)));
	out_Target0.xyzw = v8;
}

