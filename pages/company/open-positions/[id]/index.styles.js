import styled from 'styled-components'

import { BREAKPOINTS } from '../../../../utils/constants'


export const OpenPositionJobPageSection = styled.div`
    max-width: 890px;

    margin: 0 auto;
    padding: 50px 25px;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        padding: 113px 0 130px;
    }
`

export const OpenPositionJobPageDescriptionJobWrapper = styled.div`
    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        padding-bottom: 40px;
    }
`

export const OpenPositionJobPageTaskWrapper = styled.div``

export const OpenPositionJobPageSectionTitle = styled.h2`
    font-family: "DM Sans Bold";
    font-size: 30px;
    line-height: 38px;

    color: #1d1d1f;
    margin-bottom: 20px;
`

export const OpenPositionJobPageSectionDescription = styled.p`
    font-family: "DM Sans Regular";
    font-size: 21px;
    line-height: 31.5px;

    color: #1d1d1f;
    margin-bottom: 56px;
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
    padding: 38px 25px 47px;
    background: #fafafa;
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

// export const OpenPositionPageSection = styled.div`
//     max-width: 900px;
//     padding: 105px 0;
//     margin: 0 auto;
//     margin-bottom: 16px;
//     display: inherit;
//     flex-direction: column;
//     text-align: left;

//     @media screen and (max-width: 992px) {
//         max-width: 700px;
//     }

//     @media screen and (max-width: 768px) {
//         max-width: 520px;
//     }

//     @media screen and (max-width: 556px) {
//         width: calc(100% - 40px);
//         margin: 0 20px;
//         padding: 46px 0 55px 0;
//     }
// `

// export const OpenPositionPageTitle = styled.h1`
//     font-family: "DM Sans Bold";
//     font-size: 47px;
//     line-height: 56.4px;
//     color: #1d1d1f;
//     margin-bottom: 30px;

//     @media screen and (max-width: 992px) {
//         font-size: 37px;
//     }

//     @media screen and (max-width: 556px) {
//         font-size: 31px;
//         margin-bottom: 25px;
//     }
// `

// export const OpenPositionPageDescription = styled.p`
//     font-family: "DM Sans Regular";
//     font-size: 21px;
//     line-height: 31.5px;
//     color: #1d1d1f;
//     margin-bottom: 75px;

//     @media screen and (max-width: 992px) {
//         font-size: 19px;
//     }

//     @media screen and (max-width: 556px) {
//         margin-bottom: 55px;
//     }
// `