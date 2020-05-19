import React from 'react'

import Head from 'next/head'

import { withTranslation } from '../../../i18n'

import BaseButton from '../../../components/BaseButton'
import BaseSection from '../../../components/BaseSection'
import BaseSectionHeading from '../../../components/BaseSectionHeading'

import {
    OpenPositionPageSection,
    OpenPositionPageTitle,
    OpenPositionPageDescription
} from './index.styles'

function OpenPositionJobPage ({ t }) {
    return (
        <>
            <Head>
                <title>{t('OpenPositionsJobPage-Title')}</title>
            </Head>
    
            <BaseSectionHeading title={t('OpenPositionsPage-Heading')}/>

            <BaseSection
                backgroundImage={'/static/images/open-positions-job-title.svg'}
                title={t('OpenPositionsJobPage-Marketing-Banner-Title')}
                titleColor={'black'}
                subtitle={t('OpenPositionsJobPage-Marketing-Banner-Subtitle')}
            />

            <OpenPositionPageSection>
                <OpenPositionPageTitle>{t('OpenPositionsJobPage-Job-Title')}</OpenPositionPageTitle>
                <OpenPositionPageDescription>{t('OpenPositionsJobPage-Job-Description')}</OpenPositionPageDescription>

                <BaseButton blackStyle>Apply now</BaseButton>
            </OpenPositionPageSection>

            <BaseSection
                backgroundImage={'/static/images/open-positions-join-our-team.svg'}
                title={t('OpenPositionsPage-JoinUs-Banner-Title')}
                titleColor={'black'}
                description={t('OpenPositionsPage-JoinUs-Banner-Description')}
                buttonTitle={'Contact Us'}
                buttonStyle={'blackStyle'}
            />
        </>
    )
}

OpenPositionJobPage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(OpenPositionJobPage)