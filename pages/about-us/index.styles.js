import styled, { css } from 'styled-components'

export const AboutWrapper = styled.div`
  max-width: 1320px;

  @media screen and (max-width:1360px){
    max-width: 1100px;
  }

  @media screen and (max-width: 1150px){
    max-width: 950px;
  }

  @media screen and (max-width: 1000px){
    max-width: 800px;
  }

  @media screen and (max-width: 850px){
    max-width: 700px;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 750px){
    max-width: 550px;
  }

  @media screen and (max-width: 600px){
    max-width: 400px;
  }

  @media screen and (max-width: 440px){
    max-width: 310px;
  }
`

export const TopBanner = styled.div`
  background: url('../static/images/about-top-banner.png');
`

export const TopBannerDescription = styled.div`
  
`

export const TopBannerTitle = styled.h1`
  color: #000000;
  font-size: 47px;
  font-family: "DM Sans Bold";
  line-height: 60px;
`

export const TopBannerContent = styled.p`
  color: #727274;
  font-size: 21px;
  font-family: "DM Sans Regular";
  line-height: 31px;
`