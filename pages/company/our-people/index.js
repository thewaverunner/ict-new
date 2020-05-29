import React, { useEffect, useState } from 'react'

import Head from 'next/head'

import { withTranslation } from '../../../i18n'

import BaseButton from '../../../components/BaseButton'

import OurPeoplePageMemberItem from '../../../components/OurPeoplePageMemberItem'

import ContentfulService from '../../../services/contentful'

import {
    OurPeopleTopSection,
    OurPeopleTopSectionTitle,
    OurPeopleTopSectionDescription,

    OurPeoplePageManagementSectionWrapper,
    OurPeoplePageManagementSection,
    OurPeoplePageManagementTitle,
    OurPeoplePageManagementList,
    
    CorporateGovernancePartnershipsSection,
    CorporateGovernancePartnershipsImage,
    CorporateGovernancePartnershipsContent,
    CorporateGovernancePartnershipsContentWrapper,
    CorporateGovernancePartnershipsTitle,
    CorporateGovernancePartnershipsDescription,
    CorporateGovernancePartnershipsDescriptionWrapper
} from './index.styles'

function OurPeoplePage ({ t }) {
    ContentfulService.createClient()

    async function fetchEntries() {
        const client = ContentfulService.getClient()
        const entries = await client.getEntries()
        if (entries.items) return entries.items
        console.log(`Error getting Entries for ${contentType.name}.`)
      }
    
      const [photos, setPhotos] = useState([])
    
      useEffect(() => {
        async function getPosts() {
          const allPhoto = await fetchEntries()
          setPhotos([...allPhoto])
        }
        getPosts()
      }, [])

      let photoArray = []
      let positionArray = []

      photos.forEach( item => {
          photoArray.push(item.fields.managerPhoto.fields.file.url)
          positionArray.push(item.fields.managerPositions)
      })

      console.log(positionArray[0])
 

    const ourPeoples = [
        {
            image: 'http:' + photoArray[0],
            name: 'Jonas Werner',
            position: positionArray[0],
            description: 'Widely considered a network industry guru, Jonas is ICT’s Founder and Chief Sales Director. He is a true entrepreneur and visionary, drawing on over two decades of experience in network marketing. <br><br> Jonas boasts an impressive track record in marketing, sales and management of fast-growing network organisations.',    
        },
        {
            image: 'http:' + photoArray[1],
            name: 'Johan Staël von Holstein',
            position: positionArray[1],
            description: 'Widely considered a network industry guru, Jonas is ICT’s Founder and Chief Sales Director. He is a true entrepreneur and visionary, drawing on over two decades of experience in network marketing. <br><br> Jonas boasts an impressive track record in marketing, sales and management of fast-growing network organisations.',    
        },
        {
            image: 'http:' + photoArray[2],
            name: 'Johan Westerdahl',
            position: positionArray[2],
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
                <title>{t('OurPeoplePage-Title')}</title>
            </Head>

            <OurPeopleTopSection>
                <OurPeopleTopSectionTitle>{t('OurPeoplePage-TopSection-Title')}</OurPeopleTopSectionTitle>
                <OurPeopleTopSectionDescription>{t('OurPeoplePage-TopSection-Description')}</OurPeopleTopSectionDescription>
            </OurPeopleTopSection>

            <OurPeoplePageManagementSectionWrapper>
                <OurPeoplePageManagementSection>
                    <OurPeoplePageManagementTitle>{t('OurPeoplePage-ManagementSection-Title')}</OurPeoplePageManagementTitle>

                    <OurPeoplePageManagementList>
                        {ourPeoples.map((member, index) => <OurPeoplePageMemberItem key={index} member={member} />)}
                    </OurPeoplePageManagementList>

                    <OurPeoplePageManagementTitle>{t('OurPeoplePage-ManagementSectionBoard-Title')}</OurPeoplePageManagementTitle>

                    <OurPeoplePageManagementList>
                        {boardPeoples.map((member, index) => <OurPeoplePageMemberItem key={index} member={member} />)}
                    </OurPeoplePageManagementList>
                </OurPeoplePageManagementSection>

                <CorporateGovernancePartnershipsSection>
                    <CorporateGovernancePartnershipsImage backgroundStyle={'white'}>
                        <img src="/static/images/company-parthership.svg" />
                    </CorporateGovernancePartnershipsImage> 
                
                    <CorporateGovernancePartnershipsContent backgroundStyle={'white'}>
                        <CorporateGovernancePartnershipsContentWrapper>
                            <CorporateGovernancePartnershipsDescriptionWrapper>
                                <CorporateGovernancePartnershipsTitle>{t('OurPeoplePage-ParthershipSection-Title')}</CorporateGovernancePartnershipsTitle>
                                <CorporateGovernancePartnershipsDescription>{t('OurPeoplePage-ParthershipSection-Description')}</CorporateGovernancePartnershipsDescription>

                                <BaseButton blackStyle>{t('OurPeoplePage-ParthershipSection-Button')}</BaseButton>
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