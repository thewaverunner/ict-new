import React, { useState, useEffect } from 'react'

import Link from 'next/link'

import { withTranslation } from '../../i18n'

import StripeNavbar from '../StripeNavbar'

import DesktopLogo from '../../public/static/images/desktop-logo.svg'
import MobileLogo from '../../public/static/images/mobile-logo.svg'

import {
    Header,
    HeaderContainer,
    HeaderNavWrapper,
    HeaderMobileNav,
    HeaderMobileLogo,
    HeaderLogo,
} from './BaseHeader.styles'

function BaseHeader () {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        window.addEventListener('resize', onResize)

        onResize()

        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [])

    function onResize () {
        const currentIsMobile = (window.innerWidth <= 768)

        setIsMobile(currentIsMobile)
    }

    function renderMobileWrapper () {
        return (
            <>
                <HeaderMobileNav>
                    <Link href="/">
                        <HeaderMobileLogo>
                            <MobileLogo />
                        </HeaderMobileLogo>
                    </Link>

                    <StripeNavbar duration={300} isMobile={isMobile} /> 
                </HeaderMobileNav> 
            </>
        )
    }

    function renderDesktopWrapper () {
        return (
            <HeaderContainer> 
                <HeaderNavWrapper>
                    <Link href="/">
                        <HeaderLogo>
                            <DesktopLogo />
                        </HeaderLogo>
                    </Link>
                    
                    <StripeNavbar duration={300} isMobile={isMobile} />
                </HeaderNavWrapper> 
            </HeaderContainer>  
        )   
    }

    return (
          
        <Header>
            {isMobile ? renderMobileWrapper() : renderDesktopWrapper()} 
        </Header>  
    )
}

export default withTranslation('common')(BaseHeader)