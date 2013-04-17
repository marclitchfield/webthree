(function(window) {

	var scene, camera, geometry, material, mesh, renderer;

	window.init = function() {

		scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
		camera.position.z = 500;
		scene.add(camera);

		geometry = new THREE.CubeGeometry(300,300,300);
		material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
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

		renderer.render(scene, camera);
	};

	window.init();

})(window);
