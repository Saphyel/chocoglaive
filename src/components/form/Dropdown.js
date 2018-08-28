import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';

const Dropdown = props =>
  <FormControl margin="normal" required>
    <InputLabel htmlFor={props.name}>
      {props.title}
    </InputLabel>
    <NativeSelect
      name={props.name}
      onChange={props.onChange}
      defaultValue={props.selectedOption}>
      {props.options.map(opt => {
        return (
          <option key={opt} value={opt}>{opt}</option>
        );
      })}
    </NativeSelect>
  </FormControl>;

Dropdown.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  selectedOption: PropTypes.string
};

export default Dropdown;
