import React, { useState, useEffect } from 'react'

import { withTranslation } from '../../i18n'

import StripeNavbar from '../StripeNavbar'
import BaseButton from '../BaseButton'

import DesktopLogo from '../../public/static/images/desktop-logo.svg'

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

function BaseNavbar ({ t }) {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        window.addEventListener('resize', onResize)

        onResize()

        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [])

    function onResize () {
        const currentIsMobile = (window.innerWidth <= 750)

        setIsMobile(currentIsMobile)
    }

    function renderDescription () {
        return (
            <HeaderDescriptionWrapper>
                <HeaderTitle>{t('BaseHeader_Title')}</HeaderTitle>
                <HeaderDescription>{t('BaseHeader_Description')}</HeaderDescription>

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

                <HeaderContainer>   
                    {renderDescription()}
                </HeaderContainer>
            </>
        )
    }

    function renderDesktopWrapper () {
        return (
            <HeaderContainer> 
                <HeaderNavWrapper>
                    <HeaderLogo>
                        {/* <img src="/static/images/main-logo.png" alt="logo"/> */}
                        <DesktopLogo />
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

export default withTranslation('common')(BaseNavbar)