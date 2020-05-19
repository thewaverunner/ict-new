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
                <title>Our open positions</title>
            </Head>

            <BaseSectionHeading title={'Work with us'} />

            <OpenPositionsPageSection>
                <OpenPositionsPageWrapper>
                    <OpenPositionsPageTitle>Our open positions</OpenPositionsPageTitle>

                    <OpenPositionsPageList>
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => 
                            <OpenPositionsPageItem key={index}>
                                <Link href={`/open-positions/manager-${index}`}>
                                    <OpenPositionsPageItemLink>
                                        <OpenPositionsPageItemTitle>Job Title {index}</OpenPositionsPageItemTitle>
                                        <OpenPositionsPageItemContent>Description</OpenPositionsPageItemContent>
                                    </OpenPositionsPageItemLink>
                                </Link>
                            </OpenPositionsPageItem>
                        )}
                    </OpenPositionsPageList>
                </OpenPositionsPageWrapper>
            </OpenPositionsPageSection>    

            <BaseSection
                backgroundImage={'/static/images/open-positions-join-our-team.svg'}
                title={'Join our team'}
                titleColor={'black'}
                description={'We are always looking for talented people to join our force. Please don’t hesitate to apply to any of our currently open positions within the company.'}
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