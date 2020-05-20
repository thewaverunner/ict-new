import React from 'react'

import Head from 'next/head'

import { withTranslation } from '../i18n'

import BaseButton from '../components/BaseButton'
import BaseSection from '../components/BaseSection'
import BaseSectionHeading from '../components/BaseSectionHeading'
import BaseSectionWide from '../components/BaseSectionWide'

import {
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
        <>
            <Head>
                <title>Home page</title>
            </Head>

            <BaseSectionHeading 
                title={t('BaseHeader_Title')} 
                description={t('BaseHeader_Description')}
                mainPage={true}
            />

            <BaseSectionWide
                mode={'full'}
                themeMode={'light'}
                contentWidth={'50%'}
                reverse={true}
                imageUrl={'/static/images/home-marketing.svg'}
                title={t('HomePage_Marketing_Title')}
                description={t('HomePage_Marketing_Content')}
                buttonTitle={'Learn more'}
            />

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

                        <BaseButton 
                            blackStyle 
                            hideBorder={true} 
                            withArrow={true}
                        >
                            Learn more
                        </BaseButton>        
                    </Banner>

                    <Banner>
                        <BannerImage>
                            <img src="/static/images/home-purely-digital.svg"/>
                        </BannerImage>  

                        <BannerDescription>
                            <BannerTitle>{t('HomePage_SecondBanner_Title')}</BannerTitle>
                            <BannerContent>{t('HomePage_SecondBanner_Content')}</BannerContent>
                        </BannerDescription>

                        <BaseButton 
                            blackStyle 
                            hideBorder={true} 
                            withArrow={true}
                        > 
                            Learn more
                        </BaseButton>      
                    </Banner>

                    <Banner>
                        <BannerImage>
                            <img src="/static/images/home-global-reach.svg"/>
                        </BannerImage>

                        <BannerDescription>
                            <BannerTitle>{t('HomePage_ThirdBanner_Title')}</BannerTitle>
                            <BannerContent>{t('HomePage_ThirdBanner_Content')} </BannerContent>
                        </BannerDescription>

                        <BaseButton 
                            blackStyle
                            hideBorder={true} 
                            withArrow={true}
                        >
                            Learn more
                        </BaseButton>      
                    </Banner>

                </BannerWrapper>
            </BannerSection> 

            <BaseSectionWide
                mode={'full'}
                reverse={false}
                contentWidth={'65%'}
                imageUrl={'/static/images/home-impact-technology.svg'}
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
        </>
    )
}


HomePage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(HomePage)