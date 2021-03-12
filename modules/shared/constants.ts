export * from './env/development';

export const API_STATUSES = Object.freeze({
  PENDING: 'PENDING',
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
});

export const VALIDATION_PATTERN = {
  EMAIL: new RegExp(/^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
  NUMBER: new RegExp('^\\d+$'),
  FLOAT: new RegExp('^\\d*(\\.\\d+)?$'),
  ZIP: new RegExp('^\\d{5}(?:[-\\s]\\d{4})?$'),
  PHONE: new RegExp('^\\d{10}?$'),
};

export const DATE_FORMATS = {
  DEFAULT_DATE_TIME_FORMAT: 'YYYY-MM-DD HH:mm:ss',
  LIST_DATE_TIME_FORMAT: 'YYYY-MM-DD hh:mm A',
  DEFAULT_DATE_FORMAT: 'YYYY-MM-DD',
  DATE: 'YYYY-MM-DD',
  TIME: 'hh:mm:ss A',
};

export const NOTIFICATION_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
};
