import styled, { css } from 'styled-components'

export const AboutWrapper = styled.div`
  background: url('../../static/images/about-top-banner.svg') no-repeat;
  background-size: cover;
  margin-bottom: 16px;
  height: 435px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const TopBanner = styled.div`
  width: 1800px;

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

export const TopBannerDescription = styled.div`
  max-width: 44%;

  @media screen and (max-width: 440px){
    max-width: 100%;
    margin: 0 25px;
  }
`

export const TopBannerTitle = styled.h1`
  color: #000000;
  font-size: 47px;
  font-family: "DM Sans Bold";
  line-height: 60px;
  margin-bottom:15px;

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

export const TopBannerContent = styled.p`
  color: #727274;
  font-size: 21px;
  font-family: "DM Sans Regular";
  line-height: 31px;

  @media screen and (max-width: 1000px){
    font-size: 19px;
  }

  @media screen and (max-width: 850px){
    font-size: 17px;
  }
`

export const ImpactSection = styled.div`
  display: flex;
  margin-bottom: 16px;

  @media screen and (max-width: 1000px){
    flex-wrap: wrap;
  }
`

export const ImpactSectionImage = styled.div`
  width: 50%;

  @media screen and (max-width: 775px){
    width: 100%;
  }
`

export const ImpactSectionDescription = styled.div`
  background-color: #000000;
  width: 50%; 
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media screen and (max-width: 775px){
    width: 100%;
    padding: 20px;
  }
`

export const ImpactSectionWrapper = styled.div`
  max-width: 60%;
  margin-left: 100px;

  @media screen and (max-width: 1200px){
    max-width: 100%;
    margin: 0 25px;
  }
`

export const ImpactSectionTitle = styled.h1`
  color: #ffffff;
  font-size: 47px;
  font-family: "DM Sans Bold";
  line-height: 60px;
  margin-bottom: 15px;

  @media screen and (max-width: 1200px){
    font-size: 38px;
    line-height: 55px;
  }

  @media screen and (max-width: 1000px){
    font-size: 35px;
    line-height: 50px;
  }

  @media screen and (max-width: 870px){
    font-size: 32px;
    line-height: 35px;
  }

  @media screen and (max-width: 600px){
    font-size: 28px;
    line-height: 30px;
  }
`

export const ImpactSectionContent = styled.p`
  color: #ffffff;
  font-size: 21px;
  font-family: "DM Sans Regular";
  line-height: 31px;

  @media screen and (max-width: 1000px){
    font-size: 19px;
  }

  @media screen and (max-width: 850px){
    font-size: 17px;
  }
`

export const SocialImpactSection = styled.div`
  background: url('../../static/images/about-social-impact.svg') no-repeat;
  background-size: cover;
  height: 435px;
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
`

export const SocialImpactDescription = styled.div`
  max-width: 43%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 1200px){
    max-width: 80%;
  }
`

export const SocialImpactTitle = styled.h1`
  color: #ffffff;
  font-size: 47px;
  font-family: "DM Sans Bold";
  line-height: 60px;
  margin-bottom: 15px;

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

export const SocialImpactContent = styled.p`
  color: #ffffff;
  font-size: 21px;
  font-family: "DM Sans Regular";
  line-height: 31px;
  margin-bottom: 60px;

  @media screen and (max-width: 1000px){
    font-size: 19px;
  }

  @media screen and (max-width: 850px){
    font-size: 17px;
  }
`

export const InfoBannerSection = styled.div`
  background-color: #fafafa;
  padding: 50px 0 100px;
  margin-bottom: 16px;
`

export const InfoBannerWrapper = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1170px) {
    max-width: 950px;
  }

  @media screen and (max-width:992px) {
      max-width: 720px;
  }

  @media screen and (max-width: 768px) {
      max-width: 520px;
      flex-wrap: wrap;
  }  
`

export const InfoBanner = styled.div`
  padding-right: 35px;
  &:last-child {
    padding-right: 0;
  }

  @media screen and (max-width: 850px){
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
    padding: 0 10px;
    width: 100%;
  }
`

export const  InfoBannerDescription = styled.div`
  padding-right: 35px;
`

export const  InfoBannerTitle = styled.h2`
  font-size: 21px;
  color: #000000;
  margin: 45px 0 25px;
  font-family: 'DM Sans Bold';
  line-height: 31px;
`

export const  InfoBannerContent = styled.p`
  font-size: 14px;
  color: #000000;
  margin-bottom: 58px;
  font-family: 'DM Sans Regular';
  line-height: 21px;

  @media screen and (max-width: 850px){
    margin-bottom: 20px;
  }
`

export const  LegalEnvironmentSection = styled.div`
  background: url('../../static/images/about-legal-banner.svg') no-repeat;
  background-size: cover;
  height: 435px;
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
`

export const  LegalEnvironmentDescription = styled.div`
  max-width: 43%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 1200px){
    max-width: 80%;
  }
`

export const  LegalEnvironmentTitle = styled.h1`
  color: #ffffff;
  font-size: 47px;
  font-family: "DM Sans Bold";
  line-height: 60px;
  margin-bottom: 15px;

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

export const  LegalEnvironmentContent = styled.p`
  color: #ffffff;
  font-size: 21px;
  font-family: "DM Sans Regular";
  line-height: 31px;
  margin-bottom: 60px;

  @media screen and (max-width: 1000px){
    font-size: 19px;
  }

  @media screen and (max-width: 850px){
    font-size: 17px;
  }
`

export const  QuestionsBannerSection = styled.div`
  background-color: #fafafa;
  padding: 80px 0 30px;
  margin-bottom: 16px;
`

export const  QuestionsBannerWrapper = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1170px) {
    max-width: 950px;
  }

  @media screen and (max-width:992px) {
      max-width: 720px;
  }

  @media screen and (max-width: 768px) {
      max-width: 520px;
      flex-wrap: wrap;
  }  
`

export const  QuestionsBanner = styled.div`
  padding-right: 35px;

  &:last-child {
    padding-right: 0;
  }

  @media screen and (max-width: 768px){
    margin: 0 20px;
    width: 100%;
  }
`

export const  QuestionsBannerImage = styled.div`
  img {
    width: auto;
  }
`

export const  QuestionsBannerDescription = styled.div`
  padding-right: 35px;
`

export const  QuestionsBannerTitle = styled.h2`
  font-size: 21px;
  color: #000000;
  margin: 20px 0 10px; 
  font-family: 'DM Sans Bold';
  line-height: 31px;
`

export const  QuestionsBannerContent = styled.p`
  font-size: 14px;
  color: #000000;
  margin-bottom: 58px;
  font-family: 'DM Sans Regular';
  line-height: 21px;
`

export const  AboutBottomSection = styled.div`
  background-color: #fffff;
  background: url('../../static/images/about-bottom-banner.svg') no-repeat;
  background-size: cover;
  height: 696px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`

export const  AboutBottomDescription = styled.div`
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
    transform: translate(-15%, 0);
  }

  @media screen and (max-width: 600px){
    max-width: 66%;
    transform: translate(-15%, 0);
  }

  @media screen and (max-width: 440px){
    max-width: 100%;
    transform: none;
    padding: 0 10px;
  }
`

export const  AboutBottomTitle = styled.h1`
  font-size: 47px;
  color: #ffffff;
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

export const  AboutBottomContent = styled.p`
  font-size: 21px;
  color: #ffffff;
  margin-bottom: 70px;
  font-family: 'DM Sans Regular';
  line-height: 31px;

  @media screen and (max-width: 1000px){
    font-size: 19px;
  }
`