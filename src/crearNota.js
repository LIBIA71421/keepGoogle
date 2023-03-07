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
        notas.push(notas);
        localStorage.setItem('notas', JSON.stringify(notas));
    }

    
    e.preventDefault();
}