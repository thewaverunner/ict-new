import styled from 'styled-components'

import { 
    BREAKPOINTS, 
    FONTS, 
    COLORS, 
    MAX_WIDTH_CONTAINER
} from '../../../utils/constants'

export const CorporateGovernanceWrapper = styled.div`
    padding: 0 25px;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        position: relative;
        max-width: 930px;
        margin: 0 auto;
        padding: 0;

        &:before,
        &:after {
            content: '';
            display: block;
            width: 43%;
            height: 4px;
            background: #1D1D1F;  
            position: absolute;
            top: 7%;
        }

        &:before {
            left: -53%;
        }

        &:after {
            right: -53%;
        }
    }
`

export const CorporateGovernanceTopSection = styled.section`       
   padding: 38px 0 60px;

   @media screen and (min-width: ${BREAKPOINTS.md}px) {
        margin: 0 50px;
        padding: 130px 0;
        text-align: center;
    }
`

export const CorporateGovernanceTopSectionTitle = styled.h2`
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

export const CorporateGovernanceTopSectionDescription = styled.p`
    font-family: 'DM Sans Regular';
    line-height: 21px;
    color: #333333;

    font-size: ${FONTS.p}px;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        line-height: 24px;

        font-size: ${FONTS.h3}px;
    }
`

export const CorporateGovernanceCrowdSection = styled.section`
    background: #fcfcfc;
    padding: 33px 25px 58px; 
    margin-bottom: 60px;

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
        justify-content: space-between;
        margin-bottom: 100px;
        padding: 70px 116px 107px; 
    }
`

export const CorporateGovernanceCrowdTitle = styled.h2`
    font-family: 'DM Sans Bold';
    font-size: 30px;
    line-height: 34px;

    color: ${COLORS.dark};

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        line-height: 44px;
        text-align: center;
        width: 100%;
        
        font-size: ${FONTS.h1}px;
    }
`

export const CorporateGovernanceCrowdContent = styled.div`
    position: relative;

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        max-width: 48%;
    }
`

export const CorporateGovernanceCrowdNumber = styled.div`
    font-family: 'DM Sans Bold';
    font-size: 133px;
    line-height: 113px;
    color: #4373c1;
    opacity: 0.1;
    position: absolute;
    top: 30px;
    left: -15px;

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
       top: 30px;
    }
`

export const CorporateGovernanceCrowdDescription = styled.div`
    font-family: 'DM Sans Regular';
    line-height: 21px;
    padding-top: 86px;

    color: ${COLORS.darken};
    font-size: ${FONTS.p}px;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        padding-top: 96px;
    }
`

export const CorporateGovernanceFoundationSection = styled.section`
    background: #fcfcfc; 
    margin-bottom: 60px;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        margin-bottom: 100px;
        padding: 6px;
    }
`

export const CorporateGovernanceFoundationImage = styled.div``

export const CorporateGovernanceFoundationContent = styled.div`
    padding: 40px 25px 83px;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        padding: 46px 43px 70px 72px;
    }
`

export const CorporateGovernanceFoundationTitle = styled.h2`
    font-family: 'DM Sans Bold';
    font-size: 25px;
    line-height: 34px;
    margin-bottom: 35px;
    
    color: ${COLORS.dark};

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        line-height: 44px;

        font-size: ${FONTS.h1}px;
    }
`

export const CorporateGovernanceFoundationDescription = styled.p`
    font-family: 'DM Sans Regular';
    line-height: 21px;
  
    color: ${COLORS.darken};
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

    img {
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

        img {
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