import React from 'react'

import Head from 'next/head'
import { withTranslation } from '../../i18n'

import { useForm } from 'react-hook-form'

import BaseSectionHeading from '../../components/BaseSectionHeading'

import {
    ContactUsPageFormTitle,
    ContactUsPageForm,
    ContactUsPageFormWrapper,
    
    InputWrapper,
    InputTitle,
    Input,
    TextareaWrapper,
    TextareaTitle,
    Textarea,
    SubmitButton
} from './index.styles'

function ContactUsPage ({ t }) {
    const { register, handleSubmit, errors } = useForm()

    const onSubmit = data => console.log(data)

    return (
        <>
            <Head>
                <title>{t('ContactUsPage-Title')}</title>
            </Head>

            <BaseSectionHeading 
                title={'Contact Us'}
                mainPage={false}
            />

            <ContactUsPageFormWrapper>
                <ContactUsPageFormTitle>{t('ContactUsPage-Title')}</ContactUsPageFormTitle>

                <ContactUsPageForm onSubmit={handleSubmit(onSubmit)}>
                    <InputWrapper>
                        <InputTitle>{t('OpenPositionApplyPage-ApplicationForm-Name')}</InputTitle>

                        <Input 
                            name="name" 
                            unvalid={errors.name && errors.name.message ? 'true' : 'false'} 
                            ref={register({ required: true })}
                        />
                    </InputWrapper>

                    <InputWrapper>
                        <InputTitle>{t('ContactUsPage-Topic-Title')}</InputTitle>

                        <Input 
                          name="topic" 
                          unvalid={errors.name && errors.name.message ? 'true' : 'false'} 
                          ref={register({ required: true })} 
                        />
                    </InputWrapper>
                    
                    <InputWrapper>
                        <InputTitle>{t('OpenPositionApplyPage-ApplicationForm-Email')}</InputTitle>

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
                        <TextareaTitle>{t('ContactUsPage-Textarea-Title')}</TextareaTitle>

                        <Textarea
                            rows="9"
                            cols="5"
                        />       
                    </TextareaWrapper>

                    <SubmitButton type="submit">{t('ContactUsPage-Send')}</SubmitButton>
                </ContactUsPageForm>
            </ContactUsPageFormWrapper>

        </>
    )
}

ContactUsPage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(ContactUsPage)