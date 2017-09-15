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

//https://hml-banking-api.webpremios.com.br:443/v1/campaigns/XXX/participants/XXX/balance
BankingService.prototype.getBalanceInvalid = function(campaignid_invalid, userid_invalid) {
    this.util.timeout(config.util.DEFAULT_SECONDS);
    var baseurl = this.urlService.getFullUrlPrincipalApi();
    var header = this.util.getHeaderJson('');    
    return this.util.getUrl(baseurl, header,'/campaigns/'+campaignid_invalid+'/participants/'+userid_invalid+'/balance');
};


//https://hml-banking-api.webpremios.com.br:443/v1/campaigns/30207/participants/login/herbert.lima/balance
BankingService.prototype.getBalanceLogin = function(campaignid, username) {
    this.util.timeout(config.util.DEFAULT_SECONDS);
    var baseurl = this.urlService.getFullUrlPrincipalApi();
    var header = this.util.getHeaderJson('');
    return this.util.getUrl(baseurl, header, '/campaigns/'+campaignid+'/participants'+'/login/'+username+'/balance');
}

//https://hml-banking-api.webpremios.com.br:443/v1/campaigns/xxx/participants/login/xxx/balance
BankingService.prototype.getBalanceLoginInvalid = function(campaignid_invalid, username_invalid) {
    this.util.timeout(config.util.DEFAULT_SECONDS);
    var baseurl = this.urlService.getFullUrlPrincipalApi();
    var header = this.util.getHeaderJson('');
    return this.util.getUrl(baseurl, header, '/campaigns/'+campaignid_invalid+'/participants'+'/login/'+username_invalid+'/balance');
}

//https://hml-banking-api.webpremios.com.br:443/v1/redemptions/92A49D86-18A6-4C03-9A6C-E22051583964
BankingService.prototype.getRedemptions = function(redemptions) {
    this.util.timeout(config.util.DEFAULT_SECONDS);
    var baseurl = this.urlService.getFullUrlPrincipalApi();
    var header = this.util.getHeaderJson('');    
    return this.util.getUrl(baseurl, header,'/redemptions/'+redemptions);
};

//https://hml-banking-api.webpremios.com.br:443/v1/redemptions/42ddcc00-f27f-419e-ba5f-ada050d0c564
BankingService.prototype.getRedemptionsforreversal = function(redemptionsforreversal) {
    this.util.timeout(config.util.DEFAULT_SECONDS);
    var baseurl = this.urlService.getFullUrlPrincipalApi();
    var header = this.util.getHeaderJson('');    
    return this.util.getUrl(baseurl, header,'/redemptions/'+redemptionsforreversal);
};

//https://hml-banking-api.webpremios.com.br:443/v1/account/campaigns/30207/participants/14124177/toExpire/2017-12-31
BankingService.prototype.getTransToExpire = function(campaignid, userid, datetoexpire) {
    this.util.timeout(config.util.DEFAULT_SECONDS);
    var baseurl = this.urlService.getFullUrlPrincipalApi();
    var header = this.util.getHeaderJson('');    
    return this.util.getUrl(baseurl, header,'/account/'+'/campaigns/'+campaignid+'/participants/'+userid+'/toExpire/'+datetoexpire);
};

//https://hml-banking-api.webpremios.com.br:443/v1/account/campaigns/30207/participants/14124177/toExpire/0000-00-00
BankingService.prototype.getTransToExpireDateInvalid = function(campaignid, userid, invaliddatetoexpire) {
    this.util.timeout(config.util.DEFAULT_SECONDS);
    var baseurl = this.urlService.getFullUrlPrincipalApi();
    var header = this.util.getHeaderJson('');    
    return this.util.getUrl(baseurl, header,'/account'+'/campaigns/'+campaignid+'/participants/'+userid+'/toExpire/'+invaliddatetoexpire);
};

//https://hml-banking-api.webpremios.com.br:443/v1/account/campaigns/30207/participants/14124177/toExpire/2017-13-32
BankingService.prototype.getTransToExpireDateInvalidFormat = function(campaignid, userid, invalidformatdatetoexpire) {
    this.util.timeout(config.util.DEFAULT_SECONDS);
    var baseurl = this.urlService.getFullUrlPrincipalApi();
    var header = this.util.getHeaderJson('');    
    return this.util.getUrl(baseurl, header,'/account'+'/campaigns/'+campaignid+'/participants/'+userid+'/toExpire/'+invalidformatdatetoexpire);
};

//https://hml-banking-api.webpremios.com.br:443/v1/account/campaigns/30207/participants/14124177/accountStatement/from/2017-01-01/to/2017-12-31
BankingService.prototype.getAccountStatement = function(campaignid, userid, datefrom, dateto) {
    this.util.timeout(config.util.DEFAULT_SECONDS);
    var baseurl = this.urlService.getFullUrlPrincipalApi();
    var header = this.util.getHeaderJson('');    
    return this.util.getUrl(baseurl, header,'/account'+'/campaigns/'+campaignid+'/participants/'+userid+'/accountStatement'+'/from/'+datefrom+'/to/'+dateto);
};

//https://hml-banking-api.webpremios.com.br:443/v1/configurations/campaigns/30207/parameters/StampedBalanceAllowed
BankingService.prototype.getParameterValue = function(campaignid) {
    this.util.timeout(config.util.DEFAULT_SECONDS);
    var baseurl = this.urlService.getFullUrlPrincipalApi();
    var header = this.util.getHeaderJson('');    
    return this.util.getUrl(baseurl, header,'/configurations'+'/campaigns/'+campaignid+'/parameters'+'/StampedBalanceAllowed');
};

//https://hml-banking-api.webpremios.com.br:443/v1/redemptions/isCashReversible/999999
BankingService.prototype.getCashReversal = function(cashreversal) {
    this.util.timeout(config.util.DEFAULT_SECONDS);
    var baseurl = this.urlService.getFullUrlPrincipalApi();
    var header = this.util.getHeaderJson('');    
    return this.util.getUrl(baseurl, header,'/redemptions'+'/isCashReversible/'+cashreversal);
};

//https://hml-banking-api.webpremios.com.br:443/v1/redemptions
BankingService.prototype.postredemption = function(redemption) {
    this.util.timeout(config.util.DEFAULT_SECONDS);
    var baseurl = this.urlService.getFullUrlPrincipalApi();
    var header = this.util.getHeaderJson('');    
    return this.util.postUrl(baseurl, redemption, header,'/redemptions');
};

//https://hml-banking-api.webpremios.com.br:443/v1/redemptions
BankingService.prototype.postredemptiondone = function(redemptiondone) {
    this.util.timeout(config.util.DEFAULT_SECONDS);
    var baseurl = this.urlService.getFullUrlPrincipalApi();
    var header = this.util.getHeaderJson('');    
    return this.util.postUrl(baseurl, redemptiondone, header,'/redemptions');
};

//https://hml-banking-api.webpremios.com.br:443/v1/redemptions/finishRedemption
BankingService.prototype.putredemption = function(finishredemption) {
    this.util.timeout(config.util.DEFAULT_SECONDS);
    var baseurl = this.urlService.getFullUrlPrincipalApi();
    var header = this.util.getHeaderJson('');    
    return this.util.putUrl(baseurl, finishredemption, header,'/redemptions/finishRedemption');
};

//https://hml-banking-api.webpremios.com.br:443/v1/redemptions/reversal
BankingService.prototype.putredemptionreversal = function(putreversalredemption){
    this.util.timeout(config.util.DEFAULT_SECONDS);
    var baseurl = this.urlService.getFullUrlPrincipalApi();
    var header = this.util.getHeaderJson('');    
    return this.util.putUrl(baseurl, putreversalredemption, header,'/redemptions/reversal');
};

//https://hml-banking-api.webpremios.com.br:443/v1/redemptions/reversal
BankingService.prototype.reversalredemption = function(reversalredemption) {
    this.util.timeout(config.util.DEFAULT_SECONDS);
    var baseurl = this.urlService.getFullUrlPrincipalApi();
    var header = this.util.getHeaderJson('');    
    return this.util.putUrl(baseurl, reversalredemption, header,'/redemptions/reversal');
};

//https://hml-banking-api.webpremios.com.br:443/v1/redemptions/releasePoints/30207/3629883
BankingService.prototype.releasepoints = function(releasepoints, campaignid, userid) {
    this.util.timeout(config.util.DEFAULT_SECONDS);
    var baseurl = this.urlService.getFullUrlPrincipalApi();
    var header = this.util.getHeaderJson('');     
    
    console.log(header);
    return this.util.putUrl(baseurl, releasepoints, header,'/redemptions/releasePoints/'+campaignid+'/'+userid);
};

//https://hml-banking-api.webpremios.com.br:443/v1/account/campaigns/30207/participants/14124177/extract
BankingService.prototype.getExtract = function(campaignid, userid) {
    this.util.timeout(config.util.DEFAULT_SECONDS);
    var baseurl = this.urlService.getFullUrlPrincipalApi();
    var header = this.util.getHeaderJson('');    
    return this.util.getUrl(baseurl, header,'/account/campaigns/'+campaignid+'/participants/'+userid+'/extract');
};

//https://hml-banking-api.webpremios.com.br:443/v1/account/client/credit
BankingService.prototype.postCredit = function(credit) {
    this.util.timeout(config.util.DEFAULT_SECONDS);
    var baseurl = this.urlService.getFullUrlPrincipalApi();
    var header = this.util.getHeaderJson('');
    return this.util.postUrl(baseurl, credit, header,'/account/client/credit');
};

//https://hml-banking-api.webpremios.com.br:443/v1/bankaccount/campaigns/30207/participants/14124177/extract
BankingService.prototype.getBankAccountExtract = function(campaignid, userid) {
    this.util.timeout(config.util.DEFAULT_SECONDS);
    var baseurl = this.urlService.getFullUrlPrincipalApi();
    var header = this.util.getHeaderJson('');    
    return this.util.getUrl(baseurl, header,'/bankaccount/campaigns/'+campaignid+'/participants/'+userid+'/extract');
};

module.exports = BankingService;