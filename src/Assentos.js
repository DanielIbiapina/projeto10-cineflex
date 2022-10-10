import styled from "styled-components";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Assentos() {
    const { idAssentos } = useParams();
    const [assentos, setAssentos] = useState(null);

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

    return(
        <>
       <section id="assentos/:idAssentos">
        oi
       </section>
        </>
    );
}