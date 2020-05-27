import styled from 'styled-components'

import { BREAKPOINTS } from '../../../utils/constants'

export const OurPeopleTopSection = styled.div`       
    padding: 38px 25px 60px;

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        text-align: center;
        max-width: 700px;

        margin: 0 auto;
        padding: 38px 0 60px;
    }

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        padding: 117px 0;
        max-width: 810px;
    }
`

export const OurPeopleTopSectionTitle = styled.h2`       
    font-family: 'DM Sans Bold';
    font-size: 30px;
    line-height: 34px;

    color: #1d1d20;
    margin-bottom: 10px;

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        text-align: center;
    }

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        font-size: 56px;
        line-height: 60px;
    }
`

export const OurPeopleTopSectionDescription = styled.p`       
    font-family: 'DM Sans Regular';
    font-size: 14px;
    line-height: 21px;

    color: #1d1d1f;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        font-size: 24px;
        line-height: 38px;
    }
`

export const OurPeoplePageManagementSectionWrapper = styled.div`       
    background: #fafafa;
`

export const OurPeoplePageManagementSection = styled.div`       
    padding: 50px 25px;
    margin: 0 auto;

    @media screen and (min-width: ${BREAKPOINTS.lg}px ) {
        padding: 105px 25px 85px;
    }

    @media screen and (min-width: ${BREAKPOINTS.xl}px) {
        max-width: 1350px;
    }
`

export const OurPeoplePageManagementTitle = styled.h2`       
    font-family: "DM Sans Bold";
    font-size: 24px;
    line-height: 35px;
    
    color: #1d1d1f;
    margin-bottom: 30px;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        font-size: 34px;
        line-height: 60px;
    }
`

export const OurPeoplePageManagementList = styled.div`       
    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        margin-bottom: 50px;
    }

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        margin-bottom: 65px;
    }
`

export const OurPeoplePageManagementItem = styled.div`       
    margin-bottom: 30px;

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
       max-width: 47.8%;
       margin-right: 30px;

       &:nth-child(2n+2){
           margin-right: 0;
       }
    }

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
        max-width: 31.5%;
        margin-right: 30px;

        &:nth-child(2n+2) {
            margin-right: 30px;
        }

        &:nth-child(3n+3) {
            margin-right: 0;
        }
    }
`

export const OurPeoplePageManagementItemImage = styled.div`       
    position: relative;
`

export const OurPeoplePageManagementItemInfoWrapper = styled.div`       
    position: absolute;
    left: 25px;
    bottom: 25px;

    display: flex;
    flex-direction: column;

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        left: 50px;
        bottom: 25px;
    }
`

export const OurPeoplePageManagementItemDescriptionWrapper = styled.div`       
    padding: 25px;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;

    background: #fafafa;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.08);

    min-height: 297px;
    box-sizing: border-box;
`

export const OurPeoplePageManagementItemDescription = styled.p`       
    font-family: "DM Sans Regular";
    font-size: 14px;
    line-height: 21px;

    color: #1d1d1f;
    padding-bottom: 20px;
`

export const OurPeoplePageManagementItemName = styled.div`       
    font-family: "DM Sans Bold";
    font-size: 14px;
    line-height: 16.8px;

    color: #fafafa;
`

export const OurPeoplePageManagementItemPosition = styled.div`       
    font-family: "DM Sans Regular";
    font-size: 14px;
    line-height: 16.8px;

    color: #fafafa;
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
    background: #ffffff;
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