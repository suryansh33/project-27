class Bob {
constructor(x,y,r){
var options={
    isStatic:false,
    restitution:1,
    friction:0,
    density:0.8

}
this.bob=Bodies.circle(this.x,this.y,(this.r)/2,options)
this.x=x;
this.y=y;
this.r=r;
World.add(world,this.bob)


}
display(){
    var pos=this.bob.position;
    push()
    translate(pos.x,pos.y)
    fill(255,0,255);
    ellipseMode(RADIUS);
    ellipse(0,0,this.r)
    pop()
}
}