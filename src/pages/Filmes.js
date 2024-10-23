import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Filme from "../components/Filme";

export default function Filmes() {
  const [filmes, setFilmes] = useState(null);

  useEffect(() => {
    const requisicao = axios.get(
      "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    );

    requisicao.then((resposta) => {
      setFilmes(resposta.data);
    });

    requisicao.catch((erro) => {
      console.log(erro.response.data);
    });
  }, []);

  if (filmes === null) {
    return <LoadingMessage>Carregando...</LoadingMessage>;
  }

  return (
    <>
      <Selecione>
        <p>Selecione o filme</p>
      </Selecione>
      <Conteudo>
        {filmes.map((filme, index) => {
          return <Filme filme={filme} key={index} />;
        })}
      </Conteudo>
    </>
  );
}

const LoadingMessage = styled.div`
  font-size: 24px;
  color: #293845;
  text-align: center;
  margin-top: 50px;
`;

const Conteudo = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Selecione = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;

  p {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 28px;
    color: #293845;
  }
`;
