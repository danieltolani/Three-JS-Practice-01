import './style.css'
import * as THREE from 'three'
import { Group, Mesh } from 'three';
import gsap from 'gsap'


// I need a mesh
// The mesh contains two parameters - 
//   1. Is the geometry and the other is the materail

// First, I need to import the three.js library so I can use its methods.

// I need a scene where everthing (camera, lights and other objects) is placed.
const scene = new THREE.Scene()
// I need to place a mesh in the scene

// console.log(date.getMinutes())
// // Geometry 
// // Since I am trying to create a cube, best THREE.js geometry to use is the BOXGeometry which takes in three (3) values.
// // The BoxGeometry takes in three values for x-y-z axis
const geometry = new THREE.BoxGeometry(1,1,1)

// // Material
// // There are different types of material, but, just like nodes in blender, 
// //       we can add differnet types of materials in THREE.js, we currently use the MeshBasicMaterial since we just want to slap in a single color
// //       The MeshBasicMaterial takes in properties like 'color'
const material = new THREE.MeshBasicMaterial( { color: 0xe4ad7b } )

// // NOW, we can create our mesh which will take in the geometry and the material
const cubeMesh = new THREE.Mesh(geometry, material)
// // We need to add this mesh we have created too the scene

// // REORDER - Comes before the vector3D properties
// // A string must be passed in - telling how the arrangment should tae place
// cubeMesh.rotation.reorder('YXZ')
// cubeMesh.rotation.x = 120
// cubeMesh.rotation.y = 120
// cubeMesh.rotation.z = 120

// // Use of SET - reduce the XYZ properties of all Object3D class inheritance into one line of 3 parameters
// // cubeMesh.rotation.set(3,4,1)
// cubeMesh.position.set(0.8,0.2,1)

// //NORMALIZE
cubeMesh.position.normalize()

// LENGTH Method for position 
// console.log(cubeMesh.position.length())

// console.log(cubeMesh.position.distanceTo(new THREE.Vector3(1,1,3)))

// console.log(cubeMesh.position.distanceTo(camera.position))

scene.add(cubeMesh)


// CREATING A GROUP
// const cubeGroup = new THREE.Group();
// scene.add(cubeGroup)

// const mesh1 = new THREE.Mesh(
//     new THREE.BoxGeometry(1,1,1),
//     new THREE.MeshBasicMaterial( { color: 0x0000FF})
// )

// const mesh2 = new THREE.Mesh(
//     new THREE.BoxGeometry(1,1,1),
//     new THREE.MeshBasicMaterial( { color: 0x00FF00})
// )

// mesh2.position.set(1.3,0,0)

// const mesh3 = new THREE.Mesh(
//     new THREE.BoxGeometry(1,1,1),
//     new THREE.MeshBasicMaterial( { color: 0xFF0000})
// )

// mesh3.position.set(-1.3,0,0)

// cubeGroup.add(mesh1, mesh2, mesh3)

// cubeGroup.scale.y = 2
// cubeGroup.rotation.y = 1

// cubeGroup.rotation.z = 2
// We now need a camera to serve as our eyes in this scene
// There are different cameras in THREE.js but the one I'm using for this project is the Perspective camera which takes two values or more.
//    1. Is the Field of View  -  Takes in a Degree 
//    2. Is the aspect ration  - Takes in a size.. 
//    3. NEAR - Objects closer than the Near value won't show up
//    4. FAR - Objects farther than the far won't show up 

// We need to declare the size for the aspect ratio - In form objects where we assign a width and a height value.
// There are no specified units of measurement for the width and height


const sizes = {
    // width: window.innerWidth,
    // height: window.innerHeight

    width: window.innerWidth,
    height: window.innerHeight
}

// console.log(window.height)
// Now we can declare the camera and place the sizes in it.

// Orthogrophic Camera
// Scene will be renedered with NO perspective
// Size of object is always the same
// We need the L,B,F & B

const aspectRatio = sizes.width / sizes.height

console.log(aspectRatio)
const camera = new THREE.OrthographicCamera(
    -1 * aspectRatio,
    1 * aspectRatio,
    1,
    -1,
    1,
    100)


// const camera = new THREE.PerspectiveCamera( 75, sizes.width / sizes.height)

// const camera = new THREE.OrthographicCamera(-1,-1,1,1)
// We then need to add the camera to the scene

scene.add(camera)

camera.position.y = 2
camera.position.x = 2 

// By default the camera postion will be the scene (or 'world's') origin (as in blender)
// This makes it to be in the same position as the mesh (or inside of it) so, we cannot see anything
// so we move the position of the camera so we can see other faces of the mesh
camera.position.z = 3
camera.lookAt(cubeMesh.position)
// camera.rotation.x = 1.2
// console.log(cubeMesh.distanceTo(camera.position))
// camera.position.x = 2
// camera.position.y = 1

// AXES HELPER
// Helps with guides that show the three axis of the scene (x,y and z)
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper)


// FOR THE RENDERER
// We need a 'renderer' as the name implies to render what the camera sees.
// I'd like to think of this as cycles or EEVVEE in Blender (render engines)\
// It draws its output from the 'canvas' which is like the render region in blender.
// For this project I will be using the WebGl Renderer but there are others.
// The WebGL renderer displays the beautifully crafted scenes using WebGL

// I'll need to call/access the canvas from the DOM, by
const canvas = document.querySelector(".webgl")

// The WebGlRenderer takes in objects as parameters
// This is where we pass the canvas

const renderer = new THREE.WebGLRenderer({
    canvas : canvas
})

// Now, I render the scene or another type of object using a camera.
// now we can pass in the 

// I then, using the setSize constructor, Resize the output canvas to (width, height) with device pixel ratio taken into account
renderer.setSize(
    sizes.width, sizes.height
)

// TIME
// let Time = Date.now()


//GSAP
// console.log(gsap)
// gsap.to(cubeMesh.position, {x: 2, duration: 1, delay: 1})
// gsap.to(cubeMesh.position, {x: -2, duration: 2, delay: 2})


// CLOCK
const clock = new THREE.Clock()


// ANIMATION
// Request Animation Frame calls a function on each frame
const tickCalled = () => {

    const elapsedTIme = clock.getElapsedTime()

    // const currentTime = Date.now()

    // const deltaTime = currentTime-Time
    // Time = currentTime

    // console.log(deltaTime)
    
    // cubeMesh.rotation.z += 0.01 * deltaTime
    // cubeMesh.rotation.y += 0.008
    // cubeMesh.rotation.x += 0.02

    // console.log(Math.sin(elapsedTIme) )
    // cubeMesh.position.y = Math.sin(elapsedTIme) \
    cubeMesh.rotation.y = elapsedTIme * Math.PI * 2


    // cubeMesh.position.x = Math.tan(elapsedTIme) 
    // camera.lookAt(cubeMesh.position)
    renderer.render(scene, camera)

    // const time = Date.now()
    // console.log(time)

    window.requestAnimationFrame(tickCalled)
}

tickCalled();
