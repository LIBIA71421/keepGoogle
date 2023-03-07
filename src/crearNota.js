document.getElementById('crear-nota-form').addEventListener('submit',guardarNota);

function guardarNota(e){
    //guarda valores
    let titulo = document.getElementById('titulo').value;
    let descripcion = document.getElementById('descripcion').value;

    //crea la nota como un objeto
    const Nota = {
        titulo,
        descripcion
    };

    //usa el storage para almacenar las notas cuando no hay ninguna
    if(localStorage.getItem('notas') == null){
        let notas = [];
        notas.push(Nota);
        localStorage.setItem('notas', JSON.stringify(notas));
    }else{ //recuperar notas y actualizarlas
        let notas = JSON.parse(localStorage.getItem('notas'));
        notas.push(Nota);
        localStorage.setItem('notas', JSON.stringify(notas));
    }

    mostrarNotas();
    e.preventDefault();
}

function mostrarNotas(){
    //mostramos en pantalla las notas desde el locaStorage
    let notas = JSON.parse(localStorage.getItem('notas'));
    let verNotas = document.getElementById('resultado-divNota');

    verNotas.innerHTML = '';    //limpiamos html

    for(let i = 0; i < notas.length; i++){
        //recorrer todas las notas para mostrarlas
        let titulo = notas[i].titulo;
        let descripcion = notas[i].descripcion;

        verNotas.innerHTML += `<div>
            <h2>Notas: </h2>
            <p>${titulo} - ${descripcion}</p>
            <a>
                Eliminar
            </a>
        </div>`
    }
}

mostrarNotas();