module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Process TypeScript files with ts-jest
  },
  testPathIgnorePatterns: ['/node_modules/', '/build/'], // Ignore node_modules and build directories
};
