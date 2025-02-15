module.exports = (env) => {
  console.log("test webpack env", env);
  if (env.production) {
    return require('./config/webpack.prod.js');
  } else {
    return require('./config/webpack.dev.js');
  }
};
