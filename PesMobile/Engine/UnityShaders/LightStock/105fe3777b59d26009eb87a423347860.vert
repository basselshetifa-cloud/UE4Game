#version 310 es

#define INTERFACE_LOCATION(Pos) layout(location=Pos) 
#define INTERFACE_BLOCK(Pos, Interp, Modifiers, Semantic, PreType, PostType) layout(location=Pos) Modifiers Semantic { PreType PostType; }
#define HLSLCC_DX11ClipSpace 1 


// end extensions
layout(std140) uniform vb0
{
#define View_TranslatedWorldToClip View_TranslatedWorldToClipvb0
	highp mat4 View_TranslatedWorldToClip;
#define View_WorldToClip View_WorldToClipvb0
	highp mat4 View_WorldToClip;
#define View_ClipToWorld View_ClipToWorldvb0
	highp mat4 View_ClipToWorld;
#define View_TranslatedWorldToView View_TranslatedWorldToViewvb0
	highp mat4 View_TranslatedWorldToView;
#define View_ViewToTranslatedWorld View_ViewToTranslatedWorldvb0
	highp mat4 View_ViewToTranslatedWorld;
#define View_TranslatedWorldToCameraView View_TranslatedWorldToCameraViewvb0
	highp mat4 View_TranslatedWorldToCameraView;
#define View_CameraViewToTranslatedWorld View_CameraViewToTranslatedWorldvb0
	highp mat4 View_CameraViewToTranslatedWorld;
#define View_ViewToClip View_ViewToClipvb0
	highp mat4 View_ViewToClip;
#define View_ViewToClipNoAA View_ViewToClipNoAAvb0
	highp mat4 View_ViewToClipNoAA;
#define View_ClipToView View_ClipToViewvb0
	highp mat4 View_ClipToView;
#define View_ClipToTranslatedWorld View_ClipToTranslatedWorldvb0
	highp mat4 View_ClipToTranslatedWorld;
#define View_SVPositionToTranslatedWorld View_SVPositionToTranslatedWorldvb0
	highp mat4 View_SVPositionToTranslatedWorld;
#define View_ScreenToWorld View_ScreenToWorldvb0
	highp mat4 View_ScreenToWorld;
#define View_ScreenToTranslatedWorld View_ScreenToTranslatedWorldvb0
	highp mat4 View_ScreenToTranslatedWorld;
#define View_ViewForward View_ViewForwardvb0
	vec3 View_ViewForward;
#define PrePadding_View_908 PrePadding_View_908vb0
	float PrePadding_View_908;
#define View_ViewUp View_ViewUpvb0
	vec3 View_ViewUp;
#define PrePadding_View_924 PrePadding_View_924vb0
	float PrePadding_View_924;
#define View_ViewRight View_ViewRightvb0
	vec3 View_ViewRight;
#define PrePadding_View_940 PrePadding_View_940vb0
	float PrePadding_View_940;
#define View_HMDViewNoRollUp View_HMDViewNoRollUpvb0
	vec3 View_HMDViewNoRollUp;
#define PrePadding_View_956 PrePadding_View_956vb0
	float PrePadding_View_956;
#define View_HMDViewNoRollRight View_HMDViewNoRollRightvb0
	vec3 View_HMDViewNoRollRight;
#define PrePadding_View_972 PrePadding_View_972vb0
	float PrePadding_View_972;
#define View_InvDeviceZToWorldZTransform View_InvDeviceZToWorldZTransformvb0
	highp vec4 View_InvDeviceZToWorldZTransform;
#define View_ScreenPositionScaleBias View_ScreenPositionScaleBiasvb0
	vec4 View_ScreenPositionScaleBias;
#define View_WorldCameraOrigin View_WorldCameraOriginvb0
	highp vec3 View_WorldCameraOrigin;
#define PrePadding_View_1020 PrePadding_View_1020vb0
	highp float PrePadding_View_1020;
#define View_TranslatedWorldCameraOrigin View_TranslatedWorldCameraOriginvb0
	highp vec3 View_TranslatedWorldCameraOrigin;
#define PrePadding_View_1036 PrePadding_View_1036vb0
	highp float PrePadding_View_1036;
#define View_WorldViewOrigin View_WorldViewOriginvb0
	highp vec3 View_WorldViewOrigin;
#define PrePadding_View_1052 PrePadding_View_1052vb0
	highp float PrePadding_View_1052;
#define View_PreViewTranslation View_PreViewTranslationvb0
	highp vec3 View_PreViewTranslation;
#define PrePadding_View_1068 PrePadding_View_1068vb0
	highp float PrePadding_View_1068;
#define View_PrevProjection View_PrevProjectionvb0
	highp mat4 View_PrevProjection;
#define View_PrevViewProj View_PrevViewProjvb0
	highp mat4 View_PrevViewProj;
#define View_PrevViewRotationProj View_PrevViewRotationProjvb0
	highp mat4 View_PrevViewRotationProj;
#define View_PrevViewToClip View_PrevViewToClipvb0
	highp mat4 View_PrevViewToClip;
#define View_PrevClipToView View_PrevClipToViewvb0
	highp mat4 View_PrevClipToView;
#define View_PrevTranslatedWorldToClip View_PrevTranslatedWorldToClipvb0
	highp mat4 View_PrevTranslatedWorldToClip;
#define View_PrevTranslatedWorldToView View_PrevTranslatedWorldToViewvb0
	highp mat4 View_PrevTranslatedWorldToView;
#define View_PrevViewToTranslatedWorld View_PrevViewToTranslatedWorldvb0
	highp mat4 View_PrevViewToTranslatedWorld;
#define View_PrevTranslatedWorldToCameraView View_PrevTranslatedWorldToCameraViewvb0
	highp mat4 View_PrevTranslatedWorldToCameraView;
#define View_PrevCameraViewToTranslatedWorld View_PrevCameraViewToTranslatedWorldvb0
	highp mat4 View_PrevCameraViewToTranslatedWorld;
#define View_PrevWorldCameraOrigin View_PrevWorldCameraOriginvb0
	highp vec3 View_PrevWorldCameraOrigin;
#define PrePadding_View_1724 PrePadding_View_1724vb0
	highp float PrePadding_View_1724;
#define View_PrevWorldViewOrigin View_PrevWorldViewOriginvb0
	highp vec3 View_PrevWorldViewOrigin;
#define PrePadding_View_1740 PrePadding_View_1740vb0
	highp float PrePadding_View_1740;
#define View_PrevPreViewTranslation View_PrevPreViewTranslationvb0
	highp vec3 View_PrevPreViewTranslation;
#define PrePadding_View_1756 PrePadding_View_1756vb0
	highp float PrePadding_View_1756;
#define View_PrevInvViewProj View_PrevInvViewProjvb0
	highp mat4 View_PrevInvViewProj;
#define View_PrevScreenToTranslatedWorld View_PrevScreenToTranslatedWorldvb0
	highp mat4 View_PrevScreenToTranslatedWorld;
#define View_ClipToPrevClip View_ClipToPrevClipvb0
	highp mat4 View_ClipToPrevClip;
#define View_TemporalAAJitter View_TemporalAAJittervb0
	highp vec4 View_TemporalAAJitter;
#define View_GlobalClippingPlane View_GlobalClippingPlanevb0
	highp vec4 View_GlobalClippingPlane;
#define View_FieldOfViewWideAngles View_FieldOfViewWideAnglesvb0
	highp vec2 View_FieldOfViewWideAngles;
#define View_PrevFieldOfViewWideAngles View_PrevFieldOfViewWideAnglesvb0
	highp vec2 View_PrevFieldOfViewWideAngles;
#define View_ViewRectMin View_ViewRectMinvb0
	vec4 View_ViewRectMin;
#define View_ViewSizeAndInvSize View_ViewSizeAndInvSizevb0
	highp vec4 View_ViewSizeAndInvSize;
#define View_BufferSizeAndInvSize View_BufferSizeAndInvSizevb0
	highp vec4 View_BufferSizeAndInvSize;
#define View_BufferBilinearUVMinMax View_BufferBilinearUVMinMaxvb0
	highp vec4 View_BufferBilinearUVMinMax;
#define View_NumSceneColorMSAASamples View_NumSceneColorMSAASamplesvb0
	highp int View_NumSceneColorMSAASamples;
#define View_PreExposure View_PreExposurevb0
	float View_PreExposure;
#define View_OneOverPreExposure View_OneOverPreExposurevb0
	float View_OneOverPreExposure;
#define PrePadding_View_2076 PrePadding_View_2076vb0
	float PrePadding_View_2076;
#define View_DiffuseOverrideParameter View_DiffuseOverrideParametervb0
	vec4 View_DiffuseOverrideParameter;
#define View_SpecularOverrideParameter View_SpecularOverrideParametervb0
	vec4 View_SpecularOverrideParameter;
#define View_NormalOverrideParameter View_NormalOverrideParametervb0
	vec4 View_NormalOverrideParameter;
#define View_RoughnessOverrideParameter View_RoughnessOverrideParametervb0
	vec2 View_RoughnessOverrideParameter;
#define View_PrevFrameGameTime View_PrevFrameGameTimevb0
	highp float View_PrevFrameGameTime;
#define View_PrevFrameRealTime View_PrevFrameRealTimevb0
	highp float View_PrevFrameRealTime;
#define View_OutOfBoundsMask View_OutOfBoundsMaskvb0
	float View_OutOfBoundsMask;
#define PrePadding_View_2148 PrePadding_View_2148vb0
	float PrePadding_View_2148;
#define PrePadding_View_2152 PrePadding_View_2152vb0
	float PrePadding_View_2152;
#define PrePadding_View_2156 PrePadding_View_2156vb0
	float PrePadding_View_2156;
#define View_WorldCameraMovementSinceLastFrame View_WorldCameraMovementSinceLastFramevb0
	highp vec3 View_WorldCameraMovementSinceLastFrame;
#define View_CullingSign View_CullingSignvb0
	highp float View_CullingSign;
#define View_NearPlane View_NearPlanevb0
	float View_NearPlane;
#define View_AdaptiveTessellationFactor View_AdaptiveTessellationFactorvb0
	highp float View_AdaptiveTessellationFactor;
#define View_GameTime View_GameTimevb0
	highp float View_GameTime;
#define View_RealTime View_RealTimevb0
	highp float View_RealTime;
#define View_DeltaTime View_DeltaTimevb0
	highp float View_DeltaTime;
#define View_MaterialTextureMipBias View_MaterialTextureMipBiasvb0
	highp float View_MaterialTextureMipBias;
#define View_MaterialTextureDerivativeMultiply View_MaterialTextureDerivativeMultiplyvb0
	highp float View_MaterialTextureDerivativeMultiply;
#define View_Random View_Randomvb0
	highp uint View_Random;
#define View_FrameNumber View_FrameNumbervb0
	highp uint View_FrameNumber;
#define View_StateFrameIndexMod8 View_StateFrameIndexMod8vb0
	highp uint View_StateFrameIndexMod8;
#define View_StateFrameIndex View_StateFrameIndexvb0
	highp uint View_StateFrameIndex;
#define View_CameraCut View_CameraCutvb0
	float View_CameraCut;
#define View_UnlitViewmodeMask View_UnlitViewmodeMaskvb0
	float View_UnlitViewmodeMask;
#define PrePadding_View_2228 PrePadding_View_2228vb0
	float PrePadding_View_2228;
#define PrePadding_View_2232 PrePadding_View_2232vb0
	float PrePadding_View_2232;
#define PrePadding_View_2236 PrePadding_View_2236vb0
	float PrePadding_View_2236;
#define View_DirectionalLightColor View_DirectionalLightColorvb0
	vec4 View_DirectionalLightColor;
#define View_DirectionalLightDirection View_DirectionalLightDirectionvb0
	vec3 View_DirectionalLightDirection;
#define PrePadding_View_2268 PrePadding_View_2268vb0
	float PrePadding_View_2268;
#define View_TranslucencyLightingVolumeMin View_TranslucencyLightingVolumeMinvb0
	highp vec4 View_TranslucencyLightingVolumeMin[2];
#define View_TranslucencyLightingVolumeInvSize View_TranslucencyLightingVolumeInvSizevb0
	highp vec4 View_TranslucencyLightingVolumeInvSize[2];
#define View_TemporalAAParams View_TemporalAAParamsvb0
	highp vec4 View_TemporalAAParams;
#define View_CircleDOFParams View_CircleDOFParamsvb0
	highp vec4 View_CircleDOFParams;
#define View_DepthOfFieldSensorWidth View_DepthOfFieldSensorWidthvb0
	highp float View_DepthOfFieldSensorWidth;
#define View_DepthOfFieldFocalDistance View_DepthOfFieldFocalDistancevb0
	highp float View_DepthOfFieldFocalDistance;
#define View_DepthOfFieldScale View_DepthOfFieldScalevb0
	highp float View_DepthOfFieldScale;
#define View_DepthOfFieldFocalLength View_DepthOfFieldFocalLengthvb0
	highp float View_DepthOfFieldFocalLength;
#define View_DepthOfFieldFocalRegion View_DepthOfFieldFocalRegionvb0
	highp float View_DepthOfFieldFocalRegion;
#define View_DepthOfFieldNearTransitionRegion View_DepthOfFieldNearTransitionRegionvb0
	highp float View_DepthOfFieldNearTransitionRegion;
#define View_DepthOfFieldFarTransitionRegion View_DepthOfFieldFarTransitionRegionvb0
	highp float View_DepthOfFieldFarTransitionRegion;
#define View_MotionBlurNormalizedToPixel View_MotionBlurNormalizedToPixelvb0
	highp float View_MotionBlurNormalizedToPixel;
#define View_bSubsurfacePostprocessEnabled View_bSubsurfacePostprocessEnabledvb0
	highp float View_bSubsurfacePostprocessEnabled;
#define View_GeneralPurposeTweak View_GeneralPurposeTweakvb0
	highp float View_GeneralPurposeTweak;
#define View_DemosaicVposOffset View_DemosaicVposOffsetvb0
	float View_DemosaicVposOffset;
#define PrePadding_View_2412 PrePadding_View_2412vb0
	float PrePadding_View_2412;
#define View_IndirectLightingColorScale View_IndirectLightingColorScalevb0
	highp vec3 View_IndirectLightingColorScale;
#define View_HDR32bppEncodingMode View_HDR32bppEncodingModevb0
	float View_HDR32bppEncodingMode;
#define View_AtmosphericFogSunDirection View_AtmosphericFogSunDirectionvb0
	highp vec3 View_AtmosphericFogSunDirection;
#define View_AtmosphericFogSunPower View_AtmosphericFogSunPowervb0
	float View_AtmosphericFogSunPower;
#define View_AtmosphericFogPower View_AtmosphericFogPowervb0
	float View_AtmosphericFogPower;
#define View_AtmosphericFogDensityScale View_AtmosphericFogDensityScalevb0
	float View_AtmosphericFogDensityScale;
#define View_AtmosphericFogDensityOffset View_AtmosphericFogDensityOffsetvb0
	float View_AtmosphericFogDensityOffset;
#define View_AtmosphericFogGroundOffset View_AtmosphericFogGroundOffsetvb0
	float View_AtmosphericFogGroundOffset;
#define View_AtmosphericFogDistanceScale View_AtmosphericFogDistanceScalevb0
	float View_AtmosphericFogDistanceScale;
#define View_AtmosphericFogAltitudeScale View_AtmosphericFogAltitudeScalevb0
	float View_AtmosphericFogAltitudeScale;
#define View_AtmosphericFogHeightScaleRayleigh View_AtmosphericFogHeightScaleRayleighvb0
	float View_AtmosphericFogHeightScaleRayleigh;
#define View_AtmosphericFogStartDistance View_AtmosphericFogStartDistancevb0
	float View_AtmosphericFogStartDistance;
#define View_AtmosphericFogDistanceOffset View_AtmosphericFogDistanceOffsetvb0
	float View_AtmosphericFogDistanceOffset;
#define View_AtmosphericFogSunDiscScale View_AtmosphericFogSunDiscScalevb0
	float View_AtmosphericFogSunDiscScale;
#define View_AtmosphericFogRenderMask View_AtmosphericFogRenderMaskvb0
	highp uint View_AtmosphericFogRenderMask;
#define View_AtmosphericFogInscatterAltitudeSampleNum View_AtmosphericFogInscatterAltitudeSampleNumvb0
	highp uint View_AtmosphericFogInscatterAltitudeSampleNum;
#define View_AtmosphericFogSunColor View_AtmosphericFogSunColorvb0
	highp vec4 View_AtmosphericFogSunColor;
#define View_NormalCurvatureToRoughnessScaleBias View_NormalCurvatureToRoughnessScaleBiasvb0
	highp vec3 View_NormalCurvatureToRoughnessScaleBias;
#define View_RenderingReflectionCaptureMask View_RenderingReflectionCaptureMaskvb0
	highp float View_RenderingReflectionCaptureMask;
#define View_AmbientCubemapTint View_AmbientCubemapTintvb0
	highp vec4 View_AmbientCubemapTint;
#define View_AmbientCubemapIntensity View_AmbientCubemapIntensityvb0
	highp float View_AmbientCubemapIntensity;
#define View_SkyLightParameters View_SkyLightParametersvb0
	highp float View_SkyLightParameters;
#define PrePadding_View_2552 PrePadding_View_2552vb0
	highp float PrePadding_View_2552;
#define PrePadding_View_2556 PrePadding_View_2556vb0
	highp float PrePadding_View_2556;
#define View_SkyLightColor View_SkyLightColorvb0
	highp vec4 View_SkyLightColor;
#define View_SkyIrradianceEnvironmentMap View_SkyIrradianceEnvironmentMapvb0
	highp vec4 View_SkyIrradianceEnvironmentMap[7];
#define View_MobilePreviewMode View_MobilePreviewModevb0
	highp float View_MobilePreviewMode;
#define View_HMDEyePaddingOffset View_HMDEyePaddingOffsetvb0
	highp float View_HMDEyePaddingOffset;
#define View_ReflectionCubemapMaxMip View_ReflectionCubemapMaxMipvb0
	float View_ReflectionCubemapMaxMip;
#define View_ShowDecalsMask View_ShowDecalsMaskvb0
	highp float View_ShowDecalsMask;
#define View_DistanceFieldAOSpecularOcclusionMode View_DistanceFieldAOSpecularOcclusionModevb0
	highp uint View_DistanceFieldAOSpecularOcclusionMode;
#define View_IndirectCapsuleSelfShadowingIntensity View_IndirectCapsuleSelfShadowingIntensityvb0
	highp float View_IndirectCapsuleSelfShadowingIntensity;
#define PrePadding_View_2712 PrePadding_View_2712vb0
	highp float PrePadding_View_2712;
#define PrePadding_View_2716 PrePadding_View_2716vb0
	highp float PrePadding_View_2716;
#define View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeightvb0
	highp vec3 View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight;
#define View_StereoPassIndex View_StereoPassIndexvb0
	highp int View_StereoPassIndex;
#define View_GlobalVolumeCenterAndExtent View_GlobalVolumeCenterAndExtentvb0
	highp vec4 View_GlobalVolumeCenterAndExtent[4];
#define View_GlobalVolumeWorldToUVAddAndMul View_GlobalVolumeWorldToUVAddAndMulvb0
	highp vec4 View_GlobalVolumeWorldToUVAddAndMul[4];
#define View_GlobalVolumeDimension View_GlobalVolumeDimensionvb0
	highp float View_GlobalVolumeDimension;
#define View_GlobalVolumeTexelSize View_GlobalVolumeTexelSizevb0
	highp float View_GlobalVolumeTexelSize;
#define View_MaxGlobalDistance View_MaxGlobalDistancevb0
	highp float View_MaxGlobalDistance;
#define View_bCheckerboardSubsurfaceProfileRendering View_bCheckerboardSubsurfaceProfileRenderingvb0
	highp float View_bCheckerboardSubsurfaceProfileRendering;
#define View_VolumetricFogInvGridSize View_VolumetricFogInvGridSizevb0
	highp vec3 View_VolumetricFogInvGridSize;
#define PrePadding_View_2892 PrePadding_View_2892vb0
	highp float PrePadding_View_2892;
#define View_VolumetricFogGridZParams View_VolumetricFogGridZParamsvb0
	highp vec3 View_VolumetricFogGridZParams;
#define PrePadding_View_2908 PrePadding_View_2908vb0
	highp float PrePadding_View_2908;
#define View_VolumetricFogSVPosToVolumeUV View_VolumetricFogSVPosToVolumeUVvb0
	highp vec2 View_VolumetricFogSVPosToVolumeUV;
#define View_VolumetricFogMaxDistance View_VolumetricFogMaxDistancevb0
	highp float View_VolumetricFogMaxDistance;
#define PrePadding_View_2924 PrePadding_View_2924vb0
	highp float PrePadding_View_2924;
#define View_VolumetricLightmapWorldToUVScale View_VolumetricLightmapWorldToUVScalevb0
	highp vec3 View_VolumetricLightmapWorldToUVScale;
#define PrePadding_View_2940 PrePadding_View_2940vb0
	highp float PrePadding_View_2940;
#define View_VolumetricLightmapWorldToUVAdd View_VolumetricLightmapWorldToUVAddvb0
	highp vec3 View_VolumetricLightmapWorldToUVAdd;
#define PrePadding_View_2956 PrePadding_View_2956vb0
	highp float PrePadding_View_2956;
#define View_VolumetricLightmapIndirectionTextureSize View_VolumetricLightmapIndirectionTextureSizevb0
	highp vec3 View_VolumetricLightmapIndirectionTextureSize;
#define View_VolumetricLightmapBrickSize View_VolumetricLightmapBrickSizevb0
	highp float View_VolumetricLightmapBrickSize;
#define View_VolumetricLightmapBrickTexelSize View_VolumetricLightmapBrickTexelSizevb0
	highp vec3 View_VolumetricLightmapBrickTexelSize;
#define View_StereoIPD View_StereoIPDvb0
	highp float View_StereoIPD;
#define View_IndirectLightingCacheShowFlag View_IndirectLightingCacheShowFlagvb0
	highp float View_IndirectLightingCacheShowFlag;
#define View_EyeToPixelSpreadAngle View_EyeToPixelSpreadAnglevb0
	highp float View_EyeToPixelSpreadAngle;
};

layout(std140) uniform vb1
{
#define MobileBasePass_Fog_ExponentialFogParameters MobileBasePass_Fog_ExponentialFogParametersvb1
	highp vec4 MobileBasePass_Fog_ExponentialFogParameters;
#define MobileBasePass_Fog_ExponentialFogParameters2 MobileBasePass_Fog_ExponentialFogParameters2vb1
	highp vec4 MobileBasePass_Fog_ExponentialFogParameters2;
#define MobileBasePass_Fog_ExponentialFogColorParameter MobileBasePass_Fog_ExponentialFogColorParametervb1
	highp vec4 MobileBasePass_Fog_ExponentialFogColorParameter;
#define MobileBasePass_Fog_ExponentialFogParameters3 MobileBasePass_Fog_ExponentialFogParameters3vb1
	highp vec4 MobileBasePass_Fog_ExponentialFogParameters3;
#define MobileBasePass_Fog_InscatteringLightDirection MobileBasePass_Fog_InscatteringLightDirectionvb1
	highp vec4 MobileBasePass_Fog_InscatteringLightDirection;
#define MobileBasePass_Fog_DirectionalInscatteringColor MobileBasePass_Fog_DirectionalInscatteringColorvb1
	highp vec4 MobileBasePass_Fog_DirectionalInscatteringColor;
#define MobileBasePass_Fog_SinCosInscatteringColorCubemapRotation MobileBasePass_Fog_SinCosInscatteringColorCubemapRotationvb1
	highp vec2 MobileBasePass_Fog_SinCosInscatteringColorCubemapRotation;
#define PrePadding_MobileBasePass_Fog_104 PrePadding_MobileBasePass_Fog_104vb1
	highp float PrePadding_MobileBasePass_Fog_104;
#define PrePadding_MobileBasePass_Fog_108 PrePadding_MobileBasePass_Fog_108vb1
	highp float PrePadding_MobileBasePass_Fog_108;
#define MobileBasePass_Fog_FogInscatteringTextureParameters MobileBasePass_Fog_FogInscatteringTextureParametersvb1
	highp vec3 MobileBasePass_Fog_FogInscatteringTextureParameters;
#define MobileBasePass_Fog_ApplyVolumetricFog MobileBasePass_Fog_ApplyVolumetricFogvb1
	highp float MobileBasePass_Fog_ApplyVolumetricFog;
#define PrePadding_MobileBasePass_PlanarReflection_128 PrePadding_MobileBasePass_PlanarReflection_128vb1
	highp float PrePadding_MobileBasePass_PlanarReflection_128;
#define PrePadding_MobileBasePass_PlanarReflection_132 PrePadding_MobileBasePass_PlanarReflection_132vb1
	highp float PrePadding_MobileBasePass_PlanarReflection_132;
#define PrePadding_MobileBasePass_PlanarReflection_136 PrePadding_MobileBasePass_PlanarReflection_136vb1
	highp float PrePadding_MobileBasePass_PlanarReflection_136;
#define PrePadding_MobileBasePass_PlanarReflection_140 PrePadding_MobileBasePass_PlanarReflection_140vb1
	highp float PrePadding_MobileBasePass_PlanarReflection_140;
#define PrePadding_MobileBasePass_PlanarReflection_144 PrePadding_MobileBasePass_PlanarReflection_144vb1
	highp float PrePadding_MobileBasePass_PlanarReflection_144;
#define PrePadding_MobileBasePass_PlanarReflection_148 PrePadding_MobileBasePass_PlanarReflection_148vb1
	highp float PrePadding_MobileBasePass_PlanarReflection_148;
#define PrePadding_MobileBasePass_PlanarReflection_152 PrePadding_MobileBasePass_PlanarReflection_152vb1
	highp float PrePadding_MobileBasePass_PlanarReflection_152;
#define PrePadding_MobileBasePass_PlanarReflection_156 PrePadding_MobileBasePass_PlanarReflection_156vb1
	highp float PrePadding_MobileBasePass_PlanarReflection_156;
#define MobileBasePass_PlanarReflection_ReflectionPlane MobileBasePass_PlanarReflection_ReflectionPlanevb1
	highp vec4 MobileBasePass_PlanarReflection_ReflectionPlane;
#define MobileBasePass_PlanarReflection_PlanarReflectionOrigin MobileBasePass_PlanarReflection_PlanarReflectionOriginvb1
	highp vec4 MobileBasePass_PlanarReflection_PlanarReflectionOrigin;
#define MobileBasePass_PlanarReflection_PlanarReflectionXAxis MobileBasePass_PlanarReflection_PlanarReflectionXAxisvb1
	highp vec4 MobileBasePass_PlanarReflection_PlanarReflectionXAxis;
#define MobileBasePass_PlanarReflection_PlanarReflectionYAxis MobileBasePass_PlanarReflection_PlanarReflectionYAxisvb1
	highp vec4 MobileBasePass_PlanarReflection_PlanarReflectionYAxis;
#define MobileBasePass_PlanarReflection_InverseTransposeMirrorMatrix MobileBasePass_PlanarReflection_InverseTransposeMirrorMatrixvb1
	highp mat3x4 MobileBasePass_PlanarReflection_InverseTransposeMirrorMatrix;
#define MobileBasePass_PlanarReflection_PlanarReflectionParameters MobileBasePass_PlanarReflection_PlanarReflectionParametersvb1
	highp vec3 MobileBasePass_PlanarReflection_PlanarReflectionParameters;
#define PrePadding_MobileBasePass_PlanarReflection_284 PrePadding_MobileBasePass_PlanarReflection_284vb1
	highp float PrePadding_MobileBasePass_PlanarReflection_284;
#define MobileBasePass_PlanarReflection_PlanarReflectionParameters2 MobileBasePass_PlanarReflection_PlanarReflectionParameters2vb1
	highp vec2 MobileBasePass_PlanarReflection_PlanarReflectionParameters2;
#define PrePadding_MobileBasePass_PlanarReflection_296 PrePadding_MobileBasePass_PlanarReflection_296vb1
	highp float PrePadding_MobileBasePass_PlanarReflection_296;
#define PrePadding_MobileBasePass_PlanarReflection_300 PrePadding_MobileBasePass_PlanarReflection_300vb1
	highp float PrePadding_MobileBasePass_PlanarReflection_300;
#define MobileBasePass_PlanarReflection_ProjectionWithExtraFOV MobileBasePass_PlanarReflection_ProjectionWithExtraFOVvb1
	highp mat4 MobileBasePass_PlanarReflection_ProjectionWithExtraFOV[2];
#define MobileBasePass_PlanarReflection_PlanarReflectionScreenScaleBias MobileBasePass_PlanarReflection_PlanarReflectionScreenScaleBiasvb1
	highp vec4 MobileBasePass_PlanarReflection_PlanarReflectionScreenScaleBias[2];
#define MobileBasePass_PlanarReflection_PlanarReflectionScreenBound MobileBasePass_PlanarReflection_PlanarReflectionScreenBoundvb1
	highp vec2 MobileBasePass_PlanarReflection_PlanarReflectionScreenBound;
#define MobileBasePass_PlanarReflection_bIsStereo MobileBasePass_PlanarReflection_bIsStereovb1
	bool MobileBasePass_PlanarReflection_bIsStereo;
};

layout(std140) uniform vb2
{
#define Primitive_LocalToWorld Primitive_LocalToWorldvb2
	highp mat4 Primitive_LocalToWorld;
#define Primitive_InvNonUniformScaleAndDeterminantSign Primitive_InvNonUniformScaleAndDeterminantSignvb2
	vec4 Primitive_InvNonUniformScaleAndDeterminantSign;
#define Primitive_ObjectWorldPositionAndRadius Primitive_ObjectWorldPositionAndRadiusvb2
	highp vec4 Primitive_ObjectWorldPositionAndRadius;
#define Primitive_WorldToLocal Primitive_WorldToLocalvb2
	highp mat4 Primitive_WorldToLocal;
#define Primitive_PreviousLocalToWorld Primitive_PreviousLocalToWorldvb2
	highp mat4 Primitive_PreviousLocalToWorld;
#define Primitive_PreviousWorldToLocal Primitive_PreviousWorldToLocalvb2
	highp mat4 Primitive_PreviousWorldToLocal;
#define Primitive_ActorWorldPosition Primitive_ActorWorldPositionvb2
	highp vec3 Primitive_ActorWorldPosition;
#define Primitive_UseSingleSampleShadowFromStationaryLights Primitive_UseSingleSampleShadowFromStationaryLightsvb2
	float Primitive_UseSingleSampleShadowFromStationaryLights;
#define Primitive_ObjectBounds Primitive_ObjectBoundsvb2
	highp vec3 Primitive_ObjectBounds;
#define Primitive_LpvBiasMultiplier Primitive_LpvBiasMultipliervb2
	highp float Primitive_LpvBiasMultiplier;
#define Primitive_DecalReceiverMask Primitive_DecalReceiverMaskvb2
	float Primitive_DecalReceiverMask;
#define Primitive_PerObjectGBufferData Primitive_PerObjectGBufferDatavb2
	float Primitive_PerObjectGBufferData;
#define Primitive_UseVolumetricLightmapShadowFromStationaryLights Primitive_UseVolumetricLightmapShadowFromStationaryLightsvb2
	float Primitive_UseVolumetricLightmapShadowFromStationaryLights;
#define Primitive_UseEditorDepthTest Primitive_UseEditorDepthTestvb2
	float Primitive_UseEditorDepthTest;
#define Primitive_ObjectOrientation Primitive_ObjectOrientationvb2
	vec4 Primitive_ObjectOrientation;
#define Primitive_NonUniformScale Primitive_NonUniformScalevb2
	vec4 Primitive_NonUniformScale;
#define Primitive_LocalObjectBoundsMin Primitive_LocalObjectBoundsMinvb2
	highp vec3 Primitive_LocalObjectBoundsMin;
#define PrePadding_Primitive_380 PrePadding_Primitive_380vb2
	highp float PrePadding_Primitive_380;
#define Primitive_LocalObjectBoundsMax Primitive_LocalObjectBoundsMaxvb2
	highp vec3 Primitive_LocalObjectBoundsMax;
#define Primitive_LightingChannelMask Primitive_LightingChannelMaskvb2
	highp uint Primitive_LightingChannelMask;
#define Primitive_LightmapDataIndex Primitive_LightmapDataIndexvb2
	highp uint Primitive_LightmapDataIndex;
#define Primitive_SingleCaptureIndex Primitive_SingleCaptureIndexvb2
	highp int Primitive_SingleCaptureIndex;
};

layout(std140) uniform vb3
{
#define PrecomputedLightingBuffer_StaticShadowMapMasks PrecomputedLightingBuffer_StaticShadowMapMasksvb3
	highp vec4 PrecomputedLightingBuffer_StaticShadowMapMasks;
#define PrecomputedLightingBuffer_InvUniformPenumbraSizes PrecomputedLightingBuffer_InvUniformPenumbraSizesvb3
	highp vec4 PrecomputedLightingBuffer_InvUniformPenumbraSizes;
#define PrecomputedLightingBuffer_LightMapCoordinateScaleBias PrecomputedLightingBuffer_LightMapCoordinateScaleBiasvb3
	highp vec4 PrecomputedLightingBuffer_LightMapCoordinateScaleBias;
#define PrecomputedLightingBuffer_ShadowMapCoordinateScaleBias PrecomputedLightingBuffer_ShadowMapCoordinateScaleBiasvb3
	highp vec4 PrecomputedLightingBuffer_ShadowMapCoordinateScaleBias;
#define PrecomputedLightingBuffer_LightMapScale PrecomputedLightingBuffer_LightMapScalevb3
	vec4 PrecomputedLightingBuffer_LightMapScale[2];
#define PrecomputedLightingBuffer_LightMapAdd PrecomputedLightingBuffer_LightMapAddvb3
	vec4 PrecomputedLightingBuffer_LightMapAdd[2];
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
INTERFACE_LOCATION(0) in highp vec4 in_ATTRIBUTE0;
INTERFACE_LOCATION(1) in vec3 in_ATTRIBUTE1;
INTERFACE_LOCATION(2) in vec4 in_ATTRIBUTE2;
INTERFACE_LOCATION(4) in highp vec4 in_ATTRIBUTE4;
INTERFACE_LOCATION(15) in highp vec2 in_ATTRIBUTE15;
INTERFACE_LOCATION(0) out highp vec4 var_TEXCOORD10;
INTERFACE_LOCATION(1) out highp vec4 var_TEXCOORD11;
INTERFACE_LOCATION(2) out highp vec4 var_TEXCOORD0;
INTERFACE_LOCATION(3) out highp vec4 var_TEXCOORD4;
INTERFACE_LOCATION(4) out vec4 var_TEXCOORD7;
INTERFACE_LOCATION(5) out highp vec4 var_TEXCOORD8;
void main()
{
	highp vec4 v0;
	highp vec4 v1;
	highp vec4 v2;
	float h3;
	vec3 v4;
	v4.xyz = (cross((cross(in_ATTRIBUTE2.xyz,in_ATTRIBUTE1)*in_ATTRIBUTE2.www),in_ATTRIBUTE2.xyz)*in_ATTRIBUTE2.www);
	mat3 m5;
	highp mat3 m6;
	m6[0].xyz = Primitive_LocalToWorld[0].xyz;
	m6[1].xyz = Primitive_LocalToWorld[1].xyz;
	m6[2].xyz = Primitive_LocalToWorld[2].xyz;
	mat3 m7;
	mat3 m8;
	m8 = m6;
	m7 = m8;
	m5 = m7;
	m5[0].xyz = (m7[0]*Primitive_InvNonUniformScaleAndDeterminantSign.xxx);
	m5[1].xyz = (m5[1]*Primitive_InvNonUniformScaleAndDeterminantSign.yyy);
	m5[2].xyz = (m5[2]*Primitive_InvNonUniformScaleAndDeterminantSign.zzz);
	vec3 v9;
	vec3 v10;
	v9.xyz = ((v4.zzz*m5[2])+((v4.yyy*m5[1])+(v4.xxx*m5[0])));
	v10.xyz = ((in_ATTRIBUTE2.zzz*m5[2])+((in_ATTRIBUTE2.yyy*m5[1])+(in_ATTRIBUTE2.xxx*m5[0])));
	highp float f11;
	f11 = in_ATTRIBUTE2.w;
	highp float f12;
	f12 = Primitive_InvNonUniformScaleAndDeterminantSign.w;
	float h13;
	h13 = (f11*f12);
	h3 = h13;
	highp vec4 v14;
	v14.w = 1.000000e+00;
	v14.xyz = ((((Primitive_LocalToWorld[0].xyz*in_ATTRIBUTE0.xxx)+(Primitive_LocalToWorld[1].xyz*in_ATTRIBUTE0.yyy))+(Primitive_LocalToWorld[2].xyz*in_ATTRIBUTE0.zzz))+(Primitive_LocalToWorld[3].xyz+View_PreViewTranslation));
	v2.xyzw = v14;
	highp vec3 v15;
	v15.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	v2.xyz = (v14.xyz+v15);
	highp vec4 v16;
	v16.xyzw = (View_TranslatedWorldToClip[3]+((View_TranslatedWorldToClip[2]*v2.zzzz)+((View_TranslatedWorldToClip[1]*v2.yyyy)+(View_TranslatedWorldToClip[0]*v2.xxxx))));
	v1.xyzw = v2;
	highp vec3 v17;
	v17.xyz = (v2.xyz+(-View_TranslatedWorldCameraOrigin));
	float h18;
	vec3 v19;
	highp float f20;
	highp float f21;
	highp float f22;
	highp float f23;
	float h24;
	float h25;
	h25 = MobileBasePass_Fog_ExponentialFogColorParameter.w;
	h24 = h25;
	highp float f26;
	f26 = dot(v17,v17);
	highp float f27;
	f27 = inversesqrt(f26);
	highp float f28;
	f28 = (f26*f27);
	vec3 v29;
	vec3 v30;
	v30.xyz = (v17*vec3(f27));
	v29.xyz = v30;
	f23 = MobileBasePass_Fog_ExponentialFogParameters.x;
	f22 = MobileBasePass_Fog_ExponentialFogParameters2.x;
	f21 = f28;
	f20 = v17.z;
	highp float f31;
	f31 = max(0.000000e+00,MobileBasePass_Fog_ExponentialFogParameters.w);
	if ((f31>0.000000e+00))
	{
		highp float f32;
		f32 = (f31*f27);
		highp float f33;
		f33 = (f32*v17.z);
		highp float f34;
		f34 = (View_WorldCameraOrigin.z+f33);
		f21 = ((1.000000e+00+(-f32))*f28);
		f20 = (v17.z+(-f33));
		f23 = (MobileBasePass_Fog_ExponentialFogParameters3.x*exp2((-max(-1.270000e+02,(MobileBasePass_Fog_ExponentialFogParameters.y*(f34+(-MobileBasePass_Fog_ExponentialFogParameters3.y)))))));
		f22 = (MobileBasePass_Fog_ExponentialFogParameters2.z*exp2((-max(-1.270000e+02,(MobileBasePass_Fog_ExponentialFogParameters2.y*(f34+(-MobileBasePass_Fog_ExponentialFogParameters2.w)))))));
	}
	highp float f35;
	highp float f36;
	f36 = max(-1.270000e+02,(MobileBasePass_Fog_ExponentialFogParameters.y*f20));
	highp float f37;
	f37 = ((1.000000e+00+(-exp2((-f36))))/f36);
	highp float f38;
	f38 = (6.931472e-01+(-(2.402265e-01*f36)));
	highp float f39;
	f39 = abs(f36);
	highp float f40;
	f40 = ((f39>1.000000e-02))?(f37):(f38);
	f35 = (f23*f40);
	highp float f41;
	f41 = max(-1.270000e+02,(MobileBasePass_Fog_ExponentialFogParameters2.y*f20));
	highp float f42;
	f42 = ((1.000000e+00+(-exp2((-f41))))/f41);
	highp float f43;
	f43 = (6.931472e-01+(-(2.402265e-01*f41)));
	highp float f44;
	f44 = abs(f41);
	highp float f45;
	f45 = ((f44>1.000000e-02))?(f42):(f43);
	highp float f46;
	f46 = (f35+(f22*f45));
	highp float f47;
	f47 = (f46*f21);
	vec3 v48;
	vec3 v49;
	v49.xyz = MobileBasePass_Fog_ExponentialFogColorParameter.xyz;
	v48.xyz = v49;
	v19.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	if ((MobileBasePass_Fog_InscatteringLightDirection.w>=0.000000e+00))
	{
		highp vec3 v50;
		v50.xyz = v29;
		float h51;
		h51 = clamp(exp2((-(f46*max((f21+(-MobileBasePass_Fog_InscatteringLightDirection.w)),0.000000e+00)))),0.000000e+00,1.000000e+00);
		vec3 v52;
		v52.xyz = (MobileBasePass_Fog_DirectionalInscatteringColor.xyz*vec3(pow(clamp(dot(v50,MobileBasePass_Fog_InscatteringLightDirection.xyz),0.000000e+00,1.000000e+00),MobileBasePass_Fog_DirectionalInscatteringColor.w)));
		v19.xyz = (v52*vec3((1.000000e+00+(-h51))));
	}
	highp float f53;
	f53 = h24;
	float h54;
	h54 = max(clamp(exp2((-f47)),0.000000e+00,1.000000e+00),f53);
	h18 = h54;
	if (((MobileBasePass_Fog_ExponentialFogParameters3.w>0.000000e+00)&&(f28>MobileBasePass_Fog_ExponentialFogParameters3.w)))
	{
		h18 = 1.000000e+00;
		v19.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	}
	vec4 v55;
	v55.xyz = ((v48*vec3((1.000000e+00+(-h18))))+v19);
	v55.w = h18;
	highp vec4 t56[1];
	t56[0].xyzw = vec4(0.000000e+00,0.000000e+00,0.000000e+00,0.000000e+00);
	t56[(0/2)].xy = in_ATTRIBUTE4.xy;
	highp vec4 t57[1];
	t57[0].xyzw = t56[0];
	t57[(1/2)].zw = in_ATTRIBUTE4.zw;
	highp vec4 v58;
	v58.xyzw = vec4(0.000000e+00,0.000000e+00,0.000000e+00,0.000000e+00);
	v58.xy = ((in_ATTRIBUTE15*PrecomputedLightingBuffer_LightMapCoordinateScaleBias.xy)+PrecomputedLightingBuffer_LightMapCoordinateScaleBias.zw);
	v58.zw = vec2(0.000000e+00,0.000000e+00);
	highp vec4 v59;
	v59.w = 0.000000e+00;
	highp vec3 v60;
	v60.xyz = v9;
	v59.xyz = v60;
	highp vec4 v61;
	highp vec3 v62;
	v62.xyz = v10;
	v61.xyz = v62;
	highp float f63;
	f63 = h3;
	v61.w = f63;
	v1.w = v16.w;
	v0.xyzw = v16;
	var_TEXCOORD10.xyzw = v59;
	var_TEXCOORD11.xyzw = v61;
	var_TEXCOORD0.xyzw = t57[0];
	var_TEXCOORD4.xyzw = v58;
	var_TEXCOORD7.xyzw = v55;
	var_TEXCOORD8.xyzw = v1;
	compiler_internal_AdjustOutputSemantic(v0);
	gl_Position.xyzw = v0;
}

