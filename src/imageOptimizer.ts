import sharp from 'sharp';

/**
 * Optimize an image
 * @param {Buffer} inputBuffer - The input image buffer
 * @param {string} format - The desired output format (jpeg, png, webp)
 * @param {number} quality - The quality level (0-100)
 * @returns {Promise<Buffer>} - The optimized image buffer
 */
export async function optimizeImage(inputBuffer: Buffer, format: 'jpeg' | 'png' | 'webp' = 'jpeg', quality: number = 80): Promise<Buffer> {
  try {
    return await sharp(inputBuffer)
      .toFormat(format, { quality })
      .toBuffer();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Image optimization failed: ${error.message}`);
    } else {
      throw new Error('Image optimization failed: Unknown error');
    }
  }
}
