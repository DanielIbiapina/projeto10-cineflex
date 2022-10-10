import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Sucesso() {
    
    
     
        
  
    return (
        <>
            <Caixa>
                <p>Pedido feito<br/> com sucesso!</p>
            </Caixa>
            <CaixaDados>
                /Não consegui pegar os dados :'(/
                <p>Filme e Sessão</p>
                Nome do filme <br/> data e horario
            </CaixaDados>
            <CaixaDados>
                <p>Ingressos</p>
                Assento X <br/> Assento Y
            </CaixaDados>
            <CaixaDados>
                <p>Comprador</p>
                Nome: <br/> CPF: 
            </CaixaDados>
            <Link to={`/`} >
            <Botao>Voltar para Home</Botao>
            </Link>
        </>
    );
}
const Caixa = styled.div`
height: 110px;
display: flex;
justify-content: center;
p{
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.04em;

color: #247A6B;
}
`
const CaixaDados = styled.div`
margin-left: 28px;
height: 110px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 26px;
display: flex;
flex-direction: column;
justify-content: center;
letter-spacing: 0.04em;

color: #293845;
p{
    font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
display: flex;
align-items: center;
letter-spacing: 0.04em;

color: #293845;
}
`
const Botao = styled.div`
width: 225px;
height: 42px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
letter-spacing: 0.04em;
background: #E8833A;
border-radius: 3px;
margin-left: auto;
margin-right: auto;

color: #FFFFFF;
`

