
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var objX,objY;
var objwidth,objheight;
var i;
var a = 1;

function init(){
    //オブジェクトの大きさ定義
    objwidth = 50;
    objheight = 50;

    //オブジェクトの座標定義(ウィンドウの中央に配置)

    objX = canvas.width / 2 - objwidth / 2;
    objY = canvas.height / 2 - objheight / 2;

    drawObj();

}

function drawObj(){
  context.fillRect(objX,objY,objwidth,objheight);
}
