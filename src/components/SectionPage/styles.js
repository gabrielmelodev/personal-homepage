import styled from 'styled-components';
import {Link} from 'react-router-dom';
export const Container = styled.div`
  padding: 60px 0px;
  height: 335px;
`;

export const Wrapper = styled.section`
  max-width: 1000px;
    display: flex;
    height: 315px;
    padding: 60px 30px;
    margin: 0px auto;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;

     div {
    width: calc(50% - 10px);
    height: 315px;
}

 div > p {
    color: rgb(154, 142, 191);
    font-size: 18px;
    line-height: 32px;
    margin: 10px 0px 0px;
}

 div > h2 {
    color: rgb(75, 75, 75);
    font-size: 36px;
    line-height: 48px;
}
`;

export const Button = styled(Link)`

  
    display: inline-block;
    line-height: 50px;
    font-size: 16px;
    font-weight: 600;
    color: rgb(255, 255, 255);
    background-color: rgb(113, 89, 193);
    margin: 15px 0px 0px;
    padding: 0px 30px;
    text-decoration: none;
    border-radius: 8px;
    transition: all 150ms linear 0s;


`;