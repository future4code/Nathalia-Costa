import React from 'react';
import {PerfilContainer , MeusDados, Avatar, Infos, SobreMim, Instagram, MinhasFotos, Fotos} from '../Styled'


function Perfil() {
  return (
    <PerfilContainer>
      <MeusDados>
        <Avatar
          src={'https://statig3.akamaized.net/bancodeimagens/8w/c5/sv/8wc5sv42iwrkjrkvhig4zpylv.jpg'} />
        <Infos><b>Neytiri</b> - 26 anos</Infos>
      </MeusDados>
      <SobreMim>
        <p>Oii, nem sei porque estou aqui. hihi</p>
        <Instagram><b>Instagram</b>, @neytirii</Instagram>
        <MinhasFotos>
          <Fotos src={"https://picsum.photos/400/400?a=1"} />
          <Fotos src={"https://picsum.photos/400/400?a=2"} />
          <Fotos src={"https://picsum.photos/400/400?a=3"} />
          <Fotos src={"https://picsum.photos/400/400?a=4"} />
          <Fotos src={"https://picsum.photos/400/400?a=5"} />
          <Fotos src={"https://picsum.photos/400/400?a=6"} />
        </MinhasFotos>
        {/*LISTA DE INFORMAÇÕES SOBRE O PERFIL*/}
      </SobreMim>

    </PerfilContainer>
  );
}

export default Perfil;