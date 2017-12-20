import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.less'

const Button = ({ label, href }) => (
    <a className={ styles.button } href={ href }>{ label }</a>
)

Button.propTypes = {
    label: PropTypes.string,
    href: PropTypes.string
}

export default Button