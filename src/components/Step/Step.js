import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.less'

const Step = ( { config } ) => (
    <section className={ styles.step }>
        <h3 className={ styles.label }>{ config.label }</h3>
    </section>
)

Step.propTypes = {
    config: PropTypes.object
}

export default Step