import styled, { css } from 'styled-components'

import { BREAKPOINTS } from '../utils/constants'

export const Header = styled.header`
    @media screen and (max-width: ${BREAKPOINTS.sm}px){
        padding-top: 0;
    }
`

export const BannerSection = styled.div`
    background-color: #fafafa;
    padding: 73px 0;
    margin-bottom: 16px;

    @media screen and (max-width: ${BREAKPOINTS.sm}px) {
        padding: 77px 25px 80px;
    }  
`

export const BannerWrapper = styled.div`
    max-width: 1170px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: ${BREAKPOINTS.lg}px) {
        max-width: 950px;
    }

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        max-width: 720px;
        flex-wrap: wrap;
    }
`

export const Banner = styled.div`
    flex: 1 1 30%;

    &:nth-child(2) {
        margin: 0 35px;
    }

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        flex: 0 1 45%;

        &:nth-child(1) {
            margin: 0 0 40px 0;
        }
    }

    @media screen and (max-width: ${BREAKPOINTS.sm}px){
        &:nth-child(1) {
            margin: 0 25px 40px 0;
        }

        &:nth-child(2) {
            margin: 0 0 40px 0;
         }
    } 

    @media screen and (max-width: ${BREAKPOINTS.xs}px){
        flex: 1 1 100%;

        &:nth-child(1) {
            margin: 0 0 40px 0;
        }
    } 
`

export const BannerImage = styled.div`
    margin-bottom: 49px;

    @media screen and (max-width: ${BREAKPOINTS.xs}px){
        margin-bottom: 25px;
    }
`

export const BannerDescription = styled.div`
    flex: 1 1 30%;
`

export const BannerTitle = styled.h2`
    font-size: 21px;
    color: #000;
    font-family: 'DM Sans Bold';
    line-height: 31.5px;
    margin-bottom: 7px;

    @media screen and (max-width: ${BREAKPOINTS.xs}px){
        margin-bottom: 15px;
    }
`

export const BannerContent = styled.p`
    font-size: 14px;
    min-height: 120px;
    color: #000;
    font-family: "DM Sans Regular";
    font-weight: normal;
    line-height: 21px;
    margin-bottom: 60px;

    @media screen and (max-width: ${BREAKPOINTS.xs}px){
        margin-bottom: 50px;
        min-height: auto;
    }
`
