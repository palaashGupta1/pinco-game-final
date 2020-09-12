const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;
var divider1;

var engine, world;
var devisionHeight=300;

var particle = [];
var plinkos = [];
var divisions = [];
function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
  ground1=new Ground(240,795,480,10);
 
  for (var k=0;k<=width;k=k+80){
    divisions.push(new Divisions(k,height-devisionHeight/2,10,devisionHeight));
  }
  
 
   
  
  for (var j=40;j<=width;j=j+50){
  plinkos.push(new Pinco(j,75,10));
  
  }
  for (var a=20;a<=width;a=a+40){
    plinkos.push(new Pinco(a,20,10));
    
    }
  
    for (var b=10;b<=width;b=b+40){
      plinkos.push(new Pinco(b,160,10));
      
      }
      for (var c=0;c<=width;c=c+60){
        plinkos.push(new Pinco(c,230,10));
        
        }
        for (var d=5;d<=width;d=d+60){
          plinkos.push(new Pinco(d,310,10));
          
          }
          for (var e=5;e<=width;e=e+39){
            plinkos.push(new Pinco(e,400,10));
            
            }
}



function draw() {
  background(0);  
  Engine.update(engine);
  
  ground1.display();

  drawSprites();

  for(var i = 0;i<divisions.length;i++){
    divisions[i].display()
   }
   for(var i = 0;i<plinkos.length;i++){
    plinkos[i].display()
   }
   
   for(var a = 0;a<plinkos.length;a++){
    plinkos[a].display()
   }

   for(var b = 0;b<plinkos.length;b++){
    plinkos[b].display()
   }

   for(var c = 0;c<plinkos.length;c++){
    plinkos[c].display()
   }
   for(var d = 0;d<plinkos.length;d++){
    plinkos[d].display()
   }
   for(var e = 0;d<plinkos.length;e++){
    plinkos[e].display()
   }

if(frameCount%2===0){
  particle.push(new Particle(random(width/2-30,width/2+30),10,10))
}
for(var i = 0;i<particle.length;i++){
  particle[i].display()
 }
}