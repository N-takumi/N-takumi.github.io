function box(){


  function init(){
    user = window.prompt("パスワードを入力してください","");

    if(user == "pass"){
      $("#home").css({
        "visibility":"visible",
      })
    }else{
      window.alert('errer!!');
    }

  }

  init();

}

$(function(){

  box();

});
