import React from 'react'

import styles from './styles.less'

const Content = ({ title, summary, children }) => (
    <section className={ styles.wrapper }>
        <h1 className={ styles.title }>{ title }</h1>
        <h2 className={ styles.summary }>{ summary }</h2>
        { children }
    </section>
)

export default Content