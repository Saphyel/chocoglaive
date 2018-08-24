import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const SingleInput = (props) =>
  <FormControl>
    <InputLabel htmlFor={props.name}>{props.title}</InputLabel>
    <Input
      id={props.name}
      name={props.name}
      onChange={props.onChange}
      type={props.inputType}
      placeholder={props.placeholder}
      value={props.content}
      inputProps={{
        'aria-label': 'Description',
      }}
    />
  </FormControl>;

SingleInput.propTypes = {
  inputType: PropTypes.oneOf(['text', 'number']).isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])
};

export default SingleInput;
