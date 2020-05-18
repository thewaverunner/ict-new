import React from 'react'

import Dropdown from 'react-dropdown';

import { withTranslation } from '../../i18n'

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

const options = [
    'one', 'two', 'three'
  ]


function BaseFooter ({ t }) {
    const aboutLinks = [
        { title: t('BaseFooter_About_ICT'), link: '#' },
        { title: t('BaseFooter_About_Industry'), link: '#' },
        { title: t('BaseFooter_About_Business'), link: '#' },
        { title: t('BaseFooter_About_FAQ'), link: '#' },
    ]
    
    const responsibilityLinks = [
        { title: t('BaseFooter_Responsibility_Values'), link: '#' },
        { title: t('BaseFooter_Responsibility_Strategy'), link: '#' },
        { title: t('BaseFooter_Responsibility_CSR'), link: '#' },
        { title: t('BaseFooter_Responsibility_Challenges'), link: '#' },
    ]
    
    const companyLinks = [
        { title: t('BaseFooter_Company_Governance'), link: '#' },
        { title: t('BaseFooter_Company_People'), link: '#' },
        { title: t('BaseFooter_Company_Positions'), link: '#' },
        { title: t('BaseFooter_Company_Pressroom'), link: '#' },
        { title: t('BaseFooter_Company_Contact'), link: '#' }
    ]
    
    const footerBottomLinks = [
        { title: t('BaseFooter_Bottom_Terms'), link: '#' },
        { title: t('BaseFooter_Bottom_Privacy'), link: '#' },
        { title: t('BaseFooter_Bottom_Cookie'), link: '#' }
    ]

    const options = [
        'English', 'Espanol', 'Chinese'
    ]

    const defaultOption = options[0]

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

    return (
        <Footer>
            <FooterWrapper>
                <FooterTopContent>
                    <FooterChangeLanguage>
                        <img src="../static/images/language-icon.svg"/>

                        <Dropdown
                            options={options}
                            value={defaultOption}
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