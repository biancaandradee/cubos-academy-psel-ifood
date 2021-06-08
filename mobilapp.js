function solucao(tempo, distancia) {
	if (tempo < 5){
        var total = 600;
    } else if (tempo >= 5 && tempo <= 60){
        total = (tempo * 100) + (50 * distancia);
    } else if (tempo > 60){
        if (distancia < 100){
            total = 200 * distancia;
        } else if (distancia >= 100){
            total = 150 * distancia;
        }
    }
   console.log(total);
}