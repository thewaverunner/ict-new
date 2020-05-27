import styled from 'styled-components'

import { BREAKPOINTS } from '../../utils/constants'

export const BaseSectionHeadingWrapper = styled.div`
    background: url('/static/images/header-background.svg');
    background-size: cover;
    margin-bottom: 16px;

    padding: ${props => props.mainPage ? '290px 0' : '231px 0 54px'};
    display: ${props => props.mainPage ? 'flex' : ''};
    flex-direction: ${props => props.mainPage ? 'column' : ''};
    justify-content: ${props => props.mainPage ? 'center' : ''};

    @media screen and (max-width: ${BREAKPOINTS.sm}px) {
        padding: ${props => props.mainPage ? '130px 25px 105px;' : '150px 25px 70px'};
        background-size: ${props => props.mainPage ? 'cover' : 'auto'};
    }

    @media screen and (max-width: ${BREAKPOINTS.xs}px) {
        padding: ${props => props.mainPage ? '170px 25px' : '126px 25px 40px'};
    }
`


export const BaseSectionHeadingContent = styled.div`
    max-width: 1350px;
    margin: 0 auto;

    @media screen and (max-width: ${BREAKPOINTS.lg}px) {
        max-width: 950px;
    }

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        max-width: 720px;
    }

    @media screen and (max-width: ${BREAKPOINTS.sm}px) {
        max-width: 65%;
        text-align: left;
        margin: 0;
    }

    @media screen and (max-width: ${BREAKPOINTS.xs}px) {
        max-width: 95%;
    }
`

export const BaseSectionTitle = styled.h1`
    font-size: 47px;
    color: #fafafa;
    margin-bottom: 25px;
    line-height: 60px;
    font-family: 'DM Sans Bold';

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        font-size: 45px;
    }

    @media screen and (max-width: ${BREAKPOINTS.sm}px) {
        font-size: 40px;
        line-height: 45px;
    }

    @media screen and (max-width: ${BREAKPOINTS.xs}px) {
        font-size: 30px;
        line-height: 37px;
        text-align: left;
    }
`


export const BaseSectionDescription = styled.p`
    max-width: 53%;
    margin-bottom: 70px;
    font-family: "DM Sans Regular";
    font-weight: normal;
    font-size: 21px;
    line-height: 31.5px;
    text-align: left;
    color: #fafafa;

    @media screen and (max-width: ${BREAKPOINTS.sm}px) {
        max-width: 100%;
        margin: 25px 0 40px;
        font-size: 16px;
        line-height: 21px;
        color: #ffffff;
    }
`




