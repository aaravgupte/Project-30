class Polygon{
	constructor(x,y,r)
	{
		var options={
			restitution :0,
            friction :1,
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("polygon.png")
		this.body=Bodies.circle(this.x, this.y, this.r-10, options)
		World.add(world, this.body);
	}

	display()
	{
		var stonePos=this.body.position;	
		push()
		translate(stonePos.x, stonePos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
		pop()
 }
}