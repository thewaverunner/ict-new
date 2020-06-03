import React from 'react'

import Head from 'next/head'

import { useForm } from 'react-hook-form'

import { withTranslation } from '../../../i18n'

import BaseButton from '../../../components/BaseButton'
import BaseSection from '../../../components/BaseSection'
import BaseSectionHeading from '../../../components/BaseSectionHeading'

import {
    NewsPageArticles,
    NewsPageArticlesSection,
    NewsPageArticlesSectionTitle,
    NewsPageArticlesSectionWrapper,
    NewsPageArticlesImage,
    NewsPageArticlesContent,
    NewsPageArticlesTitle,
    NewsPageArticlesDescription,
    NewsPageArticlesWrapper,
    NewsPagePressInquiriesSection,
    NewsPagePressInquiriesSectionWrapper,
    NewsPagePressInquiresTitle,
    NewsPagePressInquiresForm,
    InputWrapper,
    InputTitle,
    Input,
    TextareaWrapper,
    TextareaTitle,
    Textarea,
    SubmitButton
} from './index.styles'

function PressroomPage ({ t }) {
    const { register, handleSubmit, errors } = useForm()

    const onSubmit = data => console.log(data)

    return (
        <>
            <Head>
                <title>{t('PressroomPage_Head_Title')}</title>
            </Head>

            <BaseSectionHeading title={t('PressroomPage_Heading')} />

            <NewsPageArticlesSection>
                <NewsPageArticlesSectionWrapper>
                    <NewsPageArticlesSectionTitle>{t('PressroomPage_Articles_Title')}</NewsPageArticlesSectionTitle>
                        <NewsPageArticlesWrapper>
                            {[0, 1, 2, 3, 4, 5].map((_, index) => (
                                <NewsPageArticles key={index}>
                                    <NewsPageArticlesImage>
                                        <img 
                                            src="/static/images/pressroom-articles-image.svg" 
                                            alt='article-image' 
                                        />
                                    </NewsPageArticlesImage>

                                    <NewsPageArticlesContent>
                                        <NewsPageArticlesTitle>Global reach</NewsPageArticlesTitle>

                                        <NewsPageArticlesDescription>
                                            Our priority is to build global frontrunners in multiple 
                                            industries, disrupting monopolised markets by offering a 
                                            unique and robust value proposition on a global scale. The 
                                            aim of Impact Crowd Technology is to establish online global leaders.
                                        </NewsPageArticlesDescription>

                                        <BaseButton 
                                            mode={'dark'}
                                            hideBorder={true} 
                                            withArrow={true} 
                                            linkUrl={`/company/pressroom/article-${index}`}
                                        >
                                            {t('PressroomPage_Learn_More')}
                                        </BaseButton>
                                    </NewsPageArticlesContent>
                                </NewsPageArticles>
                            ))}
                        </NewsPageArticlesWrapper> 
                    </NewsPageArticlesSectionWrapper>      
            </NewsPageArticlesSection>

            <NewsPagePressInquiriesSection>
                <NewsPagePressInquiriesSectionWrapper>
                    <NewsPagePressInquiresTitle>{t('PressroomPage_Form_Title')}</NewsPagePressInquiresTitle>

                    <NewsPagePressInquiresForm onSubmit={handleSubmit(onSubmit)}> 
                        <InputWrapper>
                            <InputTitle>{t('PressroomPage_Form_Name_Input')}</InputTitle>

                            <Input 
                                name="name" 
                                unvalid={errors.name && errors.name.message ? 'true' : 'false'} 
                                ref={register({ required: true })}
                            />
                        </InputWrapper>

                        <InputWrapper>
                            <InputTitle>{t('PressroomPage_Form_Story_Input')}</InputTitle>
                            
                            <Input 
                                name="story" 
                                unvalid={errors.name && errors.name.message ? 'true' : 'false'} 
                                ref={register({ required: true })}
                            />
                        </InputWrapper>

                        <InputWrapper>
                            <InputTitle>{t('PressroomPage_Form_Email_Input')}</InputTitle>

                            <Input 
                                name="email" 
                                unvalid={errors.name && errors.name.message ? 'true' : 'false'} 
                                ref={register({
                                    required: "Required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: "Invalid email address"
                                    }
                                })}
                            />
                        </InputWrapper>

                        <InputWrapper>
                            <InputTitle>{t('PressroomPage_Form_Publication_Input')}</InputTitle>

                            <Input 
                                name="media" 
                                unvalid={errors.name && errors.name.message ? 'true' : 'false'} 
                                ref={register({ required: true })}
                            />
                        </InputWrapper>

                        <InputWrapper>
                            <InputTitle>{t('PressroomPage_Form_Phone_Input')}</InputTitle>

                            <Input 
                                name="phone" 
                                unvalid={errors.name && errors.name.message ? 'true' : 'false'} 
                                ref={register({ required: true })}
                            />
                        </InputWrapper>

                        <TextareaWrapper>
                            <TextareaTitle>{t('PressroomPage_Form_Inquiri_Input')}</TextareaTitle>

                            <Textarea
                                rows="8"
                                cols="5"
                            />       
                        </TextareaWrapper>

                        <SubmitButton type="submit">{t('PressroomPage_Form_Send')}</SubmitButton>
                    </NewsPagePressInquiresForm> 
                </NewsPagePressInquiriesSectionWrapper>    
            </NewsPagePressInquiriesSection>

            <BaseSection
                backgroundImage={'/static/images/pressroom-media-kit-banner.svg'}
                title={t('PressroomPage_Media_Banner_Title')}
                description={t('PressroomPage_Media_Banner_Description')}
                textAlign={'center'}
                buttonTitle={'Learn more'}
            />
        </>
    )
}
    
PressroomPage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})
    
export default withTranslation('common')(PressroomPage)