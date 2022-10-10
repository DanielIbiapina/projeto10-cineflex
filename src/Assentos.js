import styled from "styled-components";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Assento from "./Assento";
import { Link } from "react-router-dom";

export default function Assentos() {
    const { idAssentos } = useParams();
    const [assentos, setAssentos] = useState(null);
    const [corSelecionado, setCorSelecionado] = useState([])
    console.log(corSelecionado)
    const objeto = {
        ids: corSelecionado,
        name: "Fulano",
        cpf: "12345678900"
    }
    function reservar() {
            const postagem = axios.post(`https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many`, objeto);
    
            postagem.then(resposta => {
                //setAssentos(resposta.data);
                alert('oi')
                console.log(resposta.data)
            });
    
            postagem.catch(erro => {
                alert('erro')
                console.log(erro.response.data);
            });
        }
    

    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idAssentos}/seats`);

        requisicao.then(resposta => {
            setAssentos(resposta.data);
            console.log(resposta.data)
        });

        requisicao.catch(erro => {
            console.log(erro.response.data);
        });
    }, []);

    if (assentos === null) {
        return 'carregando...';
    }

    return (
        <>
            <section id="assentos/:idAssentos">
                <Selecione>
                    <p>Selecione o(s) assento(s)</p>
                </Selecione>
                <ContainerAssentos>
                    <Assento corSelecionado = {corSelecionado} setCorSelecionado = {setCorSelecionado} assentos={assentos} />
                </ContainerAssentos>
                <LegendaAssentos>
                    <Center>
                        <AssentoSelecionado></AssentoSelecionado>
                        Selecionado
                    </Center>
                    <Center>
                        <AssentoDisponivel></AssentoDisponivel>
                        Disponivel
                    </Center>
                    <Center>
                        <AssentoIndisponivel></AssentoIndisponivel>
                        Indisponivel
                    </Center>
                </LegendaAssentos>
                <Caixa>
                    <Nome>
                        Nome do comprador:
                    </Nome>
                    <InputNome>
                    </InputNome>
                </Caixa>
                <Caixa>
                    <CPF>
                        CPF do comprador:
                    </CPF>
                    <InputCPF>
                    </InputCPF>
                </Caixa>
                <Link to={`/sucesso`} >
                <Botao onClick={reservar}>
                    Reservar assento(s)
                </Botao>
                </Link>
                <Footer>
                    <img src={assentos.movie.posterURL} />
                    <p>
                        {assentos.movie.title} <br />
                        {assentos.day.weekday} - {assentos.name}
                    </p>
                </Footer>
            </section>
        </>
    );
}

const Selecione = styled.div`
width: 100%;
height: 92px;
display: flex;
align-items: center;
justify-content: center;

p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: #293845;
}
`
const Footer = styled.div`
width: 100%;
height: 117px;
background-color: #DFE6ED;
display: flex;
align-items: center;

img{
    width: 48px;
    height: 72px;
    border: 8px solid #ffffff;
    margin-left: 10px;
    margin-top: 14px;
    margin-bottom: 14px;
}
p{
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 26px;
line-height: 30px;
color: #293845;
}
`
const ContainerAssentos = styled.div`
width: 330px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin-left: auto;
margin-right: auto;
padding-left: 7px;
`
const LegendaAssentos = styled.div`
display: flex;
justify-content: space-evenly;
margin-top: 16px;
margin-bottom: 41px;
`

const AssentoSelecionado = styled.div`
width: 25px;
height: 25px;
background: #1AAE9E;
border: 1px solid #0E7D71;
border-radius: 17px;
margin-bottom: 10px;
`

const AssentoDisponivel = styled.div`
width: 25px;
height: 25px;
background: #C3CFD9;
border: 1px solid #7B8B99;
border-radius: 17px;
margin-bottom: 10px;
`

const AssentoIndisponivel = styled.div`
width: 25px;
height: 25px;
background: #FBE192;
border: 1px solid #F7C52B;
border-radius: 17px;
margin-bottom: 10px;
`
const Center = styled.div`
display: flex;
flex-direction: column;
align-items: center;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 15px;
display: flex;
align-items: center;
letter-spacing: -0.013em;
color: #4E5A65;
`
const Caixa = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const Nome = styled.div`
width: 327px;
height: 25px;
`
const InputNome = styled.input`
width: 327px;
height: 51px;
`
const CPF = styled.div`
width: 327px;
height: 25px;
`
const InputCPF = styled.input`
width: 327px;
height: 51px;
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
margin-top: 30px;
margin-bottom: 30px;

color: #FFFFFF;
`