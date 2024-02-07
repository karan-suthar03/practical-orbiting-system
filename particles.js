class Particle{
    constructor(){
        this.position = createVector(random()*window.innerWidth,random()*window.innerHeight);
        this.direction = createVector(random(5,-5),random(5,-5));
        this.direction.setMag(1);
        this.vel = createVector(0,0);
        this.tag = floor(random(0,1.9))
    }
    show(){
        noStroke();
        circle(this.position.x,this.position.y,2)
    }
    update(){
        let direction;
        direction = createVector(mainC.x-this.position.x,mainC.y-this.position.y);
        direction.mult(0.001)
        this.direction.add(direction).setMag(0.1)
        this.vel.add(this.direction).setMag(3)
        this.position.add(this.vel);
    }
}