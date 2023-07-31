import { ScreenCaptureOptions } from "@uppy/screen-capture";
import { WebcamOptions } from "@uppy/webcam";
import { ImageEditorOptions } from "@uppy/image-editor";
import { AwsS3Options } from "@uppy/aws-s3";
import { CompressorOptions } from "@uppy/compressor";
import { PluginOptions, UppyOptions } from "@uppy/core";

export const webcamConfig: WebcamOptions = {
  countdown: true,
  modes: ["video-audio", "video-only", "audio-only", "picture"],
  mirror: false,
  showRecordingLength: true,
  facingMode: "environment",
  showVideoSourceDropdown: true,
  videoConstraints: {
    facingMode: "environment",
  },
};
export const screenCaptureConfig: ScreenCaptureOptions = {
  displayMediaConstraints: {
    video: {
      width: 1280,
      height: 720,
      frameRate: {
        ideal: 3,
        max: 5,
      },
      cursor: "motion",
      displaySurface: "monitor",
    },
  },
  userMediaConstraints: {
    audio: true,
  },
  preferredVideoMimeType: "video/webm",
};
export const imageEditorConfig: ImageEditorOptions = {
  id: "ImageEditor",
  quality: 0.3,
  cropperOptions: {
    viewMode: 1,
    aspectRatio: 1,
    background: false,
    responsive: true,
    autoCropArea: 0.8,
    autoCrop: true,
    croppedCanvasOptions: {},
  },
  actions: {
    revert: true,
    rotate: true,
    flip: true,
    zoomIn: true,
    zoomOut: true,
    cropSquare: true,
    cropWidescreen: true,
    cropWidescreenVertical: true,
    granularRotate: true,
  },
};
export const awsS3Config: AwsS3Options = {
  limit: 4,
  companionUrl: process.env.NEXT_PUBLIC_COMPANION_URL,
};

export const compressorConfig: CompressorOptions = {
  quality: 0.3,
  limit: 10,
};

export const setUppyOptions: Partial<UppyOptions<Record<string, unknown>>> = {
  locale: {
    strings: {
      cancel: "Cancel",
      done: "Cancel",
    },
  },
};

export const onBeforeUpload = (files: any, uploadPath: string) => {
  for (var prop in files) {
    const rand = 1 + Math.random() * (1000 - 1);
    const _value = Math.ceil(rand);
    files[prop].name = `${uploadPath}/` + _value + files[prop].name;
    files[prop].meta.name = `${uploadPath}/` + _value + files[prop].meta.name;
  }
  return files;
};
