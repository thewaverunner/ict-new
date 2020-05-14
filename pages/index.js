import React from 'react'

import { withTranslation } from '../i18n'

import BaseButton from '../components/BaseButton'

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
    Network,
    NetworkDescription,
    NetworkTitle
} from './index.styles'

function Homepage ({ t }) {
    return (
        <Home>
            <Marketing>
                <MarketingDescription>
                    <MarketingTitle>{t('HomePage_Marketing_Title')}</MarketingTitle>
                    <MarketingContent>{t('HomePage_Marketing_Content')}</MarketingContent>
                    
                    <BaseButton blackStyle>Learn more</BaseButton>
                </MarketingDescription>
            </Marketing>

            <BannerSection>
                <BannerWrapper>
                    <Banner>
                        <BannerImage>
                            <img src="/static/images/first-banner.png" />
                        </BannerImage>  

                        <BannerDescription>
                            <BannerTitle>{t('HomePage_FirstBanner_Title')}</BannerTitle>
                            <BannerContent>{t('HomePage_FirstBanner_Content')}</BannerContent>
                        </BannerDescription>

                        <BaseButton blackStyle hideBorder={true} >Learn more</BaseButton>        
                    </Banner>

                    <Banner>
                        <BannerImage>
                            <img src="/static/images/second-banner.png" />
                        </BannerImage>  

                        <BannerDescription>
                            <BannerTitle>{t('HomePage_SecondBanner_Title')}</BannerTitle>
                            <BannerContent>{t('HomePage_SecondBanner_Content')}</BannerContent>
                        </BannerDescription>

                        <BaseButton blackStyle hideBorder={true}> Learn more</BaseButton>      
                    </Banner>

                    <Banner>
                        <BannerImage>
                            <img src="/static/images/third-banner.png"/>
                        </BannerImage>

                        <BannerDescription>
                            <BannerTitle>{t('HomePage_ThirdBanner_Title')}</BannerTitle>
                            <BannerContent>{t('HomePage_ThirdBanner_Content')} </BannerContent>
                        </BannerDescription>

                        <BaseButton blackStyle hideBorder={true}>Learn more</BaseButton>      
                    </Banner>

                </BannerWrapper>
            </BannerSection> 

            <Impact>
                <ImpactDescription>
                    <ImpactTitle>{t('HomePage_Impact_Title')}</ImpactTitle>
                    <ImpactContent>{t('HomePage_Impact_Content')}</ImpactContent>

                    <BaseButton>Learn more</BaseButton>
                </ImpactDescription>
            </Impact>

            <Network>
                <NetworkDescription>
                    <NetworkTitle>{t('HomePage_Network_Content')}</NetworkTitle>
                
                    <BaseButton blackStyle>Learn more</BaseButton>
                </NetworkDescription>
            </Network>
        </Home>
    )
}


Homepage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(Homepage)