/*-------JSHint Directives-------*/
/* global THREE                  */
/*-------------------------------*/
'use strict';


/*******************
 * Manage Settings *
 *******************/

var CAMERA = {
  fov : 45,
  near : 1,
  far : 1000,
  zoomX : 0,
  zoomY : 20,
  zoomZ : 50,
};

var CONTROLS = {
  enabled : true,
  userPan : true,
  userPanSpeed : 1,
  minDistance : 10.0,
  maxDistance : 200.0,
  maxPolarAngle : (Math.PI/180) * 80,
};

var RENDERER = {
  antialias : true,
};


/********************
 * Global Variables *
 ********************/
var scene, camera, controls, renderer;


/********************
 * Helper Functions *
 ********************/
function degToRad(degrees) {
  return Math.PI/180 * degrees;
}

function basicFloorGrid(lines, steps, gridColor) {
  lines = lines || 20;
  steps = steps || 2;
  gridColor = gridColor || 0xFFFFFF;
  var floorGrid = new THREE.Geometry();
  var gridLine = new THREE.LineBasicMaterial( {color: gridColor} );
  for (var i = -lines; i <= lines; i += steps) {
    floorGrid.vertices.push(new THREE.Vector3(-lines, 0, i));
    floorGrid.vertices.push(new THREE.Vector3( lines, 0, i));
    floorGrid.vertices.push(new THREE.Vector3( i, 0, -lines));
    floorGrid.vertices.push(new THREE.Vector3( i, 0, lines));
  }
  return new THREE.Line(floorGrid, gridLine, THREE.LinePieces);
}

function basicCrate(size) {
  size = size || 5;
  var textureImage = 'assets/img/texture/crate-small.jpg';
  var geometry = new THREE.BoxGeometry(size, size, size);
  var crateTexture = new THREE.ImageUtils.loadTexture(textureImage);
  var crateMaterial = new THREE.MeshLambertMaterial({ map: crateTexture });
  var crate = new THREE.Mesh(geometry, crateMaterial);
  return crate;
}

/***********************
 * Rendering Functions *
 ***********************/
function renderScene() {
  renderer.render( scene, camera );
}

function animateScene() {
  window.requestAnimationFrame( animateScene );
  renderScene();
  controls.update();
}

function resizeWindow() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}

function addToDOM() {
  var container = document.getElementById('canvas-body');
  container.appendChild( renderer.domElement );
}

/************************
 * Scene Initialization *
 ************************/
function initializeScene() {

  // Scene and resize listener
  scene = new THREE.Scene();
  var canvasWidth  = window.innerWidth;
  var canvasHeight = window.innerHeight;
  window.addEventListener('resize', resizeWindow, false);

  // Camera and initial view
  var aspectRatio  = canvasWidth/canvasHeight;
  camera = new THREE.PerspectiveCamera(CAMERA.fov, aspectRatio, CAMERA.near, CAMERA.far);
  camera.position.set(CAMERA.zoomX, CAMERA.zoomY, CAMERA.zoomZ);
  scene.add(camera);

  // OrbitControls with mouse
  controls = new THREE.OrbitControls(camera);
  for (var key in CONTROLS) { controls[key] = CONTROLS[key]; }
  controls.addEventListener('change', renderScene);

  // WebGL renderer
  renderer = new THREE.WebGLRenderer(RENDERER);
  renderer.setSize(canvasWidth, canvasHeight);
  addToDOM();

  // Light sources
  var lightAmbient = new THREE.AmbientLight(0x666666);
  var lightSource = new THREE.PointLight(0x888888);
  lightSource.position.set(0, 50, 80);
  scene.add(lightAmbient);
  scene.add(lightSource);

  // Starter floor grid
  scene.add(basicFloorGrid(20, 2));

  // Basic crate
  var crateSize = 5;
  var crate = basicCrate(crateSize);
  crate.position.set(0, crateSize/2, 0);
  scene.add(crate);
}


/**********************
 * Render and Animate *
 **********************/
initializeScene();
animateScene();
