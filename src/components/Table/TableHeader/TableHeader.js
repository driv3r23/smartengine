import React from 'react'
import PropTypes from 'prop-types'

const TableHeader = ({ config }) => (
    <tr>
        {
            config.map((config, key) => (
                <th key={ key }>{ config.label }</th>
            ))
        }
    </tr>
)

TableHeader.propTypes = {
    config: PropTypes.array
}

export default TableHeader