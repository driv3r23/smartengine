import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.less'

const TableRow = ({ config, data }) => (
    <tr>
        {
            config.map((config, key) => (
                <td className={ styles[config.name] } key={ key }>{
                    config.component ? ( <config.component.type { ...config.component.data } { ...data[config.name] }/> ) : data[config.name]
                }</td>
            ))
        }
    </tr>
)

TableRow.propTypes = {
    config: PropTypes.array,
    data: PropTypes.object
}

export default TableRow