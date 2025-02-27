
var tabela = document.querySelector("#tabela-geral");

tabela.addEventListener("dblclick", function(event) {
    var alvoEvento = event.target.parentNode; 
    
    alvoEvento.classList.add("fadeOut"); 
    
    setTimeout(function() {
        alvoEvento.remove(); 
    }, 600);
});

var input = document.querySelector("#filtrar-tabela");

input.addEventListener("focus", function() {
    this.placeholder = ""; 
});

input.addEventListener("blur", function() {
    this.placeholder = "Digite para Pesquisar..."; 
});