import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import Sessao from "../components/Sessao";
import { useParams } from "react-router-dom";

export default function Sessoes() {
  const [sessoes, setSessoes] = useState(null);
  const { idSessoes } = useParams();

  useEffect(() => {
    const requisicao = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idSessoes}/showtimes`
    );

    requisicao.then((resposta) => {
      setSessoes(resposta.data);
    });

    requisicao.catch((erro) => {
      console.log(erro.response.data);
    });
  }, [idSessoes]);

  if (sessoes === null) {
    return <LoadingMessage>Carregando...</LoadingMessage>;
  }

  return (
    <section id="sessoes/:idSessoes">
      <Selecione>
        <p>Selecione o horário</p>
      </Selecione>
      <Sessao sessoes={sessoes} />
      <Footer>
        <img src={sessoes.posterURL} alt={sessoes.title} />
        <p>{sessoes.title}</p>
      </Footer>
    </section>
  );
}

const LoadingMessage = styled.div`
  font-size: 24px;
  color: #293845;
  text-align: center;
  margin-top: 50px;
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

const Footer = styled.div`
  width: 100%;
  height: 130px;
  background-color: #dfe6ed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);

  img {
    width: 64px;
    height: 96px;
    border: 4px solid #ffffff;
    margin-right: 20px;
  }

  p {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 24px;
    color: #293845;
  }
`;
