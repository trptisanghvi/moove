var s0 = function( sketch ) {

let video;
let snapshots = [];
let counter = 0;


 sketch.setup= function() {
 sketch.canvas = sketch.createCanvas(320,240);
  sketch.canvas.position(330, 0);
   sketch.scale(-1.0,1.0)
  sketch.video = sketch.createCapture(sketch.VIDEO, sketch.ready);
  sketch.video.size(300,150);
  sketch.background(225,225,225);
  sketch.video.position(500, 260);
  sketch.tint(255, 232, 0); //yellow
  sketch.scale(-1.0,1.0) 
}

let go = false;
sketch.mousePressed = function() {
  
    setTimeout(function(){ 
        go = true; 
    }, 2000);
}
 sketch.draw= function() {

  if (go) {
  snapshots[counter] = sketch.video.get();
    counter++;
   
  	let w = 80;
    let h = 80;
    let x = 0;
    let y = 0;
    for(let i=0; i<snapshots.length; i++) {
      let index = (i+sketch.frameCount) % snapshots.length;      
    sketch.image(snapshots[index], x,y,w,h);
      x=x+w; 
      if(x>sketch.width) {
      x=0;
      y=y+h;
      
      }
    }      
  }
sketch.noLoop = function(){}}

}


var s1 = function( sketch ) {

let video;
let snapshots = [];
let counter = 0;

 sketch.setup= function() {
 sketch.canvas = sketch.createCanvas(320,240);
  sketch.canvas.position(660, 0);
  sketch.scale(-1.0,1.0)
  sketch.video = sketch.createCapture(sketch.VIDEO, sketch.ready);
  sketch.video.size(300,150);
  sketch.background(225,225,225);
  sketch.video.position(500, 260);
  sketch.tint(237,103,97); //orange
  sketch.scale(-1.0,1.0)

}


let go = false;
sketch.mousePressed = function() {
	setTimeout(function(){ 
        go = true; 
    }, 4000);

}
  

 sketch.draw= function() {
  
  if (go) {
  snapshots[counter] = sketch.video.get();
    counter++;
   
  	let w = 80;
    let h = 80;
    let x = 0;
    let y = 0;
    for(let i=0; i<snapshots.length; i++) {
      let index = (i+sketch.frameCount) % snapshots.length;      
    sketch.image(snapshots[index], x,y,w,h);
      x=x+w; 
      if(x>sketch.width) {
      x=0;
      y=y+h;
      }
    }      
  sketch.setTimeout = function() {
  (sketch.draw,6000) }
  }
}
sketch.noLoop = function(){}
}


var s2 = function( sketch ) {

let video;
let snapshots = [];
let counter = 0;

 sketch.setup= function() {
 sketch.canvas = sketch.createCanvas(320,240);
  sketch.canvas.position(330, 420);
  sketch.scale(-1.0,1.0)
  sketch.video = sketch.createCapture(sketch.VIDEO, sketch.ready);
  sketch.video.size(300,150);
  sketch.background(225,225,225);
  sketch.video.position(500, 260);
  sketch.tint(249, 132, 202); //bubblegum
  sketch.scale(-1.0,1.0)
 
}

let go = false;
sketch.mousePressed = function() {
 	setTimeout(function(){ 
        go = true; 
    }, 8000);

}


 sketch.draw= function() {
  if (go) {
  snapshots[counter] = sketch.video.get();
    counter++;
   
  	let w = 80;
    let h = 80;
    let x = 0;
    let y = 0;
    for(let i=0; i<snapshots.length; i++) {
      let index = (i+sketch.frameCount) % snapshots.length;      
    sketch.image(snapshots[index], x,y,w,h);
      x=x+w; 
      if(x>sketch.width) {
      x=0;
      y=y+h;
      }
    }      
  }
}
sketch.noLoop = function(){}
}

var s3 = function( sketch ) {

let video;
let snapshots = [];
let counter = 0;

 sketch.setup= function() {
 sketch.canvas = sketch.createCanvas(320,240);
  sketch.canvas.position(660, 420);
  sketch.scale(-1.0,1.0)
  sketch.video = sketch.createCapture(sketch.VIDEO, sketch.ready);
  sketch.video.size(300,150);
  sketch.background(225,225,225);
  sketch.video.position(500, 260);
  sketch.tint(0, 157, 165);// light teal
  sketch.scale(-1.0,1.0)

}

let go = false;
sketch.mousePressed = function() {
 	setTimeout(function(){ 
        go = true; 
    }, 14500);

}


 sketch.draw= function() {
  
  if (go) {
  snapshots[counter] = sketch.video.get();
    counter++;
   
  	let w = 80;
    let h = 80;
    let x = 0;
    let y = 0;
    for(let i=0; i<snapshots.length; i++) {
      let index = (i+sketch.frameCount) % snapshots.length;      
    sketch.image(snapshots[index], x,y,w,h);
      x=x+w; 
      if(x>sketch.width) {
      x=0;
      y=y+h;
      }
    }      
  }
}
sketch.noLoop = function(){}
}

var myp5_0 = new p5(s0);
var myp5_0 = new p5(s1);
var myp5_0 = new p5(s2);
var myp5_0 = new p5(s3);
