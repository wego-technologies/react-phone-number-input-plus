var Input = require('../commonjs/PhoneInputBrowser').default

exports = module.exports = Input
exports['default']       = Input

exports.formatPhoneNumber = require('../commonjs/libphonenumber/formatPhoneNumber').default
exports.formatPhoneNumberIntl = require('../commonjs/libphonenumber/formatPhoneNumber').formatPhoneNumberIntl

exports.parsePhoneNumber = require('libphonenumber-js/core').default
exports.isValidPhoneNumber = require('libphonenumber-js/core').isValidPhoneNumber
exports.isPossiblePhoneNumber = require('libphonenumber-js/core').isPossiblePhoneNumber
exports.getCountries = require('libphonenumber-js/core').getCountries
exports.getCountryCallingCode = require('libphonenumber-js/core').getCountryCallingCode
exports.isSupportedCountry = require('libphonenumber-js/core').isSupportedCountry
