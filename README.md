threejs-boilerplate
===================

Three.js minimal starter project with OrbitControls, Dat GUI, and shaders.

A minified version of `three.js` is included `app/assets/js/lib/` since
it takes forever to install with bower.

###Live Demo
[Click here to view](https://codenameyau.github.io/threejs-boilerplate/)

###Runing locally
First, `cd app/` and run either command:
* Nodejs (faster): `http-server -p 9000`
* Python (alternative): `python -m SimpleHTTPServer 9000`

Then, visit your browser: `localhost:9000`

###Deployment
Before deploying your project, you can concat and minify your script files with gulp.

First run: `npm install` to download the dev dependencies in `package.json`
Next run: `gulp`

This will generate a `dist/` folder that you should use for deployment.

Feel free to update `gulpfile.js` to add additional tasks.


##Resources

###Learning Three.js
* [Udacity CS291](https://www.udacity.com/course/cs291) - Excellent Interactive 3D Graphics course
* [Three.js Documentation](http://threejs.org/docs/#Manual/Introduction/Creating_a_scene) - Creating a scene
* [Stemkoski's Examples](https://stemkoski.github.io/Three.js/) - Set of basic Three.js examples
* [Intro to Pixel Shaders](http://www.airtightinteractive.com/2013/02/intro-to-pixel-shaders-in-three-js/) - Tutorial


###Computer Graphics Software
Complete list can be found on [Wikipedia](https://en.wikipedia.org/wiki/List_of_3D_computer_graphics_software)

####Open source modeling software
* [Blender](http://www.blender.org/) - Free 3D graphics modeling and animation software
* [Pixologic - Sculptris](http://pixologic.com/sculptris/) - Beginner version of ZBrush
* [MeshLab](http://meshlab.sourceforge.net/) - Processing and editing meshes

####Proprietary and licensed
* [Autodesk - 3ds Max](http://www.autodesk.com/products/autodesk-3ds-max/overview) - Modeling and rendering
* [Autodesk - Maya](http://www.autodesk.com/products/autodesk-maya/overview) - Comprehensive 3D animation
* [Pixologic - ZBrush](http://pixologic.com/zbrush/features/overview/) - Digital sculpting and painting
