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
    NewsPagePressInquiresInputTitle,
    NewsPagePressInquiresInput,
    NewsPagePressInquiresTextarea,
    NewsPagePressInquiresTextareaTitle,
    NewsPagePressInquiresSubmit,
} from './index.styles'

function PressroomPage ({ t }) {
    const { register, handleSubmit, errors } = useForm()

    const onSubmit = data => console.log(data)

    return (
        <>
            <Head>
                <title>{t('PressroomPage-Title')}</title>
            </Head>

            <BaseSectionHeading title={t('PressroomPage-Heading')}/>

            <NewsPageArticlesSection>
                <NewsPageArticlesSectionWrapper>
                    <NewsPageArticlesSectionTitle>Articles</NewsPageArticlesSectionTitle>
                        <NewsPageArticlesWrapper>
                            {[0, 1, 2, 3, 4, 5].map((_, index) => 
                                <NewsPageArticles key={index}>
                                    <NewsPageArticlesImage>
                                        <img src="/static/images/pressroom-articles-image.svg" />
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
                                            blackStyle 
                                            hideBorder={true} 
                                            withArrow={true} 
                                            linkUrl={`/pressroom/article-${index}`}
                                        >
                                            {t('PressroomPage-Learn-More')}
                                        </BaseButton>
                                    </NewsPageArticlesContent>
                                </NewsPageArticles>
                            )}
                        </NewsPageArticlesWrapper> 
                    </NewsPageArticlesSectionWrapper>      
            </NewsPageArticlesSection>

            <NewsPagePressInquiriesSection>
                <NewsPagePressInquiriesSectionWrapper>
                    <NewsPagePressInquiresTitle>{t('PressroomPage-Form-Title')}</NewsPagePressInquiresTitle>

                    <NewsPagePressInquiresForm onSubmit={handleSubmit(onSubmit)}> 
                        <NewsPagePressInquiresInputTitle>{t('PressroomPage-Form-Name-Input')}</NewsPagePressInquiresInputTitle>           

                        <NewsPagePressInquiresInput 
                            name="name" 
                            ref={register({ required: true })} 
                        /> 

                        <NewsPagePressInquiresInputTitle>{t('PressroomPage-Form-Story-Input')}</NewsPagePressInquiresInputTitle>           

                        <NewsPagePressInquiresInput 
                            name="story" 
                            ref={register({ required: true })} 
                        />

                        <NewsPagePressInquiresInputTitle>{t('PressroomPage-Form-Email-Input')}</NewsPagePressInquiresInputTitle>           

                        <NewsPagePressInquiresInput 
                            name="email" 
                            ref={register({
                                required: "Required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "Invalid email address"
                                }
                            })}
                        />

                        <NewsPagePressInquiresInputTitle>{t('PressroomPage-Form-Publication-Input')}</NewsPagePressInquiresInputTitle>           

                        <NewsPagePressInquiresInput 
                            name="media" 
                            ref={register({ required: true })} 
                        />

                        <NewsPagePressInquiresInputTitle>{t('PressroomPage-Form-Phone-Input')}</NewsPagePressInquiresInputTitle>           

                        <NewsPagePressInquiresInput 
                            name="phone" 
                            ref={register({ required: true })} 
                        /> 

                        <NewsPagePressInquiresTextareaTitle>{t('PressroomPage-Form-Inquiri-Input')}</NewsPagePressInquiresTextareaTitle> 

                        <NewsPagePressInquiresTextarea
                            rows="9"
                            cols="5"
                        />

                        <NewsPagePressInquiresSubmit
                            type="submit" 
                            value="Send"
                        />    
                    </NewsPagePressInquiresForm>
                </NewsPagePressInquiriesSectionWrapper>    
            </NewsPagePressInquiriesSection>

            <BaseSection
                backgroundImage={'/static/images/pressroom-media-kit-banner.svg'}
                title={t('PressroomPage-Media-Banner-Title')}
                description={t('PressroomPage-Media-Banner-Description')}
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