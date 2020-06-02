import styled from 'styled-components'

import { 
    BREAKPOINTS, 
    FONTS, 
    COLORS, 
    MAX_WIDTH_CONTAINER 
} from '../../../utils/constants'

export const OpportunityPageTopSection = styled.section`       
    padding: 50px 25px;

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
       padding: 96px 0 0 0;
       margin: 0 auto;

       max-width: ${MAX_WIDTH_CONTAINER}px;
    }
`

export const OpportunityPageTopSectionTitle = styled.h1`       
    font-family: "DM Sans Bold";
    font-weight: bold;
    font-size: 30px;
    line-height: 41px;
    color: #686ee5;
    margin-bottom: 20px;

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
        line-height: 60px;
        max-width: 955px;
        margin-bottom: 50px;
    
        font-size: ${FONTS.h1}px;
    }
`

export const OpportunityPageTopSectionDescription = styled.p`       
    font-family: "DM Sans Regular";
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

export const OpportunityPageChallengeSection = styled.section`       
    padding: 50px 25px;

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
       padding: 118px 0;
       margin: 0 auto;

       max-width: ${MAX_WIDTH_CONTAINER}px;
    }
`

export const OpportunityPageChallengeWrapper = styled.div`
    @media screen and (min-width: ${BREAKPOINTS.md}px) {
       display: flex;
    }
`

export const OpportunityPageChallengeTitle = styled.h1`
    font-family: "DM Sans Bold";
    font-size: 24px;
    line-height: 34px;
    text-align: left;
    color: #242424;
    padding-bottom: 40px;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        font-size: 42px;
        line-height: 42px;
        text-align: center;
        max-width: 515px;
        margin: 0 auto;
        padding-bottom: 35px;
    }
`

export const OpportunityPageChallengeImage = styled.div`       
    margin: 0 auto;

    img {
        max-width: 200px;
    }

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        max-width: 50%;  
        
        img {
            max-width: 274px;
            transform: translate(20%, 20%);
        }
    }
`

export const OpportunityPageChallengeContent = styled.div` 
    position: relative;
    padding: 50px 0;
    display: flex;     
    border-left: 2px solid;
    border-image-source: linear-gradient(to top, #ffffff 0%, #676EE5 25%, #676EE5 75%, #ffffff 100%);
    border-image-slice: 1;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        min-width: 50%;  
        
        padding: 125px 0;
    }
`

export const OpportunityPageChallengeList = styled.ul``

export const OpportunityPageChallengeItem = styled.li`       
    margin-bottom: 50px;
    padding-left: 40px;
    position: relative;

    &:last-child {
        margin-bottom: 0;
    }

    &:before {
        content: '';
        display: block;
        width: 10px;
        height: 10px;
        background-color: #676EE5;
        border-radius: 50%;
        position: absolute;
        left: -6px;
        top: calc(50% - 5px);
    }

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        max-width: 435px;      
        padding-left: 70px;
        margin-bottom: 80px;
    }
`

export const OpportunityPageChallengeItemTitle = styled.h3`       
    font-family: "DM Sans Bold";
    font-size: 20px;
    line-height: 30px;
    color: #6672e5;
    margin-bottom: 17px;
`

export const OpportunityPageChallengeItemDescription = styled.p`       
    font-family: "DM Sans Regular";
    font-size: 16px;
    line-height: 24px;
    opacity: 0.56;

    color: ${COLORS.darken};
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
    font-family: "DM Sans Bold";
    font-weight: bold;
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
    font-family: "DM Sans Regular";
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
    padding: 0 25px 50px;

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
