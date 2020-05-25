import styled from 'styled-components'

import { BREAKPOINTS } from '../../../utils/constants'


export const OurPeoplePageWrapper = styled.div`       
    padding: 0 25px;
`

export const OurPeopleTopSection = styled.div`       
    padding: 38px 0 60px;
    margin-bottom: 50px;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        padding: 38px 0 130px;
        margin-bottom: 100px;
        text-align: center;
    }
`

export const OurPeopleTopSectionTitle = styled.h2`       
    font-family: 'DM Sans Bold';
    font-size: 30px;
    line-height: 34px;

    color: #1d1d20;
    margin-bottom: 20px;

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
    max-width: 1170px;
    margin: 0 auto;
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
    @media screen and (min-width: ${BREAKPOINTS.xs}px) {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
    }
`

export const OurPeoplePageManagementItem = styled.div`       
    margin-bottom: 30px;

    @media screen and (min-width: ${BREAKPOINTS.xs}px) {
        max-width: 46%;
        margin-right: 20px;
    }

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        max-width: 30%;
        margin-right: 30px;
    }
`

export const OurPeoplePageManagementItemImage = styled.div`       
    position: relative;
`

export const OurPeoplePageManagementItemInfoWrapper = styled.div`       
    position: absolute;
    left: 20px;
    bottom: 20px;

    display: flex;
    flex-direction: column;

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        left: 50px;
        bottom: 25px;
    }
`

export const OurPeoplePageManagementItemDescription = styled.p`       
    padding: 15px;

    background: #fafafa;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.08);

    font-family: "DM Sans Regular";
    font-size: 14px;
    line-height: 21px;
    color: #1d1d1f;

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        padding: 45px 50px 65px;
    }
`

export const OurPeoplePageManagementItemName = styled.div`       
    font-family: "DM Sans Bold";
    font-size: 14px;
    line-height: 16.8px;
    color: #fafafa;
    width: 100%;
`

export const OurPeoplePageManagementItemPosition = styled.div`       
    font-family: "DM Sans Regular";
    font-size: 14px;
    line-height: 16.8px;
    color: #fafafa;
    width: 100%;
`



