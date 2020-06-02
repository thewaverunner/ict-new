import React from 'react'

import Head from 'next/head'

import { withTranslation } from '../../../i18n'

import {
    ChallengesTopSection,
    ChallengesTopSectionTitle,
    ChallengesTopSectionDescription,
    ChallengesTopSectionImage,
    CompanyChallengesSection,
    CompanyChallengesContent,
    CompanyChallengesTitle,
    CompanyChallengesList,
    CompanyChallengesItem,
    CompanyChallengesItemNumber,
    CompanyChallengesItemDescription
} from './index.styles'

function ChallengesPage ({ t }) {
    const companyChallenges = [
        { description: t('ChallengesPage_ChallengesFirst_Description') },
        { description: t('ChallengesPage_ChallengesSecond_Description') },
        { description: t('ChallengesPage_ChallengesThird_Description') },
        { description: t('ChallengesPage_ChallengesFourth_Description') },
    ]

    return (
        <>
            <Head>
                <title>{t('ChallengesPage_Head_Title')}</title>
            </Head>

            <ChallengesTopSection>
                <ChallengesTopSectionImage>
                    <img src='/static/images/challenges-top-section-image.svg' />
                </ChallengesTopSectionImage>

                <ChallengesTopSectionTitle>{t('ChallengesPage_Title')}</ChallengesTopSectionTitle>
                <ChallengesTopSectionDescription>{t('ChallengesPage_Description')}</ChallengesTopSectionDescription>
            </ChallengesTopSection>

            <CompanyChallengesSection>
                <CompanyChallengesContent>
                    <CompanyChallengesTitle>{t('ChallengesPage_ChallengesSection_Title')}</CompanyChallengesTitle>

                    <CompanyChallengesList>
                        {companyChallenges.map((challenge, index) => (
                            <CompanyChallengesItem key={index}>
                                <CompanyChallengesItemNumber>{`0${index + 1}`}</CompanyChallengesItemNumber>
                                <CompanyChallengesItemDescription>{challenge.description}</CompanyChallengesItemDescription>
                            </CompanyChallengesItem>    
                        ))}
                    </CompanyChallengesList>    
                </CompanyChallengesContent>
            </CompanyChallengesSection>
        </>
    )
}

ChallengesPage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(ChallengesPage)