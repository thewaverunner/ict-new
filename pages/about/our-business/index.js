import React from 'react'

import Head from 'next/head'

import { withTranslation } from '../../../i18n'

import {} from './index.styles'

function OurBusinessPage ({ t }) {
    return (
        <>
            <Head>
                <title>{t('AboutICTPage-Heading')}</title>
            </Head>
        </>
    )
}

OurBusinessPage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(OurBusinessPage)