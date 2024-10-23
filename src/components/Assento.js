import styled from "styled-components";

export default function Assento(props) {
  const {
    corSelecionado,
    setCorSelecionado,
    assentoNumber,
    setAssentoNumber,
    assentos,
  } = props;

  const cores = {
    selecionado: "#1AAE9E",
    disponivel: "#C3CFD9",
    indisponivel: "#FBE192",
  };

  function selecionarAssento(dados) {
    if (dados.isAvailable) {
      // Se o assento já estiver selecionado, ele será deselecionado ao ser clicado novamente
      if (corSelecionado.includes(dados.id)) {
        setCorSelecionado(corSelecionado.filter((id) => id !== dados.id));
        setAssentoNumber(
          assentoNumber.filter((number) => number !== dados.name)
        );
      } else {
        setCorSelecionado([...corSelecionado, dados.id]);
        setAssentoNumber([...assentoNumber, dados.name]);
      }
    } else {
      alert("Esse assento não está disponível.");
    }
  }

  return (
    <ContainerAssentos>
      {assentos.seats.map((assento) => (
        <AssentoStyle
          key={assento.id}
          cor={
            corSelecionado.includes(assento.id)
              ? cores.selecionado
              : assento.isAvailable
              ? cores.disponivel
              : cores.indisponivel
          }
          onClick={() => selecionarAssento(assento)}
          disabled={!assento.isAvailable}
        >
          {assento.name}
        </AssentoStyle>
      ))}
    </ContainerAssentos>
  );
}

const ContainerAssentos = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  padding: 20px;
`;

const AssentoStyle = styled.button`
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.cor};
  border: 1px solid
    ${(props) => (props.cor === "#1AAE9E" ? "#0E7D71" : "#808F9D")};
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.disabled ? props.cor : "#D5EAF0")};
  }

  &:active {
    transform: scale(0.95);
  }
`;
