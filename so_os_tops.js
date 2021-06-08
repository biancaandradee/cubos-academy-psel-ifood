function solucao(produtos) {
    let top = 0;
    let total = 0;
    for (let item of produtos){
        total += item.preco;
        //var preco = item.preco;
        if (item.preco > 10000){
            top += item.preco;
        }  
    }
    var resposta = {
        totalTop: top,
        percentual: top/total
    };
    console.log(resposta);
}