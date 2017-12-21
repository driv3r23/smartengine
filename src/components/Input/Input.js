import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import styles from './styles.less'

const Input = ({ label, name, id, input, clear, onChange, onChangeEvent, onClearEvent }) => (
    <div className={ styles.wrapper }>
        <label className={ styles.label } htmlFor={ id }>{ label }</label>
        <div className={ styles.control }>
            <input className={ styles.input } type='text' name={ name } id={ id } onChange={ ((event) => {
                event.target.value ? clear.style.display = 'block' : clear.style.display = 'none';
                onChange && onChangeEvent(event.target.value, onChange.name, onChange.action);
            })} ref={(element) => { input = element }}/>
            <i className={ styles.clear } ref={(element) => { clear = element }} onClick={ (event) => { 
                event.target.style.display = 'none'; input.value = '';
                onChange && onChangeEvent(input.value, onChange.name, onChange.action)}}/>
        </div>
    </div>
)

const mapDispatchToProps = dispatch => {
    return {
        onChangeEvent: (value, name, action) => {
            dispatch(action(name, value))
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

