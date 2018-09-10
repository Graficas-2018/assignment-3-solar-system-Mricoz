
// An integer value, in pixels, indicating the X coordinate at which the mouse pointer was located when the event occurred.
var mouseDown = false, pageX = 0, pageY = 0, button = -1;

function rotateScene(deltax, deltay){
    planetGroup.rotation.y += deltax / 100;
    planetGroup.rotation.x += deltay / 100;

    $("#rotation").html("rotation:" + planetGroup.rotation.x.toFixed(1) + "," + planetGroup.rotation.y.toFixed(1) + ",0");
}

function scaleScene(scale){
    planetGroup.scale.set(scale, scale, scale);
    $("#scale").html("scale: " + scale);
}

function translateScene(deltax, deltay) {
    planetGroup.position.y -= deltay / 100;
    planetGroup.position.x += deltax / 100;
}


function onMouseMove(evt){
    if (!mouseDown)
        return;

    // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
    evt.preventDefault();

    var deltax = evt.pageX - pageX;
    pageX = evt.pageX;

    var deltay = evt.pageY - pageY;
    pageY = evt.pageY;

    switch(button) {
        case 0:
            rotateScene(deltax, deltay);
            break;

        case 2:
            translateScene(deltax, deltay);
            break;
    }
}

function onMouseDown(evt){
    evt.preventDefault();

    mouseDown = true;
    button = evt.button;
    pageX = evt.pageX;
    pageY = evt.pageY;
}

function onMouseUp(evt){
    evt.preventDefault();

    mouseDown = false;
    button = -1;
}

function addMouseHandler(canvas){
    canvas.addEventListener( 'mousemove',
            function(e) { onMouseMove(e); }, false );
    canvas.addEventListener( 'mousedown',
            function(e) { onMouseDown(e); }, false );
    canvas.addEventListener( 'mouseup',
            function(e) { onMouseUp(e); }, false );
}
