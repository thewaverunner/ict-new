import React from 'react'

import { withTranslation } from '../i18n'

import BaseButton from '../components/BaseButton'
import BaseSection from '../components/BaseSection'

import {
    Home,
    Marketing,
    MarketingDescription,
    MarketingTitle,
    MarketingContent,
    BannerSection,
    BannerWrapper,
    BannerImage,
    BannerDescription,
    Banner,
    BannerTitle,
    BannerContent,
    Impact,
    ImpactDescription,
    ImpactTitle,
    ImpactContent,
    HeaderWrapper,
    HeaderTitle,
    HeaderDescription,
    HeaderContainer,
    HeaderDescriptionWrapper
} from './index.styles'

function HomePage ({ t }) {
    return (
        <Home>
            <HeaderContainer>
                <HeaderWrapper>
                    <HeaderDescriptionWrapper>
                        <HeaderTitle>{t('BaseHeader_Title')}</HeaderTitle>
                        <HeaderDescription>{t('BaseHeader_Description')}</HeaderDescription>

                        <BaseButton>Learn more <span /></BaseButton>
                    </HeaderDescriptionWrapper>
                </HeaderWrapper>
            </HeaderContainer>    

            <Marketing>
                <MarketingDescription>
                    <MarketingTitle>{t('HomePage_Marketing_Title')}</MarketingTitle>
                    <MarketingContent>{t('HomePage_Marketing_Content')}</MarketingContent>
                    
                    <BaseButton blackStyle>Learn more <span /></BaseButton>
                </MarketingDescription>
            </Marketing>

            <BannerSection>
                <BannerWrapper>
                    <Banner>
                        <BannerImage>
                            <img src="/static/images/first-banner.svg"/>
                        </BannerImage>  

                        <BannerDescription>
                            <BannerTitle>{t('HomePage_FirstBanner_Title')}</BannerTitle>
                            <BannerContent>{t('HomePage_FirstBanner_Content')}</BannerContent>
                        </BannerDescription>

                        <BaseButton blackStyle hideBorder={true} >Learn more <span /></BaseButton>        
                    </Banner>

                    <Banner>
                        <BannerImage>
                            <img src="/static/images/second-banner.svg"/>
                        </BannerImage>  

                        <BannerDescription>
                            <BannerTitle>{t('HomePage_SecondBanner_Title')}</BannerTitle>
                            <BannerContent>{t('HomePage_SecondBanner_Content')}</BannerContent>
                        </BannerDescription>

                        <BaseButton blackStyle hideBorder={true}> Learn more <span /></BaseButton>      
                    </Banner>

                    <Banner>
                        <BannerImage>
                            <img src="/static/images/third-banner.svg"/>
                        </BannerImage>

                        <BannerDescription>
                            <BannerTitle>{t('HomePage_ThirdBanner_Title')}</BannerTitle>
                            <BannerContent>{t('HomePage_ThirdBanner_Content')} </BannerContent>
                        </BannerDescription>

                        <BaseButton blackStyle hideBorder={true}>Learn more <span /></BaseButton>      
                    </Banner>

                </BannerWrapper>
            </BannerSection> 

            <Impact>
                <ImpactDescription>
                    <ImpactTitle>{t('HomePage_Impact_Title')}</ImpactTitle>
                    <ImpactContent>{t('HomePage_Impact_Content')}</ImpactContent>

                    <BaseButton>Learn more <span /></BaseButton>
                </ImpactDescription>
            </Impact>

            <BaseSection
                title={t('HomePage_Network_Content')}
                titleColor={'gradient'}
                buttonTitle={'Learn more'}
                buttonStyle={'blackStyle'}
            ></BaseSection>
        </Home>
    )
}


HomePage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(HomePage)