void setup(){
  size(960,540,P3D);
}

void draw(){
  background(0,15,30);
  //原点を画面中心に
  translate(width/2,height/2,0);
  //X軸を中心に回転
  rotateX(frameCount*0.005);
  //Z軸を中心に回転
  rotateZ(frameCount*0.005);
  
  //円上に点を描く
  float radius = 100;//半径
  for(int t = 0;t < 360;t += 10){
    //角度をラジアンに
    float radianT = radians(t);
    //点の座標を計算
    float x = radius * cos(radianT);
    float y = radius * sin(radianT);
    
    stroke(0,128,128);
    strokeWeight(8);
    point(x,y,0);
    
  } 
}