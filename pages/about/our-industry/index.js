import React from 'react'

import Head from 'next/head'

import { withTranslation } from '../../../i18n'

import BaseSection from '../../../components/BaseSection'
import BaseSectionHeading from '../../../components/BaseSectionHeading'
import BaseSectionWide from '../../../components/BaseSectionWide'

import {} from './index.styles'

function OurIndustryPage ({ t }) {
    return (
        <>
            <Head>
                <title>{t('About-OurIndustry-Page-Title')}</title>
            </Head>

            <BaseSectionHeading 
                title={t('About-OurIndustry-Page-Title')}
                mainPage={false}
            />

            <BaseSection
                backgroundImage={'/static/images/about-top-banner.svg'}
                description={t('About-OurIndustry-TopBanner-Description')}
                textAlign={'center'}
                titleColor={'black'}
            />

            <BaseSectionWide
                mode={'half'}
                themeMode={'light'}
                reverse={true}
                imageFull={true}
                imageUrl={'/static/images/about-our-industry-direct-selling.svg'}
                title={t('About-OurIndustry-DirectSelling-Title')}
                subtitle={t('About-OurIndustry-DirectSelling-SubTitle')}
            />

            <BaseSectionWide
                mode={'shadow'}
                themeMode={'dark'}
                reverse={false}
                imageUrl={'/static/images/about-our-industry-multi-marketing.svg'}
                title={t('About-OurIndustry-MultiMarketing-Title')}
                subtitle={t('About-OurIndustry-MultiMarketing-SubTitle')}
            />

            <BaseSectionWide
                mode={'half'}
                themeMode={'light'}
                reverse={true}
                imageFull={false}
                imageUrl={'/static/images/about-our-industry-impact-technology.svg'}
                imageResized={true}
                title={t('About-OurIndustry-ImpactTechnology-Title')}
                subtitle={t('About-OurIndustry-ImpactTechnology-SubTitle')}
            />

            <BaseSection
                backgroundImage={'/static/images/about-our-industry-economy-banner.svg'}
                description={t('About-OurIndustry-EconomyBanner-Description')}
                textAlign={'center'}
            />

            <BaseSectionWide
                mode={'shadow'}
                themeMode={'light'}
                reverse={true}
                imageUrl={'/static/images/about-our-industry-opportunity.svg'}
                title={t('About-OurIndustry-Opportunity-Title')}
                subtitle={t('About-OurIndustry-Opportunity-SubTitle')}
            />

        </>
    )
}

OurIndustryPage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(OurIndustryPage)