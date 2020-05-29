import React from 'react'
import App from 'next/app'

import { useRouter } from 'next/router'

import 'react-phone-input-2/lib/style.css'

import { appWithTranslation } from '../../i18n'

import '../../public/static/styles/reset.css'
import '../../public/static/styles/main.css'

import BaseHeader from '../../components/BaseHeader'
import BaseFooter from '../../components/BaseFooter'

function MyApp ({ Component, pageProps }) {
    const router = useRouter();

    console.log(router.pathname)

    const footerWithBackgroundWhite = ['/', '/company/corporate-governance', '/company/open-positions', '/company/open-positions/[id]'].includes(router.pathname)
  
    return (
        <div className="main-container">
            <BaseHeader />

            <Component {...pageProps}/>

            <BaseFooter backgroundWhite={footerWithBackgroundWhite}/>
        </div>
    )
}

MyApp.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext)

    return { ...appProps }
}

export default appWithTranslation(MyApp)