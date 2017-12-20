import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import TableHeader from './TableHeader/TableHeader'
import TableRow from './TableRow/TableRow'

import styles from './styles.less'

const Table = ({ config, data }) => (
    <table className={ styles.wrapper }>
        <thead>
            <TableHeader config={ config } />
        </thead>
        <tbody>
            {
                data.length > 0 && data.map((data, key) => (
                    <TableRow key={ key } config={ config } data={ data } />
                ))
            }
        </tbody>
    </table>
)

const filterDataByValue = (data, filter) => {
    if(filter.name && filter.value)
        return data.filter((item) => item[filter.name].search(new RegExp(filter.value, "i")) != -1 ? true : false)
    else
        return data
}

const mapStateToProps = state => {
    return {
        data: filterDataByValue(state.table, state.filter.filterByValue)
    }
}

Table.propTypes = {
    config: PropTypes.array,
    data: PropTypes.array
}
  
export default connect(mapStateToProps)(Table)