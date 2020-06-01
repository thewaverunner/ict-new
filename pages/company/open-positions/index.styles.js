import styled from 'styled-components'

import { 
    BREAKPOINTS, 
    FONTS, 
    COLORS, 
    MAX_WIDTH_CONTAINER 
} from '../../../utils/constants'

export const OpenPositionsPageWrapper = styled.div`       
    padding: 0 25px;
    background-color: #fafafa;

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
       padding: 0;
    }
`

export const OpenPositionsPageTopSection = styled.div`       
    padding: 38px 25px 60px;

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        text-align: center;
        max-width: 700px;
        margin: 0 auto;
    }

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        padding: 87px 0 74px;
        max-width: 810px;
    }
`

export const OpenPositionsPageTopSectionTitle = styled.h2`       
    font-family: 'DM Sans Bold';
    font-size: 30px;
    line-height: 34px;
    margin-bottom: 20px;
    
    color: ${COLORS.dark};

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        line-height: 44px;

        font-size: ${FONTS.h1}px;
    }
`

export const OpenPositionsPageTopSectionDescription = styled.p`       
    font-family: 'DM Sans Regular';
    line-height: 21px;
    color: ${COLORS.darken};

    font-size: ${FONTS.p}px;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        line-height: 24px;
    
        font-size: ${FONTS.h3}px;
    }
`

export const OpenPositionsPageListWrapper = styled.div`
    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
        margin: 0 auto;
        max-width: ${MAX_WIDTH_CONTAINER}px;
    }
`

export const OpenPositionsPageList = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media screen and (min-width: ${BREAKPOINTS.xs}px) {
        margin: 0 -15px;
    }

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        margin: 0 -30px;
    }
`

export const ContactUsPageCardsSection = styled.section`
    padding: 0 25px 50px;

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
        margin: 0 auto;
        padding: 0 0 100px 0;

        max-width: ${MAX_WIDTH_CONTAINER}px;
    }
`

export const CompanyCard = styled.div`
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 10px 16px rgba(0, 0, 0, 0.12);

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        margin-bottom: 0;
        flex-direction: row;

        &:first-child {
            margin-right: 100px;
        }
    }
`

export const CompanyCardImage = styled.div`
    margin: -52px 0;
    transform: rotate(90deg);

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
       min-width: 90px;
       transform: none;
    }
`

export const CompanyCardDescriptionWrapper = styled.div`
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

export const CompanyCardTitleWrapper = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        justify-content: flex-start;
    }  
`

export const CompanyCardTitle = styled.a`
    font-family: "DM Sans Bold";
    font-size: 20px;
    line-height: 30px;
    color: #6672e5;
    position: relative;
    text-decoration: none;
`

export const CompanyCardArrow = styled.div`
    align-self: center;
    padding-left: 10px;
`

export const CompanyCardDescription = styled.p`
    font-family: "DM Sans Regular";
    font-size: 16px;
    line-height: 24px;
    opacity: 0.56;
    margin-top: 15px;

    color: ${COLORS.darken};
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