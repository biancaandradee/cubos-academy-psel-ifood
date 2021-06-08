function solucao(precos) {
    var total = 0;
    var menor = precos[0];
    if (precos.length >= 5){
        for (var i = 0; i < precos.length; i++){
            total += precos[i];
            if(precos[i] < menor){
               menor = precos[i];
            }
        }
        total = total - menor; 
        console.log(total);
    } else {
        for (let item of precos){
        total += item;
        }
        console.log(total);
    } 
}