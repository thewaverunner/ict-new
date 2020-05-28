import styled from 'styled-components'

import { BREAKPOINTS } from '../../utils/constants'

export const HomePageBanner = styled.div`
    display: flex;
    flex-direction: column;
    
    position: relative;

    padding: 0 25px;
    margin-bottom: 50px;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
       flex-direction: ${props => props.imageReverse ? 'row-reverse' : 'row'};
       
       padding: 0;
       margin-bottom: 121px;
    }
`

export const HomePageBannerContentSection = styled.div`
    background-color: #fafafa;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
       width: 55.2%;
    }
`

export const HomePageBannerContentWrapper = styled.div`
    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        width: 100%;
        max-width: 1350px;
        
        margin: 0 auto;
        padding: 0 25px;

        display: flex;
        flex-direction: column;
        justify-content: center;

        align-items: ${props => props.imageReverse ? 'flex-end' : 'flex-start'};

        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
`

export const HomePageBannerContent = styled.div`
    padding: 25px 25px;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        max-width: 500px;
    }

    @media screen and (min-width: ${BREAKPOINTS.xl}px) {
        max-width: 590px;
        padding: 0;
    }
`

export const HomePageBannerImage = styled.div`
    order: -1;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        width: 45.8%;
        order: inherit;
    }
`

export const HomePageBannerContentTitle = styled.h2`
    font-family: "DM Sans Bold";
    font-size: 24px;
    line-height: 35px;

    margin-bottom: 20px;

    text-align: left;
    color: #1d1d1f;

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
        font-size: 37px;
        line-height: 20px;
    }

    @media screen and (min-width: ${BREAKPOINTS.xl}px) {
        font-size: 47px;
        line-height: 60px;
    }
`

export const HomePageBannerContentDescription = styled.p`
    font-family: "DM Sans Regular";
    font-size: 16px;
    line-height: 20px;
    text-align: left;

    margin-bottom: 30px;
    color: #1d1d1f;

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
        font-size: 17px;
        line-height: 27px;
    }

    @media screen and (min-width: ${BREAKPOINTS.xl}px) {
        font-size: 21px;
        line-height: 31.5px;

        margin-bottom: 45px;
    }
`