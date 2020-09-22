import { getCodecs, getDecoders, getDemuxers, getEncoders, getFFmpegPath, getMuxers, getVersion } from '../src/lib';
import { promises } from 'fs';
import pkg from '../package.json';

const ffmpegPath = getFFmpegPath();

async function main(): Promise<void> {
  const decoders = await getDecoders(ffmpegPath);
  const encoders = await getEncoders(ffmpegPath);
  const codecs = await getCodecs(ffmpegPath);
  const demuxers = await getDemuxers(ffmpegPath);
  const muxers = await getMuxers(ffmpegPath);

  const addQuotes = (name: string) => `'${name}'`;

  const code = `\
/* eslint-disable */
// DO NOT EDIT THIS FILE! This file is generated by build scripts.
// Copyright (c) 2020 Federico Carboni. ${pkg.license}.
// Generated on ${new Date().toUTCString()}
// ffmpeg version ${(await getVersion()).version}
export type Muxer = ${Array.from(muxers).map(addQuotes).join(' | ')};
export type Demuxer = ${Array.from(demuxers).map(addQuotes).join(' | ')};
export type VideoEncoder = ${Array.from(encoders.video).map(addQuotes).join(' | ')};
export type VideoDecoder = ${Array.from(decoders.video).map(addQuotes).join(' | ')};
export type VideoCodec = ${Array.from(codecs.video).map(addQuotes).join(' | ')};
export type AudioEncoder = ${Array.from(encoders.audio).map(addQuotes).join(' | ')};
export type AudioDecoder = ${Array.from(decoders.audio).map(addQuotes).join(' | ')};
export type AudioCodec = ${Array.from(codecs.audio).map(addQuotes).join(' | ')};
export type SubtitleEncoder = ${Array.from(encoders.subtitle).map(addQuotes).join(' | ')};
export type SubtitleDecoder = ${Array.from(decoders.subtitle).map(addQuotes).join(' | ')};
export type SubtitleCodec = ${Array.from(codecs.subtitle).map(addQuotes).join(' | ')};
export type DataCodec = ${Array.from(codecs.data).map(addQuotes).join(' | ')};
export type PixelFormat = 'yuv420p' | 'yuyv422' | 'rgb24' | 'bgr24' | 'yuv422p' | 'yuv444p' | 'yuv410p' | 'yuv411p' | 'gray' | 'monow' | 'monob' | 'pal8' | 'yuvj420p' | 'yuvj422p' | 'yuvj444p' | 'uyvy422' | 'uyyvyy411' | 'bgr8' | 'bgr4' | 'bgr4_byte' | 'rgb8' | 'rgb4' | 'rgb4_byte' | 'nv12' | 'nv21' | 'argb' | 'rgba' | 'abgr' | 'bgra' | 'gray16be' | 'gray16le' | 'yuv440p' | 'yuvj440p' | 'yuva420p' | 'rgb48be' | 'rgb48le' | 'rgb565be' | 'rgb565le' | 'rgb555be' | 'rgb555le' | 'bgr565be' | 'bgr565le' | 'bgr555be' | 'bgr555le' | 'vaapi_moco' | 'vaapi_idct' | 'vaapi_vld' | 'yuv420p16le' | 'yuv420p16be' | 'yuv422p16le' | 'yuv422p16be' | 'yuv444p16le' | 'yuv444p16be' | 'dxva2_vld' | 'rgb444le' | 'rgb444be' | 'bgr444le' | 'bgr444be' | 'ya8' | 'bgr48be' | 'bgr48le' | 'yuv420p9be' | 'yuv420p9le' | 'yuv420p10be' | 'yuv420p10le' | 'yuv422p10be' | 'yuv422p10le' | 'yuv444p9be' | 'yuv444p9le' | 'yuv444p10be' | 'yuv444p10le' | 'yuv422p9be' | 'yuv422p9le' | 'gbrp' | 'gbrp9be' | 'gbrp9le' | 'gbrp10be' | 'gbrp10le' | 'gbrp16be' | 'gbrp16le' | 'yuva422p' | 'yuva444p' | 'yuva420p9be' | 'yuva420p9le' | 'yuva422p9be' | 'yuva422p9le' | 'yuva444p9be' | 'yuva444p9le' | 'yuva420p10be' | 'yuva420p10le' | 'yuva422p10be' | 'yuva422p10le' | 'yuva444p10be' | 'yuva444p10le' | 'yuva420p16be' | 'yuva420p16le' | 'yuva422p16be' | 'yuva422p16le' | 'yuva444p16be' | 'yuva444p16le' | 'vdpau' | 'xyz12le' | 'xyz12be' | 'nv16' | 'nv20le' | 'nv20be' | 'rgba64be' | 'rgba64le' | 'bgra64be' | 'bgra64le' | 'yvyu422' | 'ya16be' | 'ya16le' | 'gbrap' | 'gbrap16be' | 'gbrap16le' | 'qsv' | 'mmal' | 'd3d11va_vld' | 'cuda' | '0rgb' | 'rgb0' | '0bgr' | 'bgr0' | 'yuv420p12be' | 'yuv420p12le' | 'yuv420p14be' | 'yuv420p14le' | 'yuv422p12be' | 'yuv422p12le' | 'yuv422p14be' | 'yuv422p14le' | 'yuv444p12be' | 'yuv444p12le' | 'yuv444p14be' | 'yuv444p14le' | 'gbrp12be' | 'gbrp12le' | 'gbrp14be' | 'gbrp14le' | 'yuvj411p' | 'bayer_bggr8' | 'bayer_rggb8' | 'bayer_gbrg8' | 'bayer_grbg8' | 'bayer_bggr16le' | 'bayer_bggr16be' | 'bayer_rggb16le' | 'bayer_rggb16be' | 'bayer_gbrg16le' | 'bayer_gbrg16be' | 'bayer_grbg16le' | 'bayer_grbg16be' | 'xvmc' | 'yuv440p10le' | 'yuv440p10be' | 'yuv440p12le' | 'yuv440p12be' | 'ayuv64le' | 'ayuv64be' | 'videotoolbox_vld' | 'p010le' | 'p010be' | 'gbrap12be' | 'gbrap12le' | 'gbrap10be' | 'gbrap10le' | 'mediacodec' | 'gray12be' | 'gray12le' | 'gray10be' | 'gray10le' | 'p016le' | 'p016be' | 'd3d11' | 'gray9be' | 'gray9le' | 'gbrpf32be' | 'gbrpf32le' | 'gbrapf32be' | 'gbrapf32le' | 'drm_prime' | 'opencl' | 'gray14be' | 'gray14le' | 'grayf32be' | 'grayf32le' | 'yuva422p12be' | 'yuva422p12le' | 'yuva444p12be' | 'yuva444p12le' | 'nv24' | 'nv42';
export type SampleFormat = 'u8' | 's16' | 's32' | 'flt' | 'dbl' | 'u8p' | 's16p' | 's32p' | 'fltp' | 'dblp' | 's64' | 's64p';
export type ChannelLayout = 'mono' | 'stereo' | '2.1' | '3.0' | '3.0(back)' | '4.0' | 'quad' | 'quad(side)' | '3.1' | '5.0' | '5.0(side)' | '4.1' | '5.1' | '5.1(side)' | '6.0' | '6.0(front)' | 'hexagonal' | '6.1' | '6.1(back)' | '6.1(front)' | '7.0' | '7.0(front)' | '7.1' | '7.1(wide)' | '7.1(wide-side)' | 'octagonal' | 'hexadecagonal' | 'downmix';
export type ChromaLocation = 'left' | 'center' | 'topleft' | 'top' | 'bottomleft' | 'bottom';
export type FieldOrder = 'progressive' | 'tt' | 'bb' | 'tb' | 'bt';
export type ColorRange = 'limited' | 'tv' | 'mpeg' | 'full' | 'pc' | 'jpeg';
export type ColorSpace = 'gbr' | 'bt709' | 'fcc' | 'bt470bg' | 'smpte170m' | 'smpte240m' | 'ycgco' | 'bt2020nc' | 'bt2020c' | 'smpte2085' | 'chroma-derived-nc' | 'chroma-derived-c' | 'ictcp';
`;
  await promises.writeFile('src/_types.ts', code);
}
main();
