import"./style.css";import*as THREE from"three";import{Group,Mesh}from"three";import gsap from"gsap";import{OrbitControls}from"three/examples/jsm/controls/OrbitControls";const canvas=document.querySelector(".webgl"),cursor={x:0,y:0};window.addEventListener("mousemove",(e=>{cursor.x=e.clientX/sizes.width-.5,cursor.y=-(e.clientY/sizes.height-.5)}));const scene=new THREE.Scene,geometry=new THREE.BoxGeometry(1,1,1),material=new THREE.MeshBasicMaterial({color:14986619}),cubeMesh=new THREE.Mesh(geometry,material);cubeMesh.position.normalize(),scene.add(cubeMesh);const sizes={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",(()=>{sizes.width=window.innerWidth,sizes.height=window.innerHeight,camera.aspect=sizes.width/sizes.height,camera.updateProjectionMatrix(),renderer.setSize(sizes.width,sizes.height),renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))})),window.addEventListener("dblclick",(()=>{document.fullscreenElement||document.webkitFullscreenElement||document.mozFullscreenElement||documsFullscreenElement?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullScreen?document.webkitExitFullscreen():document.mozExitFullScreen?document.mozExitFullscreen():document.msExitFullScreen&&document.msExitFullscreen():canvas.requestFullscreen?canvas.requestFullscreen():canvas.webkitRequestFullscreen?canvas.webkitRequestFullscreen():canvas.mozRequestFullscreen?canvas.mozRequestFullscreen():canvas.msRequestFullscreen&&canvas.msFullscreenElement()}));const camera=new THREE.PerspectiveCamera(75,sizes.width/sizes.height);scene.add(camera);const controls=new OrbitControls(camera,canvas);controls.autoRotate=!0,controls.autoRotateSpeed=2,controls.enableDamping=!0,camera.position.z=3,camera.lookAt(cubeMesh.position);const axesHelper=new THREE.AxesHelper;scene.add(axesHelper);const renderer=new THREE.WebGLRenderer({canvas});renderer.setSize(sizes.width,sizes.height);const clock=new THREE.Clock,tickCalled=()=>{clock.getElapsedTime(),controls.update(),renderer.render(scene,camera),window.requestAnimationFrame(tickCalled)};tickCalled();