import React from 'react'

import Head from 'next/head'
import Link from 'next/link'

import { withTranslation } from '../../../i18n'

import BaseButton from '../../../components/BaseButton'
import BaseSection from '../../../components/BaseSection'
import BaseSectionHeading from '../../../components/BaseSectionHeading'

import {
    // OpenPositionsPageSection,
    // OpenPositionsPageWrapper,
    // OpenPositionsPageTitle,

    OpenPositionsPageList,
    OpenPositionsPageItem,
    OpenPositionsPageItemLink,
    OpenPositionsPageItemTitle,
    OpenPositionsPageItemContent,

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
                <title>{t('OpenPositionsPage-Title')}</title>
            </Head>

            <OpenPositionsPageWrapper>
                <OpenPositionsPageTopSection>
                    <OpenPositionsPageTopSectionTitle>Open Positions</OpenPositionsPageTopSectionTitle>

                    <OpenPositionsPageTopSectionDescription>
                        ICT meets the strictest demands on compliance,
                        transparency, as well as legal requirements, 
                        including tax laws and the relevant regulations.
                    </OpenPositionsPageTopSectionDescription>
                </OpenPositionsPageTopSection>

                <OpenPositionsPageList>
                        {[0, 1, 2, 3, 4, 5, 6, 7].map((_, index) => (
                            <OpenPositionsPageItem key={index}>
                                <Link href={`/company/open-positions/manager`}>
                                    <OpenPositionsPageItemLink>
                                        <OpenPositionsPageItemTitle>Job Title {index}</OpenPositionsPageItemTitle>
                                        <OpenPositionsPageItemContent>Description</OpenPositionsPageItemContent>
                                    </OpenPositionsPageItemLink>
                                </Link>
                            </OpenPositionsPageItem>
                        ))}
                </OpenPositionsPageList>

            </OpenPositionsPageWrapper>

            <CorporateGovernancePartnershipsSection>
                <CorporateGovernancePartnershipsImage>
                    <img src="/static/images/company-governance-parthnership.svg" />
                </CorporateGovernancePartnershipsImage> 
            
                <CorporateGovernancePartnershipsContent>
                    <CorporateGovernancePartnershipsContentWrapper>
                        <CorporateGovernancePartnershipsDescriptionWrapper>
                            <CorporateGovernancePartnershipsTitle>Working at ICT</CorporateGovernancePartnershipsTitle>

                            <CorporateGovernancePartnershipsDescription>
                                We are always looking for talented people 
                                to join our force. Please don’t hesitate to 
                                apply to any of our currently open positions within the company.
                            </CorporateGovernancePartnershipsDescription>

                            <BaseButton blackStyle>Learn More</BaseButton>
                        </CorporateGovernancePartnershipsDescriptionWrapper>
                    </CorporateGovernancePartnershipsContentWrapper>
                </CorporateGovernancePartnershipsContent>
            </CorporateGovernancePartnershipsSection>

            {/* <BaseSectionHeading title={t('OpenPositionsPage-Heading')} />

            <OpenPositionsPageSection>
                <OpenPositionsPageWrapper>
                    <OpenPositionsPageTitle>{t('OpenPositionsPage-Title')}</OpenPositionsPageTitle>

                    <OpenPositionsPageList>
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => 
                            <OpenPositionsPageItem key={index}>
                                <Link href={`/company/open-positions/manager`}>
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
                title={t('OpenPositionsPage-JoinUs-Banner-Title')}
                titleColor={'black'}
                description={t('OpenPositionsPage-JoinUs-Banner-Description')}
                buttonTitle={'Contact Us'}
                buttonStyle={'blackStyle'}
            /> */}
        </>
    )
}

OpenPositionsPage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(OpenPositionsPage)