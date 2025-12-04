#version 310 es
#define UE_EXT_shader_framebuffer_fetch 1

#define INTERFACE_LOCATION(Pos) layout(location=Pos) 
#define INTERFACE_BLOCK(Pos, Interp, Modifiers, Semantic, PreType, PostType) layout(location=Pos) Modifiers Semantic { PreType PostType; }
#define HLSLCC_DX11ClipSpace 1 


// end extensions
precision mediump float;
precision mediump int;
layout(std140) uniform pb0
{
#define View_TranslatedWorldToClip View_TranslatedWorldToClippb0
	highp mat4 View_TranslatedWorldToClip;
#define View_WorldToClip View_WorldToClippb0
	highp mat4 View_WorldToClip;
#define View_ClipToWorld View_ClipToWorldpb0
	highp mat4 View_ClipToWorld;
#define View_TranslatedWorldToView View_TranslatedWorldToViewpb0
	highp mat4 View_TranslatedWorldToView;
#define View_ViewToTranslatedWorld View_ViewToTranslatedWorldpb0
	highp mat4 View_ViewToTranslatedWorld;
#define View_TranslatedWorldToCameraView View_TranslatedWorldToCameraViewpb0
	highp mat4 View_TranslatedWorldToCameraView;
#define View_CameraViewToTranslatedWorld View_CameraViewToTranslatedWorldpb0
	highp mat4 View_CameraViewToTranslatedWorld;
#define View_ViewToClip View_ViewToClippb0
	highp mat4 View_ViewToClip;
#define View_ViewToClipNoAA View_ViewToClipNoAApb0
	highp mat4 View_ViewToClipNoAA;
#define View_ClipToView View_ClipToViewpb0
	highp mat4 View_ClipToView;
#define View_ClipToTranslatedWorld View_ClipToTranslatedWorldpb0
	highp mat4 View_ClipToTranslatedWorld;
#define View_SVPositionToTranslatedWorld View_SVPositionToTranslatedWorldpb0
	highp mat4 View_SVPositionToTranslatedWorld;
#define View_ScreenToWorld View_ScreenToWorldpb0
	highp mat4 View_ScreenToWorld;
#define View_ScreenToTranslatedWorld View_ScreenToTranslatedWorldpb0
	highp mat4 View_ScreenToTranslatedWorld;
#define View_ViewForward View_ViewForwardpb0
	vec3 View_ViewForward;
#define PrePadding_View_908 PrePadding_View_908pb0
	float PrePadding_View_908;
#define View_ViewUp View_ViewUppb0
	vec3 View_ViewUp;
#define PrePadding_View_924 PrePadding_View_924pb0
	float PrePadding_View_924;
#define View_ViewRight View_ViewRightpb0
	vec3 View_ViewRight;
#define PrePadding_View_940 PrePadding_View_940pb0
	float PrePadding_View_940;
#define View_HMDViewNoRollUp View_HMDViewNoRollUppb0
	vec3 View_HMDViewNoRollUp;
#define PrePadding_View_956 PrePadding_View_956pb0
	float PrePadding_View_956;
#define View_HMDViewNoRollRight View_HMDViewNoRollRightpb0
	vec3 View_HMDViewNoRollRight;
#define PrePadding_View_972 PrePadding_View_972pb0
	float PrePadding_View_972;
#define View_InvDeviceZToWorldZTransform View_InvDeviceZToWorldZTransformpb0
	highp vec4 View_InvDeviceZToWorldZTransform;
#define View_ScreenPositionScaleBias View_ScreenPositionScaleBiaspb0
	vec4 View_ScreenPositionScaleBias;
#define View_WorldCameraOrigin View_WorldCameraOriginpb0
	highp vec3 View_WorldCameraOrigin;
#define PrePadding_View_1020 PrePadding_View_1020pb0
	highp float PrePadding_View_1020;
#define View_TranslatedWorldCameraOrigin View_TranslatedWorldCameraOriginpb0
	highp vec3 View_TranslatedWorldCameraOrigin;
#define PrePadding_View_1036 PrePadding_View_1036pb0
	highp float PrePadding_View_1036;
#define View_WorldViewOrigin View_WorldViewOriginpb0
	highp vec3 View_WorldViewOrigin;
#define PrePadding_View_1052 PrePadding_View_1052pb0
	highp float PrePadding_View_1052;
#define View_PreViewTranslation View_PreViewTranslationpb0
	highp vec3 View_PreViewTranslation;
#define PrePadding_View_1068 PrePadding_View_1068pb0
	highp float PrePadding_View_1068;
#define View_PrevProjection View_PrevProjectionpb0
	highp mat4 View_PrevProjection;
#define View_PrevViewProj View_PrevViewProjpb0
	highp mat4 View_PrevViewProj;
#define View_PrevViewRotationProj View_PrevViewRotationProjpb0
	highp mat4 View_PrevViewRotationProj;
#define View_PrevViewToClip View_PrevViewToClippb0
	highp mat4 View_PrevViewToClip;
#define View_PrevClipToView View_PrevClipToViewpb0
	highp mat4 View_PrevClipToView;
#define View_PrevTranslatedWorldToClip View_PrevTranslatedWorldToClippb0
	highp mat4 View_PrevTranslatedWorldToClip;
#define View_PrevTranslatedWorldToView View_PrevTranslatedWorldToViewpb0
	highp mat4 View_PrevTranslatedWorldToView;
#define View_PrevViewToTranslatedWorld View_PrevViewToTranslatedWorldpb0
	highp mat4 View_PrevViewToTranslatedWorld;
#define View_PrevTranslatedWorldToCameraView View_PrevTranslatedWorldToCameraViewpb0
	highp mat4 View_PrevTranslatedWorldToCameraView;
#define View_PrevCameraViewToTranslatedWorld View_PrevCameraViewToTranslatedWorldpb0
	highp mat4 View_PrevCameraViewToTranslatedWorld;
#define View_PrevWorldCameraOrigin View_PrevWorldCameraOriginpb0
	highp vec3 View_PrevWorldCameraOrigin;
#define PrePadding_View_1724 PrePadding_View_1724pb0
	highp float PrePadding_View_1724;
#define View_PrevWorldViewOrigin View_PrevWorldViewOriginpb0
	highp vec3 View_PrevWorldViewOrigin;
#define PrePadding_View_1740 PrePadding_View_1740pb0
	highp float PrePadding_View_1740;
#define View_PrevPreViewTranslation View_PrevPreViewTranslationpb0
	highp vec3 View_PrevPreViewTranslation;
#define PrePadding_View_1756 PrePadding_View_1756pb0
	highp float PrePadding_View_1756;
#define View_PrevInvViewProj View_PrevInvViewProjpb0
	highp mat4 View_PrevInvViewProj;
#define View_PrevScreenToTranslatedWorld View_PrevScreenToTranslatedWorldpb0
	highp mat4 View_PrevScreenToTranslatedWorld;
#define View_ClipToPrevClip View_ClipToPrevClippb0
	highp mat4 View_ClipToPrevClip;
#define View_TemporalAAJitter View_TemporalAAJitterpb0
	highp vec4 View_TemporalAAJitter;
#define View_GlobalClippingPlane View_GlobalClippingPlanepb0
	highp vec4 View_GlobalClippingPlane;
#define View_FieldOfViewWideAngles View_FieldOfViewWideAnglespb0
	highp vec2 View_FieldOfViewWideAngles;
#define View_PrevFieldOfViewWideAngles View_PrevFieldOfViewWideAnglespb0
	highp vec2 View_PrevFieldOfViewWideAngles;
#define View_ViewRectMin View_ViewRectMinpb0
	vec4 View_ViewRectMin;
#define View_ViewSizeAndInvSize View_ViewSizeAndInvSizepb0
	highp vec4 View_ViewSizeAndInvSize;
#define View_BufferSizeAndInvSize View_BufferSizeAndInvSizepb0
	highp vec4 View_BufferSizeAndInvSize;
#define View_BufferBilinearUVMinMax View_BufferBilinearUVMinMaxpb0
	highp vec4 View_BufferBilinearUVMinMax;
#define View_NumSceneColorMSAASamples View_NumSceneColorMSAASamplespb0
	highp int View_NumSceneColorMSAASamples;
#define View_PreExposure View_PreExposurepb0
	float View_PreExposure;
#define View_OneOverPreExposure View_OneOverPreExposurepb0
	float View_OneOverPreExposure;
#define PrePadding_View_2076 PrePadding_View_2076pb0
	float PrePadding_View_2076;
#define View_DiffuseOverrideParameter View_DiffuseOverrideParameterpb0
	vec4 View_DiffuseOverrideParameter;
#define View_SpecularOverrideParameter View_SpecularOverrideParameterpb0
	vec4 View_SpecularOverrideParameter;
#define View_NormalOverrideParameter View_NormalOverrideParameterpb0
	vec4 View_NormalOverrideParameter;
#define View_RoughnessOverrideParameter View_RoughnessOverrideParameterpb0
	vec2 View_RoughnessOverrideParameter;
#define View_PrevFrameGameTime View_PrevFrameGameTimepb0
	highp float View_PrevFrameGameTime;
#define View_PrevFrameRealTime View_PrevFrameRealTimepb0
	highp float View_PrevFrameRealTime;
#define View_OutOfBoundsMask View_OutOfBoundsMaskpb0
	float View_OutOfBoundsMask;
#define PrePadding_View_2148 PrePadding_View_2148pb0
	float PrePadding_View_2148;
#define PrePadding_View_2152 PrePadding_View_2152pb0
	float PrePadding_View_2152;
#define PrePadding_View_2156 PrePadding_View_2156pb0
	float PrePadding_View_2156;
#define View_WorldCameraMovementSinceLastFrame View_WorldCameraMovementSinceLastFramepb0
	highp vec3 View_WorldCameraMovementSinceLastFrame;
#define View_CullingSign View_CullingSignpb0
	highp float View_CullingSign;
#define View_NearPlane View_NearPlanepb0
	float View_NearPlane;
#define View_AdaptiveTessellationFactor View_AdaptiveTessellationFactorpb0
	highp float View_AdaptiveTessellationFactor;
#define View_GameTime View_GameTimepb0
	highp float View_GameTime;
#define View_RealTime View_RealTimepb0
	highp float View_RealTime;
#define View_DeltaTime View_DeltaTimepb0
	highp float View_DeltaTime;
#define View_MaterialTextureMipBias View_MaterialTextureMipBiaspb0
	highp float View_MaterialTextureMipBias;
#define View_MaterialTextureDerivativeMultiply View_MaterialTextureDerivativeMultiplypb0
	highp float View_MaterialTextureDerivativeMultiply;
#define View_Random View_Randompb0
	highp uint View_Random;
#define View_FrameNumber View_FrameNumberpb0
	highp uint View_FrameNumber;
#define View_StateFrameIndexMod8 View_StateFrameIndexMod8pb0
	highp uint View_StateFrameIndexMod8;
#define View_StateFrameIndex View_StateFrameIndexpb0
	highp uint View_StateFrameIndex;
#define View_CameraCut View_CameraCutpb0
	float View_CameraCut;
#define View_UnlitViewmodeMask View_UnlitViewmodeMaskpb0
	float View_UnlitViewmodeMask;
#define PrePadding_View_2228 PrePadding_View_2228pb0
	float PrePadding_View_2228;
#define PrePadding_View_2232 PrePadding_View_2232pb0
	float PrePadding_View_2232;
#define PrePadding_View_2236 PrePadding_View_2236pb0
	float PrePadding_View_2236;
#define View_DirectionalLightColor View_DirectionalLightColorpb0
	vec4 View_DirectionalLightColor;
#define View_DirectionalLightDirection View_DirectionalLightDirectionpb0
	vec3 View_DirectionalLightDirection;
#define PrePadding_View_2268 PrePadding_View_2268pb0
	float PrePadding_View_2268;
#define View_TranslucencyLightingVolumeMin View_TranslucencyLightingVolumeMinpb0
	highp vec4 View_TranslucencyLightingVolumeMin[2];
#define View_TranslucencyLightingVolumeInvSize View_TranslucencyLightingVolumeInvSizepb0
	highp vec4 View_TranslucencyLightingVolumeInvSize[2];
#define View_TemporalAAParams View_TemporalAAParamspb0
	highp vec4 View_TemporalAAParams;
#define View_CircleDOFParams View_CircleDOFParamspb0
	highp vec4 View_CircleDOFParams;
#define View_DepthOfFieldSensorWidth View_DepthOfFieldSensorWidthpb0
	highp float View_DepthOfFieldSensorWidth;
#define View_DepthOfFieldFocalDistance View_DepthOfFieldFocalDistancepb0
	highp float View_DepthOfFieldFocalDistance;
#define View_DepthOfFieldScale View_DepthOfFieldScalepb0
	highp float View_DepthOfFieldScale;
#define View_DepthOfFieldFocalLength View_DepthOfFieldFocalLengthpb0
	highp float View_DepthOfFieldFocalLength;
#define View_DepthOfFieldFocalRegion View_DepthOfFieldFocalRegionpb0
	highp float View_DepthOfFieldFocalRegion;
#define View_DepthOfFieldNearTransitionRegion View_DepthOfFieldNearTransitionRegionpb0
	highp float View_DepthOfFieldNearTransitionRegion;
#define View_DepthOfFieldFarTransitionRegion View_DepthOfFieldFarTransitionRegionpb0
	highp float View_DepthOfFieldFarTransitionRegion;
#define View_MotionBlurNormalizedToPixel View_MotionBlurNormalizedToPixelpb0
	highp float View_MotionBlurNormalizedToPixel;
#define View_bSubsurfacePostprocessEnabled View_bSubsurfacePostprocessEnabledpb0
	highp float View_bSubsurfacePostprocessEnabled;
#define View_GeneralPurposeTweak View_GeneralPurposeTweakpb0
	highp float View_GeneralPurposeTweak;
#define View_DemosaicVposOffset View_DemosaicVposOffsetpb0
	float View_DemosaicVposOffset;
#define PrePadding_View_2412 PrePadding_View_2412pb0
	float PrePadding_View_2412;
#define View_IndirectLightingColorScale View_IndirectLightingColorScalepb0
	highp vec3 View_IndirectLightingColorScale;
#define View_HDR32bppEncodingMode View_HDR32bppEncodingModepb0
	float View_HDR32bppEncodingMode;
#define View_AtmosphericFogSunDirection View_AtmosphericFogSunDirectionpb0
	highp vec3 View_AtmosphericFogSunDirection;
#define View_AtmosphericFogSunPower View_AtmosphericFogSunPowerpb0
	float View_AtmosphericFogSunPower;
#define View_AtmosphericFogPower View_AtmosphericFogPowerpb0
	float View_AtmosphericFogPower;
#define View_AtmosphericFogDensityScale View_AtmosphericFogDensityScalepb0
	float View_AtmosphericFogDensityScale;
#define View_AtmosphericFogDensityOffset View_AtmosphericFogDensityOffsetpb0
	float View_AtmosphericFogDensityOffset;
#define View_AtmosphericFogGroundOffset View_AtmosphericFogGroundOffsetpb0
	float View_AtmosphericFogGroundOffset;
#define View_AtmosphericFogDistanceScale View_AtmosphericFogDistanceScalepb0
	float View_AtmosphericFogDistanceScale;
#define View_AtmosphericFogAltitudeScale View_AtmosphericFogAltitudeScalepb0
	float View_AtmosphericFogAltitudeScale;
#define View_AtmosphericFogHeightScaleRayleigh View_AtmosphericFogHeightScaleRayleighpb0
	float View_AtmosphericFogHeightScaleRayleigh;
#define View_AtmosphericFogStartDistance View_AtmosphericFogStartDistancepb0
	float View_AtmosphericFogStartDistance;
#define View_AtmosphericFogDistanceOffset View_AtmosphericFogDistanceOffsetpb0
	float View_AtmosphericFogDistanceOffset;
#define View_AtmosphericFogSunDiscScale View_AtmosphericFogSunDiscScalepb0
	float View_AtmosphericFogSunDiscScale;
#define View_AtmosphericFogRenderMask View_AtmosphericFogRenderMaskpb0
	highp uint View_AtmosphericFogRenderMask;
#define View_AtmosphericFogInscatterAltitudeSampleNum View_AtmosphericFogInscatterAltitudeSampleNumpb0
	highp uint View_AtmosphericFogInscatterAltitudeSampleNum;
#define View_AtmosphericFogSunColor View_AtmosphericFogSunColorpb0
	highp vec4 View_AtmosphericFogSunColor;
#define View_NormalCurvatureToRoughnessScaleBias View_NormalCurvatureToRoughnessScaleBiaspb0
	highp vec3 View_NormalCurvatureToRoughnessScaleBias;
#define View_RenderingReflectionCaptureMask View_RenderingReflectionCaptureMaskpb0
	highp float View_RenderingReflectionCaptureMask;
#define View_AmbientCubemapTint View_AmbientCubemapTintpb0
	highp vec4 View_AmbientCubemapTint;
#define View_AmbientCubemapIntensity View_AmbientCubemapIntensitypb0
	highp float View_AmbientCubemapIntensity;
#define View_SkyLightParameters View_SkyLightParameterspb0
	highp float View_SkyLightParameters;
#define PrePadding_View_2552 PrePadding_View_2552pb0
	highp float PrePadding_View_2552;
#define PrePadding_View_2556 PrePadding_View_2556pb0
	highp float PrePadding_View_2556;
#define View_SkyLightColor View_SkyLightColorpb0
	highp vec4 View_SkyLightColor;
#define View_SkyIrradianceEnvironmentMap View_SkyIrradianceEnvironmentMappb0
	highp vec4 View_SkyIrradianceEnvironmentMap[7];
#define View_MobilePreviewMode View_MobilePreviewModepb0
	highp float View_MobilePreviewMode;
#define View_HMDEyePaddingOffset View_HMDEyePaddingOffsetpb0
	highp float View_HMDEyePaddingOffset;
#define View_ReflectionCubemapMaxMip View_ReflectionCubemapMaxMippb0
	float View_ReflectionCubemapMaxMip;
#define View_ShowDecalsMask View_ShowDecalsMaskpb0
	highp float View_ShowDecalsMask;
#define View_DistanceFieldAOSpecularOcclusionMode View_DistanceFieldAOSpecularOcclusionModepb0
	highp uint View_DistanceFieldAOSpecularOcclusionMode;
#define View_IndirectCapsuleSelfShadowingIntensity View_IndirectCapsuleSelfShadowingIntensitypb0
	highp float View_IndirectCapsuleSelfShadowingIntensity;
#define PrePadding_View_2712 PrePadding_View_2712pb0
	highp float PrePadding_View_2712;
#define PrePadding_View_2716 PrePadding_View_2716pb0
	highp float PrePadding_View_2716;
#define View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeightpb0
	highp vec3 View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight;
#define View_StereoPassIndex View_StereoPassIndexpb0
	highp int View_StereoPassIndex;
#define View_GlobalVolumeCenterAndExtent View_GlobalVolumeCenterAndExtentpb0
	highp vec4 View_GlobalVolumeCenterAndExtent[4];
#define View_GlobalVolumeWorldToUVAddAndMul View_GlobalVolumeWorldToUVAddAndMulpb0
	highp vec4 View_GlobalVolumeWorldToUVAddAndMul[4];
#define View_GlobalVolumeDimension View_GlobalVolumeDimensionpb0
	highp float View_GlobalVolumeDimension;
#define View_GlobalVolumeTexelSize View_GlobalVolumeTexelSizepb0
	highp float View_GlobalVolumeTexelSize;
#define View_MaxGlobalDistance View_MaxGlobalDistancepb0
	highp float View_MaxGlobalDistance;
#define View_bCheckerboardSubsurfaceProfileRendering View_bCheckerboardSubsurfaceProfileRenderingpb0
	highp float View_bCheckerboardSubsurfaceProfileRendering;
#define View_VolumetricFogInvGridSize View_VolumetricFogInvGridSizepb0
	highp vec3 View_VolumetricFogInvGridSize;
#define PrePadding_View_2892 PrePadding_View_2892pb0
	highp float PrePadding_View_2892;
#define View_VolumetricFogGridZParams View_VolumetricFogGridZParamspb0
	highp vec3 View_VolumetricFogGridZParams;
#define PrePadding_View_2908 PrePadding_View_2908pb0
	highp float PrePadding_View_2908;
#define View_VolumetricFogSVPosToVolumeUV View_VolumetricFogSVPosToVolumeUVpb0
	highp vec2 View_VolumetricFogSVPosToVolumeUV;
#define View_VolumetricFogMaxDistance View_VolumetricFogMaxDistancepb0
	highp float View_VolumetricFogMaxDistance;
#define PrePadding_View_2924 PrePadding_View_2924pb0
	highp float PrePadding_View_2924;
#define View_VolumetricLightmapWorldToUVScale View_VolumetricLightmapWorldToUVScalepb0
	highp vec3 View_VolumetricLightmapWorldToUVScale;
#define PrePadding_View_2940 PrePadding_View_2940pb0
	highp float PrePadding_View_2940;
#define View_VolumetricLightmapWorldToUVAdd View_VolumetricLightmapWorldToUVAddpb0
	highp vec3 View_VolumetricLightmapWorldToUVAdd;
#define PrePadding_View_2956 PrePadding_View_2956pb0
	highp float PrePadding_View_2956;
#define View_VolumetricLightmapIndirectionTextureSize View_VolumetricLightmapIndirectionTextureSizepb0
	highp vec3 View_VolumetricLightmapIndirectionTextureSize;
#define View_VolumetricLightmapBrickSize View_VolumetricLightmapBrickSizepb0
	highp float View_VolumetricLightmapBrickSize;
#define View_VolumetricLightmapBrickTexelSize View_VolumetricLightmapBrickTexelSizepb0
	highp vec3 View_VolumetricLightmapBrickTexelSize;
#define View_StereoIPD View_StereoIPDpb0
	highp float View_StereoIPD;
#define View_IndirectLightingCacheShowFlag View_IndirectLightingCacheShowFlagpb0
	highp float View_IndirectLightingCacheShowFlag;
#define View_EyeToPixelSpreadAngle View_EyeToPixelSpreadAnglepb0
	highp float View_EyeToPixelSpreadAngle;
};

layout(std140) uniform pb1
{
#define IndirectLightingCache_IndirectLightingCachePrimitiveAdd IndirectLightingCache_IndirectLightingCachePrimitiveAddpb1
	highp vec3 IndirectLightingCache_IndirectLightingCachePrimitiveAdd;
#define PrePadding_IndirectLightingCache_12 PrePadding_IndirectLightingCache_12pb1
	highp float PrePadding_IndirectLightingCache_12;
#define IndirectLightingCache_IndirectLightingCachePrimitiveScale IndirectLightingCache_IndirectLightingCachePrimitiveScalepb1
	highp vec3 IndirectLightingCache_IndirectLightingCachePrimitiveScale;
#define PrePadding_IndirectLightingCache_28 PrePadding_IndirectLightingCache_28pb1
	highp float PrePadding_IndirectLightingCache_28;
#define IndirectLightingCache_IndirectLightingCacheMinUV IndirectLightingCache_IndirectLightingCacheMinUVpb1
	highp vec3 IndirectLightingCache_IndirectLightingCacheMinUV;
#define PrePadding_IndirectLightingCache_44 PrePadding_IndirectLightingCache_44pb1
	highp float PrePadding_IndirectLightingCache_44;
#define IndirectLightingCache_IndirectLightingCacheMaxUV IndirectLightingCache_IndirectLightingCacheMaxUVpb1
	highp vec3 IndirectLightingCache_IndirectLightingCacheMaxUV;
#define PrePadding_IndirectLightingCache_60 PrePadding_IndirectLightingCache_60pb1
	highp float PrePadding_IndirectLightingCache_60;
#define IndirectLightingCache_PointSkyBentNormal IndirectLightingCache_PointSkyBentNormalpb1
	highp vec4 IndirectLightingCache_PointSkyBentNormal;
#define IndirectLightingCache_DirectionalLightShadowing IndirectLightingCache_DirectionalLightShadowingpb1
	float IndirectLightingCache_DirectionalLightShadowing;
#define PrePadding_IndirectLightingCache_84 PrePadding_IndirectLightingCache_84pb1
	float PrePadding_IndirectLightingCache_84;
#define PrePadding_IndirectLightingCache_88 PrePadding_IndirectLightingCache_88pb1
	float PrePadding_IndirectLightingCache_88;
#define PrePadding_IndirectLightingCache_92 PrePadding_IndirectLightingCache_92pb1
	float PrePadding_IndirectLightingCache_92;
#define IndirectLightingCache_IndirectLightingSHCoefficients0 IndirectLightingCache_IndirectLightingSHCoefficients0pb1
	highp vec4 IndirectLightingCache_IndirectLightingSHCoefficients0[3];
#define IndirectLightingCache_IndirectLightingSHCoefficients1 IndirectLightingCache_IndirectLightingSHCoefficients1pb1
	highp vec4 IndirectLightingCache_IndirectLightingSHCoefficients1[3];
#define IndirectLightingCache_IndirectLightingSHCoefficients2 IndirectLightingCache_IndirectLightingSHCoefficients2pb1
	highp vec4 IndirectLightingCache_IndirectLightingSHCoefficients2;
#define IndirectLightingCache_IndirectLightingSHSingleCoefficient IndirectLightingCache_IndirectLightingSHSingleCoefficientpb1
	vec4 IndirectLightingCache_IndirectLightingSHSingleCoefficient;
};

layout(std140) uniform pb2
{
#define MobileDirectionalLight_DirectionalLightColor MobileDirectionalLight_DirectionalLightColorpb2
	vec4 MobileDirectionalLight_DirectionalLightColor;
#define MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition MobileDirectionalLight_DirectionalLightDirectionAndShadowTransitionpb2
	vec4 MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition;
#define MobileDirectionalLight_DirectionalLightShadowSize MobileDirectionalLight_DirectionalLightShadowSizepb2
	vec4 MobileDirectionalLight_DirectionalLightShadowSize;
#define MobileDirectionalLight_DirectionalLightDistanceFadeMAD MobileDirectionalLight_DirectionalLightDistanceFadeMADpb2
	vec4 MobileDirectionalLight_DirectionalLightDistanceFadeMAD;
#define MobileDirectionalLight_DirectionalLightShadowDistances MobileDirectionalLight_DirectionalLightShadowDistancespb2
	vec4 MobileDirectionalLight_DirectionalLightShadowDistances;
#define MobileDirectionalLight_DirectionalLightScreenToShadow MobileDirectionalLight_DirectionalLightScreenToShadowpb2
	highp mat4 MobileDirectionalLight_DirectionalLightScreenToShadow[4];
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
uniform highp vec4 pu_h[1];
uniform highp samplerCube ps0;
uniform highp sampler2D ps1;
uniform highp sampler2D ps2;
uniform highp sampler2D ps3;
INTERFACE_LOCATION(0) in highp vec4 in_TEXCOORD10;
INTERFACE_LOCATION(1) in highp vec4 in_TEXCOORD11;
INTERFACE_LOCATION(2) in highp vec2 in_TEXCOORD0;
INTERFACE_LOCATION(3) in vec4 in_TEXCOORD7;
INTERFACE_LOCATION(4) in highp vec4 in_TEXCOORD8;
INTERFACE_LOCATION(0) out vec4 out_Target0;
void main()
{
	vec4 v0;
	vec3 v1;
	vec3 v2;
	v2.xyz = in_TEXCOORD10.xyz;
	v1.xyz = v2;
	vec4 v3;
	vec4 v4;
	v4.xyzw = in_TEXCOORD11;
	v3.xyzw = v4;
	vec3 v5;
	vec3 v6;
	v6.xyz = normalize((-in_TEXCOORD8.xyz));
	v5.xyz = v6;
	vec3 v7;
	vec2 v8;
	v8.xy = ((texture(ps3,in_TEXCOORD0).xy*vec2(2.000000e+00,2.000000e+00))+vec2(-1.000000e+00,-1.000000e+00));
	vec4 v9;
	v9.w = 1.000000e+00;
	v9.xy = v8;
	v9.z = sqrt(clamp((1.000000e+00+(-dot(v8,v8))),0.000000e+00,1.000000e+00));
	vec3 v10;
	v10.xyz = v9.xyz;
	highp vec3 v11;
	v11.xyz = ((v3.xyz*v10.zzz)+(((cross(v3.xyz,v1)*v3.www)*v10.yyy)+(v1*v10.xxx)));
	vec3 v12;
	v12.xyz = normalize(v11);
	v7.xyz = v12;
	vec3 v13;
	v13.xyz = ((-v5)+((v7*vec3(dot(v7,v5)))*vec3(2.000000e+00,2.000000e+00,2.000000e+00)));
	vec3 v14;
	v14.xyz = clamp(texture(ps2,in_TEXCOORD0).xyz,vec3(0.000000e+00,0.000000e+00,0.000000e+00),vec3(1.000000e+00,1.000000e+00,1.000000e+00));
	float h15;
	h15 = (8.000000e-02*clamp(texture(ps1,in_TEXCOORD0).x,0.000000e+00,1.000000e+00));
	vec3 v16;
	vec2 v17;
	vec2 v18;
	v18.xy = ((vec2(-1.040000e+00,1.040000e+00)*vec2(((min(1.600000e-01,exp2((-9.280000e+00*max(dot(v7,v5),0.000000e+00))))*4.000000e-01)+2.600000e-02)))+vec2(6.967999e-01,-2.680000e-02));
	v17.xy = v18;
	v17.y = (v18.y*clamp((5.000000e+01*h15),0.000000e+00,1.000000e+00));
	v16.xyz = ((vec3(h15)*v18.xxx)+v17.yyy);
	vec4 v19;
	vec4 v20;
	float h21;
	vec4 v22;
	vec4 v23;
	v22.x = 2.820950e-01;
	v22.y = (-4.886030e-01*v7.y);
	v22.z = (4.886030e-01*v7.z);
	v22.w = (-4.886030e-01*v7.x);
	vec3 v24;
	v24.xyz = (v7*v7);
	v23.x = ((1.092548e+00*v7.x)*v7.y);
	v23.y = ((-1.092548e+00*v7.y)*v7.z);
	v23.z = (3.153920e-01*((3.000000e+00*v24.z)+-1.000000e+00));
	v23.w = ((-1.092548e+00*v7.x)*v7.z);
	v19.xyzw = v22;
	v19.x = 8.862275e-01;
	v19.yzw = (v22.yzw*vec3(2.094395e+00,2.094395e+00,2.094395e+00));
	v20.xyzw = (v23*vec4(7.853982e-01,7.853982e-01,7.853982e-01,7.853982e-01));
	h21 = (4.290426e-01*(v24.x+(-v24.y)));
	vec3 v25;
	v25.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	vec4 v26;
	v26.xyzw = IndirectLightingCache_IndirectLightingSHCoefficients0[0];
	vec4 v27;
	v27.xyzw = IndirectLightingCache_IndirectLightingSHCoefficients1[0];
	float h28;
	h28 = IndirectLightingCache_IndirectLightingSHCoefficients2.x;
	v25.x = ((dot(v26,v19)+dot(v27,v20))+(h28*h21));
	vec4 v29;
	v29.xyzw = IndirectLightingCache_IndirectLightingSHCoefficients0[1];
	vec4 v30;
	v30.xyzw = IndirectLightingCache_IndirectLightingSHCoefficients1[1];
	float h31;
	h31 = IndirectLightingCache_IndirectLightingSHCoefficients2.y;
	v25.y = ((dot(v29,v19)+dot(v30,v20))+(h31*h21));
	vec4 v32;
	v32.xyzw = IndirectLightingCache_IndirectLightingSHCoefficients0[2];
	vec4 v33;
	v33.xyzw = IndirectLightingCache_IndirectLightingSHCoefficients1[2];
	float h34;
	h34 = IndirectLightingCache_IndirectLightingSHCoefficients2.z;
	v25.z = ((dot(v32,v19)+dot(v33,v20))+(h34*h21));
	vec3 v35;
	v35.xyz = max(vec3(0.000000e+00,0.000000e+00,0.000000e+00),v25);
	float h36;
	h36 = dot(v35,vec3(3.000000e-01,5.900000e-01,1.100000e-01));
	highp vec3 v37;
	highp vec3 v38;
	v38.xyz = v5;
	highp vec3 v39;
	v39.xyz = MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz;
	v37.xyz = normalize((v38+v39));
	highp vec3 v40;
	vec3 v41;
	v41.xyz = v37;
	highp vec3 v42;
	v42.xyz = cross(v7,v41);
	v40.xyz = v42;
	highp float f43;
	highp vec3 v44;
	v44.xyz = v7;
	float h45;
	h45 = max(0.000000e+00,dot(v44,v37));
	highp float f46;
	f46 = (h45*3.600000e-01);
	f43 = f46;
	highp float f47;
	highp float f48;
	f48 = 3.600000e-01;
	f47 = (f48/(dot(v40,v40)+(f43*f43)));
	vec3 v49;
	highp vec3 v50;
	v50.xyz = (v14*v35);
	highp vec3 v51;
	v51.xyz = v7;
	highp vec3 v52;
	v52.xyz = MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz;
	highp float f53;
	f53 = 1.000000e+00;
	highp vec3 v54;
	v54.xyz = MobileDirectionalLight_DirectionalLightColor.xyz;
	float h55;
	h55 = min((f47*f47),6.550400e+04);
	highp vec3 v56;
	v56.xyz = (v14+(v16*vec3((4.000000e-01*h55))));
	vec3 v57;
	v57.xyz = (v50*View_IndirectLightingColorScale);
	vec3 v58;
	v58.xyz = ((vec3((f53*max(0.000000e+00,dot(v51,v52))))*v54)*v56);
	v49.xyz = (v57+v58);
	vec3 v59;
	float h60;
	h60 = float((pu_h[0].w>0.000000e+00));
	highp float f61;
	highp float f62;
	f62 = pu_h[0].w;
	highp float f63;
	highp float f64;
	f64 = View_ReflectionCubemapMaxMip;
	f63 = f64;
	f61 = (bool(h60))?(f62):(f63);
	vec4 v65;
	float h66;
	h66 = f61;
	highp float f67;
	f67 = (-2.884359e+00+h66);
	v65.xyzw = textureLod(ps0,v13,f67);
	if (bool(h60))
	{
		vec3 v68;
		v68.xyz = View_SkyLightColor.xyz;
		v59.xyz = (v65.xyz*v68);
	}
	else
	{
		vec3 v69;
		v69.xyz = (v65.xyz*vec3((v65.w*1.600000e+01)));
		float h70;
		h70 = pu_h[0].x;
		v59.xyz = ((v69*v69)*vec3(h70));
	}
	highp vec3 v71;
	highp vec4 v72;
	v72.w = 1.000000e+00;
	highp vec3 v73;
	v73.xyz = v7;
	v72.xyz = v73;
	v71.x = dot(View_SkyIrradianceEnvironmentMap[0],v72);
	v71.y = dot(View_SkyIrradianceEnvironmentMap[1],v72);
	v71.z = dot(View_SkyIrradianceEnvironmentMap[2],v72);
	highp vec3 v74;
	v74.xyz = v14;
	highp float f75;
	f75 = 1.000000e+00;
	vec3 v76;
	v76.xyz = (((max(vec3(0.000000e+00,0.000000e+00,0.000000e+00),v71)*View_SkyLightColor.xyz)*v74)*vec3(f75));
	v0.xyz = ((((v49+((v59*vec3(h36))*v16))+v76)*in_TEXCOORD7.www)+in_TEXCOORD7.xyz);
	v0.w = 0.000000e+00;
	float h77;
	h77 = min(in_TEXCOORD8.w,6.550000e+04);
	v0.w = h77;
	out_Target0.xyzw = v0;
}

