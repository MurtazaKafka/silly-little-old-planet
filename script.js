import * as THREE from 'three';

// init

const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
camera.position.z = 10;

const scene = new THREE.Scene();

const light = new THREE.AmbientLight(0xffffff, 1);
light.position.set(10, 10, 10);
scene.add(light);

const geometry = new THREE.SphereGeometry( 4.5, 50, 50 );
const material = new THREE.MeshPhongMaterial( {
	map: new THREE.TextureLoader().load('img/earth.jpg'),
	normalMap: new THREE.TextureLoader().load('img/earthNormalMap.jpg'),
	roughness: 0.9,
	reflectivity: 0.9,
} );

// const wireframe = new THREE.WireframeGeometry( geometry );

// const line = new THREE.LineSegments( wireframe );
// line.material.depthTest = true;
// line.material.opacity = 0.001;
// line.material.transparent = true;

// scene.add( line );


const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

const renderer = new THREE.WebGLRenderer( { 
		antialias: true, 
		alpha : true,
	} );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animation );
document.body.appendChild( renderer.domElement );

// animation

function animation( time ) {

	mesh.rotation.x = time / 2000;
	mesh.rotation.y = time / 1000;

	renderer.render( scene, camera );

}