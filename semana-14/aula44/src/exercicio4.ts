type post = {
    autor: string,
    texto: string
}

const publiOne: post = {
    autor: 'Daniel',
    texto: 'I am Daniel!'
}
const publiTwo: post = {
    autor: 'Nath',
    texto: 'I am two!'
}
const publiThree: post = {
    autor: 'Gabriela',
    texto: 'I am Gabriela!'
}
const publiFour: post = {
    autor: 'Nath',
    texto: 'I am four!'
}
const publiFive: post = {
    autor: 'Five',
    texto: 'I am Five!'
}

const arrayPosts: Array<Object> = [publiOne, publiTwo, publiThree, publiFour, publiFive]
console.log('Array: ', arrayPosts)

function buscarAuthor(posts: Array<Object>, query: string): Array<Object> {
    const resultado: Array<Object> = posts.filter((author: post) => {
        return author.autor === query;
    });
    return resultado
}
console.log(buscarAuthor(arrayPosts, "Nath"))

