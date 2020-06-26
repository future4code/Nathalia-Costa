"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const baseUrl = `https://us-central1-labenu-apis.cloudfunctions.net/labenews`;
const getAssinantes = () => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield axios_1.default.get(`${baseUrl}/subscribers/all`);
    return usuarios.data;
});
const getNoticias = () => __awaiter(void 0, void 0, void 0, function* () {
    const noticia = yield axios_1.default.get(`${baseUrl}/news/all`);
    return noticia.data;
});
const enviarNotificacao = (usuarios, mensagem) => __awaiter(void 0, void 0, void 0, function* () {
    const promiseArray = [];
    for (const usuario of usuarios) {
        console.log("Enviando notificação para: ", usuario.name);
        promiseArray.push(axios_1.default.post(`${baseUrl}/notifications/send`, {
            subscriberId: usuario.id,
            message: mensagem
        }));
    }
    ;
    yield Promise.all(promiseArray);
    console.log("As notificações foram enviadas");
});
const addAssinante = (name, email) => __awaiter(void 0, void 0, void 0, function* () {
    yield axios_1.default.put(`${baseUrl}/subscribers`, {
        name,
        email
    });
});
function putCriarNoticia(title, content, date) {
    return __awaiter(this, void 0, void 0, function* () {
        yield axios_1.default.put(`${baseUrl}/news`, {
            title,
            content,
            date
        });
    });
}
;
const criarEEnviarNotificacao = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield putCriarNoticia("Eu acho...", "Que vi um gatinho", 1593123227);
        const usuarios = yield getAssinantes();
        yield enviarNotificacao(usuarios, "Olha essa novidade!");
    }
    catch (erro) {
        console.log("erro: ", erro.message);
    }
});
const getTodasNotificações = () => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield getAssinantes();
    const notificacaoPromise = [];
    for (const usuario of usuarios) {
        notificacaoPromise.push(axios_1.default.get(`${baseUrl}/subscribers/${usuario.id}/notifications/all`));
    }
    ;
    const resultado = yield Promise.all(notificacaoPromise);
    const dataResultado = resultado.map(res => res.data);
    return dataResultado;
    console.log(dataResultado);
});
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    yield getTodasNotificações();
    yield getNoticias();
});
main();
//# sourceMappingURL=exercicio07.js.map