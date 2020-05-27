import React, { useState } from 'react'

import Head from 'next/head'

import { withTranslation } from '../../../i18n'

import OpenIcon from '../../../public/static/images/about-question-open-icon.svg'
import CloseIcon from '../../../public/static/images/about-question-close-icon.svg'

import BaseButton from '../../../components/BaseButton'

import {
    QuestionsAndAnswersPageTopSectionWrapper,
    QuestionsAndAnswersPageTopSection,
    QuestionsAndAnswersPageTopSectionTitle,
    QuestionsAndAnswersPageTopSectionDescription,
    QuestionsAndAnswersPageQuestionQrapper,
    QuestionsAndAnswersPageQuestionSection,
    QuestionsAndAnswersPageQuestionSectionTitle,
    QuestionsAndAnswersPageQuestionList,
    QuestionsAndAnswersPageQuestionItem,
    QuestionsAndAnswersPageQuestionItemTitleWrapper,
    QuestionsAndAnswersPageQuestionItemTitle,
    QuestionsAndAnswersPageQuestionItemDescription,
    QuestionsAndAnswersPageQuestionIcon,

    CorporateGovernancePartnershipsSection,
    CorporateGovernancePartnershipsImage,
    CorporateGovernancePartnershipsContent,
    CorporateGovernancePartnershipsContentWrapper,
    CorporateGovernancePartnershipsTitle,
    CorporateGovernancePartnershipsDescription,
    CorporateGovernancePartnershipsDescriptionWrapper,
} from './index.styles'

function QuestionsAndAnswersPage ({ t }) {
    const [topics, setTopics] = useState([
        { 
            title: 'Example Question', 
            description: 'ICT focuses on international trade & development by disrupting and changing traditional software distribution channels. ICT’s leverage lies in combining the crowd and gig economy.', 
            toggled: false 
        },
        { 
            title: 'Example Question', 
            description: 'ICT focuses on international trade & development by disrupting and changing traditional software distribution channels. ICT’s leverage lies in combining the crowd and gig economy.', 
            toggled: false 
        },
        { 
            title: 'Example Question', 
            description: 'ICT focuses on international trade & development by disrupting and changing traditional software distribution channels. ICT’s leverage lies in combining the crowd and gig economy.', 
            toggled: false 
        },
        { 
            title: 'Example Question', 
            description: 'ICT focuses on international trade & development by disrupting and changing traditional software distribution channels. ICT’s leverage lies in combining the crowd and gig economy.', 
            toggled: false 
        },
        { 
            title: 'Example Question', 
            description: 'ICT focuses on international trade & development by disrupting and changing traditional software distribution channels. ICT’s leverage lies in combining the crowd and gig economy.', 
            toggled: false 
        },
    ])
    
    const [crowdTopics, setCrowdTopics] = useState([
        { 
            title: 'Example Question', 
            description: 'ICT focuses on international trade & development by disrupting and changing traditional software distribution channels. ICT’s leverage lies in combining the crowd and gig economy.', 
            toggled: false 
        },
        { 
            title: 'Example Question', 
            description: 'ICT focuses on international trade & development by disrupting and changing traditional software distribution channels. ICT’s leverage lies in combining the crowd and gig economy.', 
            toggled: false 
        },
        { 
            title: 'Example Question', 
            description: 'ICT focuses on international trade & development by disrupting and changing traditional software distribution channels. ICT’s leverage lies in combining the crowd and gig economy.', 
            toggled: false 
        },
        { 
            title: 'Example Question', 
            description: 'ICT focuses on international trade & development by disrupting and changing traditional software distribution channels. ICT’s leverage lies in combining the crowd and gig economy.', 
            toggled: false 
        },
        { 
            title: 'Example Question', 
            description: 'ICT focuses on international trade & development by disrupting and changing traditional software distribution channels. ICT’s leverage lies in combining the crowd and gig economy.', 
            toggled: false 
        },
    ])

    function toggleTopic (index) {
        topics[index].toggled = !topics[index].toggled

        setTopics([...topics])
    }

    function toggleCrowdTopics (index) {
        crowdTopics[index].toggled = !crowdTopics[index].toggled

        setCrowdTopics([...crowdTopics])
    }

    return (
        <>
            <Head>
                <title>Questions & Answers</title>
            </Head>

            <QuestionsAndAnswersPageTopSectionWrapper>
                <QuestionsAndAnswersPageTopSection >
                    <QuestionsAndAnswersPageTopSectionTitle>Meet our people</QuestionsAndAnswersPageTopSectionTitle>

                    <QuestionsAndAnswersPageTopSectionDescription>
                        ICT meets the strictest demands on compliance, transparency,
                        as well as legal requirements, including tax laws and 
                        the relevant regulations.
                    </QuestionsAndAnswersPageTopSectionDescription>
                </QuestionsAndAnswersPageTopSection>
            </QuestionsAndAnswersPageTopSectionWrapper>  

            <QuestionsAndAnswersPageQuestionQrapper>
                <QuestionsAndAnswersPageQuestionSection>
                    <QuestionsAndAnswersPageQuestionSectionTitle>ICT</QuestionsAndAnswersPageQuestionSectionTitle>

                    <QuestionsAndAnswersPageQuestionList>
                        {topics.map((topic, index) => (
                            <QuestionsAndAnswersPageQuestionItem key={index}>
                                <QuestionsAndAnswersPageQuestionItemTitleWrapper onClick={() => toggleTopic(index)}>
                                    <QuestionsAndAnswersPageQuestionItemTitle>{topic.title}</QuestionsAndAnswersPageQuestionItemTitle>
                                    
                                    <QuestionsAndAnswersPageQuestionIcon>
                                        {topics[index].toggled ? <CloseIcon /> : <OpenIcon />}
                                    </QuestionsAndAnswersPageQuestionIcon>
                                </QuestionsAndAnswersPageQuestionItemTitleWrapper>

                            {topics[index].toggled && (
                                <QuestionsAndAnswersPageQuestionItemDescription>{topic.description}</QuestionsAndAnswersPageQuestionItemDescription>
                            )}
                            </QuestionsAndAnswersPageQuestionItem>
                        ))}
                    </QuestionsAndAnswersPageQuestionList>

                    <QuestionsAndAnswersPageQuestionSectionTitle>Crowd 1</QuestionsAndAnswersPageQuestionSectionTitle>

                    <QuestionsAndAnswersPageQuestionList>
                        {crowdTopics.map((topic, index) => (
                                <QuestionsAndAnswersPageQuestionItem key={index}>
                                    <QuestionsAndAnswersPageQuestionItemTitleWrapper onClick={() => toggleCrowdTopics(index)}>
                                        <QuestionsAndAnswersPageQuestionItemTitle>{topic.title}</QuestionsAndAnswersPageQuestionItemTitle>

                                            <QuestionsAndAnswersPageQuestionIcon>
                                                {crowdTopics[index].toggled ? <CloseIcon style={{ marginRight: 2 }} /> : <OpenIcon />}
                                            </QuestionsAndAnswersPageQuestionIcon>
                                    </QuestionsAndAnswersPageQuestionItemTitleWrapper>

                                {crowdTopics[index].toggled && (
                                    <QuestionsAndAnswersPageQuestionItemDescription>{topic.description}</QuestionsAndAnswersPageQuestionItemDescription>
                                )}
                                </QuestionsAndAnswersPageQuestionItem>
                        ))}         
                    </QuestionsAndAnswersPageQuestionList>
                </QuestionsAndAnswersPageQuestionSection>

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
            </QuestionsAndAnswersPageQuestionQrapper>     
        </>
    )
}

QuestionsAndAnswersPage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(QuestionsAndAnswersPage)