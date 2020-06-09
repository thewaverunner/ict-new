import styled from 'styled-components'

import { 
    BREAKPOINTS, 
    COLORS,
    FONTS,
    MAX_WIDTH_CONTAINER
} from '../../../utils/constants'

export const ChallengesTopSection = styled.section`       
   padding: 38px 25px 60px;

   @media screen and (min-width: ${BREAKPOINTS.md}px) {
        margin: 0 auto;
        padding: 76px 0 148px;
        text-align: center;
        max-width: 800px;
    }
`

export const ChallengesTopSectionTitle = styled.h2`
    font-family: 'DM Sans Bold';
    font-size: 30px;
    line-height: 34px;
    margin-bottom: 20px;

    color: ${COLORS.dark};

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        line-height: 44px;

        font-size: ${FONTS.h1}px;
    }
`

export const ChallengesTopSectionDescription = styled.p`
    font-family: 'DM Sans Regular';
    line-height: 21px;
    color: #333333;

    font-size: ${FONTS.p}px;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        line-height: 24px;

        font-size: ${FONTS.h3}px;
    }
`

export const ChallengesTopSectionImage = styled.div`
    max-width: 106px;
    max-height: 106px;
    margin-bottom: 40px;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        margin: 0 auto;
        margin-bottom: 40px;
    }
`

export const CompanyChallengesSection = styled.section`
    background-color: #fafafa;
`

export const CompanyChallengesContent = styled.div`
    padding: 50px 25px;

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
        margin: 0 auto;
        padding: 129px 0 136px;

        max-width: ${MAX_WIDTH_CONTAINER}px;
    }
`

export const CompanyChallengesTitle = styled.h2`
    font-family: 'DM Sans Bold';
    font-size: 24px;
    line-height: 36px;
    max-width: 660px;

    color: ${COLORS.darken};

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        font-size: 31px;
        line-height: 46.5px;
    }
`

export const CompanyChallengesList = styled.ul`
    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`

export const CompanyChallengesItem = styled.li`
    position: relative;

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        max-width: 48%;
    }

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
        max-width: 23%;
    }
`

export const CompanyChallengesItemNumber = styled.h1`
    font-family: 'DM Sans Bold';
    font-size: 128px;
    line-height: 108px;
    opacity: 0.06;
    position: absolute;
    top: 30px;
    left: -5px;

    color: ${COLORS.darken};

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
        top: 65px;
    }
`

export const CompanyChallengesItemDescription = styled.p`
    font-family: 'DM Sans Regular';
    font-weight: normal;
    line-height: 21px;
    padding-top: 86px;

    font-size: ${FONTS.p}px;
    color: ${COLORS.darken};

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
        padding-top: 125px;
    }
`