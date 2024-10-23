import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

export default function Sucesso() {
  const location = useLocation();
  const dadosCompra = location.state;

  if (!dadosCompra) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <Caixa>
        <p>
          Pedido feito
          <br />
          com sucesso!
        </p>
      </Caixa>
      <ContainerDados>
        <CaixaDados>
          <p>Filme e Sessão</p>
          <span>
            {dadosCompra.filme} <br /> {dadosCompra.data} às{" "}
            {dadosCompra.horario}
          </span>
        </CaixaDados>
        <CaixaDados>
          <p>Ingressos</p>
          <span>Assento(s): {dadosCompra.assentos.join(", ")}</span>
        </CaixaDados>
        <CaixaDados>
          <p>Comprador</p>
          <span>
            Nome: {dadosCompra.nome} <br /> CPF: {dadosCompra.cpf}
          </span>
        </CaixaDados>
      </ContainerDados>
      <Link to={`/`}>
        <Botao>Voltar para Home</Botao>
      </Link>
    </>
  );
}

const Caixa = styled.div`
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e0f7fa;
  border-radius: 10px;
  margin: 20px auto;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  p {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 26px;
    line-height: 32px;
    text-align: center;
    letter-spacing: 0.04em;
    color: #247a6b;
    margin: 0;
  }
`;

const ContainerDados = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  max-width: 500px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const CaixaDados = styled.div`
  margin: 15px 0;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #293845;
  background-color: #f1f1f1;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);

  p {
    font-weight: 700;
    font-size: 22px;
    margin-bottom: 8px;
  }

  span {
    font-weight: 400;
    font-size: 18px;
    color: #555555;
  }
`;

const Botao = styled.div`
  width: 250px;
  height: 45px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #e8833a;
  border-radius: 5px;
  margin: 30px auto;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #d5792e;
    transform: translateY(-3px);
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
  }
`;
