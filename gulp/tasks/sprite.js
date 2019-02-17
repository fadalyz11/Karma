const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const imageminPngquant = require("imagemin-pngquant");
const imageminJpegRecompress = require("imagemin-jpeg-recompress");
const del = require("del");

imageMin = () => {
  gulp.task("images", function() {
    return gulp
      .src("public/css/images/**/*.{png,jpeg,jpg,svg,gif}")
      .pipe(
        imagemin([
          imagemin.gifsicle(),
          imagemin.jpegtran(),
          imagemin.optipng(),
          imagemin.svgo(),
          imageminPngquant(),
          imageminJpegRecompress()
        ])
      )
      .pipe(gulp.dest("public/dist" + "/images"));
  });
};

deleteFolders = () => {
  gulp.task("clean", function() {
    return del(["public/dist/images"]).then(paths => {
      console.log("Deleted files and folders:\n", paths.join("\n"));
    });
  });
};

module.exports = imageMin();
module.exports = deleteFolders();
