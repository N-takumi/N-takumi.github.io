function box(){

  var scrollY = 0;



  function init(){

      if(localStorage.getItem("pass") != "true"){
      pass();
      }

  }



  function pass(){//パスワード認証
    user = window.prompt("パスワードを入力してください","");

    if(user == "pass"){

    localStorage.setItem("pass","true");

    }else{
      window.alert('errer!!');

      $("#home").css({
        "visibility":"hidden",
      });

    }

  }

  function scroll(){
    $(window).scroll(function(){
      scrollY = $(window).scrollTop();

      $('#sctext').text(scrollY + 'px');

      if(scrollY >= 100){

        $("#header").css({
          "width":"100%",
          "height":"20vh",
          "animation-name": "head-key1",
          "animation-duration": "0.5s",
          "animation-iteration-count": "1",
        });

        $("#header-text").hide();
      }


    });
  }

  init();
  scroll();

}

$(function(){


  box();

});
