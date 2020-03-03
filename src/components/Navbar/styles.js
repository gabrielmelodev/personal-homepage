import styled from 'styled-components';

export const Container = styled.div`
`;


export  const  Title = styled.h1`
   position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(0px 0px 99.9% 99.9%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    padding: 0px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
`;


export const Wrraper = styled.div`

    height: 100%;
    display: flex;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    max-width: 1070px;
    padding: 0px 30px;
    margin: 0px auto;

`;

export const Header = styled.div`
    width: 100%;
    height: 70px;
    color: rgb(255, 255, 255);
    background: #12131A;
    transition: all 0.2s ease 0s;

`;