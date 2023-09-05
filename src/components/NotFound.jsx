import styled from "styled-components"

export const NotFound = () => {

    return (
        
        <Smain>

        <p>ページが存在しません。</p>
        <a className="inputlink" href="/">トップに戻る</a>
        </Smain>
    );
};

const Smain = styled.main`
text-align: center;
padding: 32px;

`;



export default NotFound;