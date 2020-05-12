import React from 'react'
import PropTypes from 'prop-types'

import { i18n, withTranslation } from '../i18n'

const Homepage = ({ t }) => (
  <React.Fragment>
    {t('h1')}

    <button
          type='button'
          onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')}
        >
          {t('change-locale')}
        </button>
  </React.Fragment>
)

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'footer'],
})

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Homepage)