import React from 'react'

import { i18n, withTranslation } from '../i18n'

function Homepage ({ t }) {
    return (
        <>
            Current language is {t('language')}

            <button onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')}>
                Change language
            </button>
        </>
    )
}


Homepage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(Homepage)