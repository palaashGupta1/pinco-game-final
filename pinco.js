class Pinco {
    constructor(x,y,radius) {
      var options = {
          restitution:1,
            density:1,
        friction:0,
        isStatic:true

      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("white");
      ellipse(pos.x, pos.y, this.radius, this.radius);
    }
  };