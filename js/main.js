(function(window) {

	var scene, camera, geometry, material, mesh, renderer;

	window.init = function() {

		scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
		//camera = new THREE.OrthographicCamera(window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 10000);
		camera.position.z = 100;
		scene.add(camera);

		//geometry = new THREE.CubeGeometry(300,300,300);
		geometry = new THREE.OctahedronGeometry(30, 6);
		geometry.vertices.push(new THREE.Vector3(-10, 10, 0));
		geometry.vertices.push(new THREE.Vector3(-10,-10, 0));
		geometry.vertices.push(new THREE.Vector3( 10,-10, 0));
		geometry.vertices.push(new THREE.Vector3( 10, 10, 0));
		geometry.faces.push(new THREE.Face3(0, 1, 2));
		geometry.faces.push(new THREE.Face3(0, 2, 3));
		//geometry.computeBoundingSphere();

		material = new THREE.MeshBasicMaterial({ color: 0x6200ff, wireframe: true });
		mesh = new THREE.Mesh(geometry, material);
		scene.add(mesh);

		renderer = new THREE.WebGLRenderer();
		renderer.setSize(window.innerWidth, window.innerHeight);
		window.document.body.appendChild(renderer.domElement);

		window.animate();
	};

	window.animate = function() {
		window.requestAnimationFrame(window.animate);

		mesh.rotation.x += 0.002;
		mesh.rotation.y += 0.02;
		camera.position.z -= 0.1;

		renderer.render(scene, camera);
	};

	window.init();

})(window);
