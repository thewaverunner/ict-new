import styled from 'styled-components'

export const OpenPositionPageSection = styled.div`
    max-width: 900px;
    padding: 96px 0 105px 0;
    margin: 0 auto;
    margin-bottom: 16px;
    display: flex;
    flex-direction: column;
    text-align: left;

    @media screen and (max-width: 992px) {
        max-width: 700px;
    }

    @media screen and (max-width: 768px) {
        max-width: 520px;
    }

    @media screen and (max-width: 556px) {
        width: calc(100% - 40px);
        margin: 0 20px;
        padding: 46px 0 55px 0;
    }
`

export const OpenPositionPageTitle = styled.h1`
    font-family: "DM Sans";
    font-weight: bold;
    font-size: 47px;
    line-height: 56.4px;
    color: #1d1d1f;
    margin-bottom: 50px;

    @media screen and (max-width: 992px) {
        font-size: 37px;
    }

    @media screen and (max-width: 556px) {
        font-size: 31px;
        margin-bottom: 25px;
    }
`

export const OpenPositionPageDescription = styled.p`
    font-family: "DM Sans";
    font-weight: normal;
    font-size: 21px;
    line-height: 31.5px;
    color: #1d1d1f;
    margin-bottom: 95px;

    @media screen and (max-width: 992px) {
        font-size: 19px;
    }

    @media screen and (max-width: 556px) {
        margin-bottom: 55px;
    }
`