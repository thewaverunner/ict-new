import styled from 'styled-components'

import { 
    BREAKPOINTS, 
    FONTS,
    COLORS 
} from '../../../utils/constants'

export const InfoBannerSection = styled.section`
    background-color: #fafafa;
    padding: 50px 0 100px;
    margin-bottom: 16px;

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        padding: 53px 25px 87px;
    }  
`

export const InfoBannerWrapper = styled.div`
    max-width: 1170px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: ${BREAKPOINTS.lg}px) {
        max-width: 950px;
    }

    @media screen and (max-width: ${BREAKPOINTS.sm}px) {
        flex-wrap: wrap;
    }  
`

export const InfoBanner = styled.div`
    padding-right: 35px;

    &:last-child {
        padding-right: 0;
    }

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        padding-right: 20px;

        &:nth-child(1),
        &:nth-child(2) {
            margin-bottom: 30px;
        }

        &:nth-child(2),
        &:nth-child(3){
            padding-right: 0;
        }
    }

    @media screen and (max-width: ${BREAKPOINTS.xs}px) {
        &:nth-child(1),
        &:nth-child(2) {
            margin-bottom: 50px;
        }
    }
`

export const  InfoBannerDescription = styled.div`
    padding-right: 35px;
`

export const  InfoBannerTitle = styled.h2`
    margin: 45px 0 25px;
    font-size: 31px;
    font-family: 'DM Sans Bold';
    line-height: 31px; 

    color: ${COLORS.darken};

    @media screen and (max-width: ${BREAKPOINTS.xs}px){
        margin: 0 0 20px;
    }
`

export const  InfoBannerContent = styled.p`
    margin-bottom: 58px;
    font-family: 'DM Sans Regular';
    line-height: 21px;

    color: ${COLORS.darken};
    font-size: ${FONTS.p}px;

    @media screen and (max-width: ${BREAKPOINTS.md}px){
        margin-bottom: 20px;
    }

    @media screen and (max-width: ${BREAKPOINTS.xs}px){
        margin-bottom: 40px;
    }
`

export const  QuestionsBannerSection = styled.div`
    background-color: #fafafa;
    padding: 101px 0 15px;
    margin-bottom: 16px;

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        padding: 47px 25px 37px;
    }  
`

export const  QuestionsBannerWrapper = styled.div`
    max-width: 1170px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: ${BREAKPOINTS.lg}px) {
        max-width: 950px;
    }

    @media screen and (max-width: ${BREAKPOINTS.sm}px) {
        flex-wrap: wrap;
    }  
`

export const  QuestionsBanner = styled.div`
    max-width: 30%;

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        max-width: 720px;
        padding-right: 35px;
    }

    @media screen and (max-width: ${BREAKPOINTS.sm}px){
        padding-right: 0;
        margin-bottom: 50px;
    }
`

export const  QuestionsBannerImage = styled.div`
    img {
        width: auto;
    }
`

export const  QuestionsBannerDescription = styled.div`
    button {
        display: none;
    }

    @media screen and (max-width: ${BREAKPOINTS.sm}px){
        padding-right: 0;

        button {
            display: block;
        }
    }
`

export const  QuestionsBannerTitle = styled.h2`
    margin: 25px 0 20px;
    font-size: 31px;
    font-family: 'DM Sans Bold';
    line-height: 31px;

    color: ${COLORS.darken};

    @media screen and (max-width: ${BREAKPOINTS.sm}px){
        margin: 10px 0 15px; 
    }
`

export const  QuestionsBannerContent = styled.p`
    margin-bottom: 58px;
    font-family: 'DM Sans Regular';
    line-height: 21px;

    color: ${COLORS.darken};
    font-size: ${FONTS.p}px;

    @media screen and (max-width: ${BREAKPOINTS.sm}px){
        margin-bottom: 25px;
    }
`