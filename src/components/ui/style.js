import styled from "styled-components";


export const Div = styled.div`
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-items: center;
    background-color: #0a66c2;
    border-radius: 50%;
    bottom: 10px;
    right: 10px;
    position: absolute;
    justify-content: center;
    box-shadow: 1px 2px 2px black;
    cursor: pointer;
`

export const DivDelete = styled.div`
 
    background: #FF416C;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #FF4B2B, #FF416C); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-items: center;
    background-color: #0a66c2;
    border-radius: 50%;
    bottom: 10px;
    left: 3.6rem;
    position: absolute;
    justify-content: center;
    box-shadow: 1px 2px 2px black;
    cursor: pointer;
    visibility: ${props => (props.visible ? 'visible' : 'hidden')};
`