import React from 'react'

import Head from 'next/head'

import { withTranslation } from '../i18n'

import BaseButton from '../components/BaseButton'
import BaseSection from '../components/BaseSection'
import BaseSectionHeading from '../components/BaseSectionHeading'
import BaseSectionWide from '../components/BaseSectionWide'

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
    BannerContent
} from './index.styles'

function HomePage ({ t }) {
    return (
        <Home>
            <Head>
                <title>Home page</title>
            </Head>

            <BaseSectionHeading 
                title={t('BaseHeader_Title')} 
                description={t('BaseHeader_Description')}
                mainPage={true}
            />
       
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
                            <img src="/static/images/home-continuous-innovation.svg"/>
                        </BannerImage>  

                        <BannerDescription>
                            <BannerTitle>{t('HomePage_FirstBanner_Title')}</BannerTitle>
                            <BannerContent>{t('HomePage_FirstBanner_Content')}</BannerContent>
                        </BannerDescription>

                        <BaseButton blackStyle hideBorder={true} >Learn more <span /></BaseButton>        
                    </Banner>

                    <Banner>
                        <BannerImage>
                            <img src="/static/images/home-purely-digital.svg"/>
                        </BannerImage>  

                        <BannerDescription>
                            <BannerTitle>{t('HomePage_SecondBanner_Title')}</BannerTitle>
                            <BannerContent>{t('HomePage_SecondBanner_Content')}</BannerContent>
                        </BannerDescription>

                        <BaseButton blackStyle hideBorder={true}> Learn more <span /></BaseButton>      
                    </Banner>

                    <Banner>
                        <BannerImage>
                            <img src="/static/images/home-global-reach.svg"/>
                        </BannerImage>

                        <BannerDescription>
                            <BannerTitle>{t('HomePage_ThirdBanner_Title')}</BannerTitle>
                            <BannerContent>{t('HomePage_ThirdBanner_Content')} </BannerContent>
                        </BannerDescription>

                        <BaseButton blackStyle hideBorder={true}>Learn more <span /></BaseButton>      
                    </Banner>

                </BannerWrapper>
            </BannerSection> 

            <BaseSectionWide
                backgroundImage={'/static/images/home-impact-technology.svg'}
                backgroundImageMode={'full'}
                title={t('HomePage_Impact_Title')}
                description={t('HomePage_Impact_Content')}
                buttonTitle={'Learn more'}
            />

            <BaseSection
                title={t('HomePage_Network_Content')}
                titleColor={'gradient'}
                textAlign={'center'}
                buttonTitle={'Learn more'}
                buttonStyle={'blackStyle'}
            />
        </Home>
    )
}


HomePage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(HomePage)