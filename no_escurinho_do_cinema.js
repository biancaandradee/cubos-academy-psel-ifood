function solucao(obj) {
	if (obj.temIngresso == true){
       if (obj.idade >= obj.censura || obj.estaComPais == true){
           if (obj.idade < 18 || obj.temCarteirinha == true){
               console.log("MEIA");
           } else {
               console.log("INTEIRA");
           }
       } else {
            console.log("ACESSO NEGADO");
       }
    } else {
         console.log("ACESSO NEGADO");
    }
}