threejs-boilerplate
===================

Three.js starter project with common plugins. This repository does not contain
scaffolding nor build tools. Minimalism is the intended goal. You should be able
to drag and drop files where they are needed.


###Instructions
These are the instructions to locally start a Three.js project with this boilerplate.

#####Easiest Method
* Clone this repository
* Run: `python -m SimpleHTTPServer 9000`
* You should have a server running at `localhost:9000`

#####Yeoman Build
* First build a project with Yeoman and [generator-gulp-webapp](https://github.com/yeoman/generator-gulp-webapp)
* Then run `bower install threejs --save` to grab a copy of Three.js
* Lastly, drag and drop the files in this repository into the `app/` directory
* You might need to make a few changes in `index.html` for `bower_components`
* **Optional:** turn off JSHint in your gruntfile.js or gulpfile.js