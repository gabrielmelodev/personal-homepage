import React from 'react';

 import { Menu,Wrapper,Logo,Nav,NavItem,MediaSocial,ButtonAccout,ContentSocial } from './styles';
import Facebook from '../static/images/icons/facebook.svg';
import Instagram from '../static/images/icons/instagram.svg';
import Twitter from '../static/images/icons/twitter.svg';
export default function menu() {
  return (
    <>
    <Menu>
   
         
         <Logo>
           <img src="" alt="Logotipo Gabriel Melo"/>
         </Logo>
         <ul>
           <li><NavItem>Home</NavItem></li>
           <li><NavItem>Sobre</NavItem></li>
           <li><NavItem>Contado</NavItem></li>
           <li><NavItem>Projetos</NavItem></li>
          
          
          
         </ul>
         
    </Menu>

<MediaSocial>
<ContentSocial>
<a href="http://fb.com/gabriel" rel="noopener noreferrer" target="_blank">
  <img src={Facebook} alt="Facebook da Gabriel Melo"/>
</a>
<a href="http://fb.com/rocketseat" rel="noopener noreferrer" target="_blank">
  <img src={Instagram} alt="Facebook da Gabriel Melo"/>
</a>
<a href="http://fb.com/rocketseat" rel="noopener noreferrer" target="_blank">
  <img src={Twitter} alt="Facebook da Gabriel Melo"/>
</a>
</ContentSocial>

<ButtonAccout>
  Respositorio
</ButtonAccout>

</MediaSocial>
</>
  );
}
