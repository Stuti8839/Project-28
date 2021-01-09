class Stone {
    constructor(x,y,r,angle){
        var options={
            isStatic: false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.r = r;
        this.body = Bodies.circle(x,y,r,options);
        this.image = loadImage("stone.png");
        World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle;
        var pos =this.body.position;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop();
    }
}