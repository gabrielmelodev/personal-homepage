import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: .5rem 1rem;
    height: 56px;
    background: #12131A;
    margin-bottom: 1rem!important;

    @media (min-width: 768px) {
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -ms-flex-pack: start;
    justify-content: flex-start;
}

@media (min-width: 768px) {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-flow: row nowrap;
    -webkit-box-pack: start;
    justify-content: flex-start;
}
`;
