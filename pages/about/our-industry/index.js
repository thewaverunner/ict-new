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
                <title>{t('OurIndustryPage-Head-Title')}</title>
            </Head>

            <BaseSectionHeading 
                title={t('OurIndustryPage-Title')}
                mainPage={false}
            />

            <BaseSection
                backgroundImage={'/static/images/about-top-banner.svg'}
                description={t('OurIndustryPage-TopBanner-Description')}
                textAlign={'center'}
                titleColor={'black'}
            />

            <BaseSectionWide
                mode={'half'}
                themeMode={'light'}
                reverse={true}
                imageFull={true}
                imageUrl={'/static/images/about-our-industry-direct-selling.svg'}
                title={t('OurIndustryPage-DirectSelling-Title')}
                subtitle={t('OurIndustryPage-DirectSelling-SubTitle')}
            />

            <BaseSectionWide
                mode={'shadow'}
                themeMode={'dark'}
                reverse={false}
                imageUrl={'/static/images/about-our-industry-multi-marketing.svg'}
                title={t('OurIndustryPage-MultiMarketing-Title')}
                subtitle={t('OurIndustryPage-MultiMarketing-SubTitle')}
            />

            <BaseSectionWide
                mode={'half'}
                themeMode={'light'}
                reverse={true}
                imageFull={false}
                imageUrl={'/static/images/about-our-industry-impact-technology.svg'}
                imageResized={true}
                title={t('OurIndustryPage-ImpactTechnology-Title')}
                subtitle={t('OurIndustryPage-ImpactTechnology-SubTitle')}
            />

            <BaseSection
                backgroundImage={'/static/images/about-our-industry-economy-banner.svg'}
                description={t('OurIndustryPage-EconomyBanner-Description')}
                textAlign={'center'}
            />

            <BaseSectionWide
                mode={'shadow'}
                themeMode={'light'}
                reverse={true}
                imageUrl={'/static/images/about-our-industry-opportunity.svg'}
                title={t('OurIndustryPage-Opportunity-Title')}
                subtitle={t('OurIndustryPage-Opportunity-SubTitle')}
            />

        </>
    )
}

OurIndustryPage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(OurIndustryPage)