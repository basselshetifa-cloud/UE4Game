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
uniform ivec4 pu_i[1];
uniform highp vec4 pu_h[3];
uniform highp samplerCube ps0;
INTERFACE_LOCATION(0) in highp vec2 in_TEXCOORD0;
INTERFACE_LOCATION(0) out highp vec4 out_Target0;
void main()
{
	highp vec2 v0;
	v0.xy = pu_h[2].xy;
	highp vec3 v1;
	v1.xyz = pu_h[0].xyz;
	highp int i2;
	i2 = pu_i[0].x;
	highp vec4 v3;
	highp vec3 v4;
	highp vec2 v5;
	v5.xy = ((in_TEXCOORD0*vec2(2.000000e+00,2.000000e+00))+vec2(-1.000000e+00,-1.000000e+00));
	highp vec3 v6;
	if ((i2==0))
	{
		highp vec3 v7;
		v7.x = 1.000000e+00;
		v7.y = (-v5.y);
		v7.z = (-v5.x);
		v6.xyz = v7;
	}
	else
	{
		if ((i2==1))
		{
			highp vec3 v8;
			v8.x = -1.000000e+00;
			v8.y = (-v5.y);
			v8.z = v5.x;
			v6.xyz = v8;
		}
		else
		{
			if ((i2==2))
			{
				highp vec3 v9;
				v9.y = 1.000000e+00;
				v9.x = v5.x;
				v9.z = v5.y;
				v6.xyz = v9;
			}
			else
			{
				if ((i2==3))
				{
					highp vec3 v10;
					v10.y = -1.000000e+00;
					v10.x = v5.x;
					v10.z = (-v5.y);
					v6.xyz = v10;
				}
				else
				{
					if ((i2==4))
					{
						highp vec3 v11;
						v11.z = 1.000000e+00;
						v11.x = v5.x;
						v11.y = (-v5.y);
						v6.xyz = v11;
					}
					else
					{
						highp vec3 v12;
						v12.z = -1.000000e+00;
						v12.x = (-v5.x);
						v12.y = (-v5.y);
						v6.xyz = v12;
					}
				}
			}
		}
	}
	v4.xyz = v6;
	highp vec2 v13;
	v13.x = v0.y;
	v13.y = (-v0.x);
	highp vec2 v14;
	v14.x = dot(v6.xy,v13);
	v14.y = dot(v6.xy,v0);
	v4.xy = v14;
	highp vec4 v15;
	highp float f16;
	f16 = 0.000000e+00;
	v15.xyzw = textureLod(ps0,v4,f16);
	v3.xyzw = v15;
	if ((v1.x>0.000000e+00))
	{
		if (((v4.z<0.000000e+00)&&(v1.z>=1.000000e+00)))
		{
			v3.xyz = mix(v15.xyz,pu_h[1].xyz,pu_h[1].www);
		}
	}
	v3.w = 1.000000e+00;
	out_Target0.xyzw = v3;
}

