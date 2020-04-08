function adicionarPost(){
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const texto = document.getElementById("texto").value;

    document.getElementById("post").innerHTML += "<article><ul>"+titulo+" - "+autor+"</ul>"+'<li>'+texto+'</li></article>';
    document.getElementById('titulo').value = "";
    document.getElementById('autor').value = "";
    document.getElementById('texto').value = "";

    const publicado = {
        titulo: titulo,
        autor: autor,
        texto: texto,
        foiPublicado: true
    }
    console.log(publicado)
}

