import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Filmes from "./pages/Filmes.js";
import Sessoes from "./pages/Sessoes.js";
import Assentos from "./pages/Assentos.js";
import Sucesso from "./pages/Sucesso.js";
export default function App() {
  return (
    <BrowserRouter>
      <Header>
        <p>CINEFLEX</p>
      </Header>
      <Routes>
        <Route path="/" element={<Filmes />} />
        <Route path="/sessoes/:idSessoes" element={<Sessoes />} />
        <Route path="/assentos/:idAssentos" element={<Assentos />} />
        <Route path="/sucesso" element={<Sucesso />} />
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
  background-color: #c3cfd9;

  p {
    color: #e8833a;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
  }
`;
