var blob;

var blobs = [];

function setup () {
    createCanvas(600, 600);
    blob = new Blob(0, 0, 64);

    for (var i = 0; i < 15; i++) {
        var x = random(-width, width);
        var y = random(-height, height);
        blobs[i] = new Blob(x, y, 16);
    }
}

function draw () {
    background(0);
    translate(width/2, height/2); // set world origin (0, 0) to 300, 300
    // scale(64 / blob.r);
    translate(-blob.pos.x, -blob.pos.y);// keep player's blob at world origin 
    for (var i = blobs.length - 1; i >= 0; i--) {
        blobs[i].show();
        if (blob.eats(blobs[i])) {
            blobs.splice(i, 1);
        }
    }

    blob.show();
    blob.update();
}

