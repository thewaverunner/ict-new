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
                <title>{t('OurIndustryPage_Head_Title')}</title>
            </Head>

            <BaseSectionHeading 
                title={t('OurIndustryPage_Title')}
                mainPage={false}
            />

            <BaseSection
                backgroundImage={'/static/images/about-top-banner.svg'}
                description={t('OurIndustryPage_TopBanner_Description')}
                textAlign={'center'}
                titleColor={'black'}
            />

            <BaseSectionWide
                mode={'half'}
                themeMode={'light'}
                reverse={true}
                imageFull={true}
                imageUrl={'/static/images/about-our-industry-direct-selling.svg'}
                title={t('OurIndustryPage_DirectSelling_Title')}
                subtitle={t('OurIndustryPage_DirectSelling_SubTitle')}
            />

            <BaseSectionWide
                mode={'shadow'}
                themeMode={'dark'}
                reverse={false}
                imageUrl={'/static/images/about-our-industry-multi-marketing.svg'}
                title={t('OurIndustryPage_MultiMarketing_Title')}
                subtitle={t('OurIndustryPage_MultiMarketing_SubTitle')}
            />

            <BaseSectionWide
                mode={'half'}
                themeMode={'light'}
                reverse={true}
                imageFull={false}
                imageUrl={'/static/images/about-our-industry-impact-technology.svg'}
                imageResized={true}
                title={t('OurIndustryPage_ImpactTechnology_Title')}
                subtitle={t('OurIndustryPage_ImpactTechnology_SubTitle')}
            />

            <BaseSection
                backgroundImage={'/static/images/about-our-industry-economy-banner.svg'}
                description={t('OurIndustryPage_EconomyBanner_Description')}
                textAlign={'center'}
            />

            <BaseSectionWide
                mode={'shadow'}
                themeMode={'light'}
                reverse={true}
                imageUrl={'/static/images/about-our-industry-opportunity.svg'}
                title={t('OurIndustryPage_Opportunity_Title')}
                subtitle={t('OurIndustryPage_Opportunity_SubTitle')}
            />
        </>
    )
}

OurIndustryPage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(OurIndustryPage)