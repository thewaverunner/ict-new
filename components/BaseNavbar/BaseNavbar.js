import React, { useState, useEffect } from 'react'

import StripeNavbar from '../StripeNavbar'
import BaseButton from '../BaseButton'

import {
    Header,
    HeaderContainer,
    HeaderNavWrapper,
    HeaderMobileNav,
    HeaderMobileLogo,
    HeaderLogo,
    HeaderDescription,
    HeaderDescriptionWrapper,
    HeaderTitle,
} from './BaseNavbar.styles'

function BaseNavbar () {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        window.addEventListener('resize', onResize)

        onResize()

        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [])

    function onResize () {
        const currentIsMobile = (window.innerWidth <= 760)

        setIsMobile(currentIsMobile)
    }

    function renderDescription () {
        return (
            <HeaderDescriptionWrapper>
                <HeaderTitle>Striving for digital equality</HeaderTitle>

                <HeaderDescription>
                    We want to create the world’s largest 
                    functioning sales force, disrupting the 
                    traditional value chain and distribution of apps, 
                    software and services.
                </HeaderDescription>

                <BaseButton>Learn more</BaseButton>
            </HeaderDescriptionWrapper>
        )
    }

    function renderMobileWrapper () {
        return (
            <>
                <HeaderMobileNav>
                    <HeaderMobileLogo>
                        <img src="/static/images/mobile-logo.png"/>
                    </HeaderMobileLogo>

                    <StripeNavbar duration={300} isMobile={isMobile} /> 
                </HeaderMobileNav> 
                
                {renderDescription()}
            </>
        )
    }

    function renderDesktopWrapper () {
        return (
            <HeaderContainer> 
                <HeaderNavWrapper>
                    <HeaderLogo>
                        <img src="/static/images/main-logo.png" alt="logo"/>
                    </HeaderLogo>

                    <StripeNavbar duration={300} isMobile={isMobile} />
                </HeaderNavWrapper> 

                {renderDescription()}
            </HeaderContainer>  
        )   
    }

    return (
        <Header>
            {isMobile ? renderMobileWrapper() : renderDesktopWrapper()} 
        </Header>  
    )
}

export default BaseNavbar