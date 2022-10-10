import styled from "styled-components";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Sessao from "./Sessao";
import { useParams } from 'react-router-dom';


export default function Sessoes() {
    const [sessoes, setSessoes] = useState(null);
    const { idSessoes } = useParams();



    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idSessoes}/showtimes`);

        requisicao.then(resposta => {
            setSessoes(resposta.data);
            console.log(resposta.data)
        });

        requisicao.catch(erro => {
            console.log(erro.response.data);
        });
    }, []);

    if (sessoes === null) {
        return 'carregando...';
    }

    return (
        <section id="sessoes/:idSessoes">
            <Selecione>
                <p>Selecione o horário</p>
            </Selecione>
            <Sessao sessoes={sessoes} />
            <Footer>
                <img src={sessoes.posterURL}/>
                <p>{sessoes.title}</p>
            </Footer>

        </section>
    );
}

const Selecione = styled.div`
width: 100%;
height: 110px;
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

