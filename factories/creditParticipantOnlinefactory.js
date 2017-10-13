'use strict';

var creditParticipantOnlineFactory = function(){

};
creditParticipantOnlineFactory.prototype.build = function()
{

  var creditParticipantOnline = {        
    
      credits: [
        {
          accountHolderIdDebit: null,
          accountHolderIdCredit: null,
          transactionValue: null,
          conversionRate: null,
          description: null,
          expirationDate: null,
          projectId: null,
          transactionTypeDebit: null,
          transactionTypeCredit: null
        }
      ]
        
  };

  return creditParticipantOnline;
}

creditParticipantOnlineFactory.prototype.buildDefault = function(){
    var creditParticipantOnline = this.build();

    //{
      //"credits=[
        //{
          creditParticipantOnline.credits[0].accountHolderIdDebit=0;
          creditParticipantOnline.credits[0].accountHolderIdCredit=0;
          creditParticipantOnline.credits[0].transactionValue=0;
          creditParticipantOnline.credits[0].conversionRate=0;
          creditParticipantOnline.credits[0].description="string";
          creditParticipantOnline.credits[0].expirationDate="2017-09-20T20:25:47.956Z";
          creditParticipantOnline.credits[0].projectId="string";
          creditParticipantOnline.credits[0].transactionTypeDebit=1;
          creditParticipantOnline.credits[0].transactionTypeCredit=1
        //}
     //]
    //}    

    return creditParticipantOnline;
};
//module.exports = creditParticipantOnlineFactory;