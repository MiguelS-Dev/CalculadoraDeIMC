var campoBuscar = document.querySelector("#filtrar-tabela");

campoBuscar.addEventListener("input", function () {
    console.log(this.value);

    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {
        var filtro = this.value.toLowerCase(); 

        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent.toLowerCase(); 

            if (!nome.includes(filtro)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});
