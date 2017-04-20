$('.buttons').on('click', ()=>{
  let clicked = $(event.target).html();
  if(clicked.length <= 1 && !(clicked === "C") && !(clicked === "=")){
    $('#screen').html(`${$('#screen').html()}${clicked}`);
  } else if (clicked === "C"){
    $('#screen').html("");
  }else if(clicked === "="){
    evaluate();
  }
});
$('body').on('keypress', (event)=>{
  let acceptableCharacters = ['1', '2' , '3', '4' , '5','6','7','8','9','0', '/', '*', 'x', 'X', '÷', '%','-','+']
  if(acceptableCharacters.indexOf(event.key) != -1){
    $('#screen').html(`${$('#screen').html()}${event.key}`);
  }else if (event.key === "Enter" || event.key === "=") {
    evaluate();
  }else if(event.key === '~'){
    window.location.replace('http://static.fjcdn.com/gifs/When+im+dancing+alone+at+a+party+blues+clues_9b9d7c_3354611.gif');
  }
})

function evaluate(){
  try{
  $('#screen').html(eval($('#screen').html().replace(/÷/g, "/").replace(/x/g,"*")))}
  catch(err){
    $('#screen').html('ERROR');
  }
}
