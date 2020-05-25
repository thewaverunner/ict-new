import React from 'react'

import Head from 'next/head'

import { withTranslation } from '../../../i18n'

import {
    OurPeoplePageWrapper,
    OurPeopleTopSection,
    OurPeopleTopSectionTitle,
    OurPeopleTopSectionDescription,
    OurPeoplePageManagementSectionWrapper,
    OurPeoplePageManagementSection,
    OurPeoplePageManagementTitle,
    OurPeoplePageManagementList,
    OurPeoplePageManagementItem,
    OurPeoplePageManagementItemImage,
    OurPeoplePageManagementItemInfoWrapper,
    OurPeoplePageManagementItemDescription,
    OurPeoplePageManagementItemName,
    OurPeoplePageManagementItemPosition
} from './index.styles'

function OurPeoplePage ({ t }) {
    return (
        <>
            <Head>
                <title>Our People</title>
            </Head>

            <OurPeoplePageWrapper>
                <OurPeopleTopSection>
                    <OurPeopleTopSectionTitle>Meet our people</OurPeopleTopSectionTitle>

                    <OurPeopleTopSectionDescription>
                        ICT meets the strictest demands on compliance, transparency,
                        as well as legal requirements, including tax laws and 
                        the relevant regulations.
                    </OurPeopleTopSectionDescription>
                </OurPeopleTopSection>
            </OurPeoplePageWrapper>

            <OurPeoplePageManagementSectionWrapper>
                <OurPeoplePageManagementSection>
                    <OurPeoplePageManagementTitle>Management</OurPeoplePageManagementTitle>

                    <OurPeoplePageManagementList>
                        {[0, 1, 2, 3, 4, 5].map((_, index) => 
                            <OurPeoplePageManagementItem key={index}>
                                <OurPeoplePageManagementItemImage>
                                    <img src="/static/images/management-image.svg" />

                                    <OurPeoplePageManagementItemInfoWrapper>
                                        <OurPeoplePageManagementItemName>Jonas Werner</OurPeoplePageManagementItemName>
                                        <OurPeoplePageManagementItemPosition>Founder & CSD</OurPeoplePageManagementItemPosition>
                                    </OurPeoplePageManagementItemInfoWrapper>
                                </OurPeoplePageManagementItemImage>
                            
                                <OurPeoplePageManagementItemDescription>
                                    JWidely considered a network industry guru, 
                                    Jonas is ICT’s Founder and Chief Sales Director. 
                                    He is a true entrepreneur and visionary, drawing 
                                    on over two decades of experience in network marketing.
                                    Jonas boasts an impressive track record in marketing, 
                                    sales and management of fast-growing network organisations.
                                </OurPeoplePageManagementItemDescription>
                            </OurPeoplePageManagementItem>
                        )}
                    </OurPeoplePageManagementList>
                </OurPeoplePageManagementSection>
            </OurPeoplePageManagementSectionWrapper>
        </>
    )
}

OurPeoplePage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(OurPeoplePage)