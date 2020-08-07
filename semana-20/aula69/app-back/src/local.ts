import {app} from './index';
import { AddressInfo } from 'net';

const server = app.listen(process.env.PORT || 3002, () => {
    if(server) {
        const adress = server.address() as AddressInfo;
        console.log(`Servidor rodando em http://localhost:${adress.port}`);
    } else {
        console.error(`Falha ao rodar o servidor.`);
    }
});