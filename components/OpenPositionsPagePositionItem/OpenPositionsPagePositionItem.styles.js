import styled from 'styled-components'

import { 
    BREAKPOINTS, 
    FONTS,
    COLORS 
} from '../../utils/constants'

export const OpenPositionsPageItem = styled.div`
    width: 100%;
    min-height: 298px;
    margin-bottom: 30px;
    outline: 1px solid #707070;
    box-shadow: 1px 0 0 rgba(0, 0, 0, 0.16);

    &:hover {
        cursor: pointer;
        outline: 2px solid #171c23;
    }

    @media screen and (min-width: ${BREAKPOINTS.xs}px) {
        width: calc(50% - 30px);
        margin: 0 15px 30px;
    }

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        width: calc(33.333% - 60px);
        margin: 0 30px 60px;
    }
`

export const OpenPositionsPageItemLink = styled.a`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const OpenPositionsPageItemTitle = styled.h2`
    font-size: 31px;
    line-height: 35px;
    font-family: 'DM Sans Bold';

    color: ${COLORS.darken};
`

export const OpenPositionsPageItemContent = styled.p`
    line-height: 31px;
    font-family: 'DM Sans Regular';

    color: ${COLORS.darken};
    font-size: ${FONTS.h3}px;
`