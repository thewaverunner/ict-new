import styled from 'styled-components'

import { 
    BREAKPOINTS, 
    FONTS, 
    COLORS, 
    MAX_WIDTH_CONTAINER
} from '../utils/constants'

export const HomePageTopSectionWrapper = styled.div`
    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        padding: 75px 0;
        position: relative;

        &:before,
        &:after {
            content: '';
            display: block;
            height: 4px;
            width: 729px;
            position: absolute;

            background-color: ${COLORS.dark};
        }

        &:before {
            left: 0;
            bottom: 15%;
        }

        &:after {
            right: 0;
            top: 12%;
            width: 575px;
        }
    }

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        padding: 120px 0;
    }
`

export const HomePageTopSection = styled.div`
    padding: 25px;

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        padding: 0;
        max-width: 580px;
        margin: 0 auto;
    }
`

export const HomePageTopSectionTitle = styled.h1`
    font-family: 'DM Sans Bold';
    font-size: 30px;
    line-height: 35px;
    text-align: left;
    margin-bottom: 15px;

    color: ${COLORS.black};

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        line-height: 44px;
        text-align: center;
        margin-bottom: 28px;

        font-size: ${FONTS.h1}px;
    }
`

export const HomePageTopSectionDescription = styled.p`
    font-family: 'DM Sans Regular';
    font-size: 14px;
    line-height: 26px;
    text-align: left;

    color: ${COLORS.black};

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        line-height: 24px;
        text-align: center;

        font-size: ${FONTS.h3}px;
    }
`

export const HomePageBannersWrapper = styled.div``

export const HomePageImpactSection = styled.div`
    width: 100%;
    min-height: 222px;
    position: relative;
    background: url('/static/images/home-impact-technology.svg') no-repeat;
    background-size: cover;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        min-height: 422px;
    }
`

export const HomePageImpactContentWrapper = styled.div`
    max-width: 90%;
    padding-top: 40px;
    margin: 0 auto;
    transform: translateY(-30%);

    background-color: ${COLORS.white};

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        max-width: 793px;
        transform: translateY(-60%);
    }
`

export const HomePageImpactContent = styled.div`
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    text-align: center;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        max-width: 650px;
        margin: 0 auto;
    }
`

export const HomePageImpactContentTitle = styled.h2`
    font-family: 'DM Sans Bold';
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 15px;

    color: ${COLORS.black};

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        line-height: 44px;
        margin-bottom: 30px;

        font-size: ${FONTS.h2}px;
    }
`

export const HomePageImpactContentDescription = styled.p`
    font-family: 'DM Sans Regular';
    font-size: 17px;
    line-height: 27px;
    margin-bottom: 25px;

    color: ${COLORS.black};

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        font-size: ${FONTS.h3}px;
        line-height: 31.5px;
    }
`

export const HomePageNetworkSection = styled.div`
    background-color: #fafafa;
    padding: 50px 25px;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        padding: 80px 0;
        margin-top: -60px;
    }
`

export const HomePageNetworkTitle = styled.h1`
    font-size: 27px;
    line-height: 40px;
    font-family: 'DM Sans Bold';
    text-align: center;
    background: linear-gradient(90deg, rgba(67,195,251,1) 0%, rgba(167,56,250,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media screen and (min-width: ${BREAKPOINTS.xs}px) {
        font-size: 34px;
    }

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        font-size: 40px;
        line-height: 50px;
        max-width: 755px;
        margin: 0 auto;
    }

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        font-size: 44px;
        max-width: 855px;
    }

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
        font-size: ${FONTS.h1}px;
        line-height: 60px;
    }
`

export const HomePageLatestNewsSection = styled.div``

export const HomePageLatestNewsWrapper = styled.div`
    padding: 50px 25px;

    @media screen and (min-width: ${BREAKPOINTS.xl}px) {
        padding: 98px 0 104px;
        margin: 0 auto;

        max-width: ${MAX_WIDTH_CONTAINER}px;
     }
`

export const HomePageLatestNewsTitle = styled.h2`
    font-family: 'DM Sans Bold';
    font-size: 27px;
    line-height: 35px;
    text-align: left;
    padding-bottom: 10px;

    color: ${COLORS.black};

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
        line-height: 44px;
        padding-bottom: 16px;

        font-size: ${FONTS.h2}px;
    }
`

export const HomePageLatestNewsList = styled.div`
    margin-top: 25px;

    @media screen and (min-width: ${BREAKPOINTS.xs}px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
        margin-top: 40px;
    }
`
