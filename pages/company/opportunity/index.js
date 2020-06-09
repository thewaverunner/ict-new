import React from 'react'

import Head from 'next/head'

import { withTranslation } from '../../../i18n'

import BaseButton from '../../../components/BaseButton'
import BaseCard from '../../../components/BaseCard'

import {
    OpportunityPageTopSection,
    OpportunityPageTopSectionTitle,
    OpportunityPageTopSectionDescription,
    OpportunityPageChallengeSection,
    OpportunityPageChallengeTitle,
    OpportunityPageChallengeWrapper,
    OpportunityPageChallengeImage,
    OpportunityPageChallengeContent,
    OpportunityPageChallengeList,
    OpportunityPageChallengeItem,
    OpportunityPageChallengeItemTitle,
    OpportunityPageChallengeItemDescription,
    OpportunityPageMindsetSection,
    OpportunityPageMindsetContentWrapper,
    OpportunityPageMindsetContentTitle,
    OpportunityPageMindsetArticle,
    OpportunityPageMindsetContent,
    OpportunityPageCardSection,
} from './index.styles'

function OpportunityPage ({ t }) {
    const opportunityChallenges = [
        {
            title: 'Our opportunity',
            description: 'ICT meets the strictest demands on compliance, transparency, as well as legal requirements, including tax laws and the relevant regulations.',
        },
        {
            title: 'Our opportunity',
            description: 'ICT meets the strictest demands on compliance, transparency, as well as legal requirements, including tax laws and the relevant regulations.',
        },
        {
            title: 'Our opportunity',
            description: 'ICT meets the strictest demands on compliance, transparency, as well as legal requirements, including tax laws and the relevant regulations.',
        },
    ]

    const mindsetArticles = [
        { description: 'ICT meets the strictest demands on compliance, transparency, as well as legal requirements, including tax laws and the relevant regulations. ICT meets the strictest demands on compliance, transparency, as well as legal requirements, including tax laws and the relevant regulations.'},
        { description: 'ICT meets the strictest demands on compliance, transparency, as well as legal requirements, including tax laws and the relevant regulations. ICT meets the strictest demands on compliance, transparency, as well as legal requirements, including tax laws and the relevant regulations. ICT meets the strictest demands on compliance, transparency, as well as legal requirements, including tax laws and the relevant regulations. ICT meets the strictest demands on compliance, transparency, as well as legal requirements, including tax laws and the relevant regulations.'},
        { description: 'ICT meets the strictest demands on compliance, transparency, as well as legal requirements, including tax laws and the relevant regulations. ICT meets the strictest demands on compliance, transparency, as well as legal requirements, including tax laws and the relevant regulations.'},
    ]

    const opportunityPageCard = [
        {
            image: '/static/images/press-card-image.svg',
            title: t('CompanyCard_First_Title'),
            description: t('CompanyCard_First_Description'),
        },
        {
            image: '/static/images/mediakit-card-image.svg',
            title: t('CompanyCard_Second_Title'),
            description: t('CompanyCard_Second_Description'),
        },
    ]

    return (
        <>
            <Head>
                <title>{t('OpportunityPage_Head_Title')}</title>
            </Head>

            <OpportunityPageTopSection>
                <OpportunityPageTopSectionTitle>{t('OpportunityPage_TopSection_Title')}</OpportunityPageTopSectionTitle>
                <OpportunityPageTopSectionDescription>{t('OpportunityPage_TopSection_Description')}</OpportunityPageTopSectionDescription>

                <BaseButton mode={'dark'}>{t('OpportunityPage_TopSection_Button')}</BaseButton>
            </OpportunityPageTopSection>

            <OpportunityPageChallengeSection>
                <OpportunityPageChallengeTitle>{t('OpportunityPage_ChallengeSection_Title')}</OpportunityPageChallengeTitle>

                <OpportunityPageChallengeWrapper>
                    <OpportunityPageChallengeImage>
                        <img 
                            src="/static/images/opportunity-challenges-image.svg"
                            alt="opportunity-challenges"
                        />
                    </OpportunityPageChallengeImage>

                    <OpportunityPageChallengeContent>
                        <OpportunityPageChallengeList>
                            {opportunityChallenges.map((challenge, index) => (
                                <OpportunityPageChallengeItem key={index}>
                                    <OpportunityPageChallengeItemTitle>{challenge.title}</OpportunityPageChallengeItemTitle>
                                    <OpportunityPageChallengeItemDescription>{challenge.description}</OpportunityPageChallengeItemDescription>
                                </OpportunityPageChallengeItem>   
                            ))}
                        </OpportunityPageChallengeList>
                    </OpportunityPageChallengeContent>
                </OpportunityPageChallengeWrapper>
            </OpportunityPageChallengeSection>

            <OpportunityPageMindsetSection>
                <OpportunityPageMindsetContentWrapper>
                    <OpportunityPageMindsetContentTitle>{t('OpportunityPage_MindsetSection_Title')}</OpportunityPageMindsetContentTitle>

                    <OpportunityPageMindsetContent>
                        {mindsetArticles.map((article, index) => (
                            <OpportunityPageMindsetArticle key={index}>{article.description}</OpportunityPageMindsetArticle>
                        ))}  
                    </OpportunityPageMindsetContent>
                </OpportunityPageMindsetContentWrapper>
            </OpportunityPageMindsetSection>

            <OpportunityPageCardSection>
                {opportunityPageCard.map((card, index) => (
                    <BaseCard
                        key={index}
                        image={card.image}
                        title={card.title}
                        description={card.description}
                    />  
                ))}    
            </OpportunityPageCardSection>
        </>
    )
}

OpportunityPage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(OpportunityPage)