import styled from 'styled-components'

import { 
    BREAKPOINTS, 
    FONTS, 
    COLORS, 
    MAX_WIDTH_CONTAINER 
} from '../../../utils/constants'

export const LifeAtICTPageTopSection = styled.section`       
    padding: 50px 25px;

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
       padding: 96px 0 107px 0;
       margin: 0 auto;

       max-width: ${MAX_WIDTH_CONTAINER}px;
    }
`

export const LifeAtICTPageTopSectionTitle = styled.h1`       
    font-family: "DM Sans Bold";
    font-weight: bold;
    font-size: 30px;
    line-height: 41px;
    margin-bottom: 20px;
    
    color: ${COLORS.dark};

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
        line-height: 60px;
        max-width: 955px;
        margin-bottom: 25px;
    
        font-size: ${FONTS.h1}px;
    }
`

export const LifeAtICTPageTopSectionDescription = styled.p`       
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

