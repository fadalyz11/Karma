gulpNweb = () => {
  const gulp = require("gulp"),
    webpack = require("webpack"),
    webpackDev = require("webpack-dev-server");

  gulp.task("scripts", async function(cb) {
    await webpack(require("../../webpack.config.js"), (err, stats) => {
      try {
        console.log(stats.toString());
        cb();
      } catch (err) {
        console.log(err.toString());
      }
    });
  });
};

module.exports = gulpNweb();
