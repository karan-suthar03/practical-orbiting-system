var mainC;
var particles = [];
var M;
var myId;
var winds;
function setup(){
    createCanvas(window.innerWidth,window.innerHeight);
    mainC = createVector(window.innerWidth,window.innerHeight);
    for(i = 0;i<2000;i++){
        particles[i] = new Particle();
    }
}

function draw(){
    background(0,50);
    fill(255,0,0);
    translate(-(width/2+window.screenX),-(height/2+window.screenY - (window.outerHeight-height)))
    for(i = 0;i<particles.length;i++){
        particles[i].show();
        particles[i].update();
    }
    circle(mainC.x,mainC.y,10)
    mainC = createVector(width + window.screenX,height + window.screenY - (window.outerHeight-height));
}
function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
    background(0);
}