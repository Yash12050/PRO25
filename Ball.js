class Ball {
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.r= r;

        this.body = Bodies.circle(x,y,this.r,options)
        World.add(world,this.body);
        this.image = loadImage("paperball.png");
    }
    display(){
        fill(200,100,50);
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.r);
        image(this.image)
        imageMode(CENTER);

    }
}