import styled from 'styled-components'

import { 
    BREAKPOINTS, 
    COLORS,
    FONTS,
    MAX_WIDTH_CONTAINER
} from '../../utils/constants'

export const ContactUsPageTopSection = styled.section`
    padding: 50px 25px;

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
        margin: 0 auto;
        padding: 100px 0 90px;

        max-width: ${MAX_WIDTH_CONTAINER}px;
    }
`

export const ContactUsPageTopSectionTitle = styled.h1`
    font-family: "DM Sans Bold";
    font-size: 30px;
    line-height: 50px;

    color: ${COLORS.darken};

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        line-height: 60px;

        font-size: ${FONTS.h1}px;
    }
`

export const ContactUsCompanySection = styled.section`
    padding: 0 25px;
    margin-bottom: 40px;

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        display: flex;
    }

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
        margin: 0 auto;
        padding: 0 0 80px 0;

        max-width: ${MAX_WIDTH_CONTAINER}px;
    }
`

export const ContactUsCompanyInfo = styled.div`
    box-sizing: border-box;

    background-color: ${COLORS.darken};

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        width: 50%;
        padding: 25px;
    }

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        padding: 75px 20px 75px 55px;
    }
`

export const ContactUsCompanyInfoWrapper = styled.div`
    padding: 15px;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
       padding: 0;
    }
`

export const ContactUsCompanyTitle = styled.h2`
    font-family: "DM Sans Bold";
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 15px;

    color: ${COLORS.white};

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
        font-size: 31px;
        line-height: 60px;
        margin-bottom: 0;
    }
`

export const ContactUsCompanyInfoList = styled.ul`  `

export const ContactUsCompanyInfotItem = styled.li`
    font-family: "DM Sans Regular";
    line-height: 16.8px;
    color: #fafafa;
    display: flex;
    justify-content: space-between;
    padding-top: 10px;

    font-size: ${FONTS.p}px;

    span {
        font-family: "DM Sans Bold";
    }

    &:last-child {
        padding-top: 15px;
    }

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        padding-top: 20px;

        span {
            width: 50%;
        }

        &:last-child {
            padding-top: 30px;
        }
    }
`

export const ContactUsCompanyMap = styled.div`
    background-color: #fafafa;
    min-height: 200px;

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        width: 50%;
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
        padding: 50px 0  100px ;

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
