class BaseClass{
    constructor(x,y,width,height,angle){
        this.body=Bodies.rectangle(x,y,width,height,{restitution:0.8,friction:1.0,density:1.0});

        this.width=width;
        this.height=height;
        World.add(world,this.body);
        this.image=loadImage('Sprites/base.png')

    }

    display(){
        var angle=this.body.angle;
        var position=this.body.position;
        push();
        translate(position.x,position.y);
        rotate(angle)
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);

        pop()
    }
}