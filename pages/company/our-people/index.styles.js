import styled from 'styled-components'

import { 
    BREAKPOINTS, 
    FONTS, 
    COLORS, 
    MAX_WIDTH_CONTAINER 
} from '../../../utils/constants'

export const OurPeopleTopSection = styled.section`       
    padding: 38px 25px 60px;

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        text-align: center;
        max-width: 700px;
        margin: 0 auto;
        padding: 38px 0 60px;
    }

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        padding: 117px 0;
        max-width: 810px;
    }
`

export const OurPeopleTopSectionTitle = styled.h2`       
    font-family: 'DM Sans Bold';
    font-size: 30px;
    line-height: 34px;
    margin-bottom: 20px;

    color: ${COLORS.dark};

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        text-align: center;
    }

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        line-height: 44px;

        font-size: ${FONTS.h1}px;
    }
`

export const OurPeopleTopSectionDescription = styled.p`       
    font-family: 'DM Sans Regular';
    line-height: 21px;
    
    color: ${COLORS.darken};
    font-size: ${FONTS.p}px;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        line-height: 24px;
    
        font-size: ${FONTS.h3}px;
    }
`

export const OurPeoplePageManagementSectionWrapper = styled.div`       
    background: #fafafa;
`

export const OurPeoplePageManagementSection = styled.div`       
    padding: 50px 25px;
    margin: 0 auto;

    @media screen and (min-width: ${BREAKPOINTS.lg}px ) {
        padding: 105px 25px 85px;
    }

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
        max-width: ${MAX_WIDTH_CONTAINER}px;
    }
`

export const OurPeoplePageManagementTitle = styled.h2`       
    font-family: 'DM Sans Bold';
    font-size: 30px;
    line-height: 35px;
    margin-bottom: 30px;
    
    color: ${COLORS.darken};

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        font-size: 34px;
        line-height: 44px;
    }
`

export const OurPeoplePageManagementList = styled.div`       
    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-bottom: 50px;
    }

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        margin-bottom: 65px;
    }
`

export const CorporateGovernancePartnershipsSection = styled.section`
    position: relative;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        display: flex;
        flex-direction: row-reverse;
    }
`

export const CorporateGovernancePartnershipsImage = styled.div`
    background: ${props => props.backgroundStyle === 'white' ? '#fafafa' : COLORS.white};

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        padding: 40px 0;
        width: 45%;
        overflow: hidden;

        img {
            width: 100%;
        }
    }
`

export const CorporateGovernancePartnershipsContent = styled.div`
    transform: translateY(-25%);
    padding: 38px 25px 47px;
    margin: 0 25px -20px;

    background: ${props => props.backgroundStyle === 'white' ? COLORS.white : '#fafafa'};

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        transform: none;
        margin: 0;
        padding: 0;
        width: 55%;
    }
`

export const CorporateGovernancePartnershipsContentWrapper = styled.div`
    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        width: 100%;
        margin: 0 auto;
        padding-left: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;

        max-width: ${MAX_WIDTH_CONTAINER}px;
    }
`

export const CorporateGovernancePartnershipsDescriptionWrapper = styled.div`
    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        max-width: 530px;
        width: 100%;
    }

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
        max-width: 638px;
    }
`

export const CorporateGovernancePartnershipsTitle = styled.h2`
    font-family: 'DM Sans Bold';
    font-size: 30px;
    line-height: 34px;
    margin-bottom: 22px;

    color: ${COLORS.dark};

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        transform: none;
        line-height: 44px;

        font-size: ${FONTS.h1}px;
    }
`

export const CorporateGovernancePartnershipsDescription = styled.p`
    font-family: 'DM Sans Regular';
    line-height: 21px;
    margin-bottom: 31px;

    color: ${COLORS.darken};
    font-size: ${FONTS.p}px;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        line-height: 31.5px;
        
        font-size: ${FONTS.h3}px;
    }
`