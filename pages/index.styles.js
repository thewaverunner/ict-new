import styled, { css } from 'styled-components'

import { BREAKPOINTS } from '../utils/constants'

export const HomePageTopSectionWrapper = styled.div`
    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
       padding: 75px 0;
       position: relative;

       &:before,
       &:after {
           content: '';
           display: block;
           height: 4px;
           background-color: #1d1d1f;
           width: 729px;
           position: absolute;
       }

       &:before {
           left: 0;
           bottom: 17%;
       }

       &:after {
           right: 0;
           top: 17%;
           width: 575px;
       }
    }

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        padding: 175px 0 190px;
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
    font-family: "DM Sans Bold";
    font-size: 25px;
    line-height: 35px;
    text-align: left;

    margin-bottom: 15px;
    color: #1d1d20;

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        font-size: 54px;
        line-height: 65px;
        text-align: center;

        margin-bottom: 35px;
    }
`

export const HomePageTopSectionDescription = styled.p`
    font-family: "DM Sans Regular";
    font-size: 16px;
    line-height: 26px;
    text-align: left;

    color: #333;

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        font-size: 21px;
        line-height: 31.5px;
        text-align: center;
    }
`

export const HomePageBannersWrapper = styled.div``

export const HomePageBanner = styled.div`
    display: flex;
    flex-direction: column;
    
    position: relative;

    padding: 0 25px;
    margin-bottom: 50px;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
       flex-direction: ${props => props.imageReverse ? 'row-reverse' : 'row'};

       padding: 0;
       margin-bottom: 121px;
    }
`

export const HomePageBannerContentSection = styled.div`
    background-color: #fafafa;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
       width: 55.2%;
    }
`

export const HomePageBannerContentWrapper = styled.div`
    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        width: 100%;
        max-width: 1350px;
        
        margin: 0 auto;
        padding: 0 25px;

        display: flex;
        flex-direction: column;
        justify-content: center;

        align-items: ${props => props.imageReverse ? 'flex-end' : 'flex-start'};

        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
`

export const HomePageBannerContent = styled.div`
    padding: 25px 25px;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        max-width: 500px;
    }

    @media screen and (min-width: ${BREAKPOINTS.xl}px) {
        max-width: 590px;
        padding: 0;
    }
`

export const HomePageBannerImage = styled.div`
    order: -1;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        width: 45.8%;
        order: inherit;
    }
`

export const HomePageBannerContentTitle = styled.h2`
    font-family: "DM Sans Bold";
    font-size: 24px;
    line-height: 35px;

    margin-bottom: 20px;

    text-align: left;
    color: #1d1d1f;

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
        font-size: 37px;
        line-height: 20px;
    }

    @media screen and (min-width: ${BREAKPOINTS.xl}px) {
        font-size: 47px;
        line-height: 60px;
    }
`

export const HomePageBannerContentDescription = styled.p`
    font-family: "DM Sans Regular";
    font-size: 16px;
    line-height: 20px;
    text-align: left;

    margin-bottom: 30px;
    color: #1d1d1f;

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
        font-size: 17px;
        line-height: 27px;
    }

    @media screen and (min-width: ${BREAKPOINTS.xl}px) {
        font-size: 21px;
        line-height: 31.5px;

        margin-bottom: 45px;
    }
`

export const HomePageImpactSection = styled.div`
    width: 100%;
    min-height: 322px;

    position: relative;

    background: url("/static/images/home-impact-technology.svg") no-repeat;
    background-size: cover;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        min-height: 522px;
    }
`

export const HomePageImpactContentWrapper = styled.div`
    max-width: 90%;

    padding-top: 40px;
    margin: 0 auto;

    background-color: #ffffff;
    transform: translateY(-30%);

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        max-width: 793px;
        padding-top: 75px;

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
        max-width: 600px;
        margin: 0 auto;
    }
`

export const HomePageImpactContentTitle = styled.h2`
    font-family: "DM Sans Bold";
    font-size: 32px;
    line-height: 40px;

    margin-bottom: 15px;
    color: #000;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        font-size: 47px;
        line-height: 60px;

        margin-bottom: 30px;
    }
`

export const HomePageImpactContentDescription = styled.p`
    font-family: "DM Sans Regular";
    font-size: 17px;
    line-height: 27px;

    margin-bottom: 25px;
    color: #000;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        font-size: 21px;
        line-height: 31.5px;
    
        margin-bottom: 48px;
    }
`

export const HomePageNetworkSection = styled.div`
    background-color: #fafafa;
    padding: 50px 25px;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        padding: 124px 0;
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
        font-size: 47px;
        line-height: 60px;
    }
`

export const HomePageLatestNewsSection = styled.div``

export const HomePageLatestNewsWrapper = styled.div`
    padding: 50px 25px;

    @media screen and (min-width: ${BREAKPOINTS.xl}px) {
        max-width: 1350px;

        padding: 98px 0 104px;
        margin: 0 auto;
     }
`

export const HomePageLatestNewsTitle = styled.h2`
    font-family: "DM Sans Bold";
    font-size: 27px;
    line-height: 35px;
    text-align: left;
    
    padding-bottom: 10px;

    color: #000;

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
        font-size: 47px;
        line-height: 60px;
        padding-bottom: 16px;
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

// export const Header = styled.header`
//     @media screen and (max-width: ${BREAKPOINTS.sm}px){
//         padding-top: 0;
//     }
// `

// export const BannerSection = styled.div`
//     background-color: #fafafa;
//     padding: 73px 0;
//     margin-bottom: 16px;

//     @media screen and (max-width: ${BREAKPOINTS.sm}px) {
//         padding: 77px 25px 80px;
//     }  
// `

// export const BannerWrapper = styled.div`
//     max-width: 1170px;
//     margin: 0 auto;
//     display: flex;
//     justify-content: space-between;

//     @media screen and (max-width: ${BREAKPOINTS.lg}px) {
//         max-width: 950px;
//     }

//     @media screen and (max-width: ${BREAKPOINTS.md}px) {
//         max-width: 720px;
//         flex-wrap: wrap;
//     }
// `

// export const Banner = styled.div`
//     flex: 1 1 30%;

//     &:nth-child(2) {
//         margin: 0 35px;
//     }

//     @media screen and (max-width: ${BREAKPOINTS.md}px) {
//         flex: 0 1 45%;

//         &:nth-child(1) {
//             margin: 0 0 40px 0;
//         }
//     }

//     @media screen and (max-width: ${BREAKPOINTS.sm}px){
//         &:nth-child(1) {
//             margin: 0 25px 40px 0;
//         }

//         &:nth-child(2) {
//             margin: 0 0 40px 0;
//          }
//     } 

//     @media screen and (max-width: ${BREAKPOINTS.xs}px){
//         flex: 1 1 100%;

//         &:nth-child(1) {
//             margin: 0 0 40px 0;
//         }
//     } 
// `

// export const BannerImage = styled.div`
//     margin-bottom: 49px;

//     @media screen and (max-width: ${BREAKPOINTS.xs}px){
//         margin-bottom: 25px;
//     }
// `

// export const BannerDescription = styled.div`
//     flex: 1 1 30%;
// `

// export const BannerTitle = styled.h2`
//     font-size: 21px;
//     color: #000;
//     font-family: 'DM Sans Bold';
//     line-height: 31.5px;
//     margin-bottom: 7px;

//     @media screen and (max-width: ${BREAKPOINTS.xs}px){
//         margin-bottom: 15px;
//     }
// `

// export const BannerContent = styled.p`
//     font-size: 14px;
//     min-height: 120px;
//     color: #000;
//     font-family: "DM Sans Regular";
//     font-weight: normal;
//     line-height: 21px;
//     margin-bottom: 60px;

//     @media screen and (max-width: ${BREAKPOINTS.xs}px){
//         margin-bottom: 50px;
//         min-height: auto;
//     }
// `
