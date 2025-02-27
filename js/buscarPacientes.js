var botaoAdicionar = document.querySelector("#Buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    console.log("Buscando Pacientes...");
   
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");

    xhr.addEventListener("load", function() {
        if (xhr.status === 200) { 
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente) { 
                adicionaPacienteNaTabela(paciente); 
            });
        } else {
            console.error("Erro ao buscar pacientes: " + xhr.status);
            var erroAjax = document.querySelector("#erro-ajax");
            erroAjax.classList.remove("invisivel"); 
        }
    });

    xhr.send(); 
});
