import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Assento(props) {
    const selecionado = '#1AAE9E'
    const disponivel = '#C3CFD9'
    const indisponivel = '#FBE192'
    const {corSelecionado,setCorSelecionado} = props
    const {assentos} = props
    console.log(corSelecionado)

    function selecionarAssento(dados){
        if(dados.isAvailable == true){
        
        const novoArray = [...corSelecionado, dados.id]
        setCorSelecionado(novoArray)
        }
        if(dados.isAvailable != true){
            console.log("Esse assento não está disponível")
        }
    }

    return (
        <>
            {assentos.seats.map((assento, index) => {
                return (

                    <ContainerAssento
                        cor={
                            corSelecionado.includes(assento.id) ? selecionado :
                            (assento.isAvailable ? disponivel : indisponivel)
                        }
                        key={index}
                        onClick={() => selecionarAssento(assento)}
                        >
                        {assento.name}
                    </ContainerAssento>

                )
            }
            )}
        </>
    );
}
const ContainerAssento = styled.div`
width: 26px;
height: 26px;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
background: ${props => props.cor};;
border: 1px solid #808F9D;
border-radius: 12px;
margin-right: 7px;
margin-top: 18px;
`