import React from 'react'

import BaseButton from '../BaseButton'

import {
    BaseSectionWideFullWrapper,
    BaseSectionWideFullContent,
    BaseSectionWideFullContentWrapper,
    BaseSectionWideFullImageWrapper,
    BaseSectionWideFullImage,
    BaseSectionWideFullTitle,
    BaseSectionWideFullSubtitle,
    BaseSectionWideFullDescription,

    BaseSectionWideHalfWrapper,
    BaseSectionWideHalfImageWrapper,
    BaseSectionWideHalfImage,
    BaseSectionWideHalfContent,
    BaseSectionWideHalfContentWrapper,
    BaseSectionWideHalfImageContainer,
    BaseSectionWideHalfTitle,
    BaseSectionWideHalfSubtitle,
    BaseSectionWideHalfDescription,

    BaseSectionWideShadowWrapper,
    BaseSectionWideShadowImage,
    BaseSectionWideShadowMode,
    BaseSectionWideShadowContent,
    BaseSectionWideShadowContentWrapper,
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
        imageFull,
        title,
        subtitle,
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
                    >
                        <BaseSectionWideFullImageWrapper imageResized={imageResized} src={imageUrl} />

                        <BaseSectionWideFullContent reverse={reverse}>
                            <BaseSectionWideFullContentWrapper>
                                {title && <BaseSectionWideFullTitle themeMode={themeMode} dangerouslySetInnerHTML={{ __html: title }} />}
                                {subtitle && <BaseSectionWideFullSubtitle themeMode={themeMode} dangerouslySetInnerHTML={{ __html: subtitle }} />}
                                {description && <BaseSectionWideFullDescription themeMode={themeMode} dangerouslySetInnerHTML={{ __html: description }} />}

                                {
                                    buttonTitle && (
                                        <BaseButton 
                                            mode={themeMode === 'light'} 
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
                        imageFull={imageFull}
                    >
                        <BaseSectionWideHalfImageWrapper imageResized={imageResized}>
                            <BaseSectionWideHalfImageContainer imageFull={imageFull}>
                                <BaseSectionWideHalfImage imageFull={imageFull} src={imageUrl} />
                            </BaseSectionWideHalfImageContainer>
                        </BaseSectionWideHalfImageWrapper>

                        <BaseSectionWideHalfContent reverse={reverse}>
                            <BaseSectionWideHalfContentWrapper>
                                {title && <BaseSectionWideHalfTitle themeMode={themeMode} dangerouslySetInnerHTML={{ __html: title }} />}
                                {subtitle && <BaseSectionWideHalfSubtitle themeMode={themeMode} dangerouslySetInnerHTML={{ __html: subtitle }} />}
                                {description && <BaseSectionWideHalfDescription themeMode={themeMode} dangerouslySetInnerHTML={{ __html: description }} />}
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
                            <BaseSectionWideShadowContentWrapper reverse={reverse}>
                                {title && <BaseSectionWideShadowTitle themeMode={themeMode} dangerouslySetInnerHTML={{ __html: title }} />}
                                {subtitle && <BaseSectionWideShadowSubtitle themeMode={themeMode} dangerouslySetInnerHTML={{ __html: subtitle }} />}
                                {description && <BaseSectionWideShadowDescription themeMode={themeMode} dangerouslySetInnerHTML={{ __html: description }} />}
            
                                {
                                    buttonTitle && (
                                        <BaseButton 
                                            mode={themeMode === 'light'} 
                                            withArrow={true}
                                        >
                                            {buttonTitle}
                                        </BaseButton>
                                    )
                                }
                            </BaseSectionWideShadowContentWrapper>
                        </BaseSectionWideShadowContent>
                    </BaseSectionWideShadowWrapper>
                )
            } 
        </>
    )
}

export default BaseSectionWide