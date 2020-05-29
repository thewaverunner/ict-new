import styled from 'styled-components'

import { BREAKPOINTS, FONTS, COLORS } from '../../../utils/constants'

export const OurMissionSection = styled.div`
    width:100%;
    background-color: #FAFAFA;
    margin-bottom: 16px;
`
export const OurMissionWrapper = styled.div`
    max-width: 1170px;
    min-height: 435px;

    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: ${BREAKPOINTS.lg}px) {
        max-width: 980px;
    } 

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        max-width: 740px;
    } 

    @media screen and (max-width: ${BREAKPOINTS.sm}px) {
        max-width: 520px;
        padding: 50px 25px;
    }
`
export const OurMissionTitle = styled.h1`
    font-family: "DM Sans Regular";
    font-weight: bold;
    font-size: ${FONTS.h2}px;
    line-height: 44px;
    text-align: left;

    color: #1d1d1d;

    width: 100%;
    margin-bottom: 20px;

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
    }
`

export const OurMissionImage = styled.div`
    margin-bottom: 28px;

    img {
        width: auto;
    }
`

export const OurMissionContent = styled.div`
    margin-right: 20px;

    &:last-child {
        margin-right: 0;
    }

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        width: 45%;

        &:nth-child(1),
        &:nth-child(2) {
            margin-bottom: 20px;
        }
    } 

    @media screen and (max-width: ${BREAKPOINTS.xs}px) {
        width: 100%;
        margin-bottom: 20px;
    } 
`

export const OurMissionDescription = styled.p`
    max-width: 316px;

    font-family: "DM Sans Regular";
    font-weight: normal;
    font-size: ${FONTS.p}px;
    line-height: 21px;
    text-align: left;

    color: #1d1d1f;
`

export const OurMissionContentWrapper = styled.div`
    display: flex;
    flex-direction: row;

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        flex-wrap: wrap;
    } 
`

export const OurGoalsSection = styled.div`
    background: url(../static/images/about-our-company-goals-background.svg) no-repeat;
    background-size: cover;

    width:100%;
    margin-bottom: 16px;
`

export const OurGoalsWrapper = styled.div`
    max-width: 1170px;
    min-height: 435px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: ${BREAKPOINTS.lg}px) {
        max-width: 980px;
    } 

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        max-width: 740px;
    } 

    @media screen and (max-width: ${BREAKPOINTS.sm}px) {
        max-width: 520px;
        padding: 50px 25px;
    }
`

export const OurGoalsTitle = styled.h2`
    width: 100%;

    font-family: "DM Sans Regular";
    font-weight: bold;
    font-size: ${FONTS.h2}px;
    line-height: 44px;
    text-align: left;

    color: ${COLORS.white};
    margin-bottom: 30px;

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
    }
`

export const OurGoalsSubTitle = styled.h3`
    font-family: "DM Sans Regular";
    font-weight: bold;
    font-size: 31px;
    line-height: 45px;
    text-align: left;

    color: #fafafa;

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        font-size: 25px;
        line-height: 50px;
    } 
`

export const OurGoalsContentWrapper = styled.div`
    display: flex;
    flex-direction: row;

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        flex-wrap: wrap;
    } 
`

export const OurGoalsContent = styled.div`
    margin-right: 30px;

    &:last-child {
        margin-right: 0;
    }

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        width: 45%;
        margin-right: 20px;

        &:nth-child(1),
        &:nth-child(2) {
            margin-bottom: 20px;
        }
    } 

    @media screen and (max-width: ${BREAKPOINTS.xs}px) {
        width: 100%;
        margin-bottom: 20px;
    } 
`


export const OurGoalsDescription = styled.p`
    font-size: ${FONTS.p}px;
    font-family: "DM Sans Regular";
    line-height: 21px;

    color: #fafafa;
    position: relative;

    padding-top: 20px;
    margin-bottom: 15px;

    &:before {
        content: '';
        height: 1px;
        width: 20px;
        display: block;
        background-color: #A23BFF;
        position: absolute;
        left: 0;
        top: 10px;
    }

    @media screen and (max-width: ${BREAKPOINTS.lg}px) {
        font-size: 13px;
        line-height: 18px;
    }
`