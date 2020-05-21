import styled from 'styled-components'

import { BREAKPOINTS } from '../../utils/constants'

export const BaseSectionHeadingWrapper = styled.div`
    background: url('/static/images/header-background.svg');
    background-size: cover;
    padding: ${props => props.mainPage ? "0;" : "230px 0 50px;"}
    margin-bottom: 16px;
    height: ${props => props.mainPage ? "850px;" : "auto;"}
    display: ${props => props.mainPage ? "flex;" : " ;"}
    flex-direction: ${props => props.mainPage ? "column;" : " ;"}
    justify-content: ${props => props.mainPage ? "center;" : " ;"}

    @media screen and (max-width: ${BREAKPOINTS.sm}px) {
        padding: 130px 0 55px;
        background-size: ${props => props.mainPage ? "cover;" : "auto;"}
    }

    @media screen and (max-width: ${BREAKPOINTS.xs}px) {
        height: ${props => props.mainPage ? "650px;" : "auto;"}
    }
`

export const BaseSectionHeadingContent = styled.div`
    max-width: 1170px;
    margin: 0 auto;

    @media screen and (max-width: ${BREAKPOINTS.lg}px) {
        max-width: 950px;
    }

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        max-width: 720px;
    }

    @media screen and (max-width: ${BREAKPOINTS.sm}px) {
        max-width: 95%;
        text-align: left;
    }

    @media screen and (max-width: ${BREAKPOINTS.xs}px) {
        max-width: 92%;
        margin: 0 4%;
    }
`

export const BaseSectionTitle = styled.h1`
    font-size: 47px;
    color: #ffffff;
    line-height: 60px;
    font-family: 'DM Sans Bold';

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        font-size: 45px;
    }

    @media screen and (max-width: ${BREAKPOINTS.sm}px) {
        font-size: 40px;
    }

    @media screen and (max-width: ${BREAKPOINTS.xs}px) {
        font-size: 30px;
        line-height: 37px;
        text-align: left;
     }
 
`

export const BaseSectionDescription = styled.p`
    font-size: 21px;
    color: #ffffff;
    margin: 30px 0 60px;
    font-family: 'DM Sans Regular';
    line-height: 35px;
    max-width: 53%;

    @media screen and (max-width: ${BREAKPOINTS.sm}px) {
        max-width: 100%;
    }
`
