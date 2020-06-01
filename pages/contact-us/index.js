import React from 'react'

import Head from 'next/head'

import { withTranslation } from '../../i18n'

import {
    ContactUsPageTopSection,
    ContactUsPageTopSectionTitle,
    ContactUsPageCardsSection,
    CompanyCard,
    CompanyCardImage,
    CompanyCardDescriptionWrapper,
    CompanyCardTitleWrapper,
    CompanyCardTitle,
    CompanyCardArrow,
    CompanyCardDescription,
    ContactUsCompanySection,
    ContactUsCompanyInfo,
    ContactUsCompanyMap,
    ContactUsCompanyInfoWrapper,
    ContactUsCompanyTitle,
    ContactUsCompanyInfoList,
    ContactUsCompanyInfotItem,
} from './index.styles'

function ContactUsPage ({ t }) {
    const companyInfo = [
        {
           title: t('ContactUsPage_CompanyInfo_Founded'),
           description: 'Madrid, Spain',     
        },
        {
            title: t('ContactUsPage_CompanyInfo_Tax'),
            description: 'B88429436',     
        },
        {
            title: t('ContactUsPage_CompanyInfo_Vat'),
            description: 'ESB88429436',     
        },
        {
            title: t('ContactUsPage_CompanyInfo_Email'),
            description: 'info@impactct.com',     
        },
        {
            title: t('ContactUsPage_CompanyInfo_Policy'),
        },
    ]

    const contactUsCard = [
        {
            image: 'static/images/press-card-image.svg',
            title: t('CompanyCard_First_Title'),
            description: t('CompanyCard_First_Description'),
        },
        {
            image: 'static/images/mediakit-card-image.svg',
            title: t('CompanyCard_Second_Title'),
            description: t('CompanyCard_Second_Description'),
        },
    ]

    return (
        <>
            <Head>
                <title>{t('ContactUsPage_Head_Title')}</title>
            </Head>

            <ContactUsPageTopSection>
                <ContactUsPageTopSectionTitle>{t('ContactUsPage_Title')}</ContactUsPageTopSectionTitle>
            </ContactUsPageTopSection>
          
            <ContactUsCompanySection>
                <ContactUsCompanyInfo>
                    <ContactUsCompanyInfoWrapper>
                        <ContactUsCompanyTitle>{t('ContactUsPage_Company_Title')}</ContactUsCompanyTitle>

                        <ContactUsCompanyInfoList>
                            {companyInfo.map((item, index) => (
                                <ContactUsCompanyInfotItem key={index}>
                                    {item.title}<span>{item.description}</span>
                                </ContactUsCompanyInfotItem>
                            ))}
                        </ContactUsCompanyInfoList>
                    </ContactUsCompanyInfoWrapper>
                </ContactUsCompanyInfo>

                <ContactUsCompanyMap />
            </ContactUsCompanySection>

            <ContactUsPageCardsSection>
                {contactUsCard.map((card, index) => (
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
            </ContactUsPageCardsSection>
        </>
    )
}

ContactUsPage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(ContactUsPage)