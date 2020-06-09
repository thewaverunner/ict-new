import React from 'react'

import Dropdown from 'react-dropdown'

import { i18n, withTranslation } from '../../i18n'

import {
    Footer, 
    FooterWrapper, 
    FooterTopContent, 
    FooterChangeLanguage, 
    FooterLinks, 
    FooterLinksTitle,
    FooterLinksList,
    FooterLinksItem,
    FooterLinksItemLink,
    FooterBottomContent,
    FooterBottomWrapper,
    FooterCopyright,
    FooterBottomPolicyList,
    FooterBottomPolicyItem,
    FooterBottomPolicyItemLink,
} from './BaseFooter.styles'

function BaseFooter ({ t, backgroundWhite }) {
    const aboutLinks = [
        { title: t('BaseFooter_About_ICT'), link: '/about/about-ict' },
        { title: t('BaseFooter_About_Industry'), link: '/about/our-industry' },
        { title: t('BaseFooter_About_Business'), link: '/about/our-business' },
        { title: t('BaseFooter_About_FAQ'), link: '/about/questions-and-answers' },
    ]
    
    const responsibilityLinks = [
        { title: t('BaseFooter_Responsibility_Values'), link: '#' },
        { title: t('BaseFooter_Responsibility_Strategy'), link: '#' },
        { title: t('BaseFooter_Responsibility_CSR'), link: '#' },
        { title: t('BaseFooter_Responsibility_Challenges'), link: '#' },
    ]
    
    const companyLinks = [
        { title: t('BaseFooter_Company_Governance'), link: '/company/corporate-governance' },
        { title: t('BaseFooter_Company_People'), link: '/company/our-people' },
        { title: t('BaseFooter_Company_Positions'), link: '/company/open-positions' },
        { title: t('BaseFooter_Company_Pressroom'), link: '/company/pressroom' },
        { title: t('BaseFooter_Company_Contact'), link: '/contact-us' },
    ]
    
    const footerBottomLinks = [
        { title: t('BaseFooter_Bottom_Terms'), link: '#' },
        { title: t('BaseFooter_Bottom_Privacy'), link: '#' },
        { title: t('BaseFooter_Bottom_Cookie'), link: '#' },
    ]

    const languages = [
        { value: 'en', label: 'English' },
        { value: 'es', label: 'Espanol' },
        { value: 'zh', label: 'Chinese' },
    ]

    const defaultLanguage = languages.filter((language) => language.value === i18n.language)[0] || languages[0]

    function renderLinks (title, links) {
        return (
            <FooterLinks>
                <FooterLinksTitle>{title}</FooterLinksTitle>

                <FooterLinksList>
                    {links.map(({ title, link }, index) => (
                        <FooterLinksItem key={index}>
                            <FooterLinksItemLink href={link}>{title}</FooterLinksItemLink>
                        </FooterLinksItem>
                    ))}
                </FooterLinksList>
            </FooterLinks>
        )
    }

    function onSelectLanguage (language) {
        i18n.changeLanguage(language.value)
    }

    return (
        <Footer backgroundWhite={backgroundWhite}>
            <FooterWrapper>
                <FooterTopContent>
                    <FooterChangeLanguage>
                        <img 
                            src="/static/images/language-icon.svg" 
                            alt="lnguage-icon"
                        />

                        <Dropdown
                            options={languages}
                            value={defaultLanguage}
                            onChange={onSelectLanguage}
                            className={'languageDropdown'}
                            menuClassName={'languageDropdownMenu'}
                        />
                    </FooterChangeLanguage>

                    {renderLinks(t('BaseFooter_About'), aboutLinks)}
                    {renderLinks(t('BaseFooter_Responsibility'), responsibilityLinks)}
                    {renderLinks(t('BaseFooter_Company'), companyLinks)}
                </FooterTopContent>  

                <FooterBottomContent>
                    <FooterBottomWrapper>
                        <FooterCopyright>&copy; {t('BaseFooter_Bottom_Copyright')}</FooterCopyright> 

                        <FooterBottomPolicyList>
                            {footerBottomLinks.map(({ title, link }, index) => (
                                <FooterBottomPolicyItem key={index}>
                                    <FooterBottomPolicyItemLink href={link}>{title}</FooterBottomPolicyItemLink>
                                </FooterBottomPolicyItem>
                            ))}
                        </FooterBottomPolicyList>    
                    </FooterBottomWrapper> 
                </FooterBottomContent>
            </FooterWrapper>    
        </Footer>     
    )
}

export default withTranslation('common')(BaseFooter)