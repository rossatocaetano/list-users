import styled from 'styled-components';
import { Palette } from './theme';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    min-height: 100vh;
    padding: 2rem 0;
    background-color: ${Palette.backgroundColor};
`

export const Main = styled.main`
    display: flex;
    padding: 0 .5rem;
    margin: .5rem 0;
    flex-direction: column;    
`

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    padding: 0 1.5rem;
    color: ${Palette.fontColor};
`
