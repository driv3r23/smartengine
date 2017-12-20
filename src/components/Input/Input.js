import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import styles from './styles.less'

const Input = ({ label, name, id, onChange, onChangeEvent }) => (
    <div className={ styles.wrapper }>
        <label className={ styles.label } htmlFor={ id }>{ label }</label>
        <input className={ styles.input } type='text' name={ name } id={ id } onChange={ onChange && ((event) => {
            onChangeEvent(event, onChange.name, onChange.action)
        })} />
    </div>
)

const mapDispatchToProps = dispatch => {
    return {
        onChangeEvent: (event, name, action) => {
            dispatch(action(name, event.target.value))
        }
    }
}

Input.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.number,
    onChange: PropTypes.object,
    onChangeEvent: PropTypes.func
}
  
export default connect(null, mapDispatchToProps)(Input)

