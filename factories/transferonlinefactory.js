'use strict';

var TransferFactoryOnline = function(){

};
TransferFactoryOnline.prototype.build = function()
{

  var transferonline = {        
    
    transactionTypeDebit: null,
    accountHolderIdDebit: null,
    transactionTypeCredit:null,
    accountHolderIdCredit:null,
    conversionRate: null,
    transactionValue: null,
    expirationDate: null,
    description: null,
    transactionIdRedeem: null,
    transactionIdExpired: null,
    externalCode: null,
    orderId: null,
    legacyId: null,
    originAccountHolderId: null,
    tag: null,
    pointBlocked: null,
    transactionProcessIdentifier: null,
    transactionProcessItemIdentifier: null,
    transactionIdCredit: null,
    supplierId: null,
    validateBalance: null,
    authorizationDetailId: null,
    projectId: null,
    isCashReversal: null,
    isOnline: null,
    bankTransactionId: null
        
  };

  return transferonline;
}

TransferFactoryOnline.prototype.buildDefault = function(){
    var transferonline = this.build();

    //{
      transferonline.transactionTypeDebit= 1;
      transferonline.accountHolderIdDebit= 0;
      transferonline.transactionTypeCredit= 1;
      transferonline.accountHolderIdCredit= 0;
      transferonline.conversionRate= 0;
      transferonline.transactionValue= 0;
      transferonline.expirationDate= "2017-09-20T20:25:47.955Z";
      transferonline.description= "string";
      transferonline.transactionIdRedeem= 0;
      transferonline.transactionIdExpired= 0;
      transferonline.externalCode= 0;
      transferonline.orderId= 0;
      transferonline.legacyId= 0;
      transferonline.originAccountHolderId= 0;
      transferonline.tag= "string";
      transferonline.pointBlocked= true;
      transferonline.transactionProcessIdentifier= 0;
      transferonline.transactionProcessItemIdentifier= 0;
      transferonline.transactionIdCredit= 0;
      transferonline.supplierId= 0;
      transferonline.validateBalance= true;
      transferonline.authorizationDetailId= 0;
      transferonline.projectId= "string";
      transferonline.isCashReversal= true;
      transferonline.isOnline= true;
      transferonline.bankTransactionId= 0
    //}

    return transferonline;
};
//module.exports = TransferFactoryOnline;