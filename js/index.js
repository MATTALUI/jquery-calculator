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

function evaluate(){
  try{
  $('#screen').html(eval($('#screen').html().replace(/÷/g, "/").replace(/x/g,"*")))}
  catch(err){
    $('#screen').html('ERROR');
  }
}
