import styled from 'styled-components'

import { 
    BREAKPOINTS, 
    FONTS, 
    COLORS, 
    MAX_WIDTH_CONTAINER 
} from '../../../../../utils/constants'

export const OpenPositionApplyPageWrapper = styled.div`
    padding: 50px 25px 75px;

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        padding: 100px 25px 150px;
    }

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        max-width: 890px;
        padding: 190px 0 0 0;
        margin: 0 auto;
    }
`

export const OpenPositionApplyPageTitle = styled.h1`
    font-size: 34px;
    font-family: 'DM Sans Bold';
    line-height: 44px;
    text-align: left;
    margin-bottom: 18px;

    color: ${COLORS.darken};
`

export const OpenPositionApplyPageContent = styled.section`
    background-color: #fafafa;
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