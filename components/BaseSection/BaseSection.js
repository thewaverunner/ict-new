import React from 'react'

import BaseButton from '../BaseButton'

import {
    BaseSectionWrapper,
    BaseSectionTitle,
    BaseSectionSubtitle,
    BaseSectionDescription,
    BaseSectionContent
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
        buttonLink 
    } = props

    return (
        <BaseSectionWrapper backgroundImage={backgroundImage}>
            <BaseSectionContent titleColor={titleColor} textAlign={textAlign}>
                {title && <BaseSectionTitle titleColor={titleColor}>{title}</BaseSectionTitle>}
                {subtitle && <BaseSectionSubtitle>{subtitle}</BaseSectionSubtitle>}
                {description && <BaseSectionDescription titleColor={titleColor}>{description}</BaseSectionDescription>}
                {buttonTitle && <BaseButton blackStyle={buttonStyle}>{buttonTitle}</BaseButton>}
            </BaseSectionContent>
        </BaseSectionWrapper>
    )
}

export default BaseSection