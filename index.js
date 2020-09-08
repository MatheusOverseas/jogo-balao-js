// 1° criar o balão
// 2° estourar o valão
// 3° carregar o jogo
var total = 0;

function criarBalao() {
    var balao = document.createElement("div");
    balao.setAttribute("class", "balao");

    var x = Math.floor(Math.random()* 600);
    var y = Math.floor(Math.random()* 400);

    balao.setAttribute("style", "left:" +x+ "px;top:" +y+ "px;");
    balao.setAttribute("onclick", "estourar(this)");

    document.body.appendChild(balao);
}

function estourar(balao) {
    document.body.removeChild(balao);
    
    total++
    var score = document.getElementById("total")
    score.innerHTML = "Balões estourados:" + total;
}

function carregarJogo(){
    setInterval(criarBalao, 2000);
}


