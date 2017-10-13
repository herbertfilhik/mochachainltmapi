'use strict';
//var Util = require('../util.js');
//var UrlService = require('./urlService.js');
//var config = require('../config.js');

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

//https://hml-banking-api.webpremios.com.br:443/v1/redemptions/finishRedemption
BankingService.prototype.putsuccessfinishredemption = function(successfinishredemption) {
    this.util.timeout(config.util.DEFAULT_SECONDS);
    var baseurl = this.urlService.getFullUrlPrincipalApi();
    var header = this.util.getHeaderJson('');    
    return this.util.putUrl(baseurl, successfinishredemption, header,'/redemptions/finishRedemption');
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

//https://hml-banking-api.webpremios.com.br:443/v1/account/campaigns/30207/participants/14124177/balance/live/60
BankingService.prototype.getbalancelive = function(campaignid, userid, vendorid) {
    this.util.timeout(config.util.DEFAULT_SECONDS);
    var baseurl = this.urlService.getFullUrlPrincipalApi();
    var header = this.util.getHeaderJson('');    
    return this.util.getUrl(baseurl, header,'/account/campaigns/'+campaignid+'/participants/'+userid+'/balance/live/'+vendorid);
};

//https://hml-banking-api.webpremios.com.br:443/v1/redemptions/AuthorizationOrderDetail/3860029
BankingService.prototype.getAuthorizationOrderDetail = function(ORDERIDFORAUTHORIZATIONORDERDETAIL) {
    this.util.timeout(config.util.DEFAULT_SECONDS);
    var baseurl = this.urlService.getFullUrlPrincipalApi();
    var header = this.util.getHeaderJson('');    
    return this.util.getUrl(baseurl, header,'/redemptions/AuthorizationOrderDetail/'+ORDERIDFORAUTHORIZATIONORDERDETAIL);
};

//https://hml-banking-api.webpremios.com.br:443/v1/redemptions/cancel
BankingService.prototype.putredemptionscancel = function(redemptionscancel) {
    this.util.timeout(config.util.DEFAULT_SECONDS);
    var baseurl = this.urlService.getFullUrlPrincipalApi();
    var header = this.util.getHeaderJson('');    
    return this.util.putUrl(baseurl, redemptionscancel, header,'/redemptions/cancel');
};

//https://hml-banking-api.webpremios.com.br:443/v1/redemptions/xxx/authorizationDetail/xxx
BankingService.prototype.putauthorizationdetail = function(campaignidauthdet, orderidauthdet) {
    this.util.timeout(config.util.DEFAULT_SECONDS);
    var baseurl = this.urlService.getFullUrlPrincipalApi();
    var header = this.util.getHeaderJson('');    
    return this.util.putUrl(baseurl, '', header,'/redemptions/'+campaignidauthdet+'/authorizationDetail/'+orderidauthdet);
};

//https://hml-banking-api.webpremios.com.br:443/v1/account/campaigns/30207/participants/14124177/balanceOrigin
BankingService.prototype.getbalanceOrigin = function(campaignid, userid) {
    this.util.timeout(config.util.DEFAULT_SECONDS);
    var baseurl = this.urlService.getFullUrlPrincipalApi();
    var header = this.util.getHeaderJson('');    
    return this.util.getUrl(baseurl, header,'/account/campaigns/'+campaignid+'/participants/'+userid+'/balanceOrigin');
};


//https://hml-banking-api.webpremios.com.br:443/v1/account/campaigns/30207/participants/14124177/balanceOnHold
BankingService.prototype.getbalanceOnHold = function(campaignid, userid) {
    this.util.timeout(config.util.DEFAULT_SECONDS);
    var baseurl = this.urlService.getFullUrlPrincipalApi();
    var header = this.util.getHeaderJson('');    
    return this.util.getUrl(baseurl, header,'/account/campaigns/'+campaignid+'/participants/'+userid+'/balanceOnHold');
};

//https://hml-banking-api.webpremios.com.br:443/v1/account/campaigns/30207/participants/transfer
BankingService.prototype.posttransfer = function(transfer, campaignid) {
    this.util.timeout(config.util.DEFAULT_SECONDS);
    var baseurl = this.urlService.getFullUrlPrincipalApi();
    var header = this.util.getHeaderJson('');    
    return this.util.postUrl(baseurl, transfer, header,'/account/campaigns/'+campaignid+'/participants/transfer');
};

//https://hml-banking-api.webpremios.com.br:443/v1/account/campaigns/30207/participants/transferOnline
BankingService.prototype.posttransferonline = function(transferonline, campaignid) {
    this.util.timeout(config.util.DEFAULT_SECONDS);
    var baseurl = this.urlService.getFullUrlPrincipalApi();
    var header = this.util.getHeaderJson('');    
    return this.util.postUrl(baseurl, transferonline, header,'/account/campaigns/'+campaignid+'/participants/transferOnline');
};

//https://hml-banking-api.webpremios.com.br:443/v1/account/creditParticipantOnline
BankingService.prototype.postcreditParticipantOnline = function(creditParticipantOnline) {
    this.util.timeout(config.util.DEFAULT_SECONDS);
    var baseurl = this.urlService.getFullUrlPrincipalApi();
    var header = this.util.getHeaderJson('');    
    return this.util.postUrl(baseurl, creditParticipantOnline, header,'/account/creditParticipantOnline');
};

//https://hml-banking-api.webpremios.com.br:443/v1/configurations/flush/2
BankingService.prototype.postflush = function(flush) {
    this.util.timeout(config.util.DEFAULT_SECONDS);
    var baseurl = this.urlService.getFullUrlPrincipalApi();
    var header = this.util.getHeaderJson('');    
    return this.util.postUrl(baseurl, '', header,'/configurations/flush/'+flush);
};

//https://hml-banking-api.webpremios.com.br:443/v1/redemptions/statusTransaction/123/123/123
BankingService.prototype.getstatusTransaction = function(campaignid, token, externalCode) {
    this.util.timeout(config.util.DEFAULT_SECONDS);
    var baseurl = this.urlService.getFullUrlPrincipalApi();
    var header = this.util.getHeaderJson('');    
    return this.util.getUrl(baseurl, header,'/redemptions/statusTransaction/'+campaignid+'/'+token+'/'+externalCode);
};

//https://hml-banking-api.webpremios.com.br:443/v1/campaigns/123/participants/123/balance/hybrid/123
BankingService.prototype.getbalancehybrid = function(campaignidhybrid, participantidhybrid, hybridcampaignhybrid) {
    this.util.timeout(config.util.DEFAULT_SECONDS);
    var baseurl = this.urlService.getFullUrlPrincipalApi();
    var header = this.util.getHeaderJson('');    
    return this.util.getUrl(baseurl, header,'/campaigns/'+campaignidhybrid+'/participants/'+participantidhybrid+'/balance/hybrid/'+hybridcampaignhybrid);
};

//module.exports = BankingService;