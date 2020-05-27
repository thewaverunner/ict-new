import React, { useCallback } from 'react'

import Head from 'next/head'

import { useForm } from 'react-hook-form'
import { useDropzone } from 'react-dropzone'

import PhoneInput from 'react-phone-input-2'

import { withTranslation } from '../../../../../i18n'
import { useMediaQuery } from '../../../../../utils/hooks'

import BaseButton from '../../../../../components/BaseButton'
import BaseSection from '../../../../../components/BaseSection'
import BaseSectionHeading from '../../../../../components/BaseSectionHeading'

import {
    OpenPositionApplyPageContent,
    OpenPositionApplyPageTitle,
    OpenPositionApplyPageForm,
    OpenPositionApplyPageInputPhone,
    OpenPositionApplyPageInputFile,
    OpenPositionApplyPageInputFileImages,
    OpenPositionApplyPageInputFileMessage,
    OpenPositionApplyPageInputFileWrapper,
    OpenPositionApplyPageWrapper,
    InputWrapper,
    InputTitle,
    Input,
    TextareaWrapper,
    TextareaTitle,
    Textarea,
    SubmitButton,

    //
    CorporateGovernancePartnershipsSection,
    CorporateGovernancePartnershipsImage,
    CorporateGovernancePartnershipsContent,
    CorporateGovernancePartnershipsContentWrapper,
    CorporateGovernancePartnershipsTitle,
    CorporateGovernancePartnershipsDescription,
    CorporateGovernancePartnershipsDescriptionWrapper
} from './index.styles'


function OpenPositionApplyPage ({ t }) {
    const isMobile = useMediaQuery('(min-width: 552px)')
    const isTablet = useMediaQuery('(min-width: 768px)')
    

    const onDrop = useCallback(acceptedFiles => console.log(acceptedFiles), [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    const { register, handleSubmit, errors } = useForm()

    const onSubmit = data => console.log(data)

    let PhoneInputStyles = {} 

    PhoneInputStyles = OpenPositionApplyPageInputPhone.desktop

    
    return (
        <>
            <Head>
                <title>{t('OpenPositionApplyPage-Title')}</title>
            </Head>

            {/* <BaseSectionHeading title={t('OpenPositionApplyPage-Heading')} /> */}

            <BaseSection
                backgroundImage={'/static/images/open-positions-job-title.svg'}
                title={t('OpenPositionsJobPage-Marketing-Banner-Title')}
                titleColor={'black'}
                subtitle={t('OpenPositionsJobPage-Marketing-Banner-Subtitle')}
                textAlign={'center'}
            />

            <OpenPositionApplyPageContent>
                <OpenPositionApplyPageWrapper>
                    <OpenPositionApplyPageTitle>{t('OpenPositionApplyPage-ApplicationForm-Title')}</OpenPositionApplyPageTitle>

                    <OpenPositionApplyPageForm onSubmit={handleSubmit(onSubmit)}>
                        <InputWrapper>
                            <InputTitle>{t('OpenPositionApplyPage-ApplicationForm-Name')}</InputTitle>

                            <Input 
                                name="name" 
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

                        <InputWrapper>
                            <InputTitle>{t('OpenPositionApplyPage-ApplicationForm-Phone')}</InputTitle>

                            <PhoneInput 
                                country={'se'} 
                                inputStyle={PhoneInputStyles.inputStyle} 
                                containerStyle={PhoneInputStyles.containerStyle}
                                buttonStyle={PhoneInputStyles.buttonStyle}
                                masks={{ se: '... ... ...' }}
                            />    
                        </InputWrapper>

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

                        <TextareaWrapper>
                            <TextareaTitle>
                                <strong>{t('OpenPositionApplyPage-ApplicationForm-Cover-Letter-Title')}</strong> 
                                {t('OpenPositionApplyPage-ApplicationForm-Cover-Letter-Description')}
                            </TextareaTitle>

                            <Textarea
                                rows="8"
                                cols="5"
                            />       
                        </TextareaWrapper>

                        <SubmitButton type="submit">Send</SubmitButton>
                    </OpenPositionApplyPageForm>
                </OpenPositionApplyPageWrapper>
            </OpenPositionApplyPageContent>

            <CorporateGovernancePartnershipsSection>
                <CorporateGovernancePartnershipsImage>
                    <img src="/static/images/company-governance-parthnership.svg" />
                </CorporateGovernancePartnershipsImage> 
            
                <CorporateGovernancePartnershipsContent>
                    <CorporateGovernancePartnershipsContentWrapper>
                        <CorporateGovernancePartnershipsDescriptionWrapper>
                            <CorporateGovernancePartnershipsTitle>Browse all open positions</CorporateGovernancePartnershipsTitle>

                            <CorporateGovernancePartnershipsDescription>
                                We are always looking for talented people to 
                                join our force. Please don’t hesitate to apply 
                                to any of our currently open positions within the company.
                            </CorporateGovernancePartnershipsDescription>

                            <BaseButton blackStyle>View Open Positions</BaseButton>
                        </CorporateGovernancePartnershipsDescriptionWrapper>
                    </CorporateGovernancePartnershipsContentWrapper>
                </CorporateGovernancePartnershipsContent>
            </CorporateGovernancePartnershipsSection>
            {/* <BaseSection
                backgroundImage={'/static/images/open-positions-join-our-team.svg'}
                title={t('OpenPositionsPage-JoinUs-Banner-Title')}
                titleColor={'black'}
                description={t('OpenPositionsPage-JoinUs-Banner-Description')}
                buttonTitle={'Contact Us'}
                buttonStyle={'blackStyle'}
            /> */}
        </>
    )
}

OpenPositionApplyPage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(OpenPositionApplyPage)