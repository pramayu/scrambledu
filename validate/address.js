import validator from 'validator';
import _ from 'lodash';

export function addressReceiver(data) {
  var errors = {};
  if(validator.isEmpty(data.identifier)) {
    errors.identifier = 'this field is required';
  }
  if(validator.isEmpty(data.receiver)) {
    errors.receiver = 'this field is required';
  }
  if(validator.isEmpty(data.phone_addr)) {
    errors.phone_addr = 'this field is required';
  }
  if(validator.isEmpty(data.address)) {
    errors.address = 'this field is required';
  }
  if(validator.isEmpty(data.zipcode)) {
    errors.zipcode = 'this field is required';
  }
  if(data.province === 'choose_default') {
    errors.province = 'this field is required';
  }
  if(data.regency === 'choose_default') {
    errors.regency = 'this field is required';
  }
  if(data.district === 'choose_default') {
    errors.district = 'this field is required';
  }
  return {
    errors,
    isValid: _.isEmpty(errors)
  }
}
