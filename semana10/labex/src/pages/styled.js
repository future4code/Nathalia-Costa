import styled from 'styled-components';
import back from '../components/back.png';


export const AppContainer = styled.div`
    margin: 0;
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    font-family: 'Roboto', sans-serif;
`;
export const Container = styled.div`
    background-image: url(${back});
`;

//Home Page
export const HomeContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    background-image: url(${back});
`;
export const NavHome = styled.div`
    height: 15%;
    width: 99%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`;
export const ButtonLogin = styled.button`
    height: 50px;
    width: 120px;
    border-radius: 20px;
    background: transparent;
    color: white;
    font-weight: bold;
`;
export const BodyHome = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ImgLogo = styled.img`
    width: 40%;
`;
export const ButtonVerViagens = styled.button`
    width: 250px;
    height: 50px;
    border-color: #ff7800;
    background: transparent;
    color: white;
    font-weight: bold;
`;

// Login Page
export const LoginContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${back});
    color: white;
`;
export const TextLogin = styled.h1`
    height: 50px;
`;
export const ImgLogoLogin = styled.img`
    height: 100px;
    display: flex;
    justify-self: flex-start;
`;
export const BoxLogin = styled.div`
    height: 400px;
    width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
    border-radius: 10px;
    background: transparent;
`;
export const LinkRecuperarSenha = styled.a`
    color: #ff7800;
`;
export const InputLogin = styled.input`
    height: 35px;
    width: 350px;
    margin-bottom: 15px;
    border-radius: 10px;
`;
export const ButtonSingIn = styled.button`
    height: 35px;
    width: 100px;
    margin-top: 15px;
    border-radius: 10px;
    font-weight: bold;
`;

///////////////////////
export const RotarContainer = styled.div`
    background-image: url(${back});
    height: 99.6vh;
    width: 99.6vw;
`;
// NavAdmin
export const NavContainer = styled.div`
    padding: 0 40px;
    height: 10vh;
    color: white;
    background: transparent;
    display: flex;
    flex-direction: row;
    align-items: center;
`;
export const ImgLogoNav = styled.img`
    height: 50px;
`;
export const ButtonsNav = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
`;
export const ButtonNav = styled.button`
    height: 45px;
    width: 140px;
    font-weight: bold;
    background: transparent;
    color: white;
    font-size: 1.2rem;
    border: none;
    :hover{
        background: #ff7800;
    }
`;
// Admin Page
export const AdminContainer = styled.div`
    height: 90vh;
    padding-left: 40px;
    display: flex;
    flex-direction: column;
    background: transparent;
    color: white;
`;
export const TripsContainer = styled.div`
    height: 85%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: transparent;
    color: white;
`;
export const TripsCard = styled.div`
    height: 300px;
    width: 400px;
    background: transparent;
    border: 1px solid white;
    border-radius: 10px;
`;

// Request Page
export const RequestContainer = styled.div`
    height: 90vh;
    padding-left: 40px;
    background: transparent;
    color: white;
`;
export const RequestCard = styled.div`
    height: 300px;
    width: 400px;
    display: flex;
    flex-direction: column;
    background: transparent;
    border: 1px solid white;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`;
export const InformacoesCard = styled.div`
    height: 70%;
    display: flex;
    flex-direction: column;
`;
export const ButtonsCard = styled.div`
    height: 20%;
    display: flex;
    flex-direction: row;
    margin: 10px;
`;
export const ButtonRequest = styled.button`
    justify-self: flex-end;
    height: 35px;
    width: 100px;
    background: grey;
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    margin: 10px;
`;
// Create Trips Page
export const CreateTripsContainer = styled.div`
    height: 90vh;
    padding-left: 40px;
    background: transparent;
    color: white;
`;
export const CreateCard = styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    color: white;
`;
// List Trips Page
export const ListTripsContainer = styled.div`
    background-image: url(${back});
    color: white;
    height: 100vh;
    padding: 40px;
`;
//Inscrição Page
export const InscricaoContainer = styled.div`
    background-image: url(${back});
    color: white;
    height: 100vh;
    padding: 0px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const CardInscricao = styled.div`
    height: 400px;
    width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border: 1px solid white;
    border-radius: 10px;
    background: transparent;
`;
