class Paper {
constructor(x,y){

var options = {
friction: 0.7,
density: 1,
restitution: 0.8


}
this.body = Bodies.circle(x,y,15);
this.radius = 15;
World.add(world,this.body)


}
display(){
var pos = this.body.position;
var angle  =  this.body.angle;
push();
translate(pos.x,pos.y)
rotate (angle)
ellipseMode (RADIUS)
fill ("blue")
ellipse(0,0,this.radius,this.radius)
pop();


}


    
}