import styled from 'styled-components'

import {
    BREAKPOINTS, 
    COLORS
} from '../../utils/constants'

export const BaseCardElement = styled.a`
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 10px 16px rgba(0, 0, 0, 0.12);
    transition: all 0.15s linear;
    text-decoration: none;

    &:hover {
        cursor: pointer;
        transform: translateY(-2px);
        box-shadow: 
            0 30px 60px -12px rgba(50,50,93,.25), 
            0 18px 36px -18px rgba(0,0,0,.3), 
            0 -12px 36px -8px rgba(0,0,0,.025)
        ;
    }

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        margin-bottom: 0;
        flex-direction: row;

        &:first-child {
            margin-right: 100px;
        }
    }
`

export const BaseCardImage = styled.div`
    margin: -52px 0;
    transform: rotate(90deg);

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
       min-width: 90px;
       transform: none;
    }
`

export const BaseCardDescriptionWrapper = styled.div`
    padding: 15px;
    text-align: center;

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        padding: 25px 25px;
        text-align: left;
    }  

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        padding: 40px 50px 40px 25px;
    }  
`

export const BaseCardTitleWrapper = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        justify-content: flex-start;
    }  
`

export const BaseCardTitle = styled.a`
    font-family: "DM Sans Bold";
    font-size: 20px;
    line-height: 30px;
    color: #6672e5;
    position: relative;
    text-decoration: none;
`

export const BaseCardArrow = styled.div`
    align-self: center;
    padding-left: 10px;
`

export const BaseCardDescription = styled.p`
    font-family: "DM Sans Regular";
    font-size: 16px;
    line-height: 24px;
    opacity: 0.56;
    margin-top: 15px;

    color: ${COLORS.darken};
`