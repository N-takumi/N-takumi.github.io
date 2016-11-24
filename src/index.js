function box(){

  var scrollY = 0;

  function init(){

      if(localStorage.getItem("pass") != "true"){
      pass();
      }

  }



  function pass(){//パスワード認証
    user = window.prompt("パスワードを入力してください","");

    if(user == "pass"){//正しい場合

    localStorage.setItem("pass","true");

    }else{//異なる場合
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

      if(scrollY >= 50){

        $("#header").css({
          "width":"100%",
          "height":"10vh",
          "animation-name": "head-key1",
          "animation-duration": "0.5s",
          "animation-iteration-count": "1",
        });

        $("#header-text").fadeOut();
        $("#logo").fadeIn();
      }


    });
  }

  init();
  scroll();

}

$(function(){


  box();

});
