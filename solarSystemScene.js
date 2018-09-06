var renderer = null,
scene = null,
camera = null,
planetGroup = null,
sun = null,
mercury = null,
venus = null,
earth = null,
mars = null,
jupiter = null,
saturn = null,
uranus = null,
neptune = null,
pluto = null;

var duration = 6000; // ms
var currentTime = Date.now();

function animate(){
    var now = Date.now();
    var deltat = now - currentTime;
    currentTime = now;
    var fract = deltat / duration;
    var angle = Math.PI * 2 * fract;
    var movement = now * 0.001;

    planetGroup.rotation.y += angle;

    // Rotate the cube about its Y axis
    sun.rotation.y += angle;
    mercury.rotation.y += angle;
    venus.rotation.y += angle;

    // // Rotate the sphere group about its Y axis
    // sphereGroup.rotation.y -= angle / 2;
    // sphere.rotation.x += angle;

    // // Rotate the cone about its X axis (tumble forward)
    // cone.rotation.z += angle;
}

function run() {
    requestAnimationFrame(function() { run(); });

        // Render the scene
        renderer.render( scene, camera );

        // Spin the cube for next frame
        animate();
}

function createScene(canvas){
    // Create the Three.js renderer and attach it to our canvas
    renderer = new THREE.WebGLRenderer( { canvas: canvas, antialias: true } );

    // Set the viewport size
    renderer.setSize(canvas.width, canvas.height);

    // Create a new Three.js scene
    scene = new THREE.Scene();

    // Set the background image
    var textureUrl = "./images/stars.jpg";
    scene.background = new THREE.TextureLoader().load(textureUrl);
    // scene.background = new THREE.Color( "rgb(100, 100, 100)" );

    // Add  a camera so we can view the scene
    camera = new THREE.PerspectiveCamera( 45, canvas.width / canvas.height, 1, 4000 );
    camera.position.z = 65;
    scene.add(camera);

    // Create a group to hold all the objects
    planetGroup = new THREE.Object3D;

    // Add a directional light to show off the objects
    var light = new THREE.PointLight( 0xffffff, 1.5, 100);

    // Position the light out from the scene, pointing at the origin
    light.position.set(0, 0, 0);
    planetGroup.add(light);

    textureUrl = "./images/sunmap.jpg";
    var texture = new THREE.TextureLoader().load(textureUrl);
    var material = new THREE.MeshBasicMaterial({ map: texture });
    var geometry = new THREE.SphereGeometry(4, 20, 20);
    sun = new THREE.Mesh(geometry, material);
    planetGroup.add( sun );

    textureUrl = "./images/mercurymap.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    geometry = new THREE.SphereGeometry(0.3, 20, 20);
    mercury = new THREE.Mesh(geometry, material);
    mercury.position.set(-6, 0, 0);
    planetGroup.add( mercury );

    textureUrl = "./images/venusmap.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    geometry = new THREE.SphereGeometry(0.5, 20, 20);
    venus = new THREE.Mesh(geometry, material);
    venus.position.set(-8, 0, 0);
    planetGroup.add( venus );

    textureUrl = "./images/earthmap.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    geometry = new THREE.SphereGeometry(0.5, 20, 20);
    earth = new THREE.Mesh(geometry, material);
    earth.position.set(-10, 0, 0);
    planetGroup.add( earth );

    textureUrl = "./images/marsmap.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    geometry = new THREE.SphereGeometry(0.4, 20, 20);
    mars = new THREE.Mesh(geometry, material);
    mars.position.set(-12, 0, 0);
    planetGroup.add( mars );

    textureUrl = "./images/jupitermap.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    geometry = new THREE.SphereGeometry(1.6, 20, 20);
    jupiter = new THREE.Mesh(geometry, material);
    jupiter.position.set(-15, 0, 0);
    planetGroup.add( jupiter );

    textureUrl = "./images/saturnmap.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    geometry = new THREE.SphereGeometry(1.1, 20, 20);
    saturn = new THREE.Mesh(geometry, material);
    saturn.position.set(-19, 0, 0);
    planetGroup.add( saturn );

    textureUrl = "./images/uranusmap.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    geometry = new THREE.SphereGeometry(0.7, 20, 20);
    uranus = new THREE.Mesh(geometry, material);
    uranus.position.set(-21, 0, 0);
    planetGroup.add( uranus );

    textureUrl = "./images/neptunemap.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    geometry = new THREE.SphereGeometry(0.7, 20, 20);
    neptune = new THREE.Mesh(geometry, material);
    neptune.position.set(-23, 0, 0);
    planetGroup.add( neptune );

    textureUrl = "./images/plutomap.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    geometry = new THREE.SphereGeometry(0.2, 20, 20);
    pluto = new THREE.Mesh(geometry, material);
    pluto.position.set(-25, 0, 0);
    planetGroup.add( pluto );

    // Tilt the mesh toward the viewer
    // sun.rotation.x = Math.PI / 5;
    // sun.rotation.y = Math.PI / 5;

    // Now add the group to our scene
    scene.add( planetGroup );
}
