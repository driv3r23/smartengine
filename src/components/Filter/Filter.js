import React from 'react'

import styles from './styles.less'

const Filter = ({ config }) => (
    <section className={ styles.wrapper }>
        {
            config.map((filter, key) => (
                <filter.component key={ key } label={ filter.label } name={ filter.name } id={ key } />
            ))
        }
    </section>
)

export default Filter