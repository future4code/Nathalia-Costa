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
//# sourceMappingURL=exercicio06.js.map