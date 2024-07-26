import { optimizeVideo } from '../src/videoOptimizer';
import * as fs from 'fs';
import * as path from 'path';

test('optimizeVideo should return a Blob', async () => {
  const inputFile = new File([fs.readFileSync(path.resolve(__dirname, 'assets/testVideo.mp4'))], 'testVideo.mp4');
  const outputBlob = await optimizeVideo(inputFile, 'mp4', 23);
  expect(outputBlob).toBeInstanceOf(Blob);
});
