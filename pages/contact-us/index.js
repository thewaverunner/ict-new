import React from 'react'

import Head from 'next/head'
import { withTranslation } from '../../i18n'

// import { useForm } from 'react-hook-form'

// import BaseSectionHeading from '../../components/BaseSectionHeading'

import {
    ContactUsPageTopSection,
    ContactUsPageTopSectionTitle,
    ContactUsPageCardsSection,
    ContactUsPageCard,
    ContactUsPageCardImage,
    ContactUsPageCardContentWrapper,
    ContactUsPageCardContentTitleWrapper,
    ContactUsPageCardContentTitle,
    ContactUsPageCardContentArrow,
    ContactUsPageCardContentDescription,
    ContactUsAdressSection,
    ContactUsAdressInfo,
    ContactUsAdressMap,
    ContactUsAdressContentWrapper,
    ContactUsAdressContentTitle,
    ContactUsAdressContentList,
    ContactUsAdressContentItem,
    // ContactUsPageFormTitle,
    // ContactUsPageForm,
    // ContactUsPageFormWrapper,
    // InputWrapper,
    // InputTitle,
    // Input,
    // TextareaWrapper,
    // TextareaTitle,
    // Textarea,
    // SubmitButton
} from './index.styles'

function ContactUsPage ({ t }) {
    // const { register, handleSubmit, errors } = useForm()

    // const onSubmit = data => console.log(data)

    const adressItems = [
        {
           title: 'Founded in',
           description: 'Madrid, Spain',     
        },
        {
            title: 'Tax Number*',
            description: 'B88429436',     
        },
        {
            title: 'Vat Number',
            description: 'ESB88429436',     
        },
        {
            title: 'Email',
            description: 'info@impactct.com',     
        },
        {
            title: '*Certificado de Identificación Fiscal',
            description: null,     
        },
    ]

    const contactUsCard = [
        {
            image: 'static/images/press-card-image.svg',
            title: 'Press',
            description: 'ICT meets the strictest demands on compliance, transparency, as well as legal requirements, including tax laws and the relevant regulations.',
        },
        {
            image: 'static/images/mediakit-card-image.svg',
            title: 'Media Kit',
            description: 'ICT meets the strictest demands on compliance, transparency, as well as legal requirements, including tax laws and the relevant regulations.',
        },
    ]

    return (
        <>
            <Head>
                <title>{t('ContactUsPage_Head_Title')}</title>
            </Head>

            <ContactUsPageTopSection>
                <ContactUsPageTopSectionTitle>Contact Us</ContactUsPageTopSectionTitle>
            </ContactUsPageTopSection>

            <ContactUsAdressSection>
                <ContactUsAdressInfo>
                    <ContactUsAdressContentWrapper>
                        <ContactUsAdressContentTitle>Impact Crowd Technology S.L</ContactUsAdressContentTitle>

                        <ContactUsAdressContentList>
                            {adressItems.map((item, index) => (
                                <ContactUsAdressContentItem key={index}>{item.title}<span>{item.description}</span></ContactUsAdressContentItem>
                            ))}
                        </ContactUsAdressContentList>
                    </ContactUsAdressContentWrapper>
                </ContactUsAdressInfo>
                <ContactUsAdressMap></ContactUsAdressMap>
            </ContactUsAdressSection>

            <ContactUsPageCardsSection>
                {contactUsCard.map((card, index) => (
                    <ContactUsPageCard key={index}>
                        <ContactUsPageCardImage>
                            <img src={card.image}/>
                        </ContactUsPageCardImage>
    
                        <ContactUsPageCardContentWrapper>
                            <ContactUsPageCardContentTitleWrapper>
                                    <ContactUsPageCardContentTitle href='#'>{card.title}</ContactUsPageCardContentTitle>
                                    <ContactUsPageCardContentArrow><img src='/static/images/card-arrow-image.svg' /></ContactUsPageCardContentArrow>
                            </ContactUsPageCardContentTitleWrapper>
    
                            <ContactUsPageCardContentDescription>{card.description}</ContactUsPageCardContentDescription>
                        </ContactUsPageCardContentWrapper>
                    </ContactUsPageCard>    
                ))}                    
            </ContactUsPageCardsSection>

            {/* <BaseSectionHeading 
                title={'Contact Us'}
                mainPage={false}
            />

            <ContactUsPageFormWrapper>
                <ContactUsPageFormTitle>{t('ContactUsPage_Title')}</ContactUsPageFormTitle>

                <ContactUsPageForm onSubmit={handleSubmit(onSubmit)}>
                    <InputWrapper>
                        <InputTitle>{t('OpenPositionApplyPage_ApplicationForm_Name')}</InputTitle>

                        <Input 
                            name="name" 
                            unvalid={errors.name && errors.name.message ? 'true' : 'false'} 
                            ref={register({ required: true })}
                        />
                    </InputWrapper>

                    <InputWrapper>
                        <InputTitle>{t('ContactUsPage_Topic_Title')}</InputTitle>

                        <Input 
                          name="topic" 
                          unvalid={errors.name && errors.name.message ? 'true' : 'false'} 
                          ref={register({ required: true })} 
                        />
                    </InputWrapper>
                    
                    <InputWrapper>
                        <InputTitle>{t('OpenPositionApplyPage_ApplicationForm_Email')}</InputTitle>

                        <Input 
                            name="email"
                            unvalid={errors.email && errors.email.message ? 'true' : 'false'}
                            ref={register({
                                required: "Required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "Invalid email address"
                                }
                            })}
                        />
                    </InputWrapper>

                    <TextareaWrapper>
                        <TextareaTitle>{t('ContactUsPage_Textarea_Title')}</TextareaTitle>

                        <Textarea
                            rows="9"
                            cols="5"
                        />       
                    </TextareaWrapper>

                    <SubmitButton type="submit">{t('ContactUsPage_Send')}</SubmitButton>
                </ContactUsPageForm>
            </ContactUsPageFormWrapper> */}

        </>
    )
}

ContactUsPage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(ContactUsPage)