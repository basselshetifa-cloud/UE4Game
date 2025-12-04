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
#define Primitive_LocalToWorld Primitive_LocalToWorldpb1
	highp mat4 Primitive_LocalToWorld;
#define Primitive_InvNonUniformScaleAndDeterminantSign Primitive_InvNonUniformScaleAndDeterminantSignpb1
	vec4 Primitive_InvNonUniformScaleAndDeterminantSign;
#define Primitive_ObjectWorldPositionAndRadius Primitive_ObjectWorldPositionAndRadiuspb1
	highp vec4 Primitive_ObjectWorldPositionAndRadius;
#define Primitive_WorldToLocal Primitive_WorldToLocalpb1
	highp mat4 Primitive_WorldToLocal;
#define Primitive_PreviousLocalToWorld Primitive_PreviousLocalToWorldpb1
	highp mat4 Primitive_PreviousLocalToWorld;
#define Primitive_PreviousWorldToLocal Primitive_PreviousWorldToLocalpb1
	highp mat4 Primitive_PreviousWorldToLocal;
#define Primitive_ActorWorldPosition Primitive_ActorWorldPositionpb1
	highp vec3 Primitive_ActorWorldPosition;
#define Primitive_UseSingleSampleShadowFromStationaryLights Primitive_UseSingleSampleShadowFromStationaryLightspb1
	float Primitive_UseSingleSampleShadowFromStationaryLights;
#define Primitive_ObjectBounds Primitive_ObjectBoundspb1
	highp vec3 Primitive_ObjectBounds;
#define Primitive_LpvBiasMultiplier Primitive_LpvBiasMultiplierpb1
	highp float Primitive_LpvBiasMultiplier;
#define Primitive_DecalReceiverMask Primitive_DecalReceiverMaskpb1
	float Primitive_DecalReceiverMask;
#define Primitive_PerObjectGBufferData Primitive_PerObjectGBufferDatapb1
	float Primitive_PerObjectGBufferData;
#define Primitive_UseVolumetricLightmapShadowFromStationaryLights Primitive_UseVolumetricLightmapShadowFromStationaryLightspb1
	float Primitive_UseVolumetricLightmapShadowFromStationaryLights;
#define Primitive_UseEditorDepthTest Primitive_UseEditorDepthTestpb1
	float Primitive_UseEditorDepthTest;
#define Primitive_ObjectOrientation Primitive_ObjectOrientationpb1
	vec4 Primitive_ObjectOrientation;
#define Primitive_NonUniformScale Primitive_NonUniformScalepb1
	vec4 Primitive_NonUniformScale;
#define Primitive_LocalObjectBoundsMin Primitive_LocalObjectBoundsMinpb1
	highp vec3 Primitive_LocalObjectBoundsMin;
#define PrePadding_Primitive_380 PrePadding_Primitive_380pb1
	highp float PrePadding_Primitive_380;
#define Primitive_LocalObjectBoundsMax Primitive_LocalObjectBoundsMaxpb1
	highp vec3 Primitive_LocalObjectBoundsMax;
#define Primitive_LightingChannelMask Primitive_LightingChannelMaskpb1
	highp uint Primitive_LightingChannelMask;
#define Primitive_LightmapDataIndex Primitive_LightmapDataIndexpb1
	highp uint Primitive_LightmapDataIndex;
#define Primitive_SingleCaptureIndex Primitive_SingleCaptureIndexpb1
	highp int Primitive_SingleCaptureIndex;
};

layout(std140) uniform pb2
{
#define IndirectLightingCache_IndirectLightingCachePrimitiveAdd IndirectLightingCache_IndirectLightingCachePrimitiveAddpb2
	highp vec3 IndirectLightingCache_IndirectLightingCachePrimitiveAdd;
#define PrePadding_IndirectLightingCache_12 PrePadding_IndirectLightingCache_12pb2
	highp float PrePadding_IndirectLightingCache_12;
#define IndirectLightingCache_IndirectLightingCachePrimitiveScale IndirectLightingCache_IndirectLightingCachePrimitiveScalepb2
	highp vec3 IndirectLightingCache_IndirectLightingCachePrimitiveScale;
#define PrePadding_IndirectLightingCache_28 PrePadding_IndirectLightingCache_28pb2
	highp float PrePadding_IndirectLightingCache_28;
#define IndirectLightingCache_IndirectLightingCacheMinUV IndirectLightingCache_IndirectLightingCacheMinUVpb2
	highp vec3 IndirectLightingCache_IndirectLightingCacheMinUV;
#define PrePadding_IndirectLightingCache_44 PrePadding_IndirectLightingCache_44pb2
	highp float PrePadding_IndirectLightingCache_44;
#define IndirectLightingCache_IndirectLightingCacheMaxUV IndirectLightingCache_IndirectLightingCacheMaxUVpb2
	highp vec3 IndirectLightingCache_IndirectLightingCacheMaxUV;
#define PrePadding_IndirectLightingCache_60 PrePadding_IndirectLightingCache_60pb2
	highp float PrePadding_IndirectLightingCache_60;
#define IndirectLightingCache_PointSkyBentNormal IndirectLightingCache_PointSkyBentNormalpb2
	highp vec4 IndirectLightingCache_PointSkyBentNormal;
#define IndirectLightingCache_DirectionalLightShadowing IndirectLightingCache_DirectionalLightShadowingpb2
	float IndirectLightingCache_DirectionalLightShadowing;
#define PrePadding_IndirectLightingCache_84 PrePadding_IndirectLightingCache_84pb2
	float PrePadding_IndirectLightingCache_84;
#define PrePadding_IndirectLightingCache_88 PrePadding_IndirectLightingCache_88pb2
	float PrePadding_IndirectLightingCache_88;
#define PrePadding_IndirectLightingCache_92 PrePadding_IndirectLightingCache_92pb2
	float PrePadding_IndirectLightingCache_92;
#define IndirectLightingCache_IndirectLightingSHCoefficients0 IndirectLightingCache_IndirectLightingSHCoefficients0pb2
	highp vec4 IndirectLightingCache_IndirectLightingSHCoefficients0[3];
#define IndirectLightingCache_IndirectLightingSHCoefficients1 IndirectLightingCache_IndirectLightingSHCoefficients1pb2
	highp vec4 IndirectLightingCache_IndirectLightingSHCoefficients1[3];
#define IndirectLightingCache_IndirectLightingSHCoefficients2 IndirectLightingCache_IndirectLightingSHCoefficients2pb2
	highp vec4 IndirectLightingCache_IndirectLightingSHCoefficients2;
#define IndirectLightingCache_IndirectLightingSHSingleCoefficient IndirectLightingCache_IndirectLightingSHSingleCoefficientpb2
	vec4 IndirectLightingCache_IndirectLightingSHSingleCoefficient;
};

layout(std140) uniform pb3
{
#define MobileDirectionalLight_DirectionalLightColor MobileDirectionalLight_DirectionalLightColorpb3
	vec4 MobileDirectionalLight_DirectionalLightColor;
#define MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition MobileDirectionalLight_DirectionalLightDirectionAndShadowTransitionpb3
	vec4 MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition;
#define MobileDirectionalLight_DirectionalLightShadowSize MobileDirectionalLight_DirectionalLightShadowSizepb3
	vec4 MobileDirectionalLight_DirectionalLightShadowSize;
#define MobileDirectionalLight_DirectionalLightDistanceFadeMAD MobileDirectionalLight_DirectionalLightDistanceFadeMADpb3
	vec4 MobileDirectionalLight_DirectionalLightDistanceFadeMAD;
#define MobileDirectionalLight_DirectionalLightShadowDistances MobileDirectionalLight_DirectionalLightShadowDistancespb3
	vec4 MobileDirectionalLight_DirectionalLightShadowDistances;
#define MobileDirectionalLight_DirectionalLightScreenToShadow MobileDirectionalLight_DirectionalLightScreenToShadowpb3
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
	vec3 v3;
	v3.xyz = in_TEXCOORD10.xyz;
	v2.xyz = v3;
	vec4 v4;
	vec4 v5;
	v5.xyzw = in_TEXCOORD11;
	v4.xyzw = v5;
	vec3 v6;
	vec3 v7;
	v7.xyz = normalize((-in_TEXCOORD8.xyz));
	v6.xyz = v7;
	vec3 v8;
	vec2 v9;
	v9.xy = ((texture(ps3,in_TEXCOORD0).xy*vec2(2.000000e+00,2.000000e+00))+vec2(-1.000000e+00,-1.000000e+00));
	vec4 v10;
	v10.w = 1.000000e+00;
	v10.xy = v9;
	v10.z = sqrt(clamp((1.000000e+00+(-dot(v9,v9))),0.000000e+00,1.000000e+00));
	vec3 v11;
	v11.xyz = v10.xyz;
	highp vec3 v12;
	v12.xyz = ((v4.xyz*v11.zzz)+(((cross(v4.xyz,v2)*v4.www)*v11.yyy)+(v2*v11.xxx)));
	vec3 v13;
	v13.xyz = normalize(v12);
	v8.xyz = v13;
	vec3 v14;
	v14.xyz = ((-v6)+((v8*vec3(dot(v8,v6)))*vec3(2.000000e+00,2.000000e+00,2.000000e+00)));
	vec3 v15;
	v15.xyz = clamp(texture(ps2,in_TEXCOORD0).xyz,vec3(0.000000e+00,0.000000e+00,0.000000e+00),vec3(1.000000e+00,1.000000e+00,1.000000e+00));
	float h16;
	h16 = (8.000000e-02*clamp(texture(ps1,in_TEXCOORD0).x,0.000000e+00,1.000000e+00));
	vec3 v17;
	vec2 v18;
	vec2 v19;
	v19.xy = ((vec2(-1.040000e+00,1.040000e+00)*vec2(((min(1.225000e-01,exp2((-9.280000e+00*max(dot(v8,v6),0.000000e+00))))*3.500000e-01)+2.462500e-02)))+vec2(6.682000e-01,-2.570000e-02));
	v18.xy = v19;
	v18.y = (v19.y*clamp((5.000000e+01*h16),0.000000e+00,1.000000e+00));
	v17.xyz = ((vec3(h16)*v19.xxx)+v18.yyy);
	vec4 v20;
	vec4 v21;
	float h22;
	vec4 v23;
	vec4 v24;
	v23.x = 2.820950e-01;
	v23.y = (-4.886030e-01*v8.y);
	v23.z = (4.886030e-01*v8.z);
	v23.w = (-4.886030e-01*v8.x);
	vec3 v25;
	v25.xyz = (v8*v8);
	v24.x = ((1.092548e+00*v8.x)*v8.y);
	v24.y = ((-1.092548e+00*v8.y)*v8.z);
	v24.z = (3.153920e-01*((3.000000e+00*v25.z)+-1.000000e+00));
	v24.w = ((-1.092548e+00*v8.x)*v8.z);
	v20.xyzw = v23;
	v20.x = 8.862275e-01;
	v20.yzw = (v23.yzw*vec3(2.094395e+00,2.094395e+00,2.094395e+00));
	v21.xyzw = (v24*vec4(7.853982e-01,7.853982e-01,7.853982e-01,7.853982e-01));
	h22 = (4.290426e-01*(v25.x+(-v25.y)));
	vec3 v26;
	v26.xyz = vec3(0.000000e+00,0.000000e+00,0.000000e+00);
	vec4 v27;
	v27.xyzw = IndirectLightingCache_IndirectLightingSHCoefficients0[0];
	vec4 v28;
	v28.xyzw = IndirectLightingCache_IndirectLightingSHCoefficients1[0];
	float h29;
	h29 = IndirectLightingCache_IndirectLightingSHCoefficients2.x;
	v26.x = ((dot(v27,v20)+dot(v28,v21))+(h29*h22));
	vec4 v30;
	v30.xyzw = IndirectLightingCache_IndirectLightingSHCoefficients0[1];
	vec4 v31;
	v31.xyzw = IndirectLightingCache_IndirectLightingSHCoefficients1[1];
	float h32;
	h32 = IndirectLightingCache_IndirectLightingSHCoefficients2.y;
	v26.y = ((dot(v30,v20)+dot(v31,v21))+(h32*h22));
	vec4 v33;
	v33.xyzw = IndirectLightingCache_IndirectLightingSHCoefficients0[2];
	vec4 v34;
	v34.xyzw = IndirectLightingCache_IndirectLightingSHCoefficients1[2];
	float h35;
	h35 = IndirectLightingCache_IndirectLightingSHCoefficients2.z;
	v26.z = ((dot(v33,v20)+dot(v34,v21))+(h35*h22));
	vec3 v36;
	v36.xyz = max(vec3(0.000000e+00,0.000000e+00,0.000000e+00),v26);
	float h37;
	h37 = dot(v36,vec3(3.000000e-01,5.900000e-01,1.100000e-01));
	highp vec3 v38;
	v38.xyz = (v15*v36);
	vec3 v39;
	v39.xyz = (v38*View_IndirectLightingColorScale);
	v1.xyz = v39;
	float h40;
	h40 = (((Primitive_UseSingleSampleShadowFromStationaryLights>0.000000e+00)&&(View_IndirectLightingCacheShowFlag>0.000000e+00)))?(IndirectLightingCache_DirectionalLightShadowing):(1.000000e+00);
	highp vec3 v41;
	highp vec3 v42;
	v42.xyz = v6;
	highp vec3 v43;
	v43.xyz = MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz;
	v41.xyz = normalize((v42+v43));
	highp vec3 v44;
	vec3 v45;
	v45.xyz = v41;
	highp vec3 v46;
	v46.xyz = cross(v8,v45);
	v44.xyz = v46;
	highp float f47;
	highp vec3 v48;
	v48.xyz = v8;
	float h49;
	h49 = max(0.000000e+00,dot(v48,v41));
	highp float f50;
	f50 = (h49*4.225000e-01);
	f47 = f50;
	highp float f51;
	highp float f52;
	f52 = 4.225000e-01;
	f51 = (f52/(dot(v44,v44)+(f47*f47)));
	vec3 v53;
	highp vec3 v54;
	v54.xyz = v8;
	highp vec3 v55;
	v55.xyz = MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz;
	highp float f56;
	f56 = h40;
	highp vec3 v57;
	v57.xyz = MobileDirectionalLight_DirectionalLightColor.xyz;
	float h58;
	h58 = min((f51*f51),6.550400e+04);
	highp vec3 v59;
	v59.xyz = (v15+(v17*vec3((4.125000e-01*h58))));
	vec3 v60;
	v60.xyz = ((vec3((f56*max(0.000000e+00,dot(v54,v55))))*v57)*v59);
	v53.xyz = (v1+v60);
	vec3 v61;
	float h62;
	h62 = float((pu_h[0].w>0.000000e+00));
	highp float f63;
	highp float f64;
	f64 = pu_h[0].w;
	highp float f65;
	highp float f66;
	f66 = View_ReflectionCubemapMaxMip;
	f65 = f66;
	f63 = (bool(h62))?(f64):(f65);
	vec4 v67;
	float h68;
	h68 = f63;
	highp float f69;
	f69 = (-2.745786e+00+h68);
	v67.xyzw = textureLod(ps0,v14,f69);
	if (bool(h62))
	{
		vec3 v70;
		v70.xyz = View_SkyLightColor.xyz;
		v61.xyz = (v67.xyz*v70);
	}
	else
	{
		vec3 v71;
		v71.xyz = (v67.xyz*vec3((v67.w*1.600000e+01)));
		float h72;
		h72 = pu_h[0].x;
		v61.xyz = ((v71*v71)*vec3(h72));
	}
	highp vec3 v73;
	highp vec4 v74;
	v74.w = 1.000000e+00;
	highp vec3 v75;
	v75.xyz = v8;
	v74.xyz = v75;
	v73.x = dot(View_SkyIrradianceEnvironmentMap[0],v74);
	v73.y = dot(View_SkyIrradianceEnvironmentMap[1],v74);
	v73.z = dot(View_SkyIrradianceEnvironmentMap[2],v74);
	highp vec3 v76;
	v76.xyz = v15;
	highp float f77;
	f77 = 1.000000e+00;
	vec3 v78;
	v78.xyz = (((max(vec3(0.000000e+00,0.000000e+00,0.000000e+00),v73)*View_SkyLightColor.xyz)*v76)*vec3(f77));
	v0.xyz = ((((v53+((v61*vec3(h37))*v17))+v78)*in_TEXCOORD7.www)+in_TEXCOORD7.xyz);
	v0.w = 0.000000e+00;
	float h79;
	h79 = min(in_TEXCOORD8.w,6.550000e+04);
	v0.w = h79;
	out_Target0.xyzw = v0;
}

