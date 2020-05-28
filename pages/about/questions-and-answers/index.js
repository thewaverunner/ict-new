import React from 'react'

import Head from 'next/head'

import { withTranslation } from '../../../i18n'

import BaseButton from '../../../components/BaseButton'
import QuestionsAndAnswersPageToggleItem from '../../../components/QuestionsAndAnswersPageToggleItem'

import {
    QuestionsAndAnswersPageTopSectionWrapper,
    QuestionsAndAnswersPageTopSection,
    QuestionsAndAnswersPageTopSectionTitle,
    QuestionsAndAnswersPageTopSectionDescription,
    QuestionsAndAnswersPageQuestionQrapper,
    QuestionsAndAnswersPageQuestionSection,
    QuestionsAndAnswersPageQuestionSectionTitle,
    QuestionsAndAnswersPageQuestionList,

    CorporateGovernancePartnershipsSection,
    CorporateGovernancePartnershipsImage,
    CorporateGovernancePartnershipsContent,
    CorporateGovernancePartnershipsContentWrapper,
    CorporateGovernancePartnershipsTitle,
    CorporateGovernancePartnershipsDescription,
    CorporateGovernancePartnershipsDescriptionWrapper,
} from './index.styles'

function QuestionsAndAnswersPage ({ t }) {
    const topics = [
        { 
            title: 'Example Question', 
            description: 'ICT focuses on international trade & development by disrupting and changing traditional software distribution channels. ICT’s leverage lies in combining the crowd and gig economy.', 
        },
        { 
            title: 'Example Question', 
            description: 'ICT focuses on international trade & development by disrupting and changing traditional software distribution channels. ICT’s leverage lies in combining the crowd and gig economy.', 
        },
        { 
            title: 'Example Question', 
            description: 'ICT focuses on international trade & development by disrupting and changing traditional software distribution channels. ICT’s leverage lies in combining the crowd and gig economy.',
        },
        { 
            title: 'Example Question', 
            description: 'ICT focuses on international trade & development by disrupting and changing traditional software distribution channels. ICT’s leverage lies in combining the crowd and gig economy.', 
        },
        { 
            title: 'Example Question', 
            description: 'ICT focuses on international trade & development by disrupting and changing traditional software distribution channels. ICT’s leverage lies in combining the crowd and gig economy.', 
        },
    ]
    
    const crowdTopics = [
        { 
            title: 'Example Question', 
            description: 'ICT focuses on international trade & development by disrupting and changing traditional software distribution channels. ICT’s leverage lies in combining the crowd and gig economy.', 
        },
        { 
            title: 'Example Question', 
            description: 'ICT focuses on international trade & development by disrupting and changing traditional software distribution channels. ICT’s leverage lies in combining the crowd and gig economy.', 
        },
        { 
            title: 'Example Question', 
            description: 'ICT focuses on international trade & development by disrupting and changing traditional software distribution channels. ICT’s leverage lies in combining the crowd and gig economy.', 
        },
        { 
            title: 'Example Question', 
            description: 'ICT focuses on international trade & development by disrupting and changing traditional software distribution channels. ICT’s leverage lies in combining the crowd and gig economy.', 
        },
        { 
            title: 'Example Question', 
            description: 'ICT focuses on international trade & development by disrupting and changing traditional software distribution channels. ICT’s leverage lies in combining the crowd and gig economy.', 
        },
    ]

    return (
        <>
            <Head>
                <title>{t('QuestionsAndAnswersPage-Title')}</title>
            </Head>

            <QuestionsAndAnswersPageTopSectionWrapper>
                <QuestionsAndAnswersPageTopSection >
                    <QuestionsAndAnswersPageTopSectionTitle>{t('QuestionsAndAnswersPage-TopSection-Title')}</QuestionsAndAnswersPageTopSectionTitle>
                    <QuestionsAndAnswersPageTopSectionDescription>{t('QuestionsAndAnswersPage-TopSection-Description')}</QuestionsAndAnswersPageTopSectionDescription>
                </QuestionsAndAnswersPageTopSection>
            </QuestionsAndAnswersPageTopSectionWrapper>  

            <QuestionsAndAnswersPageQuestionQrapper>
                <QuestionsAndAnswersPageQuestionSection>
                    <QuestionsAndAnswersPageQuestionSectionTitle>{t('QuestionsAndAnswersPage-QuestionSection-Title')}</QuestionsAndAnswersPageQuestionSectionTitle>

                    <QuestionsAndAnswersPageQuestionList>
                        {topics.map((topic, index) => <QuestionsAndAnswersPageToggleItem key={index} topic={topic} defaultValue={index === 0} />)}
                    </QuestionsAndAnswersPageQuestionList>

                    <QuestionsAndAnswersPageQuestionSectionTitle>{t('QuestionsAndAnswersPage-QuestionSection-TitleSecond')}</QuestionsAndAnswersPageQuestionSectionTitle>

                    <QuestionsAndAnswersPageQuestionList>
                        {crowdTopics.map((topic, index) => <QuestionsAndAnswersPageToggleItem key={index} topic={topic} defaultValue={index === 0} />)}   
                    </QuestionsAndAnswersPageQuestionList>
                </QuestionsAndAnswersPageQuestionSection>

                <CorporateGovernancePartnershipsSection>
                    <CorporateGovernancePartnershipsImage>
                        <img src="/static/images/company-governance-parthnership.svg" />
                    </CorporateGovernancePartnershipsImage> 
                
                    <CorporateGovernancePartnershipsContent>
                        <CorporateGovernancePartnershipsContentWrapper>
                            <CorporateGovernancePartnershipsDescriptionWrapper>
                                <CorporateGovernancePartnershipsTitle>{t('QuestionsAndAnswersPage-ParthnershipSection-Title')}</CorporateGovernancePartnershipsTitle>
                                <CorporateGovernancePartnershipsDescription>{t('QuestionsAndAnswersPage-ParthnershipSection-Description')}</CorporateGovernancePartnershipsDescription>

                                <BaseButton blackStyle>{t('QuestionsAndAnswersPage-QuestionSection-Button')}</BaseButton>
                            </CorporateGovernancePartnershipsDescriptionWrapper>
                        </CorporateGovernancePartnershipsContentWrapper>
                    </CorporateGovernancePartnershipsContent>
                </CorporateGovernancePartnershipsSection>
            </QuestionsAndAnswersPageQuestionQrapper>     
        </>
    )
}

QuestionsAndAnswersPage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(QuestionsAndAnswersPage)