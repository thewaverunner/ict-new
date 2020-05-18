import styled, { css } from 'styled-components'

export const Home = styled.section``

export const Header = styled.header`
    @media screen and (max-width: 750px){
        padding-top: 0;
    }
`
export const HeaderContainer = styled.div` 
  margin-bottom: 16px;
  height: 810px;
  display: flex;
  flex-direction: column;
  background: url('../../static/images/header-background.svg') no-repeat;
  background-size: cover; 
`

export const HeaderWrapper = styled.div`
  width: 1800px;
  margin: 0 auto;

  @media screen and (max-width:1920px) {
    max-width: 1320px;
  }

  @media screen and (max-width:1360px) {
    max-width: 1100px;
  }

  @media screen and (max-width: 1150px) {
    max-width: 950px;
  }

  @media screen and (max-width: 1000px) {
    max-width: 800px;
  }
    
  @media screen and (max-width: 850px) {
    max-width: 700px;
  }
    
  @media screen and (max-width: 750px) {
    max-width: 550px;
  }
    
  @media screen and (max-width: 600px) {
    max-width: 400px;
  }
    
  @media screen and (max-width: 440px) {
    max-width: 310px;
  }  
`

export const HeaderDescriptionWrapper = styled.div`
  max-width: 49%;
  transform: translateY(100%); 

  @media screen and (max-width:1360px) {
    max-width: 52%;
    transform: translateY(77%);
  }
  
  @media screen and (max-width: 1150px) {
    transform: translateY(55%);
  }
  
  @media screen and (max-width: 1000px) {
    transform: translateY(40%);
  }
  
  @media screen and (max-width: 850px) {
    max-width: 52%;
  }
  
  @media screen and (max-width: 750px) {
    max-width: 66%;
  }
  
  @media screen and (max-width: 440px) {
    max-width: 100%;
    transform: translateY(25%);
    padding: 0 10px;
  }
`


export const HeaderTitle = styled.h1`
    font-size: 47px;
    font-family: 'DM Sans Bold';
    color:#ffffff;
    margin-bottom: 20px;
    line-height: 70px;

    @media screen and (max-width: 600px){
        font-size: 35px;
        line-height: 40px;
        margin-top: 40px;
    }
`

export const HeaderDescription = styled.p`
    font-size: 21px;
    color: #ffffff;
    margin-bottom: 60px;
    font-family: 'DM Sans Regular';
    line-height: 35px;
`

export const Marketing = styled.div`
  width: 100%;
  background: url('../static/images/banner-marketing.svg');
  height: 646px;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`

export const MarketingDescription = styled.div`
  max-width: 28%;
  transform: translateX(54%);

  @media screen and (max-width:1800px){
    max-width: 36%;
  }

  @media screen and (max-width:1360px){
    max-width: 45%;
    transform: translateX(50%);
  }

  @media screen and (max-width: 1150px){
    max-width: 49%;
    transform: translateX(45%);
  }

  @media screen and (max-width: 1000px){
    max-width: 49%;
    transform: translateX(45%);
  }

  @media screen and (max-width: 850px){
    max-width: 52%;
    transform: translateX(35%)
  }

  @media screen and (max-width: 750px){
    max-width: 64%;
    transform: translateX(25%);
  }

  @media screen and (max-width: 600px){
    max-width: 64%;
    transform: translateX(25%);
  }

  @media screen and (max-width: 440px){
    max-width: 100%;
    transform: none;
    padding: 0 15px;
  }
`

export const MarketingTitle = styled.h1`
  font-size: 47px;
  color:#000000;
  margin-bottom: 10px;
  line-height: 56px;
  font-family: 'DM Sans Bold';

  @media screen and (max-width: 1000px){
    font-size: 35px;
  }

  @media screen and (max-width: 850px){
    font-size: 32px;
  }

  @media screen and (max-width: 600px){
    font-size: 28px;
  }
`

export const MarketingContent = styled.p`
  font-size: 21px;
  color: #000000;
  margin-bottom: 70px;
  font-family: 'DM Sans Regular';
  line-height: 31px;

  @media screen and (max-width: 1000px){
    font-size: 19px;
  }

  @media screen and (max-width: 850px){
    font-size: 17px;
  }
`

export const BannerSection = styled.div`
  background-color: #fafafa;
  padding: 75px 0;
  margin-bottom: 16px;

  @media screen and (max-width: 850px){
    padding: 40px 0;
  }
`

export const BannerWrapper = styled.div`
  max-width: 1800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width:1920px){
    max-width: 1320px;
  }

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

export const Banner = styled.div`
  flex: 1 1 30%;
  padding-right: 35px;

  &:last-child {
    padding-right: 0;
  }

  @media screen and (max-width: 850px){
    flex:1 1 45%;
    padding-right: 20px;

    &:nth-child(1),
    &:nth-child(2) {
      margin-bottom: 30px;
    }

    &:nth-child(2),
    &:nth-child(3){
      padding-right: 0;
    }
  }

  @media screen and (max-width: 600px){
    flex: 1 1 100%;
    padding: 0 10px;
  }
`

export const BannerImage = styled.div``

export const BannerDescription = styled.div`
  flex: 1 1 30%;
  padding-right: 35px;
`

export const BannerTitle = styled.h2`
  font-size: 21px;
  color: #000000;
  margin: 40px 0 6px; 
  font-family: 'DM Sans Bold';
  line-height: 31px;
`

export const BannerContent = styled.p`
  font-size: 14px;
  color: #000000;
  margin-bottom: 58px;
  font-family: 'DM Sans Regular';
  line-height: 21px;

  @media screen and (max-width: 1000px){
    font-size: 12px;
  }

  @media screen and (max-width: 850px){
    font-size: 11px;
    margin-bottom: 20px;
  }
`

export const Impact = styled.div`
  background: url('../static/images/impact-section.svg');
  background-size: cover;
  width: 100%;
  height: 646px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`

export const ImpactDescription = styled.div`
  max-width: 35%;
  transform: translate(-50%, 10%);

  @media screen and (max-width:1360px){
    max-width: 48%;
    transform: translate(-39%, 10%);
  }

  @media screen and (max-width: 1150px){
    transform: translate(-45%, 10%);
  }

  @media screen and (max-width: 1000px){
    max-width: 50%;
    transform: translate(-30%, 10%)
  }

  @media screen and (max-width: 850px){
    max-width: 52%;
    transform: translate(-30%, 10%)
  }

  @media screen and (max-width: 750px){
    max-width: 66%;
    transform: translate(-15%, 10%);
  }

  @media screen and (max-width: 600px){
    max-width: 66%;
    transform: translate(-15%, 10%);
  }

  @media screen and (max-width: 440px){
    max-width: 100%;
    transform: none;
    padding: 0 15px;
  }
`

export const ImpactTitle = styled.h1`
  font-size: 47px;
  color:#ffffff;
  margin-bottom: 20px;
  font-family: 'DM Sans Bold';
  line-height: 60px;

  @media screen and (max-width: 1000px){
    font-size: 35px;
  }

  @media screen and (max-width: 850px){
    font-size: 32px;
  }

  @media screen and (max-width: 600px){
    font-size: 28px;
  }
`

export const ImpactContent = styled.p`
  font-size: 21px;
  color: #ffffff;
  margin-bottom: 70px;
  font-family: 'DM Sans Regular';
  line-height: 31px;

  @media screen and (max-width: 1000px){
    font-size: 19px;
  }

  @media screen and (max-width: 850px){
    font-size: 17px;
  }
`

export const Network = styled.div`
  width: 100%;
  padding: 110px 0;
  margin-bottom: 16px;

  @media screen and (max-width: 1150px){
    padding: 70px 0;
  }

  @media screen and (max-width: 850px){
    padding: 35px 0;
  }
`

export const NetworkDescription = styled.div`
  max-width: 44%;
  margin: 0 auto;
  text-align: center;

  @media screen and (max-width:1800px){
    max-width: 54%;
  }

  @media screen and (max-width:1360px){
    max-width: 63%;
  }

  @media screen and (max-width: 1000px){
    max-width: 73%;
  }

  @media screen and (max-width: 850px){
    max-width: 75%;
  }
`

export const NetworkTitle = styled.h1`
  font-size: 45px;
  background: linear-gradient(90deg, rgba(67,195,251,1) 0%, rgba(167,56,250,1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 50px;
  font-family: 'DM Sans Bold';
  line-height: 60px;

  @media screen and (max-width: 1150px){
    font-size: 37px;
  }

  @media screen and (max-width: 1000px){
    font-size: 35px;
  }

  @media screen and (max-width: 850px){
    font-size: 32px;
  }

  @media screen and (max-width: 600px){
    font-size: 28px;
    line-height: 45px;
  }
`