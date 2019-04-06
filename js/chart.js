var text = $(document.getElementById('text'));
q = 1; //questionの略

//yesボタンが押されたら
$('#yes').click(function(){
  //次のページへ行く処理
  if(q==1){
    q += 1 ; //2ページへ
    text.html( "カキクケコ" );
    return;
  }else if(q==2){
    q +=2; //4へ
    text.html( "タチツテト" );
    $('#result').show();
    return;
  }
  return;
});

//noボタンが押されたら
$('#no').click(function(){
  //次のページへ行く処理
  if(q==1){
    q +1 ; //2ページへ
    return;
  }
});

$("#result").click(function() {
  window.location.href = 'https://prog-8.com/slides?lesson=13%2C21%2C20&word=';
});
