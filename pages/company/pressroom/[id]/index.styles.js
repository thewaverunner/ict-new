import styled from 'styled-components'

export const ArticlePageSection = styled.div`
    background-color: #fafafa;
`

export const ArticlePageWrapper = styled.div`
    max-width: 690px;
    margin: 0 auto 16px;
    padding: 110px 0 310px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;

    @media screen and (max-width: 768px) {
        padding: 80px 0 160px;
        max-width: 520px;
    }

    @media screen and (max-width: 552px) {
        margin: 0 4%;
        padding: 50px 0 100px;
        max-width: 92%;
    } 
`

export const ArticlePageTitle = styled.h1`
    color: #000000;
    font-size: 47px;
    font-family: 'DM Sans Bold';
    line-height: 56px;
    text-align: left;

    @media screen and (max-width: 1170px) {
        font-size: 35px;
    }

    @media screen and (max-width: 992px) {
        font-size: 32px;
    }

    @media screen and (max-width: 552px) {
        font-size: 28px;
        margin-bottom: 0;
    }
`

export const ArticlePageTime = styled.p`
    color: #1D1D1F;
    margin-bottom: 30px;
    font-size: 21px;
    font-family: 'DM Sans Regular';
    line-height: 31px;
`

export const ArticlePageParagraph = styled.p`
    color: #000000;
    margin-bottom: ${props => props.marginMedium ? '75px' : '30px'};
    font-size: 21px;
    font-family: "DM Sans Regular";
    line-height: 31px;

    @media screen and (max-width: 1000px) {
        font-size: 19px;
    }

    @media screen and (max-width: 850px) {
        font-size: 17px;
    }
`

export const ArticlePageImage = styled.div`
    margin-bottom: 35px;
`