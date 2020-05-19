import React from 'react'

import 'react-phone-input-2/lib/style.css'

import { appWithTranslation } from '../i18n'

import '../public/static/styles/reset.css'
import '../public/static/styles/main.css'

import BaseNavbar from '../components/BaseNavbar'
import BaseFooter from '../components/BaseFooter'

function App ({ Component, pageProps }) {
    return (
        <div className="main-container">
            <BaseNavbar />

            <Component {...pageProps}/>

            <BaseFooter />
        </div>
    )
}

export default appWithTranslation(App)