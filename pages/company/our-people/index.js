import React from 'react'

import Head from 'next/head'

import { withTranslation } from '../../../i18n'

import BaseButton from '../../../components/BaseButton'
import OurPeoplePageMemberItem from '../../../components/OurPeoplePageMemberItem'

import {
    OurPeopleTopSection,
    OurPeopleTopSectionTitle,
    OurPeopleTopSectionDescription,
    OurPeoplePageManagementSectionWrapper,
    OurPeoplePageManagementSection,
    OurPeoplePageManagementTitle,
    OurPeoplePageManagementList,
    PressroomCTASection,
    BaseCardElement,
    BaseCardImage,
    BaseCardDescriptionWrapper,
    BaseCardTitleWrapper,
    BaseCardTitle,
    BaseCardDescription,
    ButtonWrapper,
} from './index.styles'

function OurPeoplePage ({ t }) {
    const ourPeoples = [
        {
            name: 'Jonas Werner',
            position: 'CEO',
            description: 'Widely considered a network industry guru, Jonas is ICT’s Founder and Chief Sales Director. He is a true entrepreneur and visionary, drawing on over two decades of experience in network marketing. <br><br> Jonas boasts an impressive track record in marketing, sales and management of fast-growing network organisations.',    
        },
        {
            name: 'Johan Staël von Holstein',
            position: 'Marketing Director',
            description: 'Widely considered a network industry guru, Jonas is ICT’s Founder and Chief Sales Director. He is a true entrepreneur and visionary, drawing on over two decades of experience in network marketing. <br><br> Jonas boasts an impressive track record in marketing, sales and management of fast-growing network organisations.',    
        },
        {
            name: 'Johan Westerdahl',
            position: 'Business Development Director',
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
                <title>{t('OurPeoplePage_Head_Title')}</title>
            </Head>

            <OurPeopleTopSection>
                <OurPeopleTopSectionTitle>{t('OurPeoplePage_TopSection_Title')}</OurPeopleTopSectionTitle>
                <OurPeopleTopSectionDescription>{t('OurPeoplePage_TopSection_Description')}</OurPeopleTopSectionDescription>
            </OurPeopleTopSection>

            <OurPeoplePageManagementSectionWrapper>
                <OurPeoplePageManagementSection>
                    <OurPeoplePageManagementTitle>{t('OurPeoplePage_ManagementSection_Title')}</OurPeoplePageManagementTitle>

                    <OurPeoplePageManagementList>
                        {ourPeoples.map((member, index) => (
                            <OurPeoplePageMemberItem 
                                key={index} 
                                member={member} 
                            />
                        ))}
                    </OurPeoplePageManagementList>

                    <OurPeoplePageManagementTitle>{t('OurPeoplePage_ManagementSectionBoard_Title')}</OurPeoplePageManagementTitle>

                    <OurPeoplePageManagementList>
                        {boardPeoples.map((member, index) => (
                            <OurPeoplePageMemberItem 
                                key={index}
                                member={member}
                            />
                        ))}
                    </OurPeoplePageManagementList>
                </OurPeoplePageManagementSection>

                <PressroomCTASection>                    
                    <BaseCardElement>
                        <BaseCardImage>
                            <img 
                                src="/static/images/press-card-image.svg"
                                alt="press-card-presentation" 
                            />
                        </BaseCardImage>

                        <BaseCardDescriptionWrapper>
                            <BaseCardTitleWrapper>
                                <BaseCardTitle>{t('OurPeoplePage_ParthershipSection_Title')}</BaseCardTitle>
                                <BaseCardDescription>{t('OurPeoplePage_ParthershipSection_Description')}</BaseCardDescription>
                            </BaseCardTitleWrapper>

                            <ButtonWrapper>            
                                <BaseButton mode={'dark'}>{t('OurPeoplePage_ParthershipSection_Button')}</BaseButton>  
                            </ButtonWrapper>     
                        </BaseCardDescriptionWrapper>
                    </BaseCardElement>
                </PressroomCTASection>   
            </OurPeoplePageManagementSectionWrapper>
        </>
    )
}

OurPeoplePage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(OurPeoplePage)