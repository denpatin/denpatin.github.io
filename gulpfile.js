'use strict';

var gulp = require('gulp');
var del = require('del');
var gulpif = require('gulp-if');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var concatCss = require('gulp-concat-css');
var minifyCss = require('gulp-minify-css');

var build = './assets/dist/';

// JavaScript files to process
var jsDir = './assets/js/';
var jsSrc = [
  'jquery',
  'bootstrap',
  'jquery.backstretch', /* jQuery plugin that allows you to add a dynamically-resized, slideshow-capable background image to any page or element */
  'owl.carousel', /* jQuery plugin that lets you create beautiful responsive carousel slider */
  'jquery.magnific-popup', /* light and responsive lightbox script with focus on performance */
  'jquery.simple-text-rotator', /* a simple rotating text to your website with little to no markup */
  'jquery.waypoints', /* a library that makes it easy to execute a function whenever you scroll to an element */
  'jquery.countTo', /* a jQuery plugin that will count up (or down) to a target number at a specified speed */
  'wow', /* reveal CSS animation as you scroll down a page */
  'smoothscroll', /* automatically make same-page links scroll smoothly */
  'custom'
];

// CSS files to process
var cssDir = './assets/css/';
var cssSrc = [
  'bootstrap',
  'owl.theme', /*  */
  'owl.carousel', /*  */
  'magnific-popup', /*  */
  'simpletextrotator', /*  */
  'font-awesome', /*  */
  'animate', /*  */
  'style'
];

gulp.task('js', function() {
  return gulp.src(jsSrc.map(function(js) { return jsDir.concat(js, '.js') }))
    .pipe(concat('cv.js'))
    .pipe(gulp.dest(build))
});

gulp.task('css', function() {
  return gulp.src(cssSrc.map(function(css) { return cssDir.concat(css, '.css') }))
    .pipe(concatCss('cv.css'))
    .pipe(gulp.dest(build))
});

gulp.task('min', ['js', 'css'], function() {
  return gulp.src(build + 'cv*')
    .pipe(gulpif(['*.js'], uglify()))
    .pipe(gulpif(['*.css'], minifyCss()))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(build));
});

gulp.task('clean', function () {
  return del([
    build + 'cv.*'
  ]);
});

gulp.task('default', ['clean', 'js', 'css', 'min']);
