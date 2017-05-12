var validator = require('validator');
var _ = require('lodash');

export function signinValidateUser(data) {
  var errors = {};
  if(validator.isEmpty(data.identifier)) {
    errors.identifier = 'this field is required';
  }
  if(validator.isEmpty(data.password)) {
    errors.password = 'this field is required';
  }
  return {
    errors,
    isValid: _.isEmpty(errors)
  }
}
