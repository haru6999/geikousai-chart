var text = $(document.getElementById('text'));
q = 1; //questionの略

//yesボタンが押されたら
$('#yes').click(function(){
  // text.style.animation="slideIn 1s ease-in";
  $('#text').css('animation', 'slideIn 1s ease-in');
  //次のページへ行く処理
  if(q==1){
    q = 2 ; //2ページへ
    text.html( "目立つことが好き？" );
    // return;
  }else if(q==2){
    q =4; //4へ
    text.html( "めちゃくちゃ目立ちたい？" );
    // $('#result').show();
    // return;
  }else if(q==4){
    window.location.href = './bushocho/stage.html';
    // return;
  }else if(q==7){
    q=6;
    text.html("運動することが好き？");
    return;
  }else if(q==6){
    window.location.href = 'bushocho/undokai.html';
    return;
  }else if(q==24){
    q=25;
    text.html("音楽が好きだ");
    return;
  }else if(q==25){
    window.location.href = 'bushocho/pa.html';
    return;
  }else if(q==27){
    window.location.href = 'bushocho/cafe.html';
    return;
  }else if(q==16){
    q=8;
    text.html("絵を描くのは得意？");
    return;
  }else if(q==8){
    q=5;
    text.html("犬派？");
    return;
  }else if(q==5){
    window.location.href = 'bushocho/web.html';
    return;
  }else if(q==11){
    q=12;
    text.html("締め切りには厳しい方だ");
    return;
  }else if(q==12){
    window.location.href = 'bushocho/direction.html';
    return;
  }else if(q==18){
    window.location.href = 'bushocho/interior.html';
    return;
  }else if(q==20){
    window.location.href = 'bushocho/booth.html';
    return;
  }
  return;
});

//noボタンが押されたら
$('#no').click(function(){
  //次のページへ行く処理
  if(q==1){
    window.location.href = 'bushocho/kanbu.html';
    return;
  }else if(q==2){
    q=16;
    text.html("細かい作業が得意？");
    return;
  }else if(q==4){
    q=7;
    text.html("正直飲むのは好きだ");
    return;
  }else if(q==7){
    q=8;
    text.html("絵を描くのは得意だ");
    return;
  }else if(q==6){
    q=24;
    text.html("大人数で飲むのが好きだ");
    return;
  }else if(q==24){
    q=27;
    text.html("甘いものだーいすき！");
    return;
  }else if(q==27){
    q=18;
    text.html("ニトリに行くのが好きだ");
    return;
  }else if(q==25){
    window.location.href = 'bushocho/bar.html';
    return;
  }else if(q==5){
    window.location.href = 'bushocho/graphic.html';
    return;
  }else if(q==8){
    q=11;
    text.html("アナログ派？");
    return;
  }else if(q==11){
    window.location.href = 'bushocho/eizo.html';
    return;
  }else if(q==12){
    window.location.href = 'bushocho/workshop.html';
    return;
  }else if(q==16){
    q=18;
    text.html("ニトリに行くのが好き？");
    return;
  }else if(q==18){
    q=20;
    text.html("腕相撲が強い");
    return;
  }else if(q==20){
    window.location.href = 'bushocho/exterior.html';
    return;
  }
});

$("#more").click(function() {
  $("#image").addClass('zoom');
  q=1;
  text.html("芸工祭に興味がある");
  return;
});

