import {VALIDATION_PATTERN} from "./constants";
import * as yup from "yup";

export const isNumber = (string) => {
  return !isNaN(Number(string));
}

export const isInt = (string) => {
  const value = Number(string);
  if (!value) {
    return false;
  }
  return value % 1 === 0 && !string.includes('.');
}

export const isFloat = (string) => {
  const value = Number(string);
  if (!value) {
    return false;
  }
  return value % 1 !== 0 || string.includes('.');
}

export const positiveNumberValidator = {
  validator: (rule, value) => {
    if (value === null || value === undefined || value === '') {
      return Promise.resolve();
    }
    if (!yup.number().isValid(value)) {
      return Promise.reject('Please provide valid value.');
    }
    value = Number(value);
    if (value < 0) {
      return Promise.reject('Please provide valid value.');
    } else {
      return Promise.resolve();
    }
  }
}

export const positiveFloatValidator = {validator:(rule, value) => {
  if (value === null || value === undefined || value === '') {
    return Promise.resolve();
  }
  if (isNaN(parseFloat(value))) {
    return Promise.reject('Please provide valid value.');
  }
  if (value < 0) {
    return Promise.reject('Please provide valid value.');
  } else {
    return Promise.resolve();
  }
}}

export const phoneNumberValidator = {
  pattern: VALIDATION_PATTERN.PHONE,
  message: 'Please provide valid phone number'
}
