import styled from 'styled-components'

import { BREAKPOINTS } from '../../utils/constants'

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