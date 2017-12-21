import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.less'

const TableHeader = ({ config }) => (
    <tr>
        {
            config.map((config, key) => (
                <th className={ styles[config.name] } key={ key }>{ config.label }</th>
            ))
        }
    </tr>
)

TableHeader.propTypes = {
    config: PropTypes.array
}

export default TableHeader