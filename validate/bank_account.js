import validator from 'validator';
import _ from 'lodash';

export function bankAccount(data) {
  var errors = {};
  if(validator.isEmpty(data.identifier)) {
    errors.identifier = 'this field is required';
  }
  if(validator.isEmpty(data.rekening)) {
    errors.rekening = 'this field is required';
  }
  if(data.bankname === 'choose_default') {
    errors.bankname = 'this field is required';
  }
  if(validator.isEmpty(data.branch)) {
    errors.branch = 'this field is required';
  }
  if(validator.isEmpty(data.otp)) {
    errors.otp = 'this field is required';
  }
  if(validator.isEmpty(data.pass)) {
    errors.pass = 'this field is required';
  }
  return {
    errors,
    isValid: _.isEmpty(errors)
  }
}
