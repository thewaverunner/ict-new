import React from 'react'

import Link from 'next/link'

import styled from 'styled-components'

import { withTranslation } from '../../../i18n'
import BaseButton from '../../BaseButton'

import { DropdownSectionMobile } from './Components'

import { FONTS, COLORS} from '../../../utils/constants'

const MobileDropdownSection = styled.div`
    width: 100%;
`

const SubProductsListMobile = styled.div`
        display: flex;
        padding: 15px 0 25px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #EFEFEF;
    }

    h3 {
        display: block;
        font-size: 16px;
        font-family: 'DM Sans Bold';
        margin-bottom: 15px;
    }

    a {
        background-color: transparent;
        border: 1px solid #1d1d1f;
        text-decoration: none;
        border-radius: 6px;
        padding: 10px 25px;
        font-size: ${FONTS.p}px;
        color: #1d1d1f;
        font-family: 'DM Sans Regular';
    }
    
    a:hover {
        background-color: #1d1d1f;
        color: ${COLORS.white}
    }
`

const MobileDropdown = ({ onClose , t }) => {
    return (
        <MobileDropdownSection>
            <DropdownSectionMobile data-first-dropdown-section>
                <div className="close-icon" onClick={onClose}>
                    <span></span>
                    <span></span>
                </div>    

                <div className="footer-links">
                    <ul>
                        <li>{t('BaseFooter_About')}</li>
            
                        <li>
                            <Link href="/about/about-ict">
                                <a>{t('BaseFooter_About_ICT')}</a>
                            </Link>
                        </li>

                        <li>
                            <Link href="/about/our-industry">
                                <a>{t('BaseFooter_About_Industry')}</a>
                            </Link>
                        </li>

                        <li>
                            <Link href="/about/our-business">
                                <a>{t('BaseFooter_About_Business')}</a>
                            </Link>
                        </li>    
                            
                        <li>
                            <Link href="/about/questions-and-answers">
                                <a>{t('BaseFooter_About_FAQ')}</a>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="footer-links">          
                    <ul>
                        <li>{t('BaseFooter_Responsibility')}</li>

                        <li>
                            <Link href="/">
                                <a>{t('BaseFooter_Responsibility_Values')}</a>
                            </Link>
                        </li>

                        <li>
                            <Link href="/">
                                <a>{t('BaseFooter_Responsibility_Strategy')}</a>
                            </Link>
                        </li>

                        <li>
                            <Link href="/">
                                <a>{t('BaseFooter_Responsibility_CSR')}</a>
                            </Link>
                        </li>

                        <li>
                            <Link href="/">
                                <a>{t('BaseFooter_Responsibility_Challenges')}</a>
                            </Link>
                        </li>
                    </ul>
                </div> 

                <div className="footer-links">
                    <ul>
                        <li>{t('BaseFooter_Company')}</li>
    
                        <li>
                            <Link href="/company/corporate-governance">
                                <a>{t('BaseFooter_Company_Governance')}</a>
                            </Link>
                        </li>

                        <li>
                            <Link href="/company/our-people">
                                <a>{t('BaseFooter_Company_People')}</a>
                            </Link>
                        </li>

                        <li>
                            <Link href="/company/open-positions">
                                <a>{t('BaseFooter_Company_Positions')}</a>
                            </Link>
                        </li>

                        <li>
                            <Link href="/company/pressroom">
                                <a>{t('BaseFooter_Company_Pressroom')}</a>
                            </Link>
                        </li>

                        <li>
                            <Link href="/contact-us">
                                <a>{t('BaseFooter_Company_Contact')}</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </DropdownSectionMobile>
            
            <SubProductsListMobile>
                <h3>{t('BaseHeader_Mobile_Partner')}</h3>

                <BaseButton mode={'dark'}>{t('BaseHeader_Mobile_Contact')}</BaseButton>
            </SubProductsListMobile>
        </MobileDropdownSection>
    )
}

export default withTranslation('common')(MobileDropdown)