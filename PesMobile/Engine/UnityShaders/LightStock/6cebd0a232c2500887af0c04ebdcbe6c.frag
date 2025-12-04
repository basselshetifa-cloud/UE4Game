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
uniform uvec4 pu_u[2];
uniform ivec4 pu_i[1];
uniform highp samplerCube ps0;
INTERFACE_LOCATION(0) in highp vec2 in_TEXCOORD0;
INTERFACE_LOCATION(0) out highp vec4 out_Target0;
void main()
{
	highp uint u0;
	u0 = pu_u[1].x;
	highp uint u1;
	u1 = pu_u[0].x;
	highp int i2;
	i2 = pu_i[0].x;
	highp vec4 v3;
	highp vec4 v4;
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
	highp vec3 v13;
	v13.xyz = normalize(v6);
	highp int i14;
	i14 = ((v13.z>=0.000000e+00))?(1):(-1);
	highp float f15;
	highp float f16;
	f16 = float(i14);
	f15 = f16;
	highp float f17;
	f17 = (-(1.0/((f15+v13.z))));
	highp float f18;
	f18 = ((v13.x*v13.y)*f17);
	highp vec3 v19;
	v19.x = (1.000000e+00+((f15*f17)*(v13.x*v13.x)));
	v19.y = (f15*f18);
	v19.z = ((-f15)*v13.x);
	highp vec3 v20;
	v20.x = f18;
	v20.y = (f15+(f17*(v13.y*v13.y)));
	v20.z = (-v13.y);
	highp float f21;
	highp float f22;
	f22 = float(u1);
	highp float f23;
	f23 = (float((u0+4294967295u))+-1.000000e+00);
	f21 = exp2(((1.000000e+00+(-(f23+(-f22))))/1.200000e+00));
	if ((f21<1.000000e-02))
	{
		v3.xyzw = textureLod(ps0,v6,0.000000e+00);
	}
	else
	{
		highp uint u24;
		u24 = uint((1<<int((u0+4294967295u))));
		highp float f25;
		highp float f26;
		f26 = ((1.256637e+01/float(((6u*u24)*u24)))*2.000000e+00);
		f25 = f26;
		highp int i27;
		i27 = ((f21<1.000000e-01))?(32):(64);
		highp uint u28;
		u28 = uint(i27);
		v4.xyzw = vec4(0.000000e+00,0.000000e+00,0.000000e+00,0.000000e+00);
		if ((f21>9.900000e-01))
		{
			highp uint u29;
			u29 = 0u;
			for (;;)
			{
				if ((u29>=u28))
				{
					break;
				}
				highp float f30;
				highp float f31;
				f31 = float(u29);
				highp float f32;
				f32 = float(u28);
				f30 = fract((f31/f32));
				highp uint u33;
				u33 = ((u29<<16u)|(u29>>16u));
				highp uint u34;
				u34 = (((u33&16711935u)<<8u)|((u33&4278255360u)>>8u));
				highp uint u35;
				u35 = (((u34&252645135u)<<4u)|((u34&4042322160u)>>4u));
				highp uint u36;
				u36 = (((u35&858993459u)<<2u)|((u35&3435973836u)>>2u));
				highp vec2 v37;
				v37.x = f30;
				highp float f38;
				f38 = float(((((u36&1431655765u)<<1u)|((u36&2863311530u)>>1u))^0u));
				v37.y = (f38*2.328306e-10);
				highp vec3 v39;
				highp float f40;
				highp float f41;
				f41 = 6.283185e+00;
				f40 = (f41*f30);
				highp float f42;
				f42 = sqrt(v37.y);
				highp float f43;
				f43 = sqrt((1.000000e+00+(-(f42*f42))));
				v39.x = (f43*cos(f40));
				v39.y = (f43*sin(f40));
				v39.z = f42;
				highp float f44;
				f44 = 3.141593e+00;
				highp float f45;
				f45 = float(u28);
				v4.xyzw = (v4+textureLod(ps0,((v13*vec3(f42))+((v20*v39.yyy)+(v19*v39.xxx))),(5.000000e-01*log2(((1.0/((f45*(f42/f44))))/f25)))));
				u29 = (u29+1u);
			}
			highp float f46;
			f46 = float(u28);
			v3.xyzw = (v4/vec4(f46));
		}
		else
		{
			highp float f47;
			f47 = 0.000000e+00;
			highp uint u48;
			u48 = 0u;
			for (;;)
			{
				highp vec2 v49;
				if ((u48>=u28))
				{
					break;
				}
				highp float f50;
				highp float f51;
				f51 = float(u48);
				highp float f52;
				f52 = float(u28);
				f50 = fract((f51/f52));
				highp uint u53;
				u53 = ((u48<<16u)|(u48>>16u));
				highp uint u54;
				u54 = (((u53&16711935u)<<8u)|((u53&4278255360u)>>8u));
				highp uint u55;
				u55 = (((u54&252645135u)<<4u)|((u54&4042322160u)>>4u));
				highp uint u56;
				u56 = (((u55&858993459u)<<2u)|((u55&3435973836u)>>2u));
				highp vec2 v57;
				v57.x = f50;
				highp float f58;
				f58 = float(((((u56&1431655765u)<<1u)|((u56&2863311530u)>>1u))^0u));
				v57.y = (f58*2.328306e-10);
				v49.xy = v57;
				v49.y = (v57.y*9.950000e-01);
				highp float f59;
				f59 = (f21*f21);
				highp vec3 v60;
				highp float f61;
				highp float f62;
				f62 = 6.283185e+00;
				f61 = (f62*f50);
				highp float f63;
				f63 = sqrt(((1.000000e+00+(-v49.y))/(1.000000e+00+(((f59*f59)+-1.000000e+00)*v49.y))));
				highp float f64;
				f64 = sqrt((1.000000e+00+(-(f63*f63))));
				v60.x = (f64*cos(f61));
				v60.y = (f64*sin(f61));
				v60.z = f63;
				highp vec3 v65;
				v65.xyz = ((vec3((2.000000e+00*f63))*v60)+vec3(-0.000000e+00,-0.000000e+00,-1.000000e+00));
				highp float f66;
				f66 = v65.z;
				if ((v65.z>0.000000e+00))
				{
					highp float f67;
					highp float f68;
					f68 = (f21*f21);
					f67 = (f68*f68);
					highp float f69;
					f69 = ((((f63*f67)+(-f63))*f63)+1.000000e+00);
					highp float f70;
					f70 = 3.141593e+00;
					highp float f71;
					f71 = float(u28);
					v4.xyzw = (v4+(textureLod(ps0,((v13*v65.zzz)+((v20*v65.yyy)+(v19*v65.xxx))),(5.000000e-01*log2(((1.0/((f71*((f67/((f70*f69)*f69))*2.500000e-01))))/f25))))*vec4(f66)));
					f47 = (f47+f66);
				}
				u48 = (u48+1u);
			}
			v3.xyzw = (v4/vec4(f47));
		}
	}
	out_Target0.xyzw = v3;
}

