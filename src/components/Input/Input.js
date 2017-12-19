import React from 'react'

import styles from './styles.less'

const Input = ({ label, name, id }) => (
    <div className={ styles.wrapper }>
        <label className={ styles.label } htmlFor={ id }>{ label }</label>
        <input className={ styles.input } type='text' name={ name } id={ id } />
    </div>
)

export default Input