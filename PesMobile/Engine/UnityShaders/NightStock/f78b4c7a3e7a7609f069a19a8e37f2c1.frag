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
uniform ivec4 pu_i[1];
uniform highp vec4 pu_h[3];
uniform highp samplerCube ps0;
INTERFACE_LOCATION(0) in highp vec2 in_TEXCOORD0;
INTERFACE_LOCATION(0) out highp vec4 out_Target0;
void main()
{
	highp float f0;
	f0 = pu_h[2].x;
	highp uint u1;
	u1 = pu_u[0].x;
	highp int i2;
	i2 = pu_i[0].x;
	highp vec2 v3;
	v3.xy = ((in_TEXCOORD0*vec2(2.000000e+00,2.000000e+00))+vec2(-1.000000e+00,-1.000000e+00));
	highp vec3 v4;
	if ((i2==0))
	{
		highp vec3 v5;
		v5.x = 1.000000e+00;
		v5.y = (-v3.y);
		v5.z = (-v3.x);
		v4.xyz = v5;
	}
	else
	{
		if ((i2==1))
		{
			highp vec3 v6;
			v6.x = -1.000000e+00;
			v6.y = (-v3.y);
			v6.z = v3.x;
			v4.xyz = v6;
		}
		else
		{
			if ((i2==2))
			{
				highp vec3 v7;
				v7.y = 1.000000e+00;
				v7.x = v3.x;
				v7.z = v3.y;
				v4.xyz = v7;
			}
			else
			{
				if ((i2==3))
				{
					highp vec3 v8;
					v8.y = -1.000000e+00;
					v8.x = v3.x;
					v8.z = (-v3.y);
					v4.xyz = v8;
				}
				else
				{
					if ((i2==4))
					{
						highp vec3 v9;
						v9.z = 1.000000e+00;
						v9.x = v3.x;
						v9.y = (-v3.y);
						v4.xyz = v9;
					}
					else
					{
						highp vec3 v10;
						v10.z = -1.000000e+00;
						v10.x = (-v3.x);
						v10.y = (-v3.y);
						v4.xyz = v10;
					}
				}
			}
		}
	}
	highp vec3 v11;
	v11.xyz = normalize(v4);
	highp float f12;
	f12 = (1.000000e+00+dot(v3,v3));
	highp float f13;
	f13 = (4.000000e+00/(sqrt(f12)*f12));
	vec3 v14;
	vec3 v15;
	v15.xyz = v11;
	v14.xyz = v15;
	vec4 v16;
	vec4 v17;
	v16.x = 2.820950e-01;
	v16.y = (-4.886030e-01*v14.y);
	v16.z = (4.886030e-01*v14.z);
	v16.w = (-4.886030e-01*v14.x);
	vec3 v18;
	v18.xyz = (v14*v14);
	v17.x = ((1.092548e+00*v14.x)*v14.y);
	v17.y = ((-1.092548e+00*v14.y)*v14.z);
	v17.z = (3.153920e-01*((3.000000e+00*v18.z)+-1.000000e+00));
	v17.w = ((-1.092548e+00*v14.x)*v14.z);
	highp vec4 v19;
	highp float f20;
	f20 = float(u1);
	highp vec4 v21;
	v21.xyzw = v16;
	highp vec4 v22;
	v22.xyzw = v17;
	highp float f23;
	f23 = (5.462740e-01*(v18.x+(-v18.y)));
	v19.xyz = ((textureLod(ps0,v11,f20).xyz*vec3(((dot(v21,pu_h[0])+dot(v22,pu_h[1]))+(f23*f0))))*vec3(f13));
	v19.w = f13;
	out_Target0.xyzw = v19;
}

