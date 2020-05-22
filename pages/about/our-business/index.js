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
                <title>{t('About-OurBusinessPage-Title')}</title>
            </Head>

            <BaseSectionHeading 
                title={t('About-OurBusinessPage-Title')}
                mainPage={false}
            />

            <BaseSection
                backgroundImage={'/static/images/about-top-banner.svg'}
                description={t('About-OurBusinessPage-TopBanner-Description')}
                textAlign={'center'}
                titleColor={'black'}
            />

            <BaseSectionWide
                mode={'shadow'}
                themeMode={'dark'}
                reverse={false}
                imageUrl={'/static/images/about-our-business-crowd.svg'}
                title={t('About-OurBusinessPage-CrowdBanner-Title')}
                subtitle={t('About-OurBusinessPage-CrowdBanner-SubTitle')}
            />

            <BaseSectionWide
                mode={'half'}
                themeMode={'light'}
                reverse={true}
                imageFull={true}
                imageUrl={'/static/images/about-our-business-network.svg'}
                title={t('About-OurBusinessPage-BusinessNetwork-Title')}
                subtitle={t('About-OurBusinessPage-BusinessNetwork-SubTitle')}
            />

            <BaseSectionWide
                mode={'shadow'}
                themeMode={'dark'}
                reverse={false}
                imageUrl={'/static/images/about-our-business-network-leaders.svg'}
                title={t('About-OurBusinessPage-NetworkLeaders-Title')}
                subtitle={t('About-OurBusinessPage-NetworkLeaders-SubTitle')}
            />

            <BaseSectionWide
                mode={'half'}
                themeMode={'light'}
                reverse={true}
                imageFull={true}
                imageUrl={'/static/images/about-our-business-milestones.svg'}
                title={t('About-OurBusinessPage-Milestones-Title')}
                subtitle={t('About-OurBusinessPage-Milestones-SubTitle')}
            />

            <BaseSection
                backgroundImage={'/static/images/open-positions-join-our-team.svg'}
                title={t('OpenPositionsPage-JoinUs-Banner-Title')}
                titleColor={'black'}
                description={t('OpenPositionsPage-JoinUs-Banner-Description')}
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