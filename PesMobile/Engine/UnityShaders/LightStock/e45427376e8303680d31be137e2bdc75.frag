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
uniform highp samplerCube ps0;
INTERFACE_LOCATION(0) in highp vec2 in_TEXCOORD0;
INTERFACE_LOCATION(0) out highp vec4 out_Target0;
void main()
{
	highp uint u0;
	u0 = pu_u[0].x;
	highp int i1;
	i1 = pu_i[0].x;
	highp vec2 v2;
	v2.xy = ((in_TEXCOORD0*vec2(2.000000e+00,2.000000e+00))+vec2(-1.000000e+00,-1.000000e+00));
	highp vec3 v3;
	if ((i1==0))
	{
		highp vec3 v4;
		v4.x = 1.000000e+00;
		v4.y = (-v2.y);
		v4.z = (-v2.x);
		v3.xyz = v4;
	}
	else
	{
		if ((i1==1))
		{
			highp vec3 v5;
			v5.x = -1.000000e+00;
			v5.y = (-v2.y);
			v5.z = v2.x;
			v3.xyz = v5;
		}
		else
		{
			if ((i1==2))
			{
				highp vec3 v6;
				v6.y = 1.000000e+00;
				v6.x = v2.x;
				v6.z = v2.y;
				v3.xyz = v6;
			}
			else
			{
				if ((i1==3))
				{
					highp vec3 v7;
					v7.y = -1.000000e+00;
					v7.x = v2.x;
					v7.z = (-v2.y);
					v3.xyz = v7;
				}
				else
				{
					if ((i1==4))
					{
						highp vec3 v8;
						v8.z = 1.000000e+00;
						v8.x = v2.x;
						v8.y = (-v2.y);
						v3.xyz = v8;
					}
					else
					{
						highp vec3 v9;
						v9.z = -1.000000e+00;
						v9.x = (-v2.x);
						v9.y = (-v2.y);
						v3.xyz = v9;
					}
				}
			}
		}
	}
	highp float f10;
	f10 = float(u0);
	out_Target0.xyzw = textureLod(ps0,v3,f10);
}

