class Slingshot{
    constructor(bodyA,pointB){
     var options={
         bodyA:bodyA,
         pointB:pointB,
         stiffness:0.4,
         length:10
     }
     this.pointB=pointB
     this.body=Constraint.create(options);
     World.add(world,this.body);


     this.sling1=loadImage('sprites/sling1.png');
     this.sling2=loadImage('sprites/sling2.png');
     this.sling3=loadImage('sprites/sling3.png');

    }
    attach(body){
        this.body.bodyA=body;
    }

    fly(){
    this.body.bodyA=null
    }

    display(){
        image(this.sling1,200,20);
        image(this.sling2,170,20);
        var BodyA=this.body.bodyA;
        var PointB=this.pointB;
        if(this.body.bodyA){
        strokeWeight(4)
        line(BodyA.position.x-20,BodyA.position.y,PointB.x-10,PointB.y);
        line(BodyA.position.x-20,BodyA.position.y,PointB.x+30,PointB.y-3);
        }
        
    }
}