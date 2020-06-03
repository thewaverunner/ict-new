import React from 'react'

import Head from 'next/head'

import { withTranslation } from '../../i18n'

import BaseCard from '../../components/BaseCard'

import {
    ContactUsPageTopSection,
    ContactUsPageTopSectionTitle,
    ContactUsPageCardsSection,
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
                                    {item.title}
                                    <span>{item.description}</span>
                                </ContactUsCompanyInfotItem>
                            ))}
                        </ContactUsCompanyInfoList>
                    </ContactUsCompanyInfoWrapper>
                </ContactUsCompanyInfo>

                <ContactUsCompanyMap />
            </ContactUsCompanySection>

            <ContactUsPageCardsSection>
                {contactUsCard.map((card, index) => (
                    <BaseCard
                        key={index}
                        image={card.image}
                        title={card.title}
                        description={card.description}
                    />
                ))}                    
            </ContactUsPageCardsSection>
        </>
    )
}

ContactUsPage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(ContactUsPage)