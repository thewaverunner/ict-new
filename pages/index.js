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
    const banners = [
        {
            image: '/static/images/home-continuous-innovation.svg',
            title: t('HomePage_FirstBanner_Title'),
            description: t('HomePage_FirstBanner_Content')
        },
        { 
            image: '/static/images/home-purely-digital.svg',
            title: t('HomePage_SecondBanner_Title'),
            description: t('HomePage_SecondBanner_Content')
        },
        { 
            image: '/static/images/home-global-reach.svg',
            title: t('HomePage_ThirdBanner_Title'),
            description: t('HomePage_ThirdBanner_Content')
        }
    ]

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
                reverse={true}
                imageUrl={'/static/images/home-marketing.svg'}
                title={t('HomePage_Marketing_Title')}
                description={t('HomePage_Marketing_Content')}
                buttonTitle={'Learn more'}
            />

            <BannerSection>
                <BannerWrapper>
                    {banners.map((banner, index) => (
                            <Banner key={index}>
                                <BannerImage>
                                    <img src={banner.image} />
                                </BannerImage>  
        
                                <BannerDescription>
                                    <BannerTitle>{banner.title}</BannerTitle>
                                    <BannerContent>{banner.description}</BannerContent>
                                </BannerDescription>
        
                                <BaseButton 
                                    blackStyle 
                                    hideBorder={true} 
                                    withArrow={true}
                                >
                                    Learn more
                                </BaseButton>        
                            </Banner>
                        ))
                    }
                </BannerWrapper>
            </BannerSection> 

            <BaseSectionWide
                mode={'full'}
                reverse={false}
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