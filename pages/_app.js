import React from 'react'

import { appWithTranslation } from '../i18n'

import '../public/static/styles/reset.css'
import '../public/static/styles/main.css'
import '../public/static/styles/media.css'

function App ({ Component, pageProps }) {
    return (
        <Component {...pageProps}/>
    )
}

export default appWithTranslation(App)