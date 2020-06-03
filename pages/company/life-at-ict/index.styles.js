import styled, { css } from 'styled-components'

import { 
    BREAKPOINTS, 
    FONTS, 
    COLORS, 
    MAX_WIDTH_CONTAINER 
} from '../../../utils/constants'

export const LifeAtICTPageTopSection = styled.section`       
    padding: 50px 25px;

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
       padding: 96px 0 107px 0;
       margin: 0 auto;

       max-width: ${MAX_WIDTH_CONTAINER}px;
    }
`

export const LifeAtICTPageTopSectionTitle = styled.h1`       
    font-family: 'DM Sans Bold';
    font-size: 30px;
    line-height: 41px;
    margin-bottom: 20px;
    
    color: ${COLORS.dark};

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
        line-height: 60px;
        max-width: 955px;
        margin-bottom: 25px;
    
        font-size: ${FONTS.h1}px;
    }
`

export const LifeAtICTPageTopSectionDescription = styled.p`       
    font-family: 'DM Sans Regular';
    line-height: 30px;
    text-align: left;
    opacity: 0.8;
    margin-bottom: 20px;
    
    font-size: ${FONTS.h3}px;
    color: ${COLORS.darken};

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
        font-size: 24px;
        line-height: 38px;
        max-width: 780px;
        margin-bottom: 50px;
    }
`

export const LifeAtICTPageSliderSection = styled.section`       
    padding: 50px 25px;

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
       padding: 0 0 107px 0;
       margin: 0 auto;

       max-width: ${MAX_WIDTH_CONTAINER}px;
    }
`

export const SliderWrapper = styled.div`
    box-shadow: 0px 7px 15px rgba(0, 0, 0, 0.16);

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
       max-height: 424px;
    }
`

export const SliderItem = styled.div``

export const SliderContentWrapper = styled.div`
    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
       display: flex;
    }
`

export const SliderItemImage = styled.div`       
    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        max-width: 40%;
    }

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
        max-width: 530px;
    }
`

export const SliderItemContent = styled.div`
    padding: 15px;

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        max-width: 55%;
        padding: 0 0 0 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
        padding: 65px 0 65px 70px;
    }
`

export const SliderItemContentTitle = styled.h1`       
    font-family: 'DM Sans Bold';
    font-size: 30px;
    line-height: 35px;
    color: #242424;
    margin: 15px 0;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        font-size: 42px;
        line-height: 42px;
        margin: 0 0 37px 0;
        max-width: 535px;
    }
`

export const SliderItemContentDecription = styled.p`       
    font-family: 'DM Sans Regular';
    line-height: 20px;
    text-align: left;
    opacity: 0.56;
    margin-bottom: 15px;
    
    font-size: ${FONTS.p}px;
    color: ${COLORS.darken};

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 25px;
        max-width: 435px;
    }
`

export const SliderItemContentPerson = styled.div`       
    font-family: 'DM Sans Regular';
    font-size: 16px;
    line-height: 24px;
    text-align: left;
    opacity: 0.56;
    display: flex; 
    flex-direction: column;

    color: ${COLORS.darken};

    span {
        font-family: 'DM Sans Bold';
    }
`

const arrowStyle = css`
    border-radius: 50%;
    width: 42px;
    height: 42px;
    background: #fff;
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.16));
    position: absolute;
    right: -21px;
    top: calc(50% - 21px);
    z-index: 10;
    cursor: pointer;

    &:after {
        content: url('/static/images/slider-prev-arrow.svg');
        display: block;
        position: absolute;
        left: 10px;
        top: 8px;
        transform: rotate(180deg);
    }
`

export const SliderNextArrow = styled.div`  
    ${arrowStyle}
`

export const SliderPrevArrow = styled.div`  
    ${arrowStyle}

    left: -21px;

    &:after {
        transform: none;
        top: 10px;
    }
`

export const OpportunityPageMindsetSection = styled.section`
    background-color: #fafafa;
`

export const OpportunityPageMindsetContentWrapper = styled.div`
    padding: 50px 25px;

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
        margin: 0 auto;
        padding: 126px 80px;

        max-width: ${MAX_WIDTH_CONTAINER}px;
    }
`

export const OpportunityPageMindsetContentTitle = styled.h1`
    font-family: 'DM Sans Bold';
    font-size: 30px;
    line-height: 41px;
    color: #686ee5;
    margin-bottom: 20px;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        line-height: 60px;
        margin-bottom: 70px;

        font-size: ${FONTS.h1}px;
    }
`

export const OpportunityPageMindsetContent = styled.div`
    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
       display: flex;
       flex-wrap: wrap;
       justify-content: space-between;
    }
`

export const OpportunityPageMindsetArticle = styled.p`
    font-family: 'DM Sans Regular';
    text-align: left;
    opacity: 0.56;
    margin-bottom: 20px;
    line-height: 20px;
    
    font-size: ${FONTS.p}px;
    color: ${COLORS.darken};

    &:first-child {
        opacity: 0.74;
    }

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
       max-width: 47%;
    }

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        font-size: 16px;
        line-height: 28px;

        &:first-child {
           font-size: 20px;
        }
    }
`

export const OpportunityPageCardSection = styled.section`
    padding: 50px 25px;

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
        margin: 0 auto;
        padding: 137px 0;

        max-width: ${MAX_WIDTH_CONTAINER}px;
    }
`

export const OpenPositionsPageFilter = styled.div`
    padding: 25px 0 50px;
    display: flex;
    flex-wrap: wrap;

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        flex-wrap: nowrap;
        justify-content: space-between;
    }

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
        margin: 0 auto;
        padding: 60px 0 90px 0;

        max-width: ${MAX_WIDTH_CONTAINER}px;
    }
`