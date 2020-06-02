import React from 'react'

import Head from 'next/head'

import { withTranslation } from '../../../i18n'

import BaseButton from '../../../components/BaseButton'

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
    CompanyCard,
    CompanyCardImage,
    CompanyCardDescriptionWrapper,
    CompanyCardTitleWrapper,
    CompanyCardTitle,
    CompanyCardArrow,
    CompanyCardDescription,
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
        }
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
                <OpportunityPageTopSectionTitle>Help us to disrupt software distribution on a global scale</OpportunityPageTopSectionTitle>
                <OpportunityPageTopSectionDescription>
                    ICT meets the strictest demands on compliance, 
                    transparency, as well as legal requirements, including 
                    tax laws and the relevant regulations.
                </OpportunityPageTopSectionDescription>

                <BaseButton blackStyle>View Open Positions</BaseButton>
            </OpportunityPageTopSection>

            <OpportunityPageChallengeSection>
                <OpportunityPageChallengeTitle>The challenges we’re up against</OpportunityPageChallengeTitle>

                <OpportunityPageChallengeWrapper>
                    <OpportunityPageChallengeImage>
                        <img src='/static/images/opportunity-challenges-image.svg' />
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
                    <OpportunityPageMindsetContentTitle>A global mindset</OpportunityPageMindsetContentTitle>

                    <OpportunityPageMindsetContent>
                        {mindsetArticles.map((article, index) => (
                            <OpportunityPageMindsetArticle key={index}>{article.description}</OpportunityPageMindsetArticle>
                        ))}  
                    </OpportunityPageMindsetContent>
                </OpportunityPageMindsetContentWrapper>
            </OpportunityPageMindsetSection>

            <OpportunityPageCardSection>
                {opportunityPageCard.map((card, index) => (
                    <CompanyCard key={index}>
                        <CompanyCardImage>
                            <img src={card.image} />
                        </CompanyCardImage>
    
                        <CompanyCardDescriptionWrapper>
                            <CompanyCardTitleWrapper>
                                <CompanyCardTitle href='#'>{card.title}</CompanyCardTitle>
    
                                <CompanyCardArrow>
                                    <img src='/static/images/card-arrow-image.svg' />
                                </CompanyCardArrow>
                            </CompanyCardTitleWrapper>
    
                            <CompanyCardDescription>{card.description}</CompanyCardDescription>
                        </CompanyCardDescriptionWrapper>
                    </CompanyCard>    
                ))}    
            </OpportunityPageCardSection>
        </>
    )
}

OpportunityPage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(OpportunityPage)