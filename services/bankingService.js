'use strict';
var Util = require('../util.js');
var UrlService = require('./urlService.js');
var config = require('../config.js');

var BankingService = function(that) {
    this.util = new Util(that);
    this.urlService = new UrlService(that);
};

//https://hml-banking-api.webpremios.com.br:443/v1/campaigns/30207/participants/14124177/balance
BankingService.prototype.getBalance = function(campaignid, userid) {
    this.util.timeout(config.util.DEFAULT_SECONDS);
    var baseurl = this.urlService.getFullUrlPrincipalApi();
    var header = this.util.getHeaderJson('');    
    return this.util.getUrl(baseurl, header,'/campaigns/'+campaignid+'/participants/'+userid+'/balance');
};

//https://hml-banking-api.webpremios.com.br:443/v1/campaigns/30207/participants/login/herbert.lima/balance
BankingService.prototype.getBalanceLogin = function(campaignid, username) {
    this.util.timeout(config.util.DEFAULT_SECONDS);
    var baseurl = this.urlService.getFullUrlPrincipalApi();
    var header = this.util.getHeaderJson('');
    return this.util.getUrl(baseurl, header, '/campaigns/'+campaignid+'/participants'+'/login/'+username+'/balance');
}

module.exports = BankingService;

