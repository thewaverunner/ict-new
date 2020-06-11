import styled from 'styled-components'

import {
    BREAKPOINTS,
    FONTS,
    COLORS,
    MAX_WIDTH_CONTAINER 
} from '../../../utils/constants'

export const PressroomPageTopSection = styled.section`
    padding: 30px 25px;

    @media screen and (min-width: ${BREAKPOINTS.xs}px) {
        display: flex;
        justify-content: space-between;    
        align-items: center; 
    }
 
    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
        margin: 0 auto;
         
        max-width: ${MAX_WIDTH_CONTAINER}px;
    }
`

export const PressroomPageTopSectionTitle = styled.h1`
    font-family: "DM Sans Bold";
    font-size: 30px;
    padding-bottom: 30px;

    color: ${COLORS.darken};

    @media screen and (min-width: ${BREAKPOINTS.xs}px) {
        padding-bottom: 0;
    }

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        font-size: 38px;
    }
` 

export const PressroomPageTopSectionList = styled.ul``

export const PressroomPageTopSectionItem = styled.li`
    padding-bottom: 20px;

    @media screen and (min-width: ${BREAKPOINTS.xs}px) {
        display: inline-block;
        padding-right: 30px;
        padding-bottom: 0;
        
        &:last-child {
            padding-right: 0;
        }
    }

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        padding-right: 60px;
    }
`

export const PressroomPageTopSectionLink = styled.a`
    font-family: "DM Sans Regular";
    text-decoration: none;
    transition: opacity 0.3s linear;

    color: ${COLORS.darken};
    font-size: ${FONTS.p}px;

    &:hover {
        opacity: 0.5;
    }
`

export const PressroomPageArticlesSection = styled.section`
    background-color: #fafafa;
    padding: 50px 25px;

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
       padding: 50px 0 80px;
    }
`

export const PressroomPageArticlesSectionWrapper = styled.div`
    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
        margin: 0 auto;

        max-width: ${MAX_WIDTH_CONTAINER}px;
    }
`

export const PressroomPageArticlesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media screen and (min-width: ${BREAKPOINTS.xs}px) {
        margin: 0 -15px;
    }
`

export const PressroomPageArticles = styled.article`
    margin-bottom: 30px;

    &:hover {
        cursor: pointer;
    }
  
    @media screen and (min-width: ${BREAKPOINTS.xs}px) {
        width: calc(50% - 30px);
        margin: 0 15px 45px;
    }

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        width: calc(33.333% - 30px);
    }
`

export const PressroomPageArticlesImage = styled.div``

export const PressroomPageArticlesContent = styled.div`
    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        padding-right: 35px;
    }
`

export const PressroomPagePressRelease = styled.h3`
    font-family: "DM Sans Bold";
    text-transform: uppercase;
    color: #007a9d;
    padding: 19px 0;

    font-size: ${FONTS.p}px;
`

export const PressroomPageArticlesTitle = styled.h2`
    font-family: 'DM Sans Bold';
    font-size: 21px;
    padding-bottom: 19px;

    color: ${COLORS.darken};
`

export const PressroomPageArticlesDescription = styled.p`
    font-family: 'DM Sans Regular';
    line-height: 21px;
    padding-bottom: 19px;
    
    color: ${COLORS.darken};
    font-size: ${FONTS.p}px;
`

export const PressroomPageArticlesData = styled.p`
    font-family: "DM Sans Regular";
    opacity: 0.6;

    color: ${COLORS.dark};
    font-size: ${FONTS.p}px;
`

export const PressroomCTASection = styled.section`
    background-color: #fafafa;
    padding: 25px;
`

export const BaseCardElement = styled.a`
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 10px 16px rgba(0, 0, 0, 0.12);
    transition: all 0.15s linear;

    svg {
        transition: all 0.15s linear;
    }

    &:hover {
        cursor: pointer;
        transform: translateY(-2px);
        box-shadow: 
            0 30px 60px -12px rgba(50,50,93,.25), 
            0 18px 36px -18px rgba(0,0,0,.3), 
            0 -12px 36px -8px rgba(0,0,0,.025)
        ;

        svg {
            filter: grayscale(0.8);
        }
    }

    background-color: ${COLORS.white};

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        margin-bottom: 0;
        flex-direction: row;
    }

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
        margin: 0 auto;

        max-width: ${MAX_WIDTH_CONTAINER}px;
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
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        width: 100%;
        padding: 40px 45px 40px 25px;
        text-align: left;
        justify-content: space-between;
        flex-direction: row;
    }  
`

export const BaseCardTitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        max-width: 520px;
        padding-right: 20px;
    }
    
    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        padding-right: 0;
    } 
`

export const BaseCardTitle = styled.h1`
    font-family: "DM Sans Bold";
    font-size: 21px;
    line-height: 31.5px;
    margin-bottom: 10px;

    color: ${COLORS.dark};
`

export const BaseCardDescription = styled.p`
    font-family: "DM Sans Regular";
    font-size: 16px;
    line-height: 24px;
    opacity: 0.56;
    margin-bottom: 15px;

    color: ${COLORS.darken};

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        margin-bottom: 0;
    }
`

export const ButtonWrapper = styled.div``