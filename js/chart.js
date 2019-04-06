var text = $(document.getElementById('text'));
var question = 1;

//yesボタンが押されたら
$('#yes').click(function(){
  //次のページへ行く処理
  if(question==1){
    this.question += 1 ; //2ページへ
    text.html( "カキクケコ" );
    return;
  }else if(quesution==2){
    this.question +=2; //4へ
    text.html( "タチツテト" );
    returm;
  }
  return;
});

//noボタンが押されたら
$('#no').click(function(){
  //次のページへ行く処理
  if(question==1){
    question +1 ; //2ページへ
    return;
  }
});
