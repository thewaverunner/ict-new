import styled from 'styled-components'

import { BREAKPOINTS, FONTS, COLORS } from '../../utils/constants'

// export const HomePageBanner = styled.div`
//     display: flex;
//     flex-direction: column;
    
//     position: relative;

//     padding: 0 25px;
//     margin-bottom: 50px;

//     @media screen and (min-width: ${BREAKPOINTS.md}px) {
//        flex-direction: ${props => props.imageReverse ? 'row-reverse' : 'row'};
       
//        padding: 0;
//        margin-bottom: 121px;
//     }
// `

// export const HomePageBannerContentSection = styled.div`
//     background-color: #fafafa;

//     @media screen and (min-width: ${BREAKPOINTS.md}px) {
//        width: 55.2%;
//     }
// `

// export const HomePageBannerContentWrapper = styled.div`
//     @media screen and (min-width: ${BREAKPOINTS.md}px) {
//         width: 100%;
//         max-width: 1350px;
        
//         margin: 0 auto;
//         padding: 0 25px;

//         display: flex;
//         flex-direction: column;
//         justify-content: center;

//         align-items: ${props => props.imageReverse ? 'flex-end' : 'flex-start'};

//         position: absolute;
//         left: 0;
//         right: 0;
//         top: 0;
//         bottom: 0;
//     }
// `

// export const HomePageBannerContent = styled.div`
//     padding: 25px 25px;

//     @media screen and (min-width: ${BREAKPOINTS.md}px) {
//         max-width: 500px;
//     }

//     @media screen and (min-width: ${BREAKPOINTS.xl}px) {
//         max-width: 590px;
//         padding: 0;
//     }
// `

// export const HomePageBannerImage = styled.div`
//     order: -1;

//     @media screen and (min-width: ${BREAKPOINTS.md}px) {
//         width: 45.8%;
//         order: inherit;
//     }
// `

// export const HomePageBannerContentTitle = styled.h2`
//     font-family: "DM Sans Bold";
//     font-size: ${FONTS.h3}px;
//     line-height: 35px;

//     margin-bottom: 20px;

//     text-align: left;
//     color: #1d1d1f;

//     @media screen and (min-width: ${BREAKPOINTS.lg}px) {
//         font-size: 37px;
//         line-height: 20px;
//     }

//     @media screen and (min-width: ${BREAKPOINTS.xl}px) {
//         font-size: ${FONTS.h2}px;
//         line-height: 44px;
//     }
// `

// export const HomePageBannerContentDescription = styled.p`
//     font-family: "DM Sans Regular";
//     font-size: 16px;
//     line-height: 20px;
//     text-align: left;

//     margin-bottom: 30px;
//     color: #1d1d1f;

//     @media screen and (min-width: ${BREAKPOINTS.lg}px) {
//         font-size: 17px;
//         line-height: 27px;
//     }

//     @media screen and (min-width: ${BREAKPOINTS.xl}px) {
//         font-size: ${FONTS.h3}px;
//         line-height: 31.5px;

//         margin-bottom: 45px;
//     }
// `

export const HomePageBanner = styled.div`
    display: flex;
    flex-direction: column;
    
    position: relative;
    margin-bottom: 30px;

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
       flex-direction: ${props => props.imageReverse ? 'row-reverse' : 'row'};
       max-width: 1200px;

       margin: 0 auto;
       margin-bottom: 60px;
    }
`

export const HomePageBannerContentSection = styled.div`
    background-color: ${COLORS.lighten};

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        align-items: ${props => props.imageReverse ? 'flex-end' : 'flex-start'};
    }
`

export const HomePageBannerContentWrapper = styled.div``

export const HomePageBannerContent = styled.div`
    padding: 25px;

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
        padding: 50px;
    }
`

export const HomePageBannerImage = styled.div`
    order: -1;

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        width: 50%;
        order: inherit;
    }
`

export const HomePageBannerContentTitle = styled.h2`
    font-family: "DM Sans Bold";
    font-size: ${FONTS.h3}px;
    line-height: 25px;

    margin-bottom: 16px;

    text-align: left;
    color: ${COLORS.dark};

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        font-size: ${FONTS.h2}px;
    }
`

export const HomePageBannerContentDescription = styled.p`
    font-family: "DM Sans Regular";
    font-size: 16px;
    line-height: 20px;
    text-align: left;

    color: ${COLORS.dark};

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        font-size: ${FONTS.h3}px;
        line-height: 24px;
    }
`