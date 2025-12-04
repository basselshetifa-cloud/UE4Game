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
uniform highp vec4 pu_h[2];
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
	v2.xy = ((clamp((in_TEXCOORD0+pu_h[0].xy),vec2(0.000000e+00,0.000000e+00),vec2(1.000000e+00,1.000000e+00))*vec2(2.000000e+00,2.000000e+00))+vec2(-1.000000e+00,-1.000000e+00));
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
	highp vec4 v10;
	highp float f11;
	f11 = float(u0);
	v10.xyzw = textureLod(ps0,v3,f11);
	highp vec2 v12;
	v12.xy = ((clamp((in_TEXCOORD0+pu_h[0].zw),vec2(0.000000e+00,0.000000e+00),vec2(1.000000e+00,1.000000e+00))*vec2(2.000000e+00,2.000000e+00))+vec2(-1.000000e+00,-1.000000e+00));
	highp vec3 v13;
	if ((i1==0))
	{
		highp vec3 v14;
		v14.x = 1.000000e+00;
		v14.y = (-v12.y);
		v14.z = (-v12.x);
		v13.xyz = v14;
	}
	else
	{
		if ((i1==1))
		{
			highp vec3 v15;
			v15.x = -1.000000e+00;
			v15.y = (-v12.y);
			v15.z = v12.x;
			v13.xyz = v15;
		}
		else
		{
			if ((i1==2))
			{
				highp vec3 v16;
				v16.y = 1.000000e+00;
				v16.x = v12.x;
				v16.z = v12.y;
				v13.xyz = v16;
			}
			else
			{
				if ((i1==3))
				{
					highp vec3 v17;
					v17.y = -1.000000e+00;
					v17.x = v12.x;
					v17.z = (-v12.y);
					v13.xyz = v17;
				}
				else
				{
					if ((i1==4))
					{
						highp vec3 v18;
						v18.z = 1.000000e+00;
						v18.x = v12.x;
						v18.y = (-v12.y);
						v13.xyz = v18;
					}
					else
					{
						highp vec3 v19;
						v19.z = -1.000000e+00;
						v19.x = (-v12.x);
						v19.y = (-v12.y);
						v13.xyz = v19;
					}
				}
			}
		}
	}
	highp vec4 v20;
	highp float f21;
	f21 = float(u0);
	v20.xyzw = (v10+textureLod(ps0,v13,f21));
	highp vec2 v22;
	v22.xy = ((clamp((in_TEXCOORD0+pu_h[1].xy),vec2(0.000000e+00,0.000000e+00),vec2(1.000000e+00,1.000000e+00))*vec2(2.000000e+00,2.000000e+00))+vec2(-1.000000e+00,-1.000000e+00));
	highp vec3 v23;
	if ((i1==0))
	{
		highp vec3 v24;
		v24.x = 1.000000e+00;
		v24.y = (-v22.y);
		v24.z = (-v22.x);
		v23.xyz = v24;
	}
	else
	{
		if ((i1==1))
		{
			highp vec3 v25;
			v25.x = -1.000000e+00;
			v25.y = (-v22.y);
			v25.z = v22.x;
			v23.xyz = v25;
		}
		else
		{
			if ((i1==2))
			{
				highp vec3 v26;
				v26.y = 1.000000e+00;
				v26.x = v22.x;
				v26.z = v22.y;
				v23.xyz = v26;
			}
			else
			{
				if ((i1==3))
				{
					highp vec3 v27;
					v27.y = -1.000000e+00;
					v27.x = v22.x;
					v27.z = (-v22.y);
					v23.xyz = v27;
				}
				else
				{
					if ((i1==4))
					{
						highp vec3 v28;
						v28.z = 1.000000e+00;
						v28.x = v22.x;
						v28.y = (-v22.y);
						v23.xyz = v28;
					}
					else
					{
						highp vec3 v29;
						v29.z = -1.000000e+00;
						v29.x = (-v22.x);
						v29.y = (-v22.y);
						v23.xyz = v29;
					}
				}
			}
		}
	}
	highp vec4 v30;
	highp float f31;
	f31 = float(u0);
	v30.xyzw = (v20+textureLod(ps0,v23,f31));
	highp vec2 v32;
	v32.xy = ((clamp((in_TEXCOORD0+pu_h[1].zw),vec2(0.000000e+00,0.000000e+00),vec2(1.000000e+00,1.000000e+00))*vec2(2.000000e+00,2.000000e+00))+vec2(-1.000000e+00,-1.000000e+00));
	highp vec3 v33;
	if ((i1==0))
	{
		highp vec3 v34;
		v34.x = 1.000000e+00;
		v34.y = (-v32.y);
		v34.z = (-v32.x);
		v33.xyz = v34;
	}
	else
	{
		if ((i1==1))
		{
			highp vec3 v35;
			v35.x = -1.000000e+00;
			v35.y = (-v32.y);
			v35.z = v32.x;
			v33.xyz = v35;
		}
		else
		{
			if ((i1==2))
			{
				highp vec3 v36;
				v36.y = 1.000000e+00;
				v36.x = v32.x;
				v36.z = v32.y;
				v33.xyz = v36;
			}
			else
			{
				if ((i1==3))
				{
					highp vec3 v37;
					v37.y = -1.000000e+00;
					v37.x = v32.x;
					v37.z = (-v32.y);
					v33.xyz = v37;
				}
				else
				{
					if ((i1==4))
					{
						highp vec3 v38;
						v38.z = 1.000000e+00;
						v38.x = v32.x;
						v38.y = (-v32.y);
						v33.xyz = v38;
					}
					else
					{
						highp vec3 v39;
						v39.z = -1.000000e+00;
						v39.x = (-v32.x);
						v39.y = (-v32.y);
						v33.xyz = v39;
					}
				}
			}
		}
	}
	highp vec4 v40;
	highp float f41;
	f41 = float(u0);
	v40.xyzw = (v30+textureLod(ps0,v33,f41));
	highp vec4 v42;
	v42.xyz = (v40.xyz/vec3(4.000000e+00,4.000000e+00,4.000000e+00));
	v42.w = (v40.w/4.000000e+00);
	out_Target0.xyzw = v42;
}

