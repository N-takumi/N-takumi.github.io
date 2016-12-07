int posx = width/2,posy = height/2;

void setup(){
  size(300,300);
  textSize(18);
  textAlign(CENTER);
  frameRate(1);
}

void draw(){
  background(0);
  int h = hour();
  int m = minute();
  int s = second();
  String t = h+":"+nf(m,2)+":"+nf(s,2);
  text(t,150,150);
  rect(0,0,h*2,10);
  rect(0,10,m*2,10);
  rect(0,20,s*2,10);
}