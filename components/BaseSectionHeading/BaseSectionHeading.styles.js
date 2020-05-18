import styled from 'styled-components'

import { BREAKPOINTS } from '../../utils/constants'

export const BaseSectionHeadingWrapper = styled.div`
    background: url('/static/images/second-page-header.svg');
    background-size: cover;
    padding: 230px 0 50px;
    margin-bottom: 16px;

    @media screen and (max-width: ${BREAKPOINTS.sm}px) {
        padding: 130px 0 55px;
    }
`

export const BaseSectionHeadingContent = styled.div`
    max-width: 1170px;
    margin: 0 auto;

    @media screen and (max-width: 1170px) {
        max-width: 990px;
    }

    @media screen and (max-width: 992px) {
        max-width: 720px;
    }

    @media screen and (max-width: 768px) {
        max-width: 570px;
    }

    @media screen and (max-width: 552px) {
        max-width: 96%;
        margin: 0 2%;
    }
`

export const BaseSectionTitle = styled.h1`
    font-size: 47px;
    color: #ffffff;
    line-height: 60px;
    font-family: 'DM Sans Bold';
    max-width: 1170px;
  

    @media screen and (max-width: ${BREAKPOINTS.xs}px) {
       font-size: 30px;
       line-height: 37px;
       text-align: left;
       padding: 0 25px;
    }

    @media screen and (max-width: ${BREAKPOINTS.sm}px) {
        font-size: 40px;
    }

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        font-size: 45px;
    }
`

