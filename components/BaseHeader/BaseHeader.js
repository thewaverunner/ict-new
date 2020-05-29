import React, { useState, useEffect } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import { withTranslation } from '../../i18n'

import StripeNavbar from '../StripeNavbar'

import MobileLogo from '../../public/static/images/mobile-logo.svg'
import DesktopLogo from '../../public/static/images/logo-new-desktop.svg'

import {COLORS} from '../../utils/constants'

import {
    HeaderMobileNav,
    HeaderMobileLogo,
    Header,
    HeaderContainer,
    HeaderNavWrapper,
    HeaderLogo,
} from './BaseHeader.styles'

function BaseHeader () {
    const router = useRouter()

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
                            <MobileLogo fill={'#1d1d1f'} />
                        </HeaderMobileLogo>
                    </Link>

                    <StripeNavbar isFixed={isFixed()} duration={300} isMobile={isMobile} /> 
                </HeaderMobileNav> 
            </>
        )
    }

    function renderDesktopWrapper () {
        return (
            <>
                <HeaderContainer> 
                    <HeaderNavWrapper>
                        <Link href="/">
                            <HeaderLogo>
                                <DesktopLogo fill={isFixed() ? COLORS.white : '#1d1d1f'} />
                            </HeaderLogo>
                        </Link>
                        
                        <StripeNavbar isFixed={isFixed()} duration={300} isMobile={isMobile} />
                    </HeaderNavWrapper> 
                </HeaderContainer>  
            </>
        )   
    }

    function isFixed () {
        return ['/'].includes(router.pathname)
    }

    return (
        <Header isFixed={isFixed()}>
            {isMobile ? renderMobileWrapper() : renderDesktopWrapper()} 
        </Header>  

        // <HeaderNew>
        //     {isMobile ? renderMobileWrapper() : renderDesktopWrapper()} 
        // </HeaderNew>  
    )
}

export default withTranslation('common')(BaseHeader)