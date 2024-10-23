import styled from "styled-components";
import { Link, useNavigate, useParams } from "react-router-dom"; // Importando useParams
import { useState, useEffect } from "react";
import axios from "axios"; // Importando axios
import Assento from "../components/Assento";

export default function Assentos() {
  const { idAssentos } = useParams();
  const [assentos, setAssentos] = useState(null);
  const [corSelecionado, setCorSelecionado] = useState([]);
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [assentoNumber, setAssentoNumber] = useState([]);

  const navigate = useNavigate();

  const objeto = {
    ids: corSelecionado,
    name: nome,
    cpf: cpf,
  };

  function reservar() {
    const postagem = axios.post(
      `https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many`,
      objeto
    );

    postagem.then((resposta) => {
      console.log(resposta.data);
      navigate("/sucesso", {
        state: {
          filme: assentos.movie.title,
          data: assentos.day.date,
          horario: assentos.name,
          assentos: assentoNumber,
          nome: nome,
          cpf: cpf,
        },
      });
    });

    postagem.catch((erro) => {
      alert("Erro ao reservar");
      console.log(erro.response.data);
    });
  }

  useEffect(() => {
    const requisicao = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idAssentos}/seats`
    );

    requisicao.then((resposta) => {
      setAssentos(resposta.data);
      console.log(resposta.data);
    });

    requisicao.catch((erro) => {
      console.log(erro.response.data);
    });
  }, []);

  if (assentos === null) {
    return "Carregando...";
  }

  return (
    <>
      <Section>
        <Selecione>Selecione o(s) assento(s)</Selecione>

        <ContainerAssentos>
          <Assento
            corSelecionado={corSelecionado}
            setCorSelecionado={setCorSelecionado}
            assentoNumber={assentoNumber}
            setAssentoNumber={setAssentoNumber}
            assentos={assentos}
          />
        </ContainerAssentos>

        <LegendaAssentos>
          <LegendaItem>
            <AssentoBox cor="#1AAE9E" />
            <p>Selecionado</p>
          </LegendaItem>
          <LegendaItem>
            <AssentoBox cor="#C3CFD9" />
            <p>Disponível</p>
          </LegendaItem>
          <LegendaItem>
            <AssentoBox cor="#FBE192" />
            <p>Indisponível</p>
          </LegendaItem>
        </LegendaAssentos>

        <CaixaInput>
          <Label>Nome do comprador:</Label>
          <Input
            type="text"
            placeholder="Digite seu nome..."
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </CaixaInput>

        <CaixaInput>
          <Label>CPF do comprador:</Label>
          <Input
            type="text"
            placeholder="Digite seu CPF..."
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </CaixaInput>

        <Botao onClick={reservar}>Reservar assento(s)</Botao>

        <Footer>
          <img src={assentos.movie.posterURL} alt={assentos.movie.title} />
          <p>
            {assentos.movie.title} <br />
            {assentos.day.weekday} - {assentos.name}
          </p>
        </Footer>
      </Section>
    </>
  );
}

// Estilizações

const Section = styled.section`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 0px;
`;

const Selecione = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  text-align: center;
  color: #293845;
  margin-bottom: 20px;
`;

const ContainerAssentos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
  width: 600px;

  @media (max-width: 600px) {
    width: 80%;
  }
`;

const LegendaAssentos = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  width: 555px;

  @media (max-width: 600px) {
    width: 68%;
    flex-direction: column;
  }
`;

const LegendaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  p {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    color: #4e5a65;
  }
`;

const AssentoBox = styled.div`
  width: 25px;
  height: 25px;
  background-color: ${(props) => props.cor};
  border: 1px solid #808f9d;
  border-radius: 12px;
`;

const CaixaInput = styled.div`
  margin-bottom: 15px;
  @media (max-width: 600px) {
    width: 68%;
  }
`;

const Label = styled.label`
  display: block;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  color: #293845;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 535px;
  padding: 10px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: #293845;

  &:focus {
    border-color: #1aae9e;
    outline: none;
    box-shadow: 0 0 5px rgba(26, 174, 158, 0.5);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Botao = styled.button`
  display: block;
  width: 555px;
  padding: 12px;
  background-color: #e8833a;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d4722a;
  }

  @media (max-width: 600px) {
    width: 74.3%;
    margin-left: 23.5px;
  }
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  padding: 15px;
  background-color: #dfe6ed;
  margin-top: 20px;
  width: 100%;
  img {
    width: 64px;
    height: 96px;
    margin-right: 20px;
  }

  p {
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    color: #293845;
  }
`;
