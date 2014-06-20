/*-------JSHint Directives-------*/
/* global THREE                  */
/* exported SETTINGS             */
/*-------------------------------*/
'use strict';

// Camera settings
var CAMERA = {
  fov : 45,
  near : 1,
  far : 2000,
  zoomX : 0,
  zoomY : 20,
  zoomZ : 40,
};

// OrbitControls settings
var CONTROLS = {
  enabled: true,
  userPan : true,
  userPanSpeed : 1,
  minDistance : 10.0,
  maxDistance : 200.0,
  maxPolarAngle : (Math.PI/180) * 80,
};

// Renderer settings
var RENDERER = {
  antialias : true,
};
