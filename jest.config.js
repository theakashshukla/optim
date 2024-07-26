module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
      '^.+\\.mjs$': 'babel-jest',
      '^.+\\.js$': 'babel-jest'
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'mjs'],
    testMatch: ['**/test/**/*.test.ts'],
    transformIgnorePatterns: ['/node_modules/(?!@ffmpeg/ffmpeg)'],
  };
  