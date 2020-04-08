function adicionarPost(){
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const texto = document.getElementById("texto").value;
    const imagem = document.getElementById("inserirImagem").value;
    const postagem = document.getElementById("post").innerHTML;

    //inserindo os value em uma array
    const publicado = 
    [
        {titulo: titulo, autor: autor, texto: texto, imagem: imagem},
    ]

    //limpando os campos do formulario
    document.getElementById('titulo').value = "";
    document.getElementById('autor').value = "";
    document.getElementById('texto').value = "";
    document.getElementById('inserirImagem').value = "";

    //inserindo value no HTML
    document.getElementById("post").innerHTML = '<article><ul>'+titulo+'</ul>'+'<ol>'+texto+'</ol>'+'<ol><img src='+imagem+'></ol><ol> - '+autor+'<ol></article>'+postagem;

}
