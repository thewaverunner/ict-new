import styled from 'styled-components'

import { 
    BREAKPOINTS, 
    FONTS, 
    COLORS, 
    MAX_WIDTH_CONTAINER 
} from '../../../utils/constants'

export const OpenPositionsPageWrapper = styled.section`       
    padding: 0 25px;
    background-color: #fafafa;

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
       padding: 0;
    }
`

export const OpenPositionsPageTopSection = styled.section`       
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
    padding: 50px 25px;

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
        margin: 0 auto;
        padding: 50px 0 100px 0;

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