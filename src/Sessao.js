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
                            <Link to={`/assentos/${sessao.showtimes[0].id}`}>
                                <Horario>
                                    {sessao.showtimes[0].name}
                                </Horario>
                            </Link>
                            <Link to={`/assentos/${sessao.showtimes[1].id}`}>
                            <Horario>
                                {sessao.showtimes[1].name}
                            </Horario>
                            </Link>
                        </Horarios>
                    </ContainerSessao>

                )
            }
            )}

        </>
    );
}

const Data = styled.div`
width: 260px;
height: 35px;
margin-bottom: 22px;
`
const Horario = styled.div`
width: 82px;
height: 43px;
background-color: #E8833A;
color: #FFFFFF;
margin-right: 9px;
border-radius: 3px;
display: flex;
justify-content: center;
align-items: center;
`
const ContainerSessao = styled.div`
margin-left: 24px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
display: flex;
flex-direction: column;

letter-spacing: 0.02em;

color: #293845;
`
const Horarios = styled.div`
display: flex;
margin-bottom: 23px;

`