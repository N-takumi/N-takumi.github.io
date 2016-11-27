function todo(){

  version = "0.1";


  function init(){

    load();//各種ロード

    //[+ボタン]でTodoを追加する
    $("#addbtn").on('click', function(){
      todo = window.prompt("Todoを追加します","");
      if(todo != null){
      localStorage.setItem("todo"+(localStorage.length+1),todo);
      $("#list").append($("<h1>").html("・"+localStorage.getItem("todo"+(localStorage.length))));
      }
    });

    //[リセットボタン]でTodo全削除
    $("#resbtn").on('click', function(){

      localStorage.clear();
      $("#list h1").remove();

    });





  }

  //localStorageにtodoがあれば表示/バージョンの更新
  function load(){
  $("#title").text("Todo List_"+"ver"+version);
    if(localStorage.length > 1){
      for(i = 1;i <= localStorage.length;i++){
      $("#list").append($("<h1>").text("・"+localStorage.getItem("todo"+i)));
      }
    }
  }


  init();
}


$(function(){
  todo();
});
