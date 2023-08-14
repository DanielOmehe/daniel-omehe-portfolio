import { styled } from 'styled-components';

export const TechStacksWrapper = styled.section`
    width: 100%;
    height: auto;
    padding: 5rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const TechStackTitle = styled.h1`
    color: #fff;
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 1.5rem;
`

export const TechStackSubtitle = styled.p`
    color: #fff;
    font-size: 1.2rem;
    text-align: center;
`

export const TechStackContainer = styled.div`
    width: 60%;
    height: auto;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr 1fr;
    gap: 2rem;
    margin: 6rem auto 0;
`