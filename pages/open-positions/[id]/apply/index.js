import React, { useCallback } from 'react'

import Head from 'next/head'

import { useForm } from 'react-hook-form'
import { useDropzone } from 'react-dropzone'

import PhoneInput from 'react-phone-input-2'

import BaseSection from '../../../../components/BaseSection'
import BaseSectionHeading from '../../../../components/BaseSectionHeading'

import { useMediaQuery } from '../../../../utils/hooks'

import {
    OpenPositionApplyPageTitle,
    OpenPositionApplyPageForm,
    OpenPositionApplyPageInput,
    OpenPositionApplyInputError,
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
                <title>Job Title - Apply</title>
            </Head>

            <BaseSectionHeading 
                title={'Work with us'}
            />

            <BaseSection
                backgroundImage={'/static/images/open-positions-job-title.svg'}
                title={'Job title'}
                titleColor={'black'}
                textAlign={'center'}
                subtitle={'Marketing & Sales - Stockholm'}
            />

            <OpenPositionApplyPageWrapper>
                <OpenPositionApplyPageTitle>Application Form</OpenPositionApplyPageTitle>

                <OpenPositionApplyPageForm onSubmit={handleSubmit(onSubmit)}>
                    <OpenPositionApplyPageInputTitle>Name</OpenPositionApplyPageInputTitle> 

                    <OpenPositionApplyPageInput 
                        name="name" 
                        unvalid={errors.name && errors.name.message ? 'true' : 'false'} 
                        ref={register({ required: true })} 
                    />

                    {errors.name && errors.name.type === 'required' && <OpenPositionApplyInputError>Required</OpenPositionApplyInputError>}

                    <OpenPositionApplyPageInputTitle>Email</OpenPositionApplyPageInputTitle> 

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

                    {errors.email && errors.email.type === 'required' && <OpenPositionApplyInputError>Required</OpenPositionApplyInputError>}
                    {errors.email && errors.email.type === 'patern' && <OpenPositionApplyInputError>{errors.email.message}</OpenPositionApplyInputError>}

                    <OpenPositionApplyPageInputTitle>Phone</OpenPositionApplyPageInputTitle> 

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
                                <OpenPositionApplyPageInputFileMessage>Files Uploaded</OpenPositionApplyPageInputFileMessage>
                            )
                            : (
                                <OpenPositionApplyPageInputFileMessage>
                                    <OpenPositionApplyPageInputFileImages>
                                        <img src="/static/images/open-positions-apply-page-upload-icon.svg" />
                                    </OpenPositionApplyPageInputFileImages>

                                    <strong>Drag and drop your CV here </strong> <br/>
                                    You can also upload files by <br/>
                                    <span> clicking here</span>
                                </OpenPositionApplyPageInputFileMessage>
                            )
                        }
                    </OpenPositionApplyPageInputFileWrapper>

                    <OpenPositionApplyPageTextareaTitle><strong>Cover Letter</strong> optional </OpenPositionApplyPageTextareaTitle> 

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
                title={'Join our team'}
                titleColor={'black'}
                description={'We are always looking for talented people to join our force. Please don’t hesitate to apply to any of our currently open positions within the company.'}
                buttonTitle={'Contact Us'}
                buttonStyle={'blackStyle'}
            />
        </>
    )
}

export default OpenPositionApplyPage