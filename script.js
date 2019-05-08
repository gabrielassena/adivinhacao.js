window.addEventListener('DOMContentLoaded', function(){
    let filmes = [
        " ./deadpool.gif",
        "./guardiao.gif",
        "./pantera.gif"
    ]
    let respostafilme = [
        "Deadpool",
        "Guardiões da Galáxia",
        "Pantera Negra"
    ]
    let botao = document.getElementById("botao");
    botao.addEventListener("click", function(){
        document.getElementById("botao").style = "display: none"; 
        setTimeout(function(){document.getElementById("gif").src = filmes[0];});
        setTimeout(function(){document.getElementById("gif").src = filmes[1];}, 4000);
        setTimeout(function(){document.getElementById("gif").src = filmes[2];}, 8000);
        setTimeout(function(){document.getElementById("gif").src = "";}, 10000);
        setTimeout(function(){document.getElementById("resposta-filme").innerHTML = respostafilme;}, 10000);
});

});