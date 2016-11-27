function box(){

  var scrollY = 0;

  function init(){


      //if(localStorage.getItem("pass") != "true"){//初回アクセス時のみパスを聞く
      //pass();
      //}

      scroll();//すくろーる処理

  }

//--------関数-------------------------------------------------->

  function pass(){//パスワード認証
    user = window.prompt("パスワードを入力してください","");

    if(user == "pass"){//正しい場合

    localStorage.setItem("pass","true");

    }else{//異なる場合
      window.alert('404 not found!!');//めっちゃ煽る

      $("#home").css({
        "visibility":"hidden",
      });
    }

  }

  function scroll(){//すくろーる処理
    $(window).scroll(function(){
      scrollY = $(window).scrollTop();//すくろーる位置はピクセルで表す

      $('#sctext').text('現在のすくろーる位置 :' +　scrollY + 'px');

      if(scrollY >= 80){

        $("#header").css({
          "width":"100%",
          "height":"10vh",
          "animation-name": "head-key1",
          "animation-duration": "0.5s",
          "animation-iteration-count": "1",
        });

        $("#header-text").slideUp();
        $("#logo").slideDown();
      }


    });
  }

//---------------------------------------------------------------------->

  init();


}

$(function(){

  box();

});
