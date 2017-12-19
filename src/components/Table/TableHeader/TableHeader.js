import React from 'react'

//import styles from './styles.less'

const TableHeader = ({ config }) => (
    <tr>
        {
            config.map((config, key) => (
                <th key={ key }>{ config.label }</th>
            ))
        }
    </tr>
)

export default TableHeader