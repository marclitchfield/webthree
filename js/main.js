(function(window) {

	var scene, camera, geometry, material, mesh, light, renderer;

	window.init = function() {

		scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
		//camera = new THREE.OrthographicCamera(window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 10000);
		camera.position.z = 100;
		scene.add(camera);

		//geometry = new THREE.CubeGeometry(300,300,300);
		geometry = new THREE.OctahedronGeometry(30, 5);

		material = new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('img/moon.jpg'), wireframe:false });
		mesh = new THREE.Mesh(geometry, material);
		scene.add(mesh);

		light = new THREE.PointLight(0xFFFFFF);
		light.position.set(10, 50, 120);
		scene.add(light);

		renderer = new THREE.WebGLRenderer();
		renderer.setSize(window.innerWidth, window.innerHeight);
		window.document.body.appendChild(renderer.domElement);

		window.animate();
	};

	window.animate = function() {
		window.requestAnimationFrame(window.animate);

		mesh.rotation.x += 0.002;
		mesh.rotation.y += 0.015;
		camera.position.z -= 0.1;

		light.position.x -= 0.3;
		light.position.z -= 0.3;

		renderer.render(scene, camera);
	};

	window.init();

})(window);
