import React from 'react'

import Head from 'next/head'

import Slider from "react-slick";

import { withTranslation } from '../../../i18n'

import BaseButton from '../../../components/BaseButton'
import BaseCard from '../../../components/BaseCard'

import {
    LifeAtICTPageTopSection,
    LifeAtICTPageTopSectionTitle,
    LifeAtICTPageTopSectionDescription,
    LifeAtICTPageSliderSection,
    SliderWrapper,
    SliderItem,
    SliderItemImage,
    SliderItemContent,
    SliderItemContentTitle,
    SliderContentWrapper,
    SliderItemContentDecription,
    SliderItemContentPerson,
    SliderNextArrow,
    SliderPrevArrow,
    OpportunityPageMindsetSection,
    OpportunityPageMindsetContentWrapper,
    OpportunityPageMindsetContentTitle,
    OpportunityPageMindsetArticle,
    OpportunityPageMindsetContent,
    OpportunityPageCardSection,
} from './index.styles'

function SliderNext ({ onClick }) {
    return <SliderNextArrow onClick={onClick} />
}
  
function SliderPrev ({ onClick }) {
    return  <SliderPrevArrow onClick={onClick} />
}

function LifeAtICTPage ({ t }) {
    const sliderSettings = {
        arrow: true,
        dots: false,
        infinite: true,
        speed: 500,
        nextArrow: <SliderNext />,
        prevArrow: <SliderPrev />,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    const sliderItems = [
        {
            image: '/static/images/life-at-ict-slider-image.png',
            title: '“The challenges we’re up against”',
            description: 'ICT meets the strictest demands on compliance, transparency, as well as legal requirements, including tax laws and the relevant regulations.',
            name: 'Johan SvH',
            position: 'CEO',        
        },
        {
            image: '/static/images/life-at-ict-slider-image.png',
            title: '“The challenges we’re up against”',
            description: 'ICT meets the strictest demands on compliance, transparency, as well as legal requirements, including tax laws and the relevant regulations.',
            name: 'Johan SvH',
            position: 'CEO',        
        },
        {
            image: '/static/images/life-at-ict-slider-image.png',
            title: '“The challenges we’re up against”',
            description: 'ICT meets the strictest demands on compliance, transparency, as well as legal requirements, including tax laws and the relevant regulations.',
            name: 'Johan SvH',
            position: 'CEO',        
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
                <title>{t('LifeAtICTPage_Head_Title')}</title>
            </Head>

            <LifeAtICTPageTopSection>
                <LifeAtICTPageTopSectionTitle>{t('LifeAtICTPage_TopSection_Title')}</LifeAtICTPageTopSectionTitle>
                <LifeAtICTPageTopSectionDescription>{t('LifeAtICTPage_TopSection_Description')}</LifeAtICTPageTopSectionDescription>

                <BaseButton mode={'dark'}>{t('LifeAtICTPage_TopSection_Button')}</BaseButton>
            </LifeAtICTPageTopSection>

            <LifeAtICTPageSliderSection>
                <SliderWrapper>
                    <Slider {...sliderSettings}>
                        {sliderItems.map((slider, index) => (
                            <SliderItem key={index}>
                                <SliderContentWrapper>
                                    <SliderItemImage>
                                        <img 
                                            src={slider.image} 
                                            alt='slider-image' 
                                        />
                                    </SliderItemImage>

                                    <SliderItemContent>
                                        <SliderItemContentTitle>{slider.title}</SliderItemContentTitle>
                                        <SliderItemContentDecription>{slider.description}</SliderItemContentDecription>
            
                                        <SliderItemContentPerson>
                                            <span>{slider.name}</span>
                                            {slider.position}
                                        </SliderItemContentPerson>
                                    </SliderItemContent>
                                </SliderContentWrapper>
                            </SliderItem>    
                        ))}     
                    </Slider>
                </SliderWrapper>
            </LifeAtICTPageSliderSection>

            <OpportunityPageMindsetSection>
                <OpportunityPageMindsetContentWrapper>
                    <OpportunityPageMindsetContentTitle>{t('LifeAtICTPage_MindsetSection_Title')}</OpportunityPageMindsetContentTitle>

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

LifeAtICTPage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(LifeAtICTPage)
