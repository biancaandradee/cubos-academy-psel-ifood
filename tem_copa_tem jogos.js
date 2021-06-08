function solucao(ano) {
	if ((2020 - ano) % 4 == 0){
        console.log("JOGOS");
    } else {
        if ((2022 - ano) % 4 == 0){
            console.log("COPA");
        } else {
            console.log("MEH");
        }    
    }
}