class Bird extends BaseClass{
    constructor(x,y,width,height){
        super(x,y,width,height);  
        this.image=loadImage('Sprites/bird.png');
        this.smokeimage=loadImage('Sprites/smoke.png');
        this.trajectory=[];
    }

   display(){
       //this.body.position.x=mouseX
       //this.body.position.y=mouseY
       super.display();
       if(this.body.velocity.x>10 && this.body.position.x>200){
           var position=[this.body.position.x,this.body.position.y];
           this.trajectory.push(position);
       }
       for(var i=0;i<this.trajectory.length;i++){
           image(this.smokeimage,this.trajectory[i][0],this.trajectory[i][1]);
       }
   } 
}