import styled from "styled-components";
import { Link } from "react-router-dom";

function alerta(props){
    alert(props)
}
export default function Filme({filme}) 
{
    console.log(filme.id)
    return(
        <Link to={`/sessoes/${filme.id}`}>
        <FilmeDiv  onClick={() => alerta('selecione sua sessão')}>
            <img src={filme.posterURL} />
        </FilmeDiv>
        </Link>
    );
}

const FilmeDiv = styled.div`
& :hover{
        cursor: pointer;
    }
img{
    box-sizing: border-box;
    width: 129px;
    height: 193px;
}

`
  