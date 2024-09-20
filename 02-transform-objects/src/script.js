import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();


const group = new THREE.Group()
scene.add(group)
group.position.y = 0.5

const Box2 = new THREE.Mesh(
   new THREE.BoxGeometry(1, 1, 3),
   new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
Box2.position.x = 2; 
group.add(Box2)
const Box3 = new THREE.Mesh(
   new THREE.BoxGeometry(0, 2, 3),
   new THREE.MeshBasicMaterial({ color: "blue" })
);
Box2.position.x = -2 ; 
group.add(Box3)
/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);

mesh.scale.set(1 , 1, 3);
// mesh.rotation.reorder("ZYX")
// mesh.rotation.y = Math.PI /2 ;
// mesh.rotation.x = Math.PI /2;

mesh.position.set(0.5, 1, 1);

scene.add(mesh);

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.set(0,0,1)
scene.add(camera);

// camera.lookAt(mesh.position)

const axisHelper = new THREE.AxesHelper()
// scene.add(axisHelper)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
