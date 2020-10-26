class Ball{
    constructor(){
       this.body = Bodies.circle(x,y,radius) 
       this.radius = radius;
    World.add(myWorld,this.body);
    }
  display(){
      var pos = this.body.position
      ellipsesMode(RADIUS)
      fill("white")
      ellipes(pos.x,pos.y,this.radius)
  }  
}