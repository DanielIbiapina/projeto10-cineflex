import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from "styled-components";
import Filme from './Filme';


export default function Filmes() {

    const [filmes, setFilmes] = useState(null);
    

    useEffect(() => {
        const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        requisicao.then(resposta => {
            setFilmes(resposta.data);
        });

        requisicao.catch(erro => {
            console.log(erro.response.data);
        });
    }, []);

    if (filmes === null) {
        return 'carregando...';
    }

    return (
        <>
            <Selecione>
                <p>Selecione o filme</p>
            </Selecione>
            <Conteudo>
                {filmes.map((filme, index) => {
                    return (

                        <Filme filme={filme} key={index} />
                    )
                }
                )}
            </Conteudo>
        </>
    );


}

const Conteudo = styled.div`
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
`
const Selecione = styled.div`
width: 100%;
height: 110px;
display: flex;
align-items: center;
justify-content: center;

p{
    //font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: #293845;
}
`