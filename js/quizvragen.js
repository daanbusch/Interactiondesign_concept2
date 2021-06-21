import Player from "./player.js;";
// inlog button maken \; prompt('vul uw naam in') new Player();

function vraagControle(answer , nextQuestion){
    if(answer  == 'juist'){
        points++;
    };
    window.location.href = nextQuestion;
    
    alert(answer + ' '+ points +' '+ nextQuestion);

}