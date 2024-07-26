import { optimizeImage } from '../src/imageOptimizer';
import * as fs from 'fs';
import * as path from 'path';

test('optimizeImage should return a buffer', async () => {
  const inputBuffer = fs.readFileSync(path.resolve(__dirname, 'assets/testImage.jpeg'));
  const outputBuffer = await optimizeImage(inputBuffer, 'jpeg', 80);
  expect(outputBuffer).toBeInstanceOf(Buffer);
});
