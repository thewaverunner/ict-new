import React from 'react'

import BaseButton from '../BaseButton'

import {
    Impact,
    ImpactDescription,
    ImpactTitle,
    ImpactContent,
    ImpactSection,
    ImpactSectionImage,
    ImpactSectionContent,
    ImpactSectionDescription,
    ImpactSectionTitle,
    ImpactSectionWrapper,
    AboutBottomSection,
    AboutBottomDescription,
    AboutBottomTitle,
    AboutBottomContent,
} from './BaseSectionWide.styles'

function BaseSectionWide (props) {
    const {
        backgroundImageMode,
        backgroundImageDirection,
        buttonStyle, 
        backgroundImage, 
        title,
        titleColor,
        subtitle,
        description, 
        buttonTitle, 
        buttonLink 
    } = props

    return (
        <>
            {
                backgroundImageMode === 'full' && (
                    <Impact backgroundImage={backgroundImage}>
                        <ImpactDescription>
                            <ImpactTitle>{title}</ImpactTitle>
                            <ImpactContent>{description}</ImpactContent>

                            <BaseButton>Learn more <span /></BaseButton>
                        </ImpactDescription>
                    </Impact>
                )
            }

            {
                backgroundImageMode === 'half' && backgroundImageDirection === 'left' && (
                    <ImpactSection>
                        <ImpactSectionImage>
                            <img src={backgroundImage} />
                        </ImpactSectionImage>

                        <ImpactSectionDescription>
                            <ImpactSectionWrapper>
                                <ImpactSectionTitle>{title}</ImpactSectionTitle>
                                <ImpactSectionContent>{description}</ImpactSectionContent>
                            </ImpactSectionWrapper>     
                        </ImpactSectionDescription>    
                    </ImpactSection>
                )
            }

            {
                backgroundImageMode === 'half' && backgroundImageDirection === 'right' && (
                    <ImpactSection>
                        <ImpactSectionDescription>
                            <ImpactSectionWrapper>
                                <ImpactSectionTitle>{title}</ImpactSectionTitle>
                                <ImpactSectionContent>{description}</ImpactSectionContent>
                            </ImpactSectionWrapper>     
                        </ImpactSectionDescription> 

                        <ImpactSectionImage>
                            <img src={backgroundImage} />
                        </ImpactSectionImage>   
                    </ImpactSection>
                )
            }

            {
                backgroundImageMode === 'shadow' && backgroundImageDirection && (
                    <AboutBottomSection backgroundImageDirection={backgroundImageDirection} backgroundImage={backgroundImage}>
                        <AboutBottomDescription backgroundImageDirection={backgroundImageDirection}>
                            <AboutBottomTitle>{title}</AboutBottomTitle>
                            <AboutBottomContent>{description}</AboutBottomContent>

                            <BaseButton>{buttonTitle}</BaseButton>
                        </AboutBottomDescription>    
                    </AboutBottomSection> 
                )
            }
        </>
    )
}

export default BaseSectionWide