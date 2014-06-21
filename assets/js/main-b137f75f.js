"use strict";function degToRad(e){return Math.PI/180*e}function basicFloorGrid(e,n,t){e=e||20,n=n||2,t=t||16777215;for(var r=new THREE.Geometry,a=new THREE.LineBasicMaterial({color:t}),i=-e;e>=i;i+=n)r.vertices.push(new THREE.Vector3(-e,0,i)),r.vertices.push(new THREE.Vector3(e,0,i)),r.vertices.push(new THREE.Vector3(i,0,-e)),r.vertices.push(new THREE.Vector3(i,0,e));return new THREE.Line(r,a,THREE.LinePieces)}function basicCrate(e){e=e||5;var n="assets/img/texture/crate-small.jpg",t=new THREE.BoxGeometry(e,e,e),r=new THREE.ImageUtils.loadTexture(n),a=new THREE.MeshLambertMaterial({map:r}),i=new THREE.Mesh(t,a);return i}function renderScene(){renderer.render(scene,camera)}function updateScene(){stats.update(),controls.update()}function animateScene(){window.requestAnimationFrame(animateScene),renderScene(),updateScene()}function resizeWindow(){camera.aspect=window.innerWidth/window.innerHeight,camera.updateProjectionMatrix(),renderer.setSize(window.innerWidth,window.innerHeight)}function addToDOM(e){var n=document.getElementById("canvas-body");n.appendChild(e)}function initializeScene(){scene=new THREE.Scene;var e=window.innerWidth,n=window.innerHeight;window.addEventListener("resize",resizeWindow,!1);var t=e/n;camera=new THREE.PerspectiveCamera(CAMERA.fov,t,CAMERA.near,CAMERA.far),camera.position.set(CAMERA.zoomX,CAMERA.zoomY,CAMERA.zoomZ),camera.lookAt(scene.position),scene.add(camera),renderer=new THREE.WebGLRenderer(RENDERER),renderer.setSize(e,n),addToDOM(renderer.domElement),controls=new THREE.OrbitControls(camera);for(var r in CONTROLS)controls[r]=CONTROLS[r];controls.addEventListener("change",renderScene),stats=new Stats,stats.setMode(0),stats.domElement.style.position="absolute",stats.domElement.style.bottom="0px",stats.domElement.style.zIndex=100,addToDOM(stats.domElement),gui=new dat.GUI({height:159});var a=new THREE.AmbientLight(6710886),i=new THREE.PointLight(8947848);i.position.set(0,50,80),scene.add(a),scene.add(i),scene.add(basicFloorGrid(20,2));var o=5;crate=basicCrate(o),crate.position.set(0,o/2,0),scene.add(crate)}var CAMERA={fov:45,near:1,far:1e3,zoomX:0,zoomY:20,zoomZ:50},CONTROLS={enabled:!0,userPan:!0,userPanSpeed:1,minDistance:10,maxDistance:200,maxPolarAngle:Math.PI/180*80},RENDERER={antialias:!1},scene,camera,renderer,controls,stats,gui,crate;initializeScene(),animateScene();