import styled from 'styled-components';
import ceu from './ceu.jpg';

export const BodyContainer = styled.div`
    width: 100vw;
    height: 120vh;
    background-image: url(${ceu});
    color: rgb(35, 159, 216);
    font-family:'Patrick Hand', cursive;
    display: flex;
    flex-direction: column;    
    justify-content: center;
    align-items: center;
`;
export const SectionAdicionarTarefa = styled.section`
    background-color: rgb(0, 93, 136);
    border-radius: 10px;
    height: 10%;
    width: 40%;
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;    
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;
export const SectionDiasDaSemana = styled.section`
    height: 60%;
    width: 90%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 5px;    
    justify-content: center;
    align-items: center;
`;
export const TitleDia = styled.h4`
    font-size: 1.2rem;
`;
export const ArticleDia = styled.article`
    padding: 5px;
    border-radius: 10px;
    height: 100%;
    background-color: rgb(35, 159, 216);
    color: black;
`;

// .tamanhoAba{  tags dentro do section
//     height: 30px;
// }


// ul{
//     padding-left: 25px;
// }