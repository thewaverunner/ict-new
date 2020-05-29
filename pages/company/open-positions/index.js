import React from 'react'

import Head from 'next/head'

import { withTranslation } from '../../../i18n'

import BaseButton from '../../../components/BaseButton'
import OpenPositionsPagePositionItem from '../../../components/OpenPositionsPagePositionItem'

import {
    OpenPositionsPageList,

    OpenPositionsPageWrapper,
    OpenPositionsPageTopSection,
    OpenPositionsPageTopSectionTitle,
    OpenPositionsPageTopSectionDescription,

    CorporateGovernancePartnershipsSection,
    CorporateGovernancePartnershipsImage,
    CorporateGovernancePartnershipsContent,
    CorporateGovernancePartnershipsContentWrapper,
    CorporateGovernancePartnershipsTitle,
    CorporateGovernancePartnershipsDescription,
    CorporateGovernancePartnershipsDescriptionWrapper
} from './index.styles'

function OpenPositionsPage ({ t }) {
    return (
        <>
            <Head>
                <title>{t('OpenPositionsPage-Head-Title')}</title>
            </Head>

            <OpenPositionsPageWrapper>
                <OpenPositionsPageTopSection>
                    <OpenPositionsPageTopSectionTitle>{t('OpenPositionsPage-TopSection-Title')}</OpenPositionsPageTopSectionTitle>
                    <OpenPositionsPageTopSectionDescription>{t('OpenPositionsPage-TopSection-Description')}</OpenPositionsPageTopSectionDescription>
                </OpenPositionsPageTopSection>

                <OpenPositionsPageList>
                    {[0, 1, 2, 3, 4, 5, 6, 7].map((_, index) => <OpenPositionsPagePositionItem key={index} position={_} />)}
                </OpenPositionsPageList>

            </OpenPositionsPageWrapper>

            <CorporateGovernancePartnershipsSection>
                <CorporateGovernancePartnershipsImage>
                    <img src="/static/images/company-parthership.svg" />
                </CorporateGovernancePartnershipsImage> 
            
                <CorporateGovernancePartnershipsContent>
                    <CorporateGovernancePartnershipsContentWrapper>
                        <CorporateGovernancePartnershipsDescriptionWrapper>
                            <CorporateGovernancePartnershipsTitle>{t('OpenPositionsPage-ParthershipSection-Title')}</CorporateGovernancePartnershipsTitle>
                            <CorporateGovernancePartnershipsDescription>{t('OpenPositionsPage-ParthershipSection-Description')}</CorporateGovernancePartnershipsDescription>

                            <BaseButton blackStyle>{t('OpenPositionsPage-ParthershipSection-Button')}</BaseButton>
                        </CorporateGovernancePartnershipsDescriptionWrapper>
                    </CorporateGovernancePartnershipsContentWrapper>
                </CorporateGovernancePartnershipsContent>
            </CorporateGovernancePartnershipsSection>
        </>
    )
}

OpenPositionsPage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(OpenPositionsPage)