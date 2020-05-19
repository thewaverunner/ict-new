import React from 'react'

import Head from 'next/head'
import Link from 'next/link'

import { withTranslation } from '../../i18n'

import BaseSection from '../../components/BaseSection'
import BaseSectionHeading from '../../components/BaseSectionHeading'

import {
    OpenPositionsPageSection,
    OpenPositionsPageWrapper,
    OpenPositionsPageTitle,
    OpenPositionsPageList,
    OpenPositionsPageItem,
    OpenPositionsPageItemLink,
    OpenPositionsPageItemTitle,
    OpenPositionsPageItemContent,
} from './index.styles'

function OpenPositionsPage ({ t }) {
    return (
        <>
            <Head>
                <title>{t('OpenPositionsPage-Title')}</title>
            </Head>

            <BaseSectionHeading title={t('OpenPositionsPage-Heading')} />

            <OpenPositionsPageSection>
                <OpenPositionsPageWrapper>
                    <OpenPositionsPageTitle>{t('OpenPositionsPage-Title')}</OpenPositionsPageTitle>

                    <OpenPositionsPageList>
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => 
                            <OpenPositionsPageItem key={index}>
                                <Link href={`/open-positions/manager-${index}`}>
                                    <OpenPositionsPageItemLink>
                                        <OpenPositionsPageItemTitle>{t('OpenPositionsPage-Job-Title')} {index}</OpenPositionsPageItemTitle>
                                        <OpenPositionsPageItemContent>{t('OpenPositionsPage-Job-Description')}</OpenPositionsPageItemContent>
                                    </OpenPositionsPageItemLink>
                                </Link>
                            </OpenPositionsPageItem>
                        )}
                    </OpenPositionsPageList>
                </OpenPositionsPageWrapper>
            </OpenPositionsPageSection>    

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

OpenPositionsPage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(OpenPositionsPage)