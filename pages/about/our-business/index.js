import React from 'react'

import Head from 'next/head'

import { withTranslation } from '../../../i18n'

import BaseSection from '../../../components/BaseSection'
import BaseSectionHeading from '../../../components/BaseSectionHeading'
import BaseSectionWide from '../../../components/BaseSectionWide'

import {} from './index.styles'

function OurBusinessPage ({ t }) {
    return (
        <>
            <Head>
                <title>{t('OurBusinessPage_Head_Title')}</title>
            </Head>

            <BaseSectionHeading 
                title={t('OurBusinessPage_Title')}
                mainPage={false}
            />

            <BaseSection
                backgroundImage={'/static/images/about-top-banner.svg'}
                description={t('OurBusinessPage_TopBanner_Description')}
                textAlign={'center'}
                titleColor={'black'}
            />

            <BaseSectionWide
                mode={'shadow'}
                themeMode={'dark'}
                reverse={false}
                imageUrl={'/static/images/about-our-business-crowd.svg'}
                title={t('OurBusinessPage_CrowdBanner_Title')}
                subtitle={t('OurBusinessPage_CrowdBanner_SubTitle')}
            />

            <BaseSectionWide
                mode={'half'}
                themeMode={'light'}
                reverse={true}
                imageFull={true}
                imageUrl={'/static/images/about-our-business-network.svg'}
                title={t('OurBusinessPage_BusinessNetwork_Title')}
                subtitle={t('OurBusinessPage_BusinessNetwork_SubTitle')}
            />

            <BaseSectionWide
                mode={'shadow'}
                themeMode={'dark'}
                reverse={false}
                imageUrl={'/static/images/about-our-business-network-leaders.svg'}
                title={t('OurBusinessPage_NetworkLeaders_Title')}
                subtitle={t('OurBusinessPage_NetworkLeaders_SubTitle')}
            />

            <BaseSectionWide
                mode={'half'}
                themeMode={'light'}
                reverse={true}
                imageFull={true}
                imageUrl={'/static/images/about-our-business-milestones.svg'}
                title={t('OurBusinessPage_Milestones_Title')}
                subtitle={t('OurBusinessPage_Milestones_SubTitle')}
            />

            <BaseSection
                backgroundImage={'/static/images/open-positions-join-our-team.svg'}
                title={t('OpenPositionsJobPage_ParthershipSection_Title')}
                titleColor={'black'}
                description={t('OpenPositionsJobPage_ParthershipSection_Description')}
                buttonTitle={'Open Positions'}
                buttonStyle={'blackStyle'}
            />
        </>
    )
}

OurBusinessPage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(OurBusinessPage)