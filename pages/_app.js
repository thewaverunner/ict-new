import React from 'react'

import { appWithTranslation } from '../i18n'

function App ({ Component, pageProps }) {
    return (
        <Component {...pageProps} />
    )
}

export default appWithTranslation(App)