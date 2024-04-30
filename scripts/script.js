const imagem = document.getElementById("img-heroi");
const rank = document.getElementById("rank-heroi");
const nomeInput = document.getElementById("nome-input");
const powerLevel = document.getElementById("powerLevel");
const btnMostra = document.getElementById("btn-calcula");
const btnAdd = document.getElementById("add-heroi");
const btnLimpa = document.getElementById("btn-limpa");
const container = document.getElementById("resultado");

let lutadores = [];

function addHeroi(nome, lvl){
    
    if (nome !== "" && lvl !== "") {
        let rank;
        switch (true) {
            case lvl >= 0 && lvl <= 1000:
                rank = "1";
                break;
            case lvl >= 1001 && lvl <= 2000:
                rank = "2";
                break;
            case lvl >= 2001 && lvl <= 5000:
                rank = "3";
                break;
            case lvl >= 5001 && lvl <= 10000:
                rank = "4";
                break;
            case lvl >= 10001 && lvl <= 20000:
                rank = "5";
                break;
            case lvl >= 20001 && lvl <= 50000:
                rank = "6";
                break;
            case lvl >= 50001 && lvl <= 100000:
                rank = "7";
                break;
            case lvl >= 100001:
                rank = "8";
                break;
            default:
                rank = null;
        }
        if (rank !== null) {
            var heroi = [nome, rank];
            powerLevel.value = "";
            lutadores.push(heroi);
            nomeInput.value = "";
        } else {
            alert('adicione valores válidos');
        }
    } else {
        alert('adicione valores válidos');
    }
}

function mostraHerois(){
    for (i=0; i< lutadores.length; i++) {
        const novoContainer = document.createElement("div");
        const novoNome = document.createElement("h2");
        const novaImagem = document.createElement("img");
        novoContainer.id="container"
        novoNome.textContent = lutadores[i][0];
        novaImagem.src =`./assets/${lutadores[i][1]}.jpg`
        resultado.appendChild(novoContainer)
        novoContainer.appendChild(novoNome);
        novoContainer.appendChild(novaImagem);
    }
    lutadores = [];
    btnAdd.disable=true
    btnMostra.disable=true
    btnLimpa.className="show"
    
}
function limpaTela (){
    resultado.innerText = "";
    btnLimpa.className="off"



}

const clickbtn = ()=> addHeroi(nomeInput.value, powerLevel.value)
btnAdd.addEventListener("click", clickbtn)
btnMostra.addEventListener("click", mostraHerois)
btnLimpa.addEventListener("click", limpaTela)