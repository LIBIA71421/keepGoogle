document.getElementById('crear-nota-form').addEventListener('submit',guardarNota);

function guardarNota(e){
    let titulo = document.getElementById('titulo').value;
    let descripcion = document.getElementById('descripcion').value;

    e.preventDefault();
}