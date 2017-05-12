import validator from 'validator';
import _ from 'lodash';


export function addUserValidate(data) {
  var errors = {};
  if(!validator.isEmail(data.email)) {
    errors.email = 'email address not valid';
  }
  if(validator.isEmpty(data.email)) {
    errors.email = 'this field is required';
  }
  if(validator.isEmpty(data.username)) {
    errors.username = 'this field is required';
  }
  if(validator.isEmpty(data.password)) {
    errors.password = 'this field is required';
  }
  if(validator.isEmpty(data.confirm_password)) {
    errors.confirm_password = 'this field is required';
  }
  if(!validator.equals(data.password, data.confirm_password)) {
    errors.confirm_password = 'this field must match';
  }
  if(validator.isEmpty(data.firstname)) {
    errors.firstname = 'this field is required';
  }
  if(validator.isEmpty(data.lastname)) {
    errors.lastname = 'this field is required';
  }
  return {
    errors,
    isValid: _.isEmpty(errors)
  }
}
