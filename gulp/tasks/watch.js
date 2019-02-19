const gulp = require("gulp");
// watching
const watch = () => {
  gulp.task("watch", function() {
    console.log("watching");
    gulp.watch("public/index.html", gulp.series("html"));
    gulp.watch("public/scss/**/*scss", gulp.series("styles"));
    gulp.watch("public/scripts/modules/**/*js"), gulp.series("scripts");
  });
};

module.exports = watch();
