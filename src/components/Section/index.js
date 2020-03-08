import React from 'react';

import { Container,Card,Avatar,SectionSocial } from './style';
import Gihub from "../assets/icon/github.svg";
import Twitter from "../assets/icon/twitter.svg";
import Instagram from "../assets/icon/instagram.svg";

export default function Section() {
  return (
    <Container>
      <div className="card">
        <div className="avatar">
        <img width="150px" src="https://avatars0.githubusercontent.com/u/50870406?s=460&v=4" alt="caricatura do autor do blog"/>
        </div>
        <h1 class="title">Gabriel Melo</h1>
        <p class="description">Front-End e Back-End Developer</p>
        <div class="social-box">
<a class="icon" href="https:/instagram/gabrielmelo.dev"><img src={Instagram} alt="rss icon"/></a>
<a class="icon" href="https://github.com/gabrielhmelo"><img src={Gihub} alt="github icon"/></a>
<a class="icon" href="https://twitter.com/gabrielmelohx"><img src={Twitter} alt="twitter icon"/></a>
</div>
      </div>
    
   
      </Container>
  );
}
