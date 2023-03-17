function cargar_bloque(){

    let main = document.querySelector(".main");

    for(let i = 0; i<=14; i++ ){

        let div = document.createElement("div");
        div.innerHTML = '<div class="bloque"></div>';
        main.appendChild(div);
    }

}

cargar_bloque();

function agregar_evento(){

  let todoso_los_bloques = document.querySelectorAll(".bloque")

  function saludar(){
    this.classList.add("activar")
    console.log("");
  }

  todoso_los_bloques.forEach(function(elemento){
    elemento.addEventListener("click", saludar)
  })

}
agregar_evento();