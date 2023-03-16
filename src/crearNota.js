document.getElementById('formNotas').addEventListener('submit',guardarnota);

function guardarnota(e){
    //guarda valores
    let titulo = document.getElementById('titulo').value;
    let descripcion = document.getElementById('descripcion').value;

    //crea la nota como un objeto
    const nota = {
        titulo,
        descripcion
    };

    //usa el storage para almacenar las notas cuando no hay ninguna
    // push - ingresar dato al arreglo
    if(localStorage.getItem('notas') == null){
        let notas = [];
        notas.push(nota);
        localStorage.setItem('notas', JSON.stringify(notas));
    }else{ //recuperar notas y actualizarlas
        let notas = JSON.parse(localStorage.getItem('notas'));
        notas.push(nota);
        localStorage.setItem('notas', JSON.stringify(notas));
    }

    mostrarnotas();
    document.getElementById('formNotas').reset();
    e.preventDefault();
}

function eliminarnota(titulo){
    let notas = JSON.parse(localStorage.getItem('notas'));
    //titulos notas almacenadas splice-quitar
    for(let i=0; i<notas.length; i++){
        if(notas[i].titulo == titulo){
            notas.splice(i, 1);
        }
    }        
    localStorage.setItem('notas', JSON.stringify(notas));
    mostrarnotas();
}

function mostrarnotas(){
    //mostramos en pantalla las notas desde el locaStorage
    let notas = JSON.parse(localStorage.getItem('notas'));
    let vernotas = document.getElementById('notas');

    vernotas.innerHTML = '';    //limpiamos html

    for(let i = 0; i < notas.length; i++){
        //recorrer todas las notas para mostrarlas
        let titulo = notas[i].titulo;
        let descripcion = notas[i].descripcion;

        vernotas.innerHTML += `<div class="card mb-3">
            <div class="card-body">
                <h2>notas: </h2>
                <p>${titulo} - ${descripcion}
                <a href="#" onclick="eliminarnota('${titulo}')" class="btn btn danger ml-5">
                    Eliminar
                </a>
                </p>
            </div>
        </div>`;
    }
}

mostrarnotas();