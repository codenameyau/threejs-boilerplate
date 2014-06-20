threejs-boilerplate
===================

Three.js minimal starter project with common plugins for users that aren't
familiar with `grunt`, `bower`, `npm`, `gulp`, etc... Since many Three.js plugins
and shaders do not have bower packages, these files are included in `scripts/lib/`.


###Getting Started
These are the instructions to start a Three.js project with this boilerplate:

#####Easiest method
* Clone this repository
* Run: `python -m SimpleHTTPServer 9000`

#####Alternative method
You can use Yeoman with generator-webapp-gulp automate your build and
deployment process. This method is recommended for larger Three.js projects.

* Create a new folder and build your project with `yo`
* Move files to where they are needed in `app/`
* Update `index.html` to include any additional `bower_components` scripts
* Run: `gulp watch` to run your project locally with livereload

Before deploying your project, run: `gulp`. This will generate a `dist/` folder
that contains a minified and concatenated version of your project files.

###Future Tasks
* Create a Yeoman generator to replace the alternative method.
