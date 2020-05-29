import styled from 'styled-components'

import { BREAKPOINTS, FONTS, COLORS } from '../../utils/constants'

export const BaseSectionHeadingWrapper = styled.div`
    background: url('/static/images/header-background.svg') 50% 50%;
    background-size: cover;
    margin-bottom: 16px;


    min-height:${props => props.mainPage ? '700px' : ''};
    padding: ${props => props.mainPage ? '0' : '231px 0 54px'};
    display: ${props => props.mainPage ? 'flex' : ''};
    flex-direction: ${props => props.mainPage ? 'column' : ''};
    justify-content: ${props => props.mainPage ? 'center' : ''};

    @media screen and (max-width: ${BREAKPOINTS.sm}px) {
        min-height: auto;
        padding: ${props => props.mainPage ? '130px 25px 105px;' : '150px 25px 70px'};
        background-size: ${props => props.mainPage ? 'cover' : 'auto'};
    }

    @media screen and (max-width: ${BREAKPOINTS.xs}px) {
        padding: ${props => props.mainPage ? '170px 25px' : '126px 25px 40px'};
    }
`


export const BaseSectionHeadingContent = styled.div`
    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        padding-left: 25px;
    }

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        font-size: 45px;

        max-width: 1200px;
        margin: 0 auto;
    }
`

export const BaseSectionTitle = styled.h1`
    font-size: ${FONTS.h2}px;
    color: #fafafa;
    margin-bottom: 25px;
    line-height: 44px;
    font-family: 'DM Sans Bold';

    @media screen and (max-width: ${BREAKPOINTS.xs}px) {
        font-size: 30px;
        line-height: 37px;
        text-align: left;
    }
`


export const BaseSectionDescription = styled.p`
    max-width: 45%;
    margin-bottom: 70px;
    font-family: "DM Sans Regular";
    font-weight: normal;
    font-size: ${FONTS.h3}px;
    line-height: 31.5px;
    text-align: left;
    color: #fafafa;

    @media screen and (max-width: ${BREAKPOINTS.sm}px) {
        max-width: 100%;
        margin: 25px 0 40px;
        font-size: 16px;
        line-height: 21px;
        color: ${COLORS.white};
    }
`




