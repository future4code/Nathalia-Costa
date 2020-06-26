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
function putCriarNoticia(title, content, date) {
    return __awaiter(this, void 0, void 0, function* () {
        yield axios_1.default.put(`${baseUrl}/news`, {
            title: "Cassia Eller",
            content: "Mudaram as estações, nada mudou",
            date: 1593123227
        });
    });
}
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield putCriarNoticia("Cassia Eller", "Mudaram as estações, nada mudou", 1593123227);
    }
    catch (err) {
        console.log("Erro: ", err.message);
    }
});
main();
//# sourceMappingURL=exercicio04.js.map