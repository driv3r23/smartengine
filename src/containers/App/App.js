import React from 'react'

import Content from '../../components/Content/Content'
import Step from '../../components/Step/Step'
import Filter from '../../components/Filter/Filter'
import Table from '../../components/Table/Table'

import config from '../../config'
import styles from './styles.less'

const App = () => (
    <Content { ...config.content }>
        <Step config={ config.step }/>
        <Filter config={ config.filter }/>
        <Table config={ config.table }/>
    </Content>
)

export default App