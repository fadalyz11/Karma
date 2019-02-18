const gulp = require("gulp");
const styles = require("./gulp/tasks/styles");
const watch = require("./gulp/tasks/watch");
const sprites = require("./gulp/tasks/sprite");
const webPack = require("./gulp/tasks/scripts");

gulp.task("html", function() {
  console.log("watching");
});
