
let points = 0;

function vraagControle(answer , nextQuestion){
    if(answer  == 'juist'){
        points++;
    };
    window.location.href = nextQuestion;
    
    alert(answer + ' '+ points +' '+ nextQuestion);

}