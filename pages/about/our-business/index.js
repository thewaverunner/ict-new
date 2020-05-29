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
                <title>{t('OurBusinessPage-Head-Title')}</title>
            </Head>

            <BaseSectionHeading 
                title={t('OurBusinessPage-Title')}
                mainPage={false}
            />

            <BaseSection
                backgroundImage={'/static/images/about-top-banner.svg'}
                description={t('OurBusinessPage-TopBanner-Description')}
                textAlign={'center'}
                titleColor={'black'}
            />

            <BaseSectionWide
                mode={'shadow'}
                themeMode={'dark'}
                reverse={false}
                imageUrl={'/static/images/about-our-business-crowd.svg'}
                title={t('OurBusinessPage-CrowdBanner-Title')}
                subtitle={t('OurBusinessPage-CrowdBanner-SubTitle')}
            />

            <BaseSectionWide
                mode={'half'}
                themeMode={'light'}
                reverse={true}
                imageFull={true}
                imageUrl={'/static/images/about-our-business-network.svg'}
                title={t('OurBusinessPage-BusinessNetwork-Title')}
                subtitle={t('OurBusinessPage-BusinessNetwork-SubTitle')}
            />

            <BaseSectionWide
                mode={'shadow'}
                themeMode={'dark'}
                reverse={false}
                imageUrl={'/static/images/about-our-business-network-leaders.svg'}
                title={t('OurBusinessPage-NetworkLeaders-Title')}
                subtitle={t('OurBusinessPage-NetworkLeaders-SubTitle')}
            />

            <BaseSectionWide
                mode={'half'}
                themeMode={'light'}
                reverse={true}
                imageFull={true}
                imageUrl={'/static/images/about-our-business-milestones.svg'}
                title={t('OurBusinessPage-Milestones-Title')}
                subtitle={t('OurBusinessPage-Milestones-SubTitle')}
            />

            <BaseSection
                backgroundImage={'/static/images/open-positions-join-our-team.svg'}
                title={t('OpenPositionsJobPage-ParthershipSection-Title')}
                titleColor={'black'}
                description={t('OpenPositionsJobPage-ParthershipSection-Description')}
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