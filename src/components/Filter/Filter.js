import React from 'react'

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

export default Filter