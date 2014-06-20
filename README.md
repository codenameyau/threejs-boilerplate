threejs-boilerplate
===================

Three.js starter project with common plugins. This repository does not contain
scaffolding nor build tools. Minimalism is the intended goal. You should be able
to drag and drop files where they are needed.


###Instructions
These are the instructions that I usually use when starting a Three.js project.

* First build a project with Yeoman and [generator-gulp-webapp](https://github.com/yeoman/generator-gulp-webapp)
* Then run `bower install threejs --save` to grab a copy of Three.js
* Lastly, I drag and drop the files in this repository into the `app/` directory
* **Optional:** turn off JSHint in your gruntfile.js or gulpfile.js


###Deployment

* Run `gulp` to generate a `dist/` folder which contains your minified project. 
