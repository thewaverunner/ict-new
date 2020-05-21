import React from 'react'
import App from 'next/app'

import 'react-phone-input-2/lib/style.css'

import { appWithTranslation } from '../i18n'

import '../public/static/styles/reset.css'
import '../public/static/styles/main.css'

import BaseHeader from '../components/BaseHeader'
import BaseFooter from '../components/BaseFooter'

function MyApp ({ Component, pageProps }) {
    return (
        <div className="main-container">
            <BaseHeader />

            <Component {...pageProps}/>

            <BaseFooter />
        </div>
    )
}

MyApp.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext)

    return { ...appProps }
}

export default appWithTranslation(MyApp)