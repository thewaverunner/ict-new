import styled from 'styled-components'

import { BREAKPOINTS } from '../../utils/constants'

export const Impact = styled.div`
  background: url(${props => props.backgroundImage});
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

export const  AboutBottomSection = styled.div`
  background-image: linear-gradient(${props => props.backgroundImageDirection === 'right' ? 'to right' : 'to left'}, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${props => props.backgroundImage});
  background-size: cover;
  height: 696px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`

export const  AboutBottomDescription = styled.div`
  max-width: 40%;
  transform: ${props => props.backgroundImageDirection === 'right' ? "translate(-50%, 10%);" : "translate(50%, 10%);"}

  @media screen and (max-width:1170px){
    max-width: 48%;
    transform: ${props => props.backgroundImageDirection === 'right' ? "translate(-39%, 10%);" : "translate(39%, 10%);"}
  }

  @media screen and (max-width:992px){
    max-width: 68%;
    transform: ${props => props.backgroundImageDirection === 'right' ? "translate(0%, 10%);" : "translate(0%, 10%);"}
  }

  @media screen and (max-width: 552px){
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

  @media screen and (max-width: 1170px){
    font-size: 35px;
    line-height: 55px;
  }

  @media screen and (max-width: 768px){
    font-size: 32px;
    line-height: 50px;
  }

  @media screen and (max-width: 552px){
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