function solucao(letra, palavras) {
    var errada = 0; 
    var certa = 0;
    for (let i = 0; i < palavras.length; i++){
        let palavra = palavras[i];
        if(palavra[0] == letra){
            certa++;
        } else {
            errada++;
        }     
    }   
    console.log(errada); 
}   