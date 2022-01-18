let _text;
let r = 1000
let s = 0.04
let d = .039
let e = 200
let q = 16
let c = 10000000000000
let v = 100000000000000
let orbits = []; 
let spheres = [];
let angle = 45;
let indicator = 0;
let elements = {
  lithium: {
    protons:3,
    neutrons: 2,
  numberOfOrbits: (16),
  range: {min:1/6,max:16/6}
}
}
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES)
  //  createCanvas(windowWidth, windowHeight);
  _text = createGraphics(windowWidth, windowHeight);
  _text.textFont('Source Code Pro');
  _text.textAlign(CENTER);
  _text.textSize(15);
  _text.fill(3, 7, 11);
  _text.noStroke();
  _text.text('This is a model atom with changing charges', width * .27, height * .1);
  _text.text('The key presses include  - , 9, 8, 7, 6, 5, and 4', width * .29, height * .16);
  //all text code is from https://editor.p5js.org/slow_izzm/sketches/ByOUeWVjX\
  for( let i = 0; i < elements.lithium.numberOfOrbits; i++ ) {
    orbits[i] = {
      w: e,
      h: 100,
      theta: 1,
      speed: random() > .9 ? -random(0.06,0.1) : random(0.06,0.1),
      rotation: random(elements.lithium.range.min, elements.lithium.range.max)      
    }
    // spheres[i] = {
    // translate
    // }
  }
//   orbits = [
// {
//   w: e,
//   h: 100,
//   theta: 1,
//   speed: random() > 0.5 ? -random(0.02,0.06) : random(0.02,0.06),
//   rotation: 17/6,
// },
// {
//   w: e,
//   h: 100,
//   theta: 1,
//   speed: random() > 0.5 ? -random(0.02,0.06) : random(0.02,0.06),
//   rotation: 1/6,  
// },
// {
//   w: e,
//   h: 100,
//   theta: 1,
//   speed: random() > 0.5 ? -random(0.02,0.06) : random(0.02,0.06),
//   rotation: 7/6,  
// },
// {
//   w: e,
//   h: 100,
//   theta: 1,
//   speed: random() > 0.5 ? -random(0.02,0.06) : random(0.02,0.06),
//   rotation: 11/6,  
// },
// {
//   w: e,
//   h: 100,
//   theta: 1,
//   speed: random() > 0.5 ? -random(0.02,0.06) : random(0.02,0.06),
//   rotation: 16/6,  
// },
// {
//   w: e,
//   h: 100,
//   theta: 1,
//   speed: random() > 0.5 ? -random(0.02,0.06) : random(0.02,0.06),
//   rotation: 9/12,  
// }
// ];  
}

function draw() {
  background('white')
  noStroke()
  texture(_text);
  plane(windowWidth,windowHeight);
  // textSize(30)
  // text('hello', 10, 30)
  // textSize(30)
  // text('this is a model atom of Lithium', 10, 40)
  stroke('black')
  fill('blue')
  if (indicator == 0) {
  for( let orbit of orbits ) {
    push();
    translate(width/270,height/80);
    rotate(orbit.rotation)
    let x = orbit.w * cos(orbit.theta);
    let y = orbit.h * sin(orbit.theta);
    orbit.theta -= orbit.speed;
    circle(x,y,9);
    pop();
  }




//   

fill('red')
  push();
  rotateX(frameCount/c);
  rotateZ(frameCount/v);
  
  // rotateY(frameCount/100);
  rotateY(millis() /r);
  push();
   fill('blue')
  translate(-30, height/18);
  sphere(12.5,8,8);
  pop();
  push();
  translate(-20, height/17);
  sphere(12.5,8,8)  
  pop();
  push();
  fill('blue')
  translate(-5, height/19);
  sphere(12.5,8,8)
  pop();  
   push();
   fill('red')
   translate(0, height/20);
  sphere(12.5,8,8)
  pop();
   push();
   fill('blue')
   translate(-5, height/51);
  sphere(12.5,8,8)
  pop();
  //  translate(-30, height/119.5, -195);
  // sphere(11,8,8)

  pop();
}

  if (indicator == 1) {
translate(width/280, height/80);
rotate(angle);
circle(0,0,40)
for (let i = 0; i < 3; i++) {
  noFill();
  ellipse (0,0,80,240);
  rotate(120);
}
for (let i = 0; i<3; i++) {
  fill('black');
  circle(40*cos(angle*5), 120*sin(angle*5), 20);
  rotate(120);
}
angle +=1;
}

}

// function draw() {
//   background(115, 256, 230);
//   rotateX(frameCount * 0.01);
//   rotateZ(frameCount * 0.01);
//   cylinder(70, 200);
// }
function keyPressed() {
  // if(key === "a") {
  //     orbit1.theta += 0.04; = orbit1.theta -= 0.04;
  //      orbit2.theta += 0.04; = orbit2.theta += 0.04;
  //       orbit3.theta += 0.04; = orbit3.theta += 0.04;
  //        orbit4.theta += 0.04; = orbit4.theta -= 0.04;
  //         orbit5.theta += 0.04; = orbit5.theta -= 0.04;
  //          orbit6.theta += 0.04; = orbit6.theta -= 0.04;
  
  if(key === "-") {
r= r*-1
  }
  if(key === "9") {
    c= c/ 100000000000
  }
    if(key === "8") {
    c= c* 100000000000
  }
    if(key === "7") {
    v= v/ 1000000000000
  }
  if(key === "6") {
    v= v* 1000000000000
  }
  if(key === "5") {
    r= r/ 1.5
  }
  if(key === "4") {
    r= r* 1.5
  }
  if(key === '1') {
    indicator = 0;
    redraw();
  }
  if (key === '2') {
    indicator = 1;
    redraw();
  }
  // if(key === "a") {
  //   q= q+1
  // }
//   if(key === "0") {
// r= r*+1
//   }
  // if(key === "9") {
  //   s= s*1.1
  //   d= d*1.11
  // }
  // if(key === "8") {
  //   d= d*-1
  // }
  // if(key === "7") {
  //   s=s*-1
  // }
  // // if(key === "6") {
  // //   e= e*1.1
  // // }
  // if(key === "5") {
  //   r= r*.9 
  
}

