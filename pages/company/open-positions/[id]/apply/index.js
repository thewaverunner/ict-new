import React, { useCallback } from 'react'

import Head from 'next/head'

import { useForm } from 'react-hook-form'
import { useDropzone } from 'react-dropzone'

import PhoneInput from 'react-phone-input-2'

import { withTranslation } from '../../../../../i18n'
import { useMediaQuery } from '../../../../../utils/hooks'

import BaseSection from '../../../../../components/BaseSection'
import BaseSectionHeading from '../../../../../components/BaseSectionHeading'

import {
    OpenPositionApplyPageTitle,
    OpenPositionApplyPageForm,
    OpenPositionApplyPageInput,
    OpenPositionApplyPageInputPhone,
    OpenPositionApplyPageInputFile,
    OpenPositionApplyPageInputFileImages,
    OpenPositionApplyPageInputFileMessage,
    OpenPositionApplyPageInputFileWrapper,
    OpenPositionApplyPageInputTitle,
    OpenPositionApplyPageWrapper,
    OpenPositionApplyPageTextarea,
    OpenPositionApplyPageTextareaTitle,
    OpenPositionApplyPageSubmit
} from './index.styles'


function OpenPositionApplyPage ({ t }) {
    const isMobile = useMediaQuery('(min-width: 552px)')
    const isTablet = useMediaQuery('(min-width: 768px)')

    const onDrop = useCallback(acceptedFiles => console.log(acceptedFiles), [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    const { register, handleSubmit, errors } = useForm()

    const onSubmit = data => console.log(data)

    let PhoneInputStyles = {} 

    if (isMobile) {
        PhoneInputStyles = OpenPositionApplyPageInputPhone.mobile
    } else if (isTablet) {
        PhoneInputStyles = OpenPositionApplyPageInputPhone.tablet
    } else {
        PhoneInputStyles = OpenPositionApplyPageInputPhone.desktop
    }
    
    return (
        <>
            <Head>
                <title>{t('OpenPositionApplyPage-Title')}</title>
            </Head>

            <BaseSectionHeading title={t('OpenPositionApplyPage-Heading')} />

            <BaseSection
                backgroundImage={'/static/images/open-positions-job-title.svg'}
                title={t('OpenPositionsJobPage-Marketing-Banner-Title')}
                titleColor={'black'}
                subtitle={t('OpenPositionsJobPage-Marketing-Banner-Subtitle')}
                textAlign={'center'}
            />

            <OpenPositionApplyPageWrapper>
                <OpenPositionApplyPageTitle>{t('OpenPositionApplyPage-ApplicationForm-Title')}</OpenPositionApplyPageTitle>

                <OpenPositionApplyPageForm onSubmit={handleSubmit(onSubmit)}>
                    <OpenPositionApplyPageInputTitle>{t('OpenPositionApplyPage-ApplicationForm-Name')}</OpenPositionApplyPageInputTitle> 

                    <OpenPositionApplyPageInput 
                        name="name" 
                        unvalid={errors.name && errors.name.message ? 'true' : 'false'} 
                        ref={register({ required: true })} 
                    />

                    <OpenPositionApplyPageInputTitle>{t('OpenPositionApplyPage-ApplicationForm-Email')}</OpenPositionApplyPageInputTitle> 

                    <OpenPositionApplyPageInput
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

                    <OpenPositionApplyPageInputTitle>{t('OpenPositionApplyPage-ApplicationForm-Phone')}</OpenPositionApplyPageInputTitle> 

                    <PhoneInput 
                        country={'se'} 
                        inputStyle={PhoneInputStyles.inputStyle} 
                        containerStyle={PhoneInputStyles.containerStyle}
                        buttonStyle={PhoneInputStyles.buttonStyle}
                        masks={{ se: '... ... ...' }}
                    />

                    <OpenPositionApplyPageInputFileWrapper {...getRootProps()}>
                        <OpenPositionApplyPageInputFile {...getInputProps()} />
                    
                        {
                            isDragActive 
                            ? (
                                <OpenPositionApplyPageInputFileMessage>{t('OpenPositionApplyPage-ApplicationForm-Upload-Success')}</OpenPositionApplyPageInputFileMessage>
                            )
                            : (
                                <OpenPositionApplyPageInputFileMessage>
                                    <OpenPositionApplyPageInputFileImages>
                                        <img src="/static/images/open-positions-apply-page-upload-icon.svg" />
                                    </OpenPositionApplyPageInputFileImages>

                                    <strong>{t('OpenPositionApplyPage-ApplicationForm-Upload_Title')}</strong> <br/>
                                    {t('OpenPositionApplyPage-ApplicationForm-Upload_Description')} <br/>
                                    <span>{t('OpenPositionApplyPage-ApplicationForm-Upload-ClickMessage')}</span>
                                </OpenPositionApplyPageInputFileMessage>
                            )
                        }
                    </OpenPositionApplyPageInputFileWrapper>

                    <OpenPositionApplyPageTextareaTitle>
                        <strong>{t('OpenPositionApplyPage-ApplicationForm-Cover-Letter-Title')}</strong> 
                        {t('OpenPositionApplyPage-ApplicationForm-Cover-Letter-Description')}
                    </OpenPositionApplyPageTextareaTitle> 

                    <OpenPositionApplyPageTextarea
                        rows="9"
                        cols="5"
                    />

                    <OpenPositionApplyPageSubmit
                        type="submit" 
                        value="Send"
                    />           
                </OpenPositionApplyPageForm>
            </OpenPositionApplyPageWrapper>

            <BaseSection
                backgroundImage={'/static/images/open-positions-join-our-team.svg'}
                title={t('OpenPositionsPage-JoinUs-Banner-Title')}
                titleColor={'black'}
                description={t('OpenPositionsPage-JoinUs-Banner-Description')}
                buttonTitle={'Contact Us'}
                buttonStyle={'blackStyle'}
            />
        </>
    )
}

OpenPositionApplyPage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(OpenPositionApplyPage)