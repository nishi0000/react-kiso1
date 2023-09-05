import styled from "styled-components"
import { Link } from 'react-router-dom';


export const Header = () => {
    return (
        <>

            <Sheader>
                <Sh1>時計掲示板</Sh1>
                <Slink to="/thread/new">スレッドを立てる</Slink>
            </Sheader>


        </>

    )
} 

const Sheader = styled.header`
background-color: #63c178;
display: flex;
align-items: center;
justify-content: space-between;
padding: 16px 32px;
color: white;
`

const Sh1 = styled.h1`
margin: 0;
padding: 0;
font-weight: normal;
`;

const Slink = styled(Link)`
color: white;
`;
