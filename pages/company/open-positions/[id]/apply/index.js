import React, { useCallback, useState } from 'react'

import Head from 'next/head'

import axios from 'axios'

import { useForm } from 'react-hook-form'
import { useDropzone } from 'react-dropzone'

import PhoneInput from 'react-phone-input-2'

import { withTranslation } from '../../../../../i18n'

import BaseButton from '../../../../../components/BaseButton'
import BaseSection from '../../../../../components/BaseSection'


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
    CorporateGovernancePartnershipsSection,
    CorporateGovernancePartnershipsImage,
    CorporateGovernancePartnershipsContent,
    CorporateGovernancePartnershipsContentWrapper,
    CorporateGovernancePartnershipsTitle,
    CorporateGovernancePartnershipsDescription,
    CorporateGovernancePartnershipsDescriptionWrapper
} from './index.styles'


function OpenPositionApplyPage ({ t }) {
    const [phone, setPhone] = useState()

    const onDrop = useCallback(acceptedFiles => console.log(acceptedFiles) , [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    const { register, handleSubmit, errors } = useForm()

    const axiosConfig = {
        headers: {
            Authorization: "Token token=6Q185JczKY8NpY-CPQaxMCwJYzIT-juueOVI2SAv",
            Accept: "application/vnd.api+json",
            "X-Api-Version": 20161108,
        },
    }

    const onSubmit = data => {
        const requestData = {
            data: {
                type: "candidates",
                attributes: {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    pitch: data.pitch,
                    phone: phone,
                }
            }
        }

        axios.post("url", axiosConfig, JSON.stringify(requestData))
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    return (
        <>
            <Head>
                <title>{t('OpenPositionApplyPage_Head_Title')}</title>
            </Head>

            <BaseSection
                backgroundImage={'/static/images/open-positions-job-title.svg'}
                title={t('OpenPositionsJobPage_Marketing_Banner_Title')}
                titleColor={'black'}
                subtitle={t('OpenPositionsJobPage_Marketing_Banner_Subtitle')}
                textAlign={'center'}
            />

            <OpenPositionApplyPageContent>
                <OpenPositionApplyPageWrapper>
                    <OpenPositionApplyPageTitle>{t('OpenPositionApplyPage_ApplicationForm_Title')}</OpenPositionApplyPageTitle>

                    <OpenPositionApplyPageForm onSubmit={handleSubmit(onSubmit)}>
                        <InputWrapper>
                            <InputTitle>{t('OpenPositionApplyPage_ApplicationForm_FirstName')}</InputTitle>

                            <Input 
                                name="firstName" 
                                unvalid={errors.name && errors.name.message ? 'true' : 'false'} 
                                ref={register({ required: true })}
                            />
                        </InputWrapper>

                        <InputWrapper>
                            <InputTitle>{t('OpenPositionApplyPage_ApplicationForm_LastName')}</InputTitle>

                            <Input 
                                name="lastName" 
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

                        <InputWrapper>
                            <InputTitle>{t('OpenPositionApplyPage_ApplicationForm_Phone')}</InputTitle>

                            <PhoneInput 
                                country={'se'} 
                                inputStyle={OpenPositionApplyPageInputPhone.inputStyle} 
                                containerStyle={OpenPositionApplyPageInputPhone.containerStyle}
                                buttonStyle={OpenPositionApplyPageInputPhone.buttonStyle}
                                masks={{ se: '... ... ...' }}
                                value={phone}
                                onChange={setPhone}
                            />    
                        </InputWrapper>

                        <OpenPositionApplyPageInputFileWrapper {...getRootProps()}>
                            <OpenPositionApplyPageInputFile {...getInputProps()} />
                        
                            {
                                isDragActive 
                                ? (
                                    <OpenPositionApplyPageInputFileMessage>{t('OpenPositionApplyPage_ApplicationForm_Upload_Success')}</OpenPositionApplyPageInputFileMessage>
                                )
                                : (
                                    <OpenPositionApplyPageInputFileMessage>
                                        <OpenPositionApplyPageInputFileImages>
                                            <img 
                                                src="/static/images/open-positions-apply-page-upload-icon.svg" 
                                                alt="upload"
                                            />
                                        </OpenPositionApplyPageInputFileImages>

                                        <strong>{t('OpenPositionApplyPage_ApplicationForm_Upload_Title')}</strong> <br/>
                                        {t('OpenPositionApplyPage_ApplicationForm_Upload_Description')} <br/>
                                        <span>{t('OpenPositionApplyPage_ApplicationForm_Upload_ClickMessage')}</span>
                                    </OpenPositionApplyPageInputFileMessage>
                                )
                            }
                        </OpenPositionApplyPageInputFileWrapper>

                        <TextareaWrapper>
                            <TextareaTitle>
                                <strong>{t('OpenPositionApplyPage_ApplicationForm_Cover_Letter_Title')}</strong> 
                                {t('OpenPositionApplyPage_ApplicationForm_Cover_Letter_Description')}
                            </TextareaTitle>

                            <Textarea
                                name="pitch"
                                rows="8"
                                cols="5"
                                ref={register}
                            />       
                        </TextareaWrapper>

                        <SubmitButton type="submit"> {t('OpenPositionApplyPage_ApplicationForm_Send')}</SubmitButton>
                    </OpenPositionApplyPageForm>
                </OpenPositionApplyPageWrapper>
            </OpenPositionApplyPageContent>

            <CorporateGovernancePartnershipsSection>
                <CorporateGovernancePartnershipsImage backgroundStyle={'white'}>
                    <img 
                        src="/static/images/company-parthership.svg" 
                        alt="company-parthership"
                    />
                </CorporateGovernancePartnershipsImage> 
            
                <CorporateGovernancePartnershipsContent backgroundStyle={'white'}>
                    <CorporateGovernancePartnershipsContentWrapper>
                        <CorporateGovernancePartnershipsDescriptionWrapper>
                            <CorporateGovernancePartnershipsTitle>{t('OpenPositionApplyPage_ParthershipSection_Title')}</CorporateGovernancePartnershipsTitle>
                            <CorporateGovernancePartnershipsDescription>{t('OpenPositionApplyPage_ParthershipSection_Description')}</CorporateGovernancePartnershipsDescription>
                            
                            <BaseButton mode={'dark'}>{t('OpenPositionApplyPage_ParthershipSection_Button')}</BaseButton>
                        </CorporateGovernancePartnershipsDescriptionWrapper>
                    </CorporateGovernancePartnershipsContentWrapper>
                </CorporateGovernancePartnershipsContent>
            </CorporateGovernancePartnershipsSection>
        </>
    )
}

OpenPositionApplyPage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(OpenPositionApplyPage)