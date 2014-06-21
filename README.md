threejs-boilerplate
===================

Three.js minimal starter project with useful plugins.

Since many Three.js plugins and shaders do not have individual bower packages,
bower is not included locally. Instead, Three.js, its plugins, and dat-gui can
be found in `assets/js/lib/`.

###Getting Started
Follow these instructions to start a Three.js project with this boilerplate:

#####Installation
* Clone this repository
* Run: `npm install`


#####Runing locally
If you haven't already, install: `npm install http-server -g`

Then, run either command:
* Nodejs (faster): `http-server -p 9000`
* Python (alternative): `python -m SimpleHTTPServer 9000`

Visit your browser: `localhost:9000`


###Deployment
Before deploying your project, run: `gulp`

This will generate a `dist/` folder that contains a concatenated and minified
version of your JavaScript files. Use the `dist/` folder for deployment.

Update `gulpfile.js` to add additional tasks.

#####Minimizing image/texture quality
If you are concern about image sizes for production, you can install and use
`gulp-imagemin`, which will reduce the image size while optimizing for image quality.
More information can be [found here](https://github.com/rflynn/imgmin#summary).
By default, `gulp-imagemin` is not included as a dependency.

To use it, follow these steps:

* Run: `npm install gulp-imgagemin --save-dev`
* Update `gulpfile.js`


###Tasks
* Fix black crate at start
* Enable JSHint in sublime
