import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Filmes from "./Filmes.js"
import Sessoes from "./Sessoes.js";
import Assentos from "./Assentos.js";
export default function App() {
    return (
        <BrowserRouter>
            <Header>
                <p>CINEFLEX</p>
            </Header>
            <Routes>
            <Route path="/" element={<Filmes/>} />
            <Route path="/sessoes/:idSessoes" element={<Sessoes/>} />
            <Route path="/assentos/:idAssentos" element={<Assentos/>} />
            </Routes>
        </BrowserRouter>
    );
}



const Header = styled.div`
width: 100%;
height: 67px;
display: flex;
justify-content: center;
align-items: center;
background-color: #C3CFD9;

p{
    color: #E8833A;
    //font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
}
`
