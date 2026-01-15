let heroi = "Toretto";
let xp = 0;

function checagemNivel(xp) {
    if (xp <= 1000) {
        return "ferro";
    } else if (xp <= 2000) {
        return "bronze";
    } else if (xp <= 5000) {
        return "prata";
    } else if (xp <= 7000) {
        return "ouro";
    } else if (xp <= 8000) {
        return "platina";
    } else if (xp <= 9000) {
        return "ascendente";
    } else if (xp <= 10000) {
        return "imortal";
    } else {
        return "radiante";
    }
}

function atualizarHeroi(novoXp) {
    xp = novoXp;
    let nivel = checagemNivel(xp);
    let checagem = `O Herói de nome ${heroi} está no nível ${nivel}`;
    console.log(checagem);
}

atualizarHeroi(0);
atualizarHeroi(4000);
atualizarHeroi(9000);
