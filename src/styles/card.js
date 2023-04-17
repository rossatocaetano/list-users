import styled from "styled-components";
import { Palette, ScreenSizes } from "./theme";

export const Card = styled.li`
    //border: 1px solid green;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: nowrap;
    margin: 2rem 0;
    color: ${Palette.fontColor};
    @media (min-width: ${ScreenSizes.tablet}){
        margin: 3rem 0;
    }
`

export const CardImage = styled.img`
    width: 20%;
    height: 20%;
    object-fit: contain;
    border-radius: 50%;
`

export const CardItens = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 60%;
    height: 60%;
    font-size: .75rem;
    & a {
        color: ${ Palette.secondColor };
        text-decoration: none;
        &:hover {
           text-decoration: underline;
        }
    }
    @media (min-width: ${ScreenSizes.tablet}){
        font-size: 1rem;
    }
`

export const CardMainInfo = styled.h1`
    font-size: 1.25rem;
    margin-bottom: .2rem;
    color: ${Palette.firstColor};
    font-weight: bold;
    @media (min-width: ${ScreenSizes.tablet}){
        font-size: 1.75rem;
    }
`

