import styled from "styled-components"
import { Link } from 'react-router-dom';


export const Header = () => {
    return (
        <>

            <Sheader>
                <Shomelink to="/">時計掲示板</Shomelink>
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

const Shomelink = styled(Link)`
margin: 0;
padding: 0;
color: white;
font-size: 32px;
text-decoration: none;
font-weight: normal;
`;