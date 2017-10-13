'use strict';
    
var CancelRedemptionsFactory = function(){

};
CancelRedemptionsFactory.prototype.build = function()
{

  var redemptionscancel = {        
    
      authorizationCode: null,
      orders: [
        {
          orderId: null,
          reversalValue: null,
          items: [
            {
              itemType: null,
              code: null,
              value: null,
              quantity: null
            }
          ],
          message: null
        }
      ],
      cancelBroker: null
    
  };

    return redemptionscancel;
}

CancelRedemptionsFactory.prototype.buildDefault = function(){
    var redemptionscancel = this.build();

    //{
      redemptionscancel.authorizationCode= "eb376e37-62f9-4fdb-bf37-ea022dec7426";
      //"orders": [
        //{
          redemptionscancel.orderId= 0;
          redemptionscancel.reversalValue= 0;
          //"items": [
            //{
              redemptionscancel.itemType= 1;
              redemptionscancel.code= "string";
              redemptionscancel.value= 0;
              redemptionscancel.quantity= 0;
            //}
          //],
          redemptionscancel.message= "string";
        //}
      //],
      redemptionscancel.cancelBroker= true;
    //}

    return redemptionscancel;
};
            
//module.exports = CancelRedemptionsFactory;