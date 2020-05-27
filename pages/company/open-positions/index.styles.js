import styled from 'styled-components'

import { BREAKPOINTS } from '../../../utils/constants'

export const OpenPositionsPageWrapper = styled.div`       
    padding: 0 25px;
`

export const OpenPositionsPageTopSection = styled.div`       
    padding: 38px 0 60px;

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        text-align: center;

        max-width: 700px;
        margin: 0 auto;
    }

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        padding: 117px 0 145px;
        max-width: 810px;
    }
`

export const OpenPositionsPageTopSectionTitle = styled.h2`       
    font-family: 'DM Sans Bold';
    font-size: 30px;
    line-height: 34px;

    color: #1d1d20;
    margin-bottom: 10px;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        font-size: 56px;
        line-height: 60px;
    }
`

export const OpenPositionsPageTopSectionDescription = styled.p`       
    font-family: 'DM Sans Regular';
    font-size: 14px;
    line-height: 21px;

    color: #1d1d1f;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        font-size: 24px;
        line-height: 38px;
    }
`

export const OpenPositionsPageList = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media screen and (min-width: ${BREAKPOINTS.xl}px) {
        max-width: 1350px;

        margin: 0 auto;
        margin-bottom: 98px;
    }
`

export const OpenPositionsPageItem = styled.div`
    min-width: 100%;
    min-height: 298px;

    margin-bottom: 30px;
    
    outline: 1px solid #707070;
    box-shadow: 1px 0 0 rgba(0, 0, 0, 0.16);

    &:hover {
        cursor: pointer;
        outline: 2px solid #171c23;
    }

    @media screen and (min-width: ${BREAKPOINTS.xs}px) {
       min-width: 46.9%;
       margin-right: 30px;
       flex: 1;

       &:nth-child(2n+2) {
           margin-right: 0;
       }
    }

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        min-width: 29%; 
        flex: 0;

        margin-bottom: 60px;
        margin-right: 60px;

        &:nth-child(2n+2) {
            margin-right: 60px;
        }
 
        &:nth-child(3n+3) {
            margin-right: 0;

        }
    }

    @media screen and (min-width: ${BREAKPOINTS.xl}px) {
        min-width: 410px;
        min-height: 298px;
    }
`

export const OpenPositionsPageItemLink = styled.a`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const OpenPositionsPageItemTitle = styled.h2`
    font-size: 31px;
    line-height: 35px;
    font-family: 'DM Sans Bold';

    color: #1d1d1f;
`

export const OpenPositionsPageItemContent = styled.p`
    font-size: 21px;
    line-height: 31px;
    font-family: 'DM Sans Regular';

    color: #1d1d1f;
`

export const CorporateGovernancePartnershipsSection = styled.div`
    position: relative;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        display: flex;
        flex-direction: row-reverse;
    }
`

export const CorporateGovernancePartnershipsImage = styled.div`
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
    background: #fafafa;

    padding: 38px 25px 47px;
    margin: 0 25px -20px;

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
        max-width: 1350px;

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
`

export const CorporateGovernancePartnershipsDescriptionWrapper = styled.div`
    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        max-width: 550px;
        width: 100%;
    }

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
        max-width: 638px;
    }
`

export const CorporateGovernancePartnershipsTitle = styled.h2`
    font-family: 'DM Sans Bold';
    font-size: 30px;
    line-height: 34px;

    color: #1d1d20;
    margin-bottom: 22px;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        transform: none;
        font-size: 47px;
        line-height: 60px;
    }
`

export const CorporateGovernancePartnershipsDescription = styled.p`
    font-family: 'DM Sans Regular';
    font-size: 14px;
    line-height: 21px;

    color: #1d1d1f;
    margin-bottom: 31px;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        font-size: 21px;
        line-height: 31.5px;
    }
`

// export const OpenPositionsPageSection = styled.div`
//     padding: 114px 0 189px;
//     margin-bottom: 16px;
// `

// export const OpenPositionsPageWrapper = styled.div`
//     max-width: 1170px;
//     margin: 0 auto;

//     @media screen and (max-width: 1170px) {
//         max-width: 980px;
//     } 

//     @media screen and (max-width: 992px) {
//         max-width: 740px;
//     } 

//     @media screen and (max-width: 768px) {
//         max-width: 520px;
//     } 

//     @media screen and (max-width: 552px) {
//         max-width: 480px;
//         margin: 0 20px;
//     } 
// `

// export const OpenPositionsPageTitle = styled.h1`
//     font-size: 47px;
//     color:#1d1d1f;
//     margin-bottom: 30px;
//     line-height: 56px;
//     font-family: 'DM Sans Bold';

//     @media screen and (max-width: 768px) {
//         font-size: 25px;
//     } 

//     @media screen and (max-width: 552px) {
//         font-size: 22px;
//     } 
// `