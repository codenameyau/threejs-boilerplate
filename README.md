threejs-boilerplate
===================

Three.js minimal starter project with useful Three.js plugins.

Since many Three.js plugins and shaders do not have individual bower packages,
bower is not included locally. Instead, Three.js and plugins for it can
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

Visit in your browser: `localhost:9000`


#####Deployment
Before deploying your project, run: `gulp`. This will generate a `dist/` folder
that contains a concatenated and minified version of your project files.

###Future Tasks
* Create a Yeoman generator to replace the alternative method mention above.
