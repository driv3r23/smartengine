import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.less'

const Filter = ({ config }) => (
    <section className={ styles.wrapper }>
        {
            config.map((filter, key) => (
                <filter.component.type key={ key } label={ filter.label }
                 name={ filter.name } id={ key } onChange={ filter.component.onChange } />
            ))
        }
    </section>
)

Filter.propTypes = {
    config: PropTypes.array
}

export default Filter