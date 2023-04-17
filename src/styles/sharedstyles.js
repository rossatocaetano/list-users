import styled from 'styled-components';
import { Palette, ScreenSizes } from './theme';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    min-height: 100vh;
    padding: 2rem 0;
    background-color: ${Palette.backgroundColor};
    @media (min-width: ${ScreenSizes.tablet}){
        padding: 3rem 0;
    }
`

export const Main = styled.main`
    display: flex;
    padding: 0 .5rem;
    margin: .5rem 0;
    flex-direction: column;
    @media (min-width: ${ScreenSizes.tablet}){
        padding: 0 5rem;
    }
`

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    padding: 0 1.5rem;
    color: ${Palette.fontColor};
    @media (min-width: ${ScreenSizes.tablet}) {
        font-size: 2.5rem;
        padding: 0 2rem;
    }
`
