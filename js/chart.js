jQuery(function($){

var text = $(document.getElementById('text'));
q = 1; //questionの略

//yesボタンが押されたら
$('#yes').click(function(){
  // text.style.animation="slideIn 1s ease-in";
  $('#text').css('animation', 'slideIn 1s ease-in');
  //次のページへ行く処理
  if(q==1){
    q = 2 ; //2ページへ
    animation(q);
    text.html( "目立つことが好き？" );
    return;
  }else if(q==2){
    q =4; //4へ
    animation(q);
    text.html( "めちゃくちゃ目立ちたい？" );
    return;
  }else if(q==4){
    popChange("hiru");
    popIn();
    return;
  }else if(q==7){
    q=6;
    animation(q);
    text.html("運動することが好き？");
    return;
  }else if(q==6){
    popChange("undokai");
    return;
  }else if(q==24){
    q=25;
    animation(q);
    text.html("音楽が好きだ");
    return;
  }else if(q==25){
    popChange("pa");
    return;
  }else if(q==27){
    popChange("cafe");
    return;
  }else if(q==16){
    q=8;
    animation(q);
    text.html("絵を描くのは得意？");
    return;
  }else if(q==8){
    q=5;
    animation(q);
    text.html("犬派？");
    return;
  }else if(q==5){
    popChange("web");
    return;
  }else if(q==11){
    q=12;
    animation(q);
    text.html("締め切りには厳しい方だ");
    return;
  }else if(q==12){
    popChange("direction");
    return;
  }else if(q==18){
    popChange("interia");
    return;
  }else if(q==20){
    popChange("booth");
    return;
  }
  
  return;
});

//noボタンが押されたら
$('#no').click(function(){
  //次のページへ行く処理
  if(q==1){
    popChange("kanbu");
    return;
  }else if(q==2){
    q=16;
    animation(q);
    text.html("細かい作業が得意？");
    return;
  }else if(q==4){
    q=7;
    animation(q);
    text.html("正直飲むのは好きだ");
    return;
  }else if(q==7){
    q=8;
    animation(q);
    text.html("絵を描くのは得意だ");
    return;
  }else if(q==6){
    q=24;
    animation(q);
    text.html("大人数で飲むのが好きだ");
    return;
  }else if(q==24){
    q=27;
    animation(q);
    text.html("甘いものだーいすき！");
    return;
  }else if(q==27){
    q=18;
    animation(q);
    text.html("ニトリに行くのが好きだ");
    return;
  }else if(q==25){
    popChange("bar");
    return;
  }else if(q==5){
    popChange("graphic");
    return;
  }else if(q==8){
    q=11;
    animation(q);
    text.html("アナログ派？");
    return;
  }else if(q==11){
    popChange("movie");
    return;
  }else if(q==12){
    popChange("workshop");
    return;
  }else if(q==16){
    q=18;
    animation(q);
    text.html("ニトリに行くのが好き？");
    return;
  }else if(q==18){
    q=20;
    animation(q);
    text.html("腕相撲が強い");
    return;
  }else if(q==20){
    popChange("exteria");
    return;
  }
});



// もう一度診断する
$("#more").click(function() {
  $("#image").addClass('zoom');
  q=1;
  text.html("芸工祭に興味がある");
  return;
});
$("#more2").click(function() {
  q=1;
  text.html("芸工祭に興味がある");
  $("#pop").css({
    'animation':'popsOut 1s'
  });
  setTimeout(function(){
    $('#pop').css({
        'display':'none',
        'animation': 'none'
    });
  },1000);
});

function popIn(){
  $('#pop').css({
    'display':'inline',
    'animation':'popsIn 1s'
  })
  setTimeout(function(){
    $('#pop').css({
        'animation': 'none'
    });
  },1000);
}

function popChange(busho){
  $("#bushomei").attr("src", "image/result/"+busho+"T.png");
  $("#picture").attr("src", "image/result/"+busho+".png");
  $('#popImg').css({
    'display':'inline'
  });
  $("#kanbu").remove();
  $("#picture2").remove();
  if(busho=="hiru"){ //ステージ
    $('#popImg').css({
      'display':'inline'
    });
    $("#kanbu").remove();
    // ボマ追加
    $('#picture').after('<img src="image/result/yoru.png" id="picture2">');
  }
  if(busho=="kanbu"){ //幹部
    $('#popImg').css({
      'display':'none'
    });
    // 指定した要素の最初に、引数で指定した内容を追加。
    $('#pop').prepend('<div id="kanbu"> <img src="image/result/kanbuT.png" id="kanbuT"><img src="image/result/kanbuP.png" id="kanbuP"></div>');
  }
  popIn();
}

// アニメーション
function animation(q){
  if(0<q && q<10){
    $("#serif").attr("src", "image/セリフ１.png");
    $("#image").attr("src", "image/ぱ１.png");
    $('#serif').css({
      'width':'40%',
      'top':'6px',
      'left':'120px'
    })
    $('#image').css({
      'width':'125px',
      'top':'10px',
      'left':'30px'
    })
  }else if(10<=q && q<20){
    $("#serif").attr("src", "image/セリフ２.png");
    $("#image").attr("src", "image/じゃ.png");
    $('#serif').css({
      'width':'40%',
      'top':'6px',
      'left':'120px'
    })
    $('#image').css({
      'width':'105px',
      'top':'20px',
      'left':'40px'
    })
  }else{
    $("#serif").attr("src", "image/セリフ３.png");
    $("#image").attr("src", "image/ぱ２.png");
    $('#serif').css({
      'width':'55%',
      'top':'10px',
      'left':'45px'
    })
    $('#image').css({
      'width':'125px',
      'top':'10px',
      'left':'30px'
    })
  }
}

});