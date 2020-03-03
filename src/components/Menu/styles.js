import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Menu = styled.nav`
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    height: 40px;
    width: 50%;

    > ul {
  display: flex;
    flex-direction: row;
    list-style: none;
    height: 20px;
    width: 100%;
}

ul > li:first-child {
    margin: 0px;
}
> ul > li {
    text-transform: uppercase;
    font-weight: 600;
    margin: 0px 0px 0px 30px;
}
   
`;

export const NavItem = styled.a`
> ul > li a {
    color: rgb(175, 158, 230);
    position: relative;
    text-decoration: none;
    transition: all 150ms linear 0s;
}

::after {
    opacity: 1;
    bottom: -6px;
}

::after {
    content: "";
    height: 2px;
    width: 100%;
    position: absolute;
    left: 0px;
    bottom: 0px;
    opacity: 0;
    background: rgb(255, 255, 255);
    border-radius: 10px;
    transition: all 0.2s ease 0s;
}

`;

export const ButtonAccout = styled(Link)`
margin-left: 70px;
    line-height: 38px;
    font-size: 14px;
    font-weight: 600;
    color: rgb(113, 89, 193);
    background-color: rgb(255, 255, 255);
    padding: 0px 30px;
    text-decoration: none;
    text-align: center;
    border-radius: 5px;
    width: 30%;
    float: right;
    height: 38px;
`;

export const ContentSocial = styled.div`
    display: flex;
    flex-direction: row;
    width: 20%;
    height: 18px;

    a:first-child {
    margin: 0px;
}

> a {
    height: 18px;
    margin: 0px 0px 0px 20px;
}
`;


export const MediaSocial = styled.div`
     display: flex;
    -webkit-box-align: center;
    align-items: center;
    width: 30%;
    height: 38px;

`;


export const Logo = styled(Link)`
color: rgb(255, 255, 255);

img {
  margin: 0px 20px 0px 0px;
    padding: 0px 20px 0px 0px;
    border-right: 1px solid rgba(255, 255, 255, 0.2);
}

`;