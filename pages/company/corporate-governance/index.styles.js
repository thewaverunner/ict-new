import styled from 'styled-components'

import { BREAKPOINTS, FONTS, COLORS } from '../../../utils/constants'

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

export const CorporateGovernanceTopSection = styled.div`       
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

    color: ${COLORS.dark};
    margin-bottom: 20px;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        font-size: ${FONTS.h1}px;
        line-height: 44px;
    }
`

export const CorporateGovernanceTopSectionDescription = styled.p`
    font-family: 'DM Sans Regular';
    font-size: ${FONTS.p}px;
    line-height: 21px;

    color: #333333;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        font-size: ${FONTS.h3}px;
        line-height: 24px;
    }
`

export const CorporateGovernanceCrowdSection = styled.div`
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
    font-weight: bold;
    font-size: 30px;
    line-height: 34px;

    color: ${COLORS.dark};

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        font-size: ${FONTS.h1}px;
        line-height: 44px;
        text-align: center;
        width: 100%;
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
    font-size: ${FONTS.p}px;
    line-height: 21px;

    color: #1d1d1f;
    padding-top: 86px;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        padding-top: 96px;
    }
`

export const CorporateGovernanceFoundationSection = styled.div`
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

    color: ${COLORS.dark};
    margin-bottom: 35px;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        font-size: ${FONTS.h1}px;
        line-height: 44px;
    }
`

export const CorporateGovernanceFoundationDescription = styled.p`
    font-family: 'DM Sans Regular';
    font-size: ${FONTS.p}px;
    line-height: 21px;
    color: #1d1d1f;
`

export const CorporateGovernancePartnershipsSection = styled.div`
    position: relative;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        display: flex;
        flex-direction: row-reverse;
        margin-bottom: 100px;
    }
`

export const CorporateGovernancePartnershipsImage = styled.div`
    background: ${props => props.backgroundStyle === 'white' ? '#fafafa' : COLORS.white};

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        padding: 40px 0;
        width: 45%;
        overflow: hidden;

        img {
            width: 100%;
        }
    }
`

export const CorporateGovernancePartnershipsContent = styled.div`
    transform: translateY(-25%);
    padding: 38px 25px 47px;
    margin: 0 25px -20px;

    background: ${props => props.backgroundStyle === 'white' ? COLORS.white : '#fafafa'};

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        transform: none;
        margin: 0;
        padding: 0;
        width: 55%;
    }
`

export const CorporateGovernancePartnershipsContentWrapper = styled.div`
    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
        padding-left: 20px;
    
        display: flex;
        flex-direction: column;
        justify-content: center;
    
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
        padding-left: 0;
    }
`

export const CorporateGovernancePartnershipsDescriptionWrapper = styled.div`
    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        max-width: 638px;
        width: 100%;
    }
`

export const CorporateGovernancePartnershipsTitle = styled.h2`
    font-family: 'DM Sans Bold';
    font-size: 30px;
    line-height: 34px;

    color: ${COLORS.dark};
    margin-bottom: 22px;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        transform: none;
        font-size: ${FONTS.h1}px;
        line-height: 44px;
    }
`

export const CorporateGovernancePartnershipsDescription = styled.p`
    font-family: 'DM Sans Regular';
    font-size: ${FONTS.p}px;
    line-height: 21px;

    color: #1d1d1f;
    margin-bottom: 31px;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        font-size: ${FONTS.h3}px;
        line-height: 31.5px;
    }
`