import styled from 'styled-components'

import { 
    BREAKPOINTS, 
    FONTS, 
    COLORS, 
    MAX_WIDTH_CONTAINER 
} from '../../utils/constants'

export const HomePageBanner = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-bottom: 30px;

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
       margin: 0 auto;
       margin-bottom: 60px;

       flex-direction: ${props => props.imageReverse ? 'row-reverse' : 'row'};
       
       max-width: ${MAX_WIDTH_CONTAINER}px;
    }
`

export const HomePageBannerContentSection = styled.div`
    background-color: ${COLORS.lighten};

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        align-items: ${props => props.imageReverse ? 'flex-end' : 'flex-start'};
    }
`

export const HomePageBannerContentWrapper = styled.div``

export const HomePageBannerContent = styled.div`
    padding: 25px;

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
        padding: 50px;
    }
`

export const HomePageBannerImage = styled.div`
    order: -1;

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        width: 50%;
        order: inherit;
    }
`

export const HomePageBannerContentTitle = styled.h2`
    font-family: 'DM Sans Bold';
    line-height: 25px;
    margin-bottom: 16px;
    text-align: left;

    font-size: ${FONTS.h3}px;
    color: ${COLORS.dark};

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        font-size: ${FONTS.h2}px;
    }
`

export const HomePageBannerContentDescription = styled.p`
    font-family: 'DM Sans Regular';
    font-size: 16px;
    line-height: 20px;
    text-align: left;

    color: ${COLORS.dark};

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        line-height: 24px;

        font-size: ${FONTS.h3}px;
    }
`