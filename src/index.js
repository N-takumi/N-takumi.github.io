function box(){



  function init(){



      pass();
  }



  function pass(){//パスワード認証
    user = window.prompt("パスワードを入力してください","");

    if(user == "pass"){
      $("#home").css({
        "visibility":"visible",
      });

    }else{
      window.alert('errer!!');
    }

  }

  init();

}

$(function(){


  box();

});
