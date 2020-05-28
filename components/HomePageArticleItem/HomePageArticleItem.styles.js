import styled from 'styled-components'

import { BREAKPOINTS } from '../../utils/constants'

export const HomePageLatestNewsItem = styled.div`
    margin-bottom: 25px;

    @media screen and (min-width: ${BREAKPOINTS.xs}px) {
        max-width: 48%;

        &:first-child {
             margin-right: 20px;
        }
    }

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        margin-right: 30px;
        flex: 1;
      
        &:first-child {
            margin-right: 30px;
        }

        &:last-child {
            margin-right: 0;
        }
    }

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        margin-right: 50px;
        margin-bottom: 0;

        &:first-child {
            margin-right: 50px;
        }
    }
`

export const HomePageLatestNewsItemImage = styled.div` `

export const HomePageLatestNewsItemDescription = styled.div`
    display: flex; 
    flex-direction: column;

    background: #fff;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);

    padding: 15px;

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
        padding: 25px 25px 30px;
    }
`

export const HomePageLatestNewsItemReleaseWrapper = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: space-between;

    padding-bottom: 15px;
`

export const HomePageLatestNewsItemRelease = styled.div`
    font-family: "DM Sans Regular";
    font-size: 12px;
    text-transform: uppercase;

    color: #000;
`

export const HomePageLatestNewsItemReleaseData = styled.div`
    font-family: "DM Sans Regular";
    font-size: 12px;

    color: #000;
    opacity: 0.38;

    align-self: flex-end;
`

export const HomePageLatestNewsItemTitle = styled.h2`
    font-family: "DM Sans Bold";
    font-size: 18px;
    line-height: 20px;

    color: #000;
`