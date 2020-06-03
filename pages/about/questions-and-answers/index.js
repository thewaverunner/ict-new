import React from 'react'

import Head from 'next/head'

import { withTranslation } from '../../../i18n'

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
                <title>{t('QuestionsAndAnswersPage_Head_Title')}</title>
            </Head>

            <QuestionsAndAnswersPageTopSectionWrapper>
                <QuestionsAndAnswersPageTopSection>
                    <QuestionsAndAnswersPageTopSectionTitle>{t('QuestionsAndAnswersPage_Title')}</QuestionsAndAnswersPageTopSectionTitle>
                    <QuestionsAndAnswersPageTopSectionDescription>{t('QuestionsAndAnswersPage_TopSection_Description')}</QuestionsAndAnswersPageTopSectionDescription>
                </QuestionsAndAnswersPageTopSection>
            </QuestionsAndAnswersPageTopSectionWrapper>  

            <QuestionsAndAnswersPageQuestionQrapper>
                <QuestionsAndAnswersPageQuestionSection>
                    <QuestionsAndAnswersPageQuestionSectionTitle>{t('QuestionsAndAnswersPage_QuestionSection_Title')}</QuestionsAndAnswersPageQuestionSectionTitle>

                    <QuestionsAndAnswersPageQuestionList>
                        {topics.map((topic, index) => <QuestionsAndAnswersPageToggleItem key={index} topic={topic} defaultValue={index === 0} />)}
                    </QuestionsAndAnswersPageQuestionList>

                    <QuestionsAndAnswersPageQuestionSectionTitle>{t('QuestionsAndAnswersPage_QuestionSection_TitleSecond')}</QuestionsAndAnswersPageQuestionSectionTitle>

                    <QuestionsAndAnswersPageQuestionList>
                        {crowdTopics.map((topic, index) => <QuestionsAndAnswersPageToggleItem key={index} topic={topic} defaultValue={index === 0} />)}   
                    </QuestionsAndAnswersPageQuestionList>
                </QuestionsAndAnswersPageQuestionSection>
            </QuestionsAndAnswersPageQuestionQrapper>     
        </>
    )
}

QuestionsAndAnswersPage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(QuestionsAndAnswersPage)