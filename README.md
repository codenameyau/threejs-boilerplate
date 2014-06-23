threejs-boilerplate
===================

Three.js minimal starter project with useful plugins.

Since many Three.js plugins and shaders do not have individual bower packages,
bower is not included locally. Instead these files can be found in `app/assets/js/lib/`.
Gulp is used to generate a `dist` folder that contains a minified and optimized
version of your code.

####[Live Demo](https://codenameyau.github.io/threejs-boilerplate/)


##Getting Started
Follow these instructions to start a Three.js project with this boilerplate:

#####Installation
* Clone this repository and setup gulp
* Run: `npm install`


#####Runing locally
If you haven't already, run: `npm install http-server -g`

Then, `cd app/` and run either command:
* Nodejs (faster): `http-server -p 9000`
* Python (alternative): `python -m SimpleHTTPServer 9000`

Visit your browser: `localhost:9000`


####Packages included
* three.js
* dat.gui.js
* stats.js

####Plugins included
* OrbitControls.js
* KeyboardState.js


##Deployment
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
* Then update `gulpfile.js`


##Learn Three.js
* [Three.js Documentation](http://threejs.org/docs/#Manual/Introduction/Creating_a_scene) - Creating a scene
* [Udacity CS291](https://www.udacity.com/course/cs291) - Interactive 3D Graphics course
* [Stemkoski's Examples](https://stemkoski.github.io/Three.js/) - Set of basic Three.js examples
* [Intro to Pixel Shaders](http://www.airtightinteractive.com/2013/02/intro-to-pixel-shaders-in-three-js/) - Tutorial


##Recommended Modeling Software

Complete list can be found on [Wikipedia](https://en.wikipedia.org/wiki/List_of_3D_computer_graphics_software)

####Built with three.js for the web
* [Clara.io](https://clara.io/) - Model. Animate. Render. Online.
* [Verold](http://verold.com/) - Publish 3D models and apps with online visual editor

####Free downloadable software
* [Blender](http://www.blender.org/) - Free 3D graphics modeling and animation software
* [Pixologic - Sculptris](http://pixologic.com/sculptris/) - Beginner version of ZBrush

####Proprietary and licensed
* [Autodesk - 3ds Max](http://www.autodesk.com/products/autodesk-3ds-max/overview) - Modeling and rendering
* [Autodesk - Maya](http://www.autodesk.com/products/autodesk-maya/overview) - Comprehensive 3D animation
* [Pixologic - ZBrush](http://pixologic.com/zbrush/features/overview/) - Digital sculpting and painting
