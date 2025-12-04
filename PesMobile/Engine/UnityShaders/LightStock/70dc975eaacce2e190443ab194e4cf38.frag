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
uniform vec4 pu_m[5];
uniform highp vec4 pu_h[4];
uniform highp sampler2D ps0;
uniform highp sampler2D ps1;
INTERFACE_LOCATION(0) in highp vec4 in_TEXCOORD0;
INTERFACE_LOCATION(2) in highp vec4 in_TEXCOORD2;
INTERFACE_LOCATION(8) in highp vec4 in_FRINGE_COORDS;
INTERFACE_LOCATION(0) out vec4 out_Target0;
void main()
{
	highp float f0;
	f0 = pu_h[3].x;
	highp float f1;
	f1 = pu_h[1].x;
	highp float f2;
	f2 = pu_h[0].x;
	vec3 v3;
	vec4 v4;
	highp vec2 v5;
	v5.xy = in_TEXCOORD0.xy;
	if ((f1>0.000000e+00))
	{
		v4.x = texture(ps1,in_FRINGE_COORDS.zw).x;
		v4.y = texture(ps1,in_FRINGE_COORDS.xy).y;
		v4.z = texture(ps1,v5).z;
		v4.w = 1.000000e+00;
	}
	else
	{
		v4.xyzw = texture(ps1,v5);
	}
	v4.w = 0.000000e+00;
	vec4 v6;
	v6.xyzw = texture(ps0,in_TEXCOORD2.xy);
	vec3 v7;
	float h8;
	h8 = f2;
	v7.xyz = ((((v4.xyz*vec3(h8))*v6.www)+v6.xyz)*pu_m[2].xyz);
	vec3 v9;
	v9.xyz = max(vec3(0.000000e+00,0.000000e+00,0.000000e+00),(pu_m[3].xxx+(-v7)));
	vec3 v10;
	v10.xyz = max(v7,pu_m[3].zzz);
	vec3 v11;
	v11.xyz = (((((v10*pu_m[4].xxx)+pu_m[4].yyy)*(1.0/((v10+pu_m[3].www))))+((clamp(v7,pu_m[3].xxx,pu_m[3].zzz)*pu_m[2].www)+(((v9*pu_m[0].www)*(1.0/((v9+pu_m[3].yyy))))+pu_m[1].www)))+vec3(-2.000000e-03,-2.000000e-03,-2.000000e-03));
	if ((f0>5.000000e-01))
	{
		v3.xyz = v11;
	}
	else
	{
		vec3 v12;
		v12.xyz = max(vec3(6.103520e-05,6.103520e-05,6.103520e-05),v11);
		v3.xyz = min((v12*vec3(1.292000e+01,1.292000e+01,1.292000e+01)),((pow(max(v12,vec3(3.130670e-03,3.130670e-03,3.130670e-03)),vec3(4.166667e-01,4.166667e-01,4.166667e-01))*vec3(1.055000e+00,1.055000e+00,1.055000e+00))+vec3(-5.500000e-02,-5.500000e-02,-5.500000e-02)));
	}
	vec4 v13;
	highp vec3 v14;
	v14.xyz = v3;
	vec3 v15;
	v15.xyz = mix(v14,pu_h[2].xyz,pu_h[2].www);
	v13.xyz = v15;
	v13.w = 0.000000e+00;
	out_Target0.xyzw = v13;
}

