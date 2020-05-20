import React from 'react'

import BaseButton from '../BaseButton'

import {
    BaseSectionWideFullWrapper,
    BaseSectionWideFullContent,
    BaseSectionWideFullContentWrapper,
    BaseSectionWideFullTitle,
    BaseSectionWideFullSubtitle,
    BaseSectionWideFullDescription,

    BaseSectionWideHalfWrapper,
    BaseSectionWideHalfImageWrapper,
    BaseSectionWideHalfImage,
    BaseSectionWideHalfContent,
    BaseSectionWideHalfContentWrapper,
    BaseSectionWideHalfTitle,
    BaseSectionWideHalfSubtitle,
    BaseSectionWideHalfDescription,

    BaseSectionWideShadowWrapper,
    BaseSectionWideShadowImage,
    BaseSectionWideShadowMode,
    BaseSectionWideShadowContent,
    BaseSectionWideShadowTitle,
    BaseSectionWideShadowSubtitle,
    BaseSectionWideShadowDescription,
} from './BaseSectionWide.styles'

function BaseSectionWide (props) {
    const {
        mode,
        themeMode,
        reverse,
        imageUrl,
        imageResized,
        title,
        subtitle,
        contentWidth,
        description, 
        buttonTitle, 
    } = props

    return (
        <>
            {
                mode === 'full' && (
                    <BaseSectionWideFullWrapper 
                        themeMode={themeMode}
                        reverse={reverse}
                        imageUrl={imageUrl}
                    >
                        <BaseSectionWideFullContent reverse={reverse}>
                            <BaseSectionWideFullContentWrapper contentWidth={contentWidth}>
                                {title && <BaseSectionWideFullTitle themeMode={themeMode}>{title}</BaseSectionWideFullTitle>}
                                {subtitle && <BaseSectionWideFullSubtitle themeMode={themeMode}>{subtitle}</BaseSectionWideFullSubtitle>}
                                {description && <BaseSectionWideFullDescription themeMode={themeMode}>{description}</BaseSectionWideFullDescription>}

                                {
                                    buttonTitle && (
                                        <BaseButton 
                                            blackStyle={themeMode === 'light'} 
                                            withArrow={true}
                                        >
                                            {buttonTitle}
                                        </BaseButton>
                                    )
                                }
                            </BaseSectionWideFullContentWrapper>
                        </BaseSectionWideFullContent>
                    </BaseSectionWideFullWrapper>
                )
            }

            {
                mode === 'half' && (
                    <BaseSectionWideHalfWrapper 
                        themeMode={themeMode}
                        reverse={reverse}
                    >
                        <BaseSectionWideHalfImageWrapper imageResized={imageResized}>
                            <BaseSectionWideHalfImage src={imageUrl} />
                        </BaseSectionWideHalfImageWrapper>

                        <BaseSectionWideHalfContent>
                            <BaseSectionWideHalfContentWrapper>
                                {title && <BaseSectionWideHalfTitle themeMode={themeMode}>{title}</BaseSectionWideHalfTitle>}
                                {subtitle && <BaseSectionWideHalfSubtitle themeMode={themeMode}>{subtitle}</BaseSectionWideHalfSubtitle>}
                                {description && <BaseSectionWideHalfDescription themeMode={themeMode}>{description}</BaseSectionWideHalfDescription>}
                            </BaseSectionWideHalfContentWrapper>
                        </BaseSectionWideHalfContent>
                    </BaseSectionWideHalfWrapper>
                )
            }

            {
                mode === 'shadow' && (
                    <BaseSectionWideShadowWrapper 
                        themeMode={themeMode}
                        reverse={reverse}
                    >
                        <BaseSectionWideShadowImage src={imageUrl} />

                        <BaseSectionWideShadowMode
                            reverse={reverse} 
                            themeMode={themeMode} 
                        />

                        <BaseSectionWideShadowContent reverse={reverse} >
                            {title && <BaseSectionWideShadowTitle themeMode={themeMode}>{title}</BaseSectionWideShadowTitle>}
                            {subtitle && <BaseSectionWideShadowSubtitle themeMode={themeMode}>{subtitle}</BaseSectionWideShadowSubtitle>}
                            {description && <BaseSectionWideShadowDescription themeMode={themeMode}>{description}</BaseSectionWideShadowDescription>}
        
                            {
                                buttonTitle && (
                                    <BaseButton 
                                        blackStyle={themeMode === 'light'} 
                                        withArrow={true}
                                    >
                                        {buttonTitle}
                                    </BaseButton>
                                )
                            }
                        </BaseSectionWideShadowContent>
                    </BaseSectionWideShadowWrapper>
                )
            }
        </>
    )
}

export default BaseSectionWide