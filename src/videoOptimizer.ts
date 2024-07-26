import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

const ffmpeg = createFFmpeg({ log: false });

/**
 * Optimize a video
 * @param {File} inputFile - The input video file
 * @param {string} outputFormat - The desired output format (mp4, webm)
 * @param {number} quality - The quality level (lower is better quality, 23 is default)
 * @returns {Promise<Blob>} - The optimized video blob
 */
export async function optimizeVideo(inputFile: File, outputFormat: 'mp4' | 'webm' = 'mp4', quality: number = 23): Promise<Blob> {
  if (!ffmpeg.isLoaded()) await ffmpeg.load();

  try {
    ffmpeg.FS('writeFile', 'input', await fetchFile(inputFile));
    await ffmpeg.run('-i', 'input', '-crf', quality.toString(), `output.${outputFormat}`);
    const data = ffmpeg.FS('readFile', `output.${outputFormat}`);
    return new Blob([data.buffer], { type: `video/${outputFormat}` });
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Video optimization failed: ${error.message}`);
    } else {
      throw new Error('Video optimization failed: Unknown error');
    }
  }
}
