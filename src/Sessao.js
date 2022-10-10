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
width: 241px;
height: 35px;
margin-bottom: 22px;
`
const Horario = styled.div`
width: 82px;
height: 43px;
background-color: #E8833A;
color: #FFFFFF;
margin-right: 9px;
`
const ContainerSessao = styled.div``
const Horarios = styled.div`
display: flex;
`