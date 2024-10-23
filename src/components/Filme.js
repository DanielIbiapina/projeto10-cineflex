import styled from "styled-components";
import { Link } from "react-router-dom";

function alerta(props) {
  alert(props);
}

export default function Filme({ filme }) {
  return (
    <Link to={`/sessoes/${filme.id}`}>
      <FilmeDiv>
        <img src={filme.posterURL} alt={filme.title} />
      </FilmeDiv>
    </Link>
  );
}

const FilmeDiv = styled.div`
  margin-bottom: 20px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 180px;
    height: 270px;
    object-fit: cover;
    border-radius: 10px;
  }
`;
