import styled from 'styled-components'

import { BREAKPOINTS, FONTS } from '../../utils/constants'

export const OpenPositionsPageItem = styled.div`
    min-width: 100%;
    min-height: 298px;

    margin-bottom: 30px;
    
    outline: 1px solid #707070;
    box-shadow: 1px 0 0 rgba(0, 0, 0, 0.16);

    &:hover {
        cursor: pointer;
        outline: 2px solid #171c23;
    }

    @media screen and (min-width: ${BREAKPOINTS.xs}px) {
       min-width: 46.9%;
       margin-right: 30px;
       flex: 1;

       &:nth-child(2n+2) {
           margin-right: 0;
       }
    }

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        min-width: 29%; 
        flex: 0;

        margin-bottom: 60px;
        margin-right: 60px;

        &:nth-child(2n+2) {
            margin-right: 60px;
        }
 
        &:nth-child(3n+3) {
            margin-right: 0;

        }
    }

    @media screen and (min-width: ${BREAKPOINTS.xl}px) {
        min-width: 410px;
        min-height: 298px;
    }
`

export const OpenPositionsPageItemLink = styled.a`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const OpenPositionsPageItemTitle = styled.h2`
    font-size: 31px;
    line-height: 35px;
    font-family: 'DM Sans Bold';

    color: #1d1d1f;
`

export const OpenPositionsPageItemContent = styled.p`
    font-size: ${FONTS.h3}px;
    line-height: 31px;
    font-family: 'DM Sans Regular';

    color: #1d1d1f;
`