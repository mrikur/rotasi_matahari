
let objectMatahari; let objectVenus; let objectBumi; let objectBulan;
function preload(){
 objectMatahari = loadImage('matahari.jpg');
 objectVenus = loadImage('venus.jpg');
 objectBumi = loadImage('bumi.jpg');
 objectBulan = loadImage('bulan.jpg');
}
function setup(){
 createCanvas(1300,800,WEBGL);
}
function draw(){
  camera(width/2, -800, 700, 0, 0, 0, 0, 1, 0);
  background(0); translate(0,-200);
// garis orbit1
  push();
    noFill();
    stroke(255);
    rotateX(radians(90));
    ellipse(0, 0, 800, 800);
  pop();
// garis orbit 2
  push();
    noFill();
    stroke(255);
    rotateX(radians(90));
    ellipse(0, 0, 1600, 1600);
  pop();
  
//   Matahari
  rotateY(millis()*0.001*radians(-10));
  noStroke(); texture( objectMatahari ); sphere(200);
  
  push();
//   Venus
  pointLight(950, 950, 950, 950, -200, 0);
  rotateY(millis()*0.001*radians(30));
  translate(-400,0);
  rotateY(millis()*0.001*radians(60));
  texture( objectVenus); sphere(100);
  pop();
  
  push();
//   Bumi
  pointLight(250, 250, 250, -100, -100, 0);
  rotateY(millis()*0.001*radians(15));
  translate(-800,0);
  rotateY(millis()*0.001*radians(45));
  texture( objectBumi ); sphere(100);
// Bulan
  rotateY(millis()*0.001*radians(45));
  
  translate(150,0);
  texture( objectBulan ); sphere(30);
  rotateY(millis()*0.001*radians(30));
  pop();
}