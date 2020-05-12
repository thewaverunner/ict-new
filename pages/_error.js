import React from 'react'

import { withTranslation } from '../i18n'

function Error ({ statusCode, t }) {
    return (
        <p>
            {statusCode ? t('error-with-status', { statusCode }) : t('error-without-status')}
        </p>
    )
}

Error.getInitialProps = async ({ res, err }) => {
    let statusCode = null
    
    if (res) {
        ({ statusCode } = res)
    } else if (err) {
        ({ statusCode } = err)
    }

    return {
        namespacesRequired: ['common'],
        statusCode
    }
}

export default withTranslation('common')(Error)