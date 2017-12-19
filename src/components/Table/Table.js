import React from 'react'
import { connect } from 'react-redux'

import TableHeader from './TableHeader/TableHeader'
import TableRow from './TableRow/TableRow'

//import styles from './styles.less'

const Table = ({ config, data }) => (
    <table>
        <thead>
            <TableHeader config={ config } />
        </thead>
        <tbody>
            {
                data.map((data, key) => (
                    <TableRow key={ key } config={ config } data={ data } />
                ))
            }
        </tbody>
    </table>
)

const mapStateToProps = state => {
    return {
        data: state.table,
        filter: state.filter
    }
}
  
export default connect(mapStateToProps)(Table)