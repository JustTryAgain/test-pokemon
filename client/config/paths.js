const path = require('path');

const CLIENT_DIR = path.resolve(__dirname, '..');
const createPath = (targetPath) => path.resolve(CLIENT_DIR, targetPath);

module.exports = {
  entry: createPath('src/app/Main.jsx'),
  src: createPath('src'),
  build: createPath('build'),
  public: createPath('public'),
  env: createPath('.env')
};
