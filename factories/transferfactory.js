'use strict';

var TransferFactory = function(){

};
TransferFactory.prototype.build = function()
{

  var transfer = {        
    
      transactionTypeDebit: null,
      accountHolderIdDebit: null,
      transactionTypeCredit: null,
      accountHolderIdCredit: null,
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

  return transfer;
}

TransferFactory.prototype.buildDefault = function(){
    var transfer = this.build();

    //{
      transfer.transactionTypeDebit= 1,
      transfer.accountHolderIdDebit= 0,
      transfer.transactionTypeCredit= 1,
      transfer.accountHolderIdCredit= 0,
      transfer.conversionRate= 0,
      transfer.transactionValue= 0,
      transfer.expirationDate= "2017-09-20T20:25:47.955Z",
      transfer.description= "string",
      transfer.transactionIdRedeem= 0,
      transfer.transactionIdExpired= 0,
      transfer.externalCode= 0,
      transfer.orderId= 0,
      transfer.legacyId= 0,
      transfer.originAccountHolderId= 0,
      transfer.tag= "string",
      transfer.pointBlocked= true,
      transfer.transactionProcessIdentifier= 0,
      transfer.transactionProcessItemIdentifier= 0,
      transfer.transactionIdCredit= 0,
      transfer.supplierId= 0,
      transfer.validateBalance= true,
      transfer.authorizationDetailId= 0,
      transfer.projectId= "string",
      transfer.isCashReversal= true,
      transfer.isOnline= true,
      transfer.bankTransactionId= 0
    //}

    return transfer;
};
//module.exports = TransferFactory;