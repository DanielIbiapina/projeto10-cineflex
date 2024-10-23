import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Sessao({ sessoes }) {
  return (
    <>
      {sessoes.days.map((sessao, index) => {
        return (
          <ContainerSessao key={index}>
            <Data>
              {sessao.weekday} - {sessao.date}
            </Data>
            <Horarios>
              {sessao.showtimes.map((showtime) => (
                <Link to={`/assentos/${showtime.id}`} key={showtime.id}>
                  <Horario>{showtime.name}</Horario>
                </Link>
              ))}
            </Horarios>
          </ContainerSessao>
        );
      })}
    </>
  );
}

const ContainerSessao = styled.div`
  margin: 20px;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  color: #293845;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Data = styled.div`
  font-size: 22px;
  font-weight: 500;
`;

const Horarios = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
`;

const Horario = styled.div`
  width: 100px;
  height: 50px;
  background-color: #e8833a;
  color: #ffffff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: #d06d28;
    cursor: pointer;
  }
`;
