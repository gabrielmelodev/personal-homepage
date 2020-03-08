import styled from 'styled-components';

export const Container = styled.div`
-webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
   margin-top: -70px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 100vh;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    position: fixed;
    width: 100%;

    transform: translateY(0px);
    opacity: 1;

    .social-box > .icon > img {
   
    
    height: 24px;
    padding: 20px;
    width: 24px;
    transition: all .5s ease-in-out;
}

    .social-box {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: .9em 0;
}
   .card {

    margin-top: 60;
    background-color: #fff;
    padding: 0 1em 1em;
    max-width: 100%;
    min-width: 25em;
    text-align: center;
    z-index: 1;
    opacity: .95;

    border-radius: 4px;
  
   }

   .card > .avatar {
    position: relative;
    display: block;
    height: 150px;
    margin-bottom: 1.5em;
}

.card > .description {
    color: #414f57;
    margin-top: 0;
    letter-spacing: .1em;
    font-size: .9rem;
}

.social-box >.icon {
    position: relative;
    display: block;
    width: 3.5em;
    height: 3.5em;
    margin: 0 .4em;
}

.card > .title {
    text-transform: uppercase;
    font-size: 1.65rem;
    letter-spacing: .15em;
    color: #313f47;
    line-height: 1.5;
    font-weight: lighter;
    margin: 0;
}

.card > .avatar > img {
    display: block;
    margin: 0 auto;
    border-radius: 80%;
    box-shadow: 0 0 0 1.5em #fff;
}
`;

export const Avatar = styled.div`
width: 100%;
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    margin-bottom: 0.5em;

    img {
    width: 100%;
    max-width: 200px;
    border-radius: 10px;
}
img {
    vertical-align: middle;
    border-style: none;
}
   

`;

export const Card = styled.div`


`;

