import React from 'react'

//import styles from './styles.less'

const TableRow = ({ config, data }) => (
    <tr>
        {
            config.map((config, key) => (
                <td key={ key }>{ data[config.name] }</td>
            ))
        }
    </tr>
)

export default TableRow