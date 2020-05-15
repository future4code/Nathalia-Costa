import styled from 'styled-components';

export const AppContainer = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 97vh;
  width: 99vw;
  border-radius: 20px;
  background: #5dc1b9;
`;
export const TelaContainer = styled.div`
  height: 100%;
  width: 75%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
export const Buttons = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
export const Cards = styled.div`
  height: 95%;
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items:center;
  background: #dcdcdc;
  border-radius: 20px;
`;
export const ImgCard = styled.img`
  height: 90%;
  width: 80%;
  border-radius: 20px;
  margin-top: 3.5%;
`;
export const Pessoa = styled.p`
  height: 5%;
  width: 70%;
  align-self: flex-start;
  margin-left: 20%;
  margin-top: -12%;
  color: #dcdcdc;
  font-weight: bold;
  font-size: 2rem;
  text-shadow: black 0.1em 0.1em 0.2em;
`;
export const Descrição = styled.p`
  height: 5%;
  width: 80%;
  align-self: flex-start;
  margin-left: 20%;
  margin-top: -4%;
  width: 60%;
  color: #dcdcdc;
  font-size: 1rem;
  text-shadow: black 0.1em 0.1em 0.2em;
`;
export const MatchesContainer = styled.div`
  width: 75%;
  height: 95%;
  text-align: center;
  display: flex;
  flex-direction: column;
`;
export const MatchesDiv = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;
export const CardChips = styled.div`
  display: grid;
  grid-template-columns:repeat(3, 2fr);
  grid-gap: 3px;
  align-items: center;
  justify-content: center;
  margin: 5px;
  height: 95%;
  width: 95%;
`;
export const CardMatch = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 180px;
  width: 150px;
  background: #dcdcdc;
  border-radius: 15px;
  margin: 5px;
`;
export const ImgMatch = styled.img`
  border-radius: 10px;
  width: 100px;
  height: 100px;
`;
export const ButtonResetar = styled.div`
  height: 15%;
`;
export const PerfilContainer = styled.div`
  margin-top: 4%;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const MeusDados = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-evenly;
  height: 30%;
  width: 95%;
`;
export const Avatar = styled.img`
  height: 80%;
  width: 30%;
  align-self: center;
  border-radius: 35px;
`;
export const Infos = styled.p`
  margin-left: 10px;
  align-self: center;
  font-size: 1.5rem;
`;
export const SobreMim = styled.div`
  height: 80%;
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Instagram = styled.p`
`;
export const MinhasFotos = styled.div`
  height: 20%;
  display: grid;
  grid-template-columns:repeat(3, 1fr);
  grid-gap: 4px;
  align-items: center;
`;
export const Fotos = styled.img`
  border-radius: 5px;
  height: 100%;
`;
export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  height: 100%;
  border-right: 1px dotted white;
`;
export const BoxTop = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 100%;
`;
export const Logo = styled.img`
  height: 15%;
  width: 40%;
  margin-top: 5%;
  display: flex;
  align-self: center;
  margin-right: 8%;
`;
export const BoxBottom = styled.div`
  display: flex;
  justify-content: center;
  height: 10%;
  width: 100%;
`;
export const ButtonVerMatches = styled.button`
  border-radius: 40px;
  width: 40%;
  height: 70%;
`;
