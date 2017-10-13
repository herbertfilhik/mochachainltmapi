'use strict';
    
var Creditfactory = function(){

};
Creditfactory.prototype.build = function()
{

  var credit = {       
        transactionTypeCredit: null,
        accountHolderId: null,
        conversionRate: null,
        transactionValue: null,
        description: null,
        transactionProcessIdentifier: null,
        projectId: null,
        projectConfigurationId: null
  };

    return credit;
}


Creditfactory.prototype.buildDefault = function(){
    var credit = this.build();
    
    credit.transactionTypeCredit= 1,
    credit.accountHolderId= 2022364306,
    credit.conversionRate= 1,
    credit.transactionValue= 100,
    credit.description= "teste",
    credit.transactionProcessIdentifier= 0,
    credit.projectId= 30207,
    credit.projectConfigurationId= 40210

    return credit;
};
            
//module.exports = Creditfactory;