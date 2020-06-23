const publiOne = {
    autor: 'Daniel',
    texto: 'I am Daniel!'
};
const publiTwo = {
    autor: 'Nath',
    texto: 'I am two!'
};
const publiThree = {
    autor: 'Gabriela',
    texto: 'I am Gabriela!'
};
const publiFour = {
    autor: 'Nath',
    texto: 'I am four!'
};
const publiFive = {
    autor: 'Five',
    texto: 'I am Five!'
};
const arrayPosts = [publiOne, publiTwo, publiThree, publiFour, publiFive];
console.log('Array: ', arrayPosts);
function buscarAuthor(posts, query) {
    const resultado = posts.filter((author) => {
        return author.autor === query;
    });
    return resultado;
}
console.log(buscarAuthor(arrayPosts, "Nath"));
//# sourceMappingURL=exercicio4.js.map