import React from 'react'
import { connect } from 'react-redux'

import styles from './styles.less'

const Input = ({ label, name, id, onChange, onChangeEvent }) => (
    <div className={ styles.wrapper }>
        <label className={ styles.label } htmlFor={ id }>{ label }</label>
        <input className={ styles.input } type='text' name={ name } id={ id } onChange={ (event) => {
            onChangeEvent(event, onChange)
        }} />
    </div>
)

const mapDispatchToProps = dispatch => {
    return {
      onChangeEvent: (event, action) => {
        dispatch(action(event.target.value))
      }
    }
  }
  
export default connect(null, mapDispatchToProps)(Input)

