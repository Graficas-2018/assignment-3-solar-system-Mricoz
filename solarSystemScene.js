var renderer = null,
scene = null,
camera = null,
planetGroup = null,
sun = null,
mercury = null,
mercury_orbit = null,
venus = null,
venus_orbit = null,
earthGroup = null,
earth = null,
earth_orbit = null,
earth_moon = null,
marsGroup = null,
mars = null,
mars_orbit = null,
mars_moon1 = null,
mars_moon2 = null,
jupiterGroup = null,
jupiter = null,
jupiter_orbit = null,
jupiter_moon1 = null,
jupiter_moon2 = null,
jupiter_moon3 = null,
jupiter_moon4 = null,
saturnGroup = null,
saturn = null,
saturn_orbit = null,
saturn_moon1 = null,
saturn_moon2 = null,
saturn_moon3 = null,
saturn_ring = null,
uranusGroup = null,
uranus = null,
uranus_orbit = null,
uranus_moon1 = null,
uranus_moon2 = null,
neptuneGroup = null,
neptune = null,
neptune_orbit = null,
neptune_moon1 = null,
neptune_moon2 = null,
pluto = null,
pluto_orbit = null,
asteroidBelt = null,
asteroid = null,
asteroidBelt2 = null;

var duration = 10000; // ms
var currentTime = Date.now();
var min = 21;
var max = 26;
var x = 0;
var y = 0;
var z = 0;
var radius = 0;

function animate(){
    var now = Date.now();
    var deltat = now - currentTime;
    currentTime = now;
    var fract = deltat / duration;
    var angle = Math.PI * 2 * fract;
    var movement = now * 0.0001;

    planetGroup.rotation.y += angle;
    earthGroup.rotation.y += angle;
    marsGroup.rotation.y += angle;
    jupiterGroup.rotation.y += angle;
    saturnGroup.rotation.y += angle;
    uranusGroup.rotation.y += angle;
    neptuneGroup.rotation.y += angle;
    //asteroidBelt.rotation.y += angle;

    // Rotate the cube about its Y axis
    sun.rotation.y += angle;
    mercury.rotation.y += angle;
    venus.rotation.y += angle;
    earth.rotation.y += angle;
    earth_moon.rotation.y += angle;
    mars.rotation.y += angle;
    mars_moon1.rotation.y += angle;
    mars_moon2.rotation.y += angle;
    jupiter.rotation.y += angle;
    jupiter_moon1.rotation.y += angle;
    jupiter_moon2.rotation.y += angle;
    jupiter_moon3.rotation.y += angle;
    jupiter_moon4.rotation.y += angle;
    saturn.rotation.y += angle;
    saturn_moon1.rotation.y += angle;
    saturn_moon2.rotation.y += angle;
    saturn_moon3.rotation.y += angle;
    uranus.rotation.y += angle;
    uranus_moon1.rotation.y += angle;
    uranus_moon2.rotation.y += angle;
    neptune.rotation.y += angle;
    neptune_moon1.rotation.y += angle;
    neptune_moon2.rotation.y += angle;
    pluto.rotation.y += angle;
    asteroid.rotation.y += angle;
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

    // Add  a camera so we can view the scene
    camera = new THREE.PerspectiveCamera( 45, canvas.width / canvas.height, 1, 4000 );
    camera.position.y = 0;
    camera.position.z = 100;
    scene.add(camera);

    // Create a group to hold all the objects and the other groups
    planetGroup = new THREE.Object3D;

    earthGroup = new THREE.Object3D;
    planetGroup.add(earthGroup);
    earthGroup.position.set(0, 0, -16);

    marsGroup = new THREE.Object3D;
    planetGroup.add(marsGroup);
    marsGroup.position.set(0, 0, 20);

    jupiterGroup = new THREE.Object3D;
    planetGroup.add(jupiterGroup);
    jupiterGroup.position.set(-28, 0, 0);

    saturnGroup = new THREE.Object3D;
    planetGroup.add(saturnGroup);
    saturnGroup.position.set(32, 0, 0);

    uranusGroup = new THREE.Object3D;
    planetGroup.add(uranusGroup);
    uranusGroup.position.set(0, 0, -36);

    neptuneGroup = new THREE.Object3D;
    planetGroup.add(neptuneGroup);
    neptuneGroup.position.set(0, 0, 40);

    asteroidBelt = new THREE.Object3D; // Random asteroids
    asteroidBelt2 = new THREE.Object3D; // Random asteroids

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
    var geometry = new THREE.SphereGeometry(4, 25, 25);
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
    earthGroup.add( earth );
    // EARTH MOON
    textureUrl = "./images/moonmap.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    geometry = new THREE.SphereGeometry(.15, 20, 20);
    earth_moon = new THREE.Mesh(geometry, material);
    earth_moon.position.set(1, 0, 0);
    earthGroup.add( earth_moon );

    // MARS
    textureUrl = "./images/marsmap.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    geometry = new THREE.SphereGeometry(0.4, 20, 20);
    mars = new THREE.Mesh(geometry, material);
    marsGroup.add( mars );
    // MARS MOON 1
    textureUrl = "./images/moonmap.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    geometry = new THREE.SphereGeometry(.15, 20, 20);
    mars_moon1 = new THREE.Mesh(geometry, material);
    mars_moon1.position.set(1, 0, 0);
    marsGroup.add( mars_moon1 );
    // MARS MOON 2
    textureUrl = "./images/moonmap.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    geometry = new THREE.SphereGeometry(.15, 20, 20);
    mars_moon2 = new THREE.Mesh(geometry, material);
    mars_moon2.position.set(-1, 0, 0);
    marsGroup.add( mars_moon2 );

    // JUPITER
    textureUrl = "./images/jupitermap.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    geometry = new THREE.SphereGeometry(1.6, 20, 20);
    jupiter = new THREE.Mesh(geometry, material);
    jupiterGroup.add( jupiter );
    // JUPITER MOON 1
    textureUrl = "./images/moonmap.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    geometry = new THREE.SphereGeometry(.15, 20, 20);
    jupiter_moon1 = new THREE.Mesh(geometry, material);
    jupiter_moon1.position.set(2, 0, 0);
    jupiterGroup.add( jupiter_moon1 );
    // JUPITER MOON 2
    textureUrl = "./images/moonmap.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    geometry = new THREE.SphereGeometry(.15, 20, 20);
    jupiter_moon2 = new THREE.Mesh(geometry, material);
    jupiter_moon2.position.set(-2, 0, 0);
    jupiterGroup.add( jupiter_moon2 );
    // JUPITER MOON 3
    textureUrl = "./images/moonmap.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    geometry = new THREE.SphereGeometry(.15, 20, 20);
    jupiter_moon3 = new THREE.Mesh(geometry, material);
    jupiter_moon3.position.set(0, 2, 0);
    jupiterGroup.add( jupiter_moon3 );
    // JUPITER MOON 4
    textureUrl = "./images/moonmap.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    geometry = new THREE.SphereGeometry(.15, 20, 20);
    jupiter_moon4 = new THREE.Mesh(geometry, material);
    jupiter_moon4.position.set(0, 1, -2);
    jupiterGroup.add( jupiter_moon4 );

    // SATURN
    textureUrl = "./images/saturnmap.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    geometry = new THREE.SphereGeometry(1.1, 20, 20);
    saturn = new THREE.Mesh(geometry, material);
    saturnGroup.add( saturn );
    // SATURN RING
    geometry = new THREE.RingGeometry(1, 2, 32);
    material = new THREE.MeshBasicMaterial( { color: 0xCCCC00, transparent: true, opacity: 0.3 } );
    saturn_ring = new THREE.Mesh( geometry, material );
    saturn_ring.rotation.x = Math.PI / 5;
    saturnGroup.add( saturn_ring );
    // SATURN MOON 1
    textureUrl = "./images/moonmap.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    geometry = new THREE.SphereGeometry(.15, 20, 20);
    saturn_moon1 = new THREE.Mesh(geometry, material);
    saturn_moon1.position.set(0, 1, -2);
    saturnGroup.add( saturn_moon1 );
    // SATURN MOON 2
    textureUrl = "./images/moonmap.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    geometry = new THREE.SphereGeometry(.15, 20, 20);
    saturn_moon2 = new THREE.Mesh(geometry, material);
    saturn_moon2.position.set(0, 2, 0);
    saturnGroup.add( saturn_moon2 );
    // SATURN MOON 3
    textureUrl = "./images/moonmap.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    geometry = new THREE.SphereGeometry(.15, 20, 20);
    saturn_moon3 = new THREE.Mesh(geometry, material);
    saturn_moon3.position.set(2, 0, 2);
    saturnGroup.add( saturn_moon3 );

    // URANUS
    textureUrl = "./images/uranusmap.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    geometry = new THREE.SphereGeometry(0.7, 20, 20);
    uranus = new THREE.Mesh(geometry, material);
    uranusGroup.add( uranus );
    // URANUS MOON 1
    textureUrl = "./images/moonmap.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    geometry = new THREE.SphereGeometry(.15, 20, 20);
    uranus_moon1 = new THREE.Mesh(geometry, material);
    uranus_moon1.position.set(0, 0.5, -1);
    uranusGroup.add( uranus_moon1 );
    // URANUS MOON 2
    textureUrl = "./images/moonmap.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    geometry = new THREE.SphereGeometry(.15, 20, 20);
    uranus_moon2 = new THREE.Mesh(geometry, material);
    uranus_moon2.position.set(1, 1, 0);
    uranusGroup.add( uranus_moon2 );

    // NEPTUNE
    textureUrl = "./images/neptunemap.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    geometry = new THREE.SphereGeometry(0.7, 20, 20);
    neptune = new THREE.Mesh(geometry, material);
    neptuneGroup.add( neptune );
    // NEPTUNE MOON 1
    textureUrl = "./images/moonmap.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    geometry = new THREE.SphereGeometry(.15, 20, 20);
    neptune_moon1 = new THREE.Mesh(geometry, material);
    neptune_moon1.position.set(0, .9, -.5);
    neptuneGroup.add( neptune_moon1 );
    // NEPTUNE MOON 2
    textureUrl = "./images/moonmap.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    geometry = new THREE.SphereGeometry(.15, 20, 20);
    neptune_moon2 = new THREE.Mesh(geometry, material);
    neptune_moon2.position.set(0.5, 0, 1);
    neptuneGroup.add( neptune_moon2 );

    // PLUTO
    textureUrl = "./images/plutomap.jpg";
    texture = new THREE.TextureLoader().load(textureUrl);
    material = new THREE.MeshPhongMaterial({ map: texture });
    geometry = new THREE.SphereGeometry(0.25, 20, 20);
    pluto = new THREE.Mesh(geometry, material);
    pluto.position.set(-44, 0, 0);
    planetGroup.add( pluto );

    ////////// ORBITS FOR ALL PLANETS /////////
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



    geometry = new THREE.SphereGeometry(.1, 20, 20);
    texture = new THREE.TextureLoader().load('./images/asteroidmap.jpg');
    material = new THREE.MeshPhongMaterial({ map: texture, bumpMap: '', bumpScale: 0.005 });

    // For loop for several asteroids
    for (var i = 0; i < 1000; i++) {
        asteroid = new THREE.Mesh(geometry, material);
        radius = Math.random() * (max - min) + min;
        x = radius * Math.cos((i * (Math.PI / 180)));
        y = radius * Math.sin((i * (Math.PI / 180)));
        z = (Math.random() * ((radius * .05) - (radius * -.05)) + (radius * -.05));
        asteroid.position.set(x, y, z);
        asteroidBelt.add(asteroid);
    }
    asteroidBelt.rotation.x = Math.PI / 2;
    planetGroup.add(asteroidBelt);

    radius, x, y, z = 0;
    max = 45;
    min = 48;

    // For loop for several asteroids
    for (var i = 0; i < 1000; i++) {
        asteroid = new THREE.Mesh(geometry, material);
        radius = Math.random() * (max - min) + min;
        x = radius * Math.cos((i * (Math.PI / 180)));
        y = radius * Math.sin((i * (Math.PI / 180)));
        z = (Math.random() * ((radius * .05) - (radius * -.05)) + (radius * -.05));
        asteroid.position.set(x, y, z);
        asteroidBelt2.add(asteroid);
    }
    asteroidBelt2.rotation.x = Math.PI / 2;
    planetGroup.add(asteroidBelt2);

    // Now add the group to our scene
    scene.add( planetGroup );
}
