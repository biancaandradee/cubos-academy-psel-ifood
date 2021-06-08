function solucao(joao, andre) {
    if (joao === "PEDRA"){
        if (andre === "PEDRA"){
            console.log("EMPATE");
        } else if (andre === "PAPEL"){
            console.log("ANDRE");
        } else if (andre === "TESOURA"){
            console.log("JOAO");
        }
    }
    if (joao === "PAPEL"){
        if (andre === "PAPEL"){
            console.log("EMPATE");
        } else if (andre === "TESOURA"){
            console.log("ANDRE");
        } else if (andre === "PEDRA"){
            console.log("JOAO");
        }
    }
    if (joao === "TESOURA"){
        if (andre === "TESOURA"){
            console.log("EMPATE");
        } else if (andre === "PEDRA"){
            console.log("ANDRE");
        } else if (andre === "PAPEL"){
            console.log("JOAO");
        }
    }    
}
