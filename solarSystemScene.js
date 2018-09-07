var renderer = null,
scene = null,
camera = null,
planetGroup = null,
sun = null,
mercury = null,
mercury_orbit = null,
venus = null,
venus_orbit = null,
earth = null,
earth_orbit = null,
mars = null,
mars_orbit = null,
jupiter = null,
jupiter_orbit = null,
saturn = null,
saturn_orbit = null,
uranus = null,
uranus_orbit = null,
neptune = null,
neptune_orbit = null,
pluto = null,
pluto_orbit = null;

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
    earth.rotation.y += angle;
    mars.rotation.y += angle;
    jupiter.rotation.y += angle;
    saturn.rotation.y += angle;
    uranus.rotation.y += angle;
    neptune.rotation.y += angle;
    pluto.rotation.y += angle;

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
    camera.position.y = 7;
    camera.position.z = 80;
    scene.add(camera);

    // Create a group to hold all the objects
    planetGroup = new THREE.Object3D;

    // Add a directional light to show off the objects
    var light = new THREE.PointLight( 0xffffff, 1.5, 100);

    // Position the light out from the scene, pointing at the origin
    light.position.set(0, 0, 0);
    planetGroup.add(light);

    ////////// PLANETS //////////
    // SUN
    textureUrl = "./images/sunmap.jpg";
    var texture = new THREE.TextureLoader().load(textureUrl);
    var material = new THREE.MeshBasicMaterial({ map: texture });
    var geometry = new THREE.SphereGeometry(4, 20, 20);
    sun = new THREE.Mesh(geometry, material);
    planetGroup.add( sun );
    // MERCURY
    textureUrl = "./images/mercurymap.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    geometry = new THREE.SphereGeometry(0.3, 20, 20);
    mercury = new THREE.Mesh(geometry, material);
    mercury.position.set(-8, 0, 0);
    planetGroup.add( mercury );
    // VENUS
    textureUrl = "./images/venusmap.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    geometry = new THREE.SphereGeometry(0.5, 20, 20);
    venus = new THREE.Mesh(geometry, material);
    venus.position.set(12, 0, 0);
    planetGroup.add( venus );
    // EARTH
    textureUrl = "./images/earthmap.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    geometry = new THREE.SphereGeometry(0.5, 20, 20);
    earth = new THREE.Mesh(geometry, material);
    earth.position.set(0, 0, -16);
    planetGroup.add( earth );
    // MARS
    textureUrl = "./images/marsmap.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    geometry = new THREE.SphereGeometry(0.4, 20, 20);
    mars = new THREE.Mesh(geometry, material);
    mars.position.set(0, 0, 20);
    planetGroup.add( mars );
    // JUPITER
    textureUrl = "./images/jupitermap.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    geometry = new THREE.SphereGeometry(1.6, 20, 20);
    jupiter = new THREE.Mesh(geometry, material);
    jupiter.position.set(-28, 0, 0);
    planetGroup.add( jupiter );
    // SATURN
    textureUrl = "./images/saturnmap.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    geometry = new THREE.SphereGeometry(1.1, 20, 20);
    saturn = new THREE.Mesh(geometry, material);
    saturn.position.set(32, 0, 0);
    planetGroup.add( saturn );
    // URANUS
    textureUrl = "./images/uranusmap.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    geometry = new THREE.SphereGeometry(0.7, 20, 20);
    uranus = new THREE.Mesh(geometry, material);
    uranus.position.set(0, 0, -36);
    planetGroup.add( uranus );
    // NEPTUNE
    textureUrl = "./images/neptunemap.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    geometry = new THREE.SphereGeometry(0.7, 20, 20);
    neptune = new THREE.Mesh(geometry, material);
    neptune.position.set(0, 0, 40);
    planetGroup.add( neptune );
    // PLUTO
    textureUrl = "./images/plutomap.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    geometry = new THREE.SphereGeometry(0.2, 20, 20);
    pluto = new THREE.Mesh(geometry, material);
    pluto.position.set(-44, 0, 0);
    planetGroup.add( pluto );

    ////////// ORBITS /////////
    geometry = new THREE.TorusGeometry( 8, 0.1, 16, 100 );
    material = new THREE.MeshBasicMaterial( { color: 0xffff00, transparent: true, opacity: 0.3 } );
    mercury_orbit = new THREE.Mesh( geometry, material );
    mercury_orbit.rotation.x = Math.PI / 2;
    planetGroup.add( mercury_orbit );

    geometry = new THREE.TorusGeometry( 12, 0.1, 16, 100 );
    material = new THREE.MeshBasicMaterial( { color: 0xffff00, transparent: true, opacity: 0.3 } );
    venus_orbit = new THREE.Mesh( geometry, material );
    venus_orbit.rotation.x = Math.PI / 2;
    planetGroup.add( venus_orbit );

    geometry = new THREE.TorusGeometry( 16, 0.1, 16, 100 );
    material = new THREE.MeshBasicMaterial( { color: 0xffff00, transparent: true, opacity: 0.3 } );
    earth_orbit = new THREE.Mesh( geometry, material );
    earth_orbit.rotation.x = Math.PI / 2;
    planetGroup.add( earth_orbit );

    geometry = new THREE.TorusGeometry( 20, 0.1, 16, 100 );
    material = new THREE.MeshBasicMaterial( { color: 0xffff00, transparent: true, opacity: 0.3 } );
    mars_orbit = new THREE.Mesh( geometry, material );
    mars_orbit.rotation.x = Math.PI / 2;
    planetGroup.add( mars_orbit );

    geometry = new THREE.TorusGeometry( 28, 0.1, 16, 100 );
    material = new THREE.MeshBasicMaterial( { color: 0xffff00, transparent: true, opacity: 0.3 } );
    jupiter_orbit = new THREE.Mesh( geometry, material );
    jupiter_orbit.rotation.x = Math.PI / 2;
    planetGroup.add( jupiter_orbit );

    geometry = new THREE.TorusGeometry( 32, 0.1, 16, 100 );
    material = new THREE.MeshBasicMaterial( { color: 0xffff00, transparent: true, opacity: 0.3 } );
    saturn_orbit = new THREE.Mesh( geometry, material );
    saturn_orbit.rotation.x = Math.PI / 2;
    planetGroup.add( saturn_orbit );

    geometry = new THREE.TorusGeometry( 36, 0.1, 16, 100 );
    material = new THREE.MeshBasicMaterial( { color: 0xffff00, transparent: true, opacity: 0.3} );
    uranus_orbit = new THREE.Mesh( geometry, material );
    uranus_orbit.rotation.x = Math.PI / 2;
    planetGroup.add( uranus_orbit );

    geometry = new THREE.TorusGeometry( 40, 0.1, 16, 100 );
    material = new THREE.MeshBasicMaterial( { color: 0xffff00, transparent: true, opacity: 0.3 } );
    neptune_orbit = new THREE.Mesh( geometry, material );
    neptune_orbit.rotation.x = Math.PI / 2;
    planetGroup.add( neptune_orbit );

    geometry = new THREE.TorusGeometry( 44, 0.1, 16, 100 );
    material = new THREE.MeshBasicMaterial( { color: 0xffff00, transparent: true, opacity: 0.3 } );
    pluto_orbit = new THREE.Mesh( geometry, material );
    pluto_orbit.rotation.x = Math.PI / 2;
    planetGroup.add( pluto_orbit );

    // Now add the group to our scene
    scene.add( planetGroup );
}
