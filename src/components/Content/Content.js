import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.less'

const Content = ({ title, summary, children }) => (
    <section className={ styles.wrapper }>
        <h1 className={ styles.title }>{ title }</h1>
        <h2 className={ styles.summary }>{ summary }</h2>
        { children }
    </section>
)

Content.propTypes = {
    title: PropTypes.string,
    summary: PropTypes.string,
    children: PropTypes.node
}

export default Content