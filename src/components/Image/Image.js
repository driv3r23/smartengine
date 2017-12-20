import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.less'

const Image = ( props ) => (
    <img className={ styles.image } { ...props }/>
)

Image.propTypes = {
    props: PropTypes.object
}

export default Image