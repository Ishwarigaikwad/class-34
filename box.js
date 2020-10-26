class Box{
    constructor(){
        var options ={
            restitution : 0.8,
            friction : 1.0,
            density : 0.04
             
                }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.height = height;
        this.width = width;
        World.add(myWorld, this.body);
    }
    display(){
       var pos = this.body.position;
       rectMode(CENTER)
       fill("blue")
       rect(pos.x,pos.y,this.width,this.height)
    }
}