'use strict';
//var Util = require('../util.js');

var UrlService = function(that) {
    this.util = new Util(that);
    this.urls = config.env['hml'];//config.env[this.util.getEnv()];
};

UrlService.prototype.getFullUrlPrincipalApi = function() {
    return this.urls.urlBanking;
};

//module.exports = UrlService;