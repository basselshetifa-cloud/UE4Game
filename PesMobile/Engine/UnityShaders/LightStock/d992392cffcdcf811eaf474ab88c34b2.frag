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
#define PrecomputedLightingBuffer_StaticShadowMapMasks PrecomputedLightingBuffer_StaticShadowMapMaskspb1
	highp vec4 PrecomputedLightingBuffer_StaticShadowMapMasks;
#define PrecomputedLightingBuffer_InvUniformPenumbraSizes PrecomputedLightingBuffer_InvUniformPenumbraSizespb1
	highp vec4 PrecomputedLightingBuffer_InvUniformPenumbraSizes;
#define PrecomputedLightingBuffer_LightMapCoordinateScaleBias PrecomputedLightingBuffer_LightMapCoordinateScaleBiaspb1
	highp vec4 PrecomputedLightingBuffer_LightMapCoordinateScaleBias;
#define PrecomputedLightingBuffer_ShadowMapCoordinateScaleBias PrecomputedLightingBuffer_ShadowMapCoordinateScaleBiaspb1
	highp vec4 PrecomputedLightingBuffer_ShadowMapCoordinateScaleBias;
#define PrecomputedLightingBuffer_LightMapScale PrecomputedLightingBuffer_LightMapScalepb1
	vec4 PrecomputedLightingBuffer_LightMapScale[2];
#define PrecomputedLightingBuffer_LightMapAdd PrecomputedLightingBuffer_LightMapAddpb1
	vec4 PrecomputedLightingBuffer_LightMapAdd[2];
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

layout(std140) uniform pb3
{
#define Material_VectorExpressions Material_VectorExpressionspb3
	vec4 Material_VectorExpressions[4];
#define Material_ScalarExpressions Material_ScalarExpressionspb3
	vec4 Material_ScalarExpressions[1];
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
uniform highp sampler2D ps0;
uniform highp sampler2D ps1;
uniform highp sampler2D ps2;
uniform highp sampler2D ps3;
uniform highp sampler2D ps4;
INTERFACE_LOCATION(0) in highp vec4 in_TEXCOORD10;
INTERFACE_LOCATION(1) in highp vec4 in_TEXCOORD11;
INTERFACE_LOCATION(2) in highp vec4 in_TEXCOORD0;
INTERFACE_LOCATION(3) in highp vec4 in_TEXCOORD4;
INTERFACE_LOCATION(4) in vec4 in_TEXCOORD7;
INTERFACE_LOCATION(5) in highp vec4 in_TEXCOORD8;
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
	vec3 v8;
	v8.xyz = vec3(0.000000e+00,0.000000e+00,1.000000e+00);
	highp vec3 v9;
	v9.xyz = ((v3.xyz*v8.zzz)+(((cross(v3.xyz,v1)*v3.www)*v8.yyy)+(v1*v8.xxx)));
	vec3 v10;
	v10.xyz = normalize(v9);
	v7.xyz = v10;
	vec4 v11;
	vec2 v12;
	v12.xy = in_TEXCOORD0.xy;
	highp vec2 v13;
	v13.xy = (v12*Material_ScalarExpressions[0].xx);
	v11.xyzw = texture(ps3,v13);
	float h14;
	h14 = min(max((v11.w*pow(max((1.000000e+00+(-v5.z)),0.000000e+00),1.000000e+01)),0.000000e+00),1.000000e+00);
	vec2 v15;
	v15.x = v5.x;
	v15.y = v5.y;
	vec3 v16;
	v16.xy = v15;
	v16.z = v5.z;
	vec2 v17;
	v17.x = v5.x;
	v17.y = v5.y;
	vec3 v18;
	v18.xy = v17;
	v18.z = v5.z;
	vec2 v19;
	v19.x = v5.x;
	v19.y = v5.y;
	vec3 v20;
	v20.xy = v19;
	v20.z = v5.z;
	vec3 v21;
	v21.xyz = (v20/vec3(sqrt(dot(v16,v18))));
	float h22;
	h22 = abs(v5.x);
	float h23;
	h23 = abs(v5.y);
	vec4 v24;
	v24.xyzw = texture(ps2,in_TEXCOORD0.xy);
	float h25;
	h25 = ((v24.x*2.000000e+00)+-1.000000e+00);
	float h26;
	h26 = ((v24.y*2.000000e+00)+-1.000000e+00);
	float h27;
	h27 = abs((h22+(-h23)));
	vec2 v28;
	v28.x = h25;
	v28.y = (h26*(h23/h22));
	vec2 v29;
	v29.x = (h25*(h22/h23));
	v29.y = h26;
	vec2 v30;
	v30.xy = ((h22>=h23))?(v28):(v29);
	vec2 v31;
	v31.x = h25;
	v31.y = h26;
	vec2 v32;
	v32.xy = ((h27>1.000000e-05))?(v30):(v31);
	float h33;
	h33 = ((v24.z*2.000000e+00)+-1.000000e+00);
	vec2 v34;
	v34.x = v32.x;
	v34.y = v32.y;
	vec3 v35;
	v35.xy = v34;
	v35.z = h33;
	vec2 v36;
	v36.x = v32.x;
	v36.y = v32.y;
	vec3 v37;
	v37.xy = v36;
	v37.z = h33;
	vec2 v38;
	v38.x = v32.x;
	v38.y = v32.y;
	vec3 v39;
	v39.xy = v38;
	v39.z = h33;
	float h40;
	h40 = ((dot(v21,(v39/vec3(sqrt(dot(v35,v37)))))*4.000000e-01)+6.000000e-01);
	vec3 v41;
	vec3 v42;
	v42.xyz = View_ViewToTranslatedWorld[2].xyz;
	v41.xyz = v42;
	vec2 v43;
	v43.x = v41.x;
	v43.y = v41.y;
	vec4 v44;
	v44.xyzw = texture(ps1,in_TEXCOORD0.zw);
	vec3 v45;
	v45.xyz = (mix(vec3(0.000000e+00,0.000000e+00,0.000000e+00),vec3(8.755540e-01,1.000000e+00,0.000000e+00),(vec3((h14*pow(max((h40*pow(max(v24.w,0.000000e+00),4.000000e+00)),0.000000e+00),5.000000e-01)))*(vec3(((-6.500000e-01*dot(vec2(-8.944272e-01,-4.472136e-01),v43))+3.500000e-01))*mix(vec3(1.770830e-01,1.770830e-01,1.770830e-01),vec3(1.000000e+00,1.000000e+00,1.000000e+00),v44.xxx))))*vec3(5.000000e-01,5.000000e-01,5.000000e-01));
	vec3 v46;
	v46.xyz = ((texture(ps0,in_TEXCOORD0.xy).xyz*Material_ScalarExpressions[0].yyy)+(Material_ScalarExpressions[0].zzz*v11.xyz));
	vec3 v47;
	v47.xyz = mix(vec3(7.500000e-01,7.500000e-01,7.500000e-01),vec3(4.000000e-01,4.000000e-01,4.000000e-01),vec3(h40));
	vec3 v48;
	v48.xyz = (vec3(1.000000e+00,1.000000e+00,1.000000e+00)+(-(((vec3(1.000000e+00,1.000000e+00,1.000000e+00)+(-v46))*vec3(2.000000e+00,2.000000e+00,2.000000e+00))*(vec3(1.000000e+00,1.000000e+00,1.000000e+00)+(-v47)))));
	vec3 v49;
	v49.xyz = ((v46*vec3(2.000000e+00,2.000000e+00,2.000000e+00))*v47);
	float h50;
	float h51;
	h51 = v48.x;
	float h52;
	h52 = v49.x;
	h50 = ((v46.x>=5.000000e-01))?(h51):(h52);
	float h53;
	float h54;
	h54 = v48.y;
	float h55;
	h55 = v49.y;
	h53 = ((v46.y>=5.000000e-01))?(h54):(h55);
	float h56;
	float h57;
	h57 = v48.z;
	float h58;
	h58 = v49.z;
	h56 = ((v46.z>=5.000000e-01))?(h57):(h58);
	vec2 v59;
	v59.x = h50;
	v59.y = h53;
	vec3 v60;
	v60.xy = v59;
	v60.z = h56;
	vec3 v61;
	v61.xyz = clamp(((v60+(Material_VectorExpressions[1].xyz*v44.xxx))+((vec3(1.000000e+00,1.000000e+00,1.000000e+00)+(-v44.xxx))*Material_VectorExpressions[3].xyz)),vec3(0.000000e+00,0.000000e+00,0.000000e+00),vec3(1.000000e+00,1.000000e+00,1.000000e+00));
	highp vec2 v62;
	v62.xy = (in_TEXCOORD4.xy*vec2(1.000000e+00,5.000000e-01));
	vec3 v63;
	v63.xyz = ((texture(ps4,v62).xyz*PrecomputedLightingBuffer_LightMapScale[0].xyz)+PrecomputedLightingBuffer_LightMapAdd[0].xyz);
	float h64;
	h64 = dot(v63,vec3(3.000000e-01,5.900000e-01,1.100000e-01));
	highp vec4 v65;
	v65.w = 1.000000e+00;
	highp vec3 v66;
	v66.xyz = v7.yzx;
	v65.xyz = v66;
	highp vec3 v67;
	highp vec4 v68;
	v68.w = 1.000000e+00;
	highp vec3 v69;
	v69.xyz = v7;
	v68.xyz = v69;
	v67.x = dot(View_SkyIrradianceEnvironmentMap[0],v68);
	v67.y = dot(View_SkyIrradianceEnvironmentMap[1],v68);
	v67.z = dot(View_SkyIrradianceEnvironmentMap[2],v68);
	highp vec4 v70;
	v70.xyzw = ((texture(ps4,(v62+vec2(0.000000e+00,5.000000e-01)))*PrecomputedLightingBuffer_LightMapScale[1])+PrecomputedLightingBuffer_LightMapAdd[1]);
	float h71;
	h71 = max(0.000000e+00,dot(v70,v65));
	highp vec3 v72;
	v72.xyz = ((v63*vec3((((exp2(((h64*1.600000e+01)+-8.000000e+00))+-3.906250e-03)*h71)/h64)))*v61);
	highp vec3 v73;
	v73.xyz = v7;
	highp vec3 v74;
	v74.xyz = MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz;
	highp float f75;
	f75 = 1.000000e+00;
	highp vec3 v76;
	v76.xyz = MobileDirectionalLight_DirectionalLightColor.xyz;
	highp vec3 v77;
	v77.xyz = v61;
	vec3 v78;
	v78.xyz = (v72*View_IndirectLightingColorScale);
	vec3 v79;
	v79.xyz = ((vec3((f75*max(0.000000e+00,dot(v73,v74))))*v76)*v77);
	highp vec3 v80;
	v80.xyz = v61;
	highp float f81;
	f81 = 1.000000e+00;
	vec3 v82;
	v82.xyz = (((max(vec3(0.000000e+00,0.000000e+00,0.000000e+00),v67)*View_SkyLightColor.xyz)*v80)*vec3(f81));
	v0.xyz = (((((v78+v79)+v82)+max(v45,vec3(0.000000e+00,0.000000e+00,0.000000e+00)))*in_TEXCOORD7.www)+in_TEXCOORD7.xyz);
	v0.w = 0.000000e+00;
	float h83;
	h83 = min(in_TEXCOORD8.w,6.550000e+04);
	v0.w = h83;
	out_Target0.xyzw = v0;
}

