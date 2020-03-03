import React from 'react';

import { Container,Wrapper,Button } from './styles';
import ImagemTecnologia from "../static/images/melhores-tecnologias.svg";
export default function SectionPage() {
  return (
    <Container>
  <Wrapper className="sc-wp-0">
    <div>
      <h2>
        Meu WebSite a onde voce encontra
        projetos que trabalho com programação
      </h2>
      <p>Então um repositorio completo de muitas tecnologias que venho trabalhando no mundo da programação</p>
<Button>Conferir os Projetos</Button>
    </div>
    <img src={ImagemTecnologia} alt="Imagem Linguagem de programação"/>

</Wrapper>
    </Container>
  
   
  );
}
