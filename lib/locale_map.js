// Utility to map accessibility ID based on different locale
// All locale resources are kept under lib/res/locale


var Fs = require('fs');
var Config = require('config');
var Path = require('path');
var Parser = require('xml2json');

var internals = {};

// Extract the correct locale, and return the proper locale resource map in json object format
var locale = Config.locale
var localeResPath = [Path.resolve(), 'lib', 'res', 'locale', locale + '.xml'].join(Path.sep);
var localeResXml = Fs.readFileSync(localeResPath, 'utf8');
var localeResJson = JSON.parse(Parser.toJson(localeResXml));
var localeRes = {};
localeResJson.resources.string.forEach(function(i){
  localeRes[i.name] = i['$t'];
})
this.localeRes = localeRes;

internals.AccessibilityMap = {
  localeRes: this.localeRes
}

exports = module.exports = internals.AccessibilityMap;
