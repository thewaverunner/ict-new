import React from 'react'

import Head from 'next/head'

import { withTranslation } from '../../../i18n'

import BaseButton from '../../../components/BaseButton'

import {
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
    OurPeoplePageManagementItemDescriptionWrapper,
    OurPeoplePageManagementItemName,
    OurPeoplePageManagementItemPosition,
    CorporateGovernancePartnershipsSection,
    CorporateGovernancePartnershipsImage,
    CorporateGovernancePartnershipsContent,
    CorporateGovernancePartnershipsContentWrapper,
    CorporateGovernancePartnershipsTitle,
    CorporateGovernancePartnershipsDescription,
    CorporateGovernancePartnershipsDescriptionWrapper
} from './index.styles'

function OurPeoplePage ({ t }) {
    const ourPeoples = [
        {
            name: 'Jonas Werner',
            position: 'Founder & CSD',
            description: 'Widely considered a network industry guru, Jonas is ICT’s Founder and Chief Sales Director. He is a true entrepreneur and visionary, drawing on over two decades of experience in network marketing. <br><br> Jonas boasts an impressive track record in marketing, sales and management of fast-growing network organisations.',    
        },
        {
            name: 'Johan Staël von Holstein',
            position: 'CEO',
            description: 'Widely considered a network industry guru, Jonas is ICT’s Founder and Chief Sales Director. He is a true entrepreneur and visionary, drawing on over two decades of experience in network marketing. <br><br> Jonas boasts an impressive track record in marketing, sales and management of fast-growing network organisations.',    
        },
        {
            name: 'Johan Westerdahl',
            position: 'Chief Commercial Officer',
            description: 'Widely considered a network industry guru, Jonas is ICT’s Founder and Chief Sales Director. He is a true entrepreneur and visionary, drawing on over two decades of experience in network marketing. Jonas boasts an impressive track record in marketing, sales and management of fast-growing network organisations.',    
        },
        {
            name: 'Fredrik Staël von Holstein',
            position: 'Business Development Director',
            description: 'Widely considered a network industry guru, Jonas is ICT’s Founder and Chief Sales Director. He is a true entrepreneur and visionary, drawing on over two decades of experience in network marketing. <br><br>Jonas boasts an impressive track record in marketing, sales and management of fast-growing network organisations.',    
        },
        {
            name: 'Chief Legal Counsel',
            position: '(to be recruited)',
            description: 'Widely considered a network industry guru, Jonas is ICT’s Founder and Chief Sales Director. He is a true entrepreneur and visionary, drawing on over two decades of experience in network marketing. <br><br>Jonas boasts an impressive track record in marketing, sales and management of fast-growing network organisations.',    
        },
        {
            name: 'Chief Financial Officer',
            position: '(to be recruited)',
            description: 'Widely considered a network industry guru, Jonas is ICT’s Founder and Chief Sales Director. He is a true entrepreneur and visionary, drawing on over two decades of experience in network marketing. <br><br>Jonas boasts an impressive track record in marketing, sales and management of fast-growing network organisations.',    
        },
    ]

    const boardPeoples = [
        {
            name: 'Jonas Werner',
            position: 'Founder & CSD',
            description: 'Widely considered a network industry guru, Jonas is ICT’s Founder and Chief Sales Director. He is a true entrepreneur and visionary, drawing on over two decades of experience in network marketing. <br><br>Jonas boasts an impressive track record in marketing, sales and management of fast-growing network organisations.',    
        },
        {
            name: 'Jens Lorentsson',
            position: 'Technology Director',
            description: 'Widely considered a network industry guru, Jonas is ICT’s Founder and Chief Sales Director. He is a true entrepreneur and visionary, drawing on over two decades of experience in network marketing. <br><br>Jonas boasts an impressive track record in marketing, sales and management of fast-growing network organisations.',    
        },
    ]


    return (
        <>
            <Head>
                <title>Our People</title>
            </Head>

            <OurPeopleTopSection>
                <OurPeopleTopSectionTitle>Meet our people</OurPeopleTopSectionTitle>

                <OurPeopleTopSectionDescription>
                    ICT meets the strictest demands on compliance, transparency,
                    as well as legal requirements, including tax laws and 
                    the relevant regulations.
                </OurPeopleTopSectionDescription>
            </OurPeopleTopSection>

            <OurPeoplePageManagementSectionWrapper>
                <OurPeoplePageManagementSection>
                    <OurPeoplePageManagementTitle>Management</OurPeoplePageManagementTitle>

                    <OurPeoplePageManagementList>
                        {ourPeoples.map((person, index) => (
                            <OurPeoplePageManagementItem key={index}>
                                <OurPeoplePageManagementItemImage>
                                    <img src="/static/images/management-image.svg" />

                                    <OurPeoplePageManagementItemInfoWrapper>
                                        <OurPeoplePageManagementItemName>{person.name}</OurPeoplePageManagementItemName>
                                        <OurPeoplePageManagementItemPosition>{person.position}</OurPeoplePageManagementItemPosition>
                                    </OurPeoplePageManagementItemInfoWrapper>
                                </OurPeoplePageManagementItemImage>
                            
                                <OurPeoplePageManagementItemDescriptionWrapper>
                                    <OurPeoplePageManagementItemDescription dangerouslySetInnerHTML={{ __html: person.description }} />

                                    <BaseButton 
                                        withArrow={true}
                                        hideBorder
                                        blackStyle
                                    >
                                        Read more
                                    </BaseButton>
                                </OurPeoplePageManagementItemDescriptionWrapper>
                            </OurPeoplePageManagementItem>
                        ))}
                    </OurPeoplePageManagementList>

                    <OurPeoplePageManagementTitle>Board</OurPeoplePageManagementTitle>

                    <OurPeoplePageManagementList>
                        {boardPeoples.map((person, index) => (
                            <OurPeoplePageManagementItem key={index}>
                                <OurPeoplePageManagementItemImage>
                                    <img src="/static/images/management-image.svg" />

                                    <OurPeoplePageManagementItemInfoWrapper>
                                        <OurPeoplePageManagementItemName>{person.name}</OurPeoplePageManagementItemName>
                                        <OurPeoplePageManagementItemPosition>{person.position}</OurPeoplePageManagementItemPosition>
                                    </OurPeoplePageManagementItemInfoWrapper>
                                </OurPeoplePageManagementItemImage>
                            
                                <OurPeoplePageManagementItemDescriptionWrapper>
                                    <OurPeoplePageManagementItemDescription dangerouslySetInnerHTML={{ __html: person.description }}/>

                                    <BaseButton 
                                        withArrow={true}
                                        hideBorder
                                        blackStyle
                                    >
                                        Read more
                                    </BaseButton>
                                </OurPeoplePageManagementItemDescriptionWrapper>
                            </OurPeoplePageManagementItem>
                        ))}
                    </OurPeoplePageManagementList>
                </OurPeoplePageManagementSection>

                <CorporateGovernancePartnershipsSection>
                    <CorporateGovernancePartnershipsImage>
                        <img src="/static/images/company-governance-parthnership.svg" />
                    </CorporateGovernancePartnershipsImage> 
                
                    <CorporateGovernancePartnershipsContent>
                        <CorporateGovernancePartnershipsContentWrapper>
                            <CorporateGovernancePartnershipsDescriptionWrapper>
                                <CorporateGovernancePartnershipsTitle>Join our team</CorporateGovernancePartnershipsTitle>

                                <CorporateGovernancePartnershipsDescription>
                                    We are always looking for talented people to 
                                    join our force. Please don’t hesitate to apply 
                                    to any of our currently open positions within the company.
                                </CorporateGovernancePartnershipsDescription>

                                <BaseButton blackStyle>View Open Positions</BaseButton>
                            </CorporateGovernancePartnershipsDescriptionWrapper>
                        </CorporateGovernancePartnershipsContentWrapper>
                    </CorporateGovernancePartnershipsContent>
                </CorporateGovernancePartnershipsSection>
            </OurPeoplePageManagementSectionWrapper>
        </>
    )
}

OurPeoplePage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(OurPeoplePage)