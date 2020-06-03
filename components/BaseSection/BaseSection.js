import React from 'react'

import BaseButton from '../BaseButton'

import {
    BaseSectionWrapper,
    BaseSectionTitle,
    BaseSectionSubtitle,
    BaseSectionDescription,
    BaseSectionContent,
} from './BaseSection.styles'

function BaseSection (props) {
    const { 
        buttonStyle, 
        backgroundImage, 
        title,
        titleColor,
        textAlign,
        subtitle,
        description, 
        buttonTitle, 
        buttonLink,
    } = props

    return (
        <BaseSectionWrapper 
            titleColor={titleColor} 
            backgroundImage={backgroundImage}
            buttonTitle={buttonTitle} 
        >
            <BaseSectionContent titleColor={titleColor} textAlign={textAlign}>
                {title && <BaseSectionTitle titleColor={titleColor}>{title}</BaseSectionTitle>}
                {subtitle && <BaseSectionSubtitle titleColor={titleColor}>{subtitle}</BaseSectionSubtitle>}
                {description && <BaseSectionDescription buttonTitle={buttonTitle} titleColor={titleColor}>{description}</BaseSectionDescription>}
                {buttonTitle && <BaseButton mode={buttonStyle}>{buttonTitle}</BaseButton>}
            </BaseSectionContent>
        </BaseSectionWrapper>
    )
}

export default BaseSection