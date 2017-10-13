'use strict';
    
var ReversalRedemptionfactory = function(){

};
ReversalRedemptionfactory.prototype.build = function()
{

  var reversalredemption = {        

      authorizationCode: null,
      orders: [
          {
              orderId: null,
              reversalValue: null
          }
      ]

  };

    return reversalredemption;
}


ReversalRedemptionfactory.prototype.buildDefault = function(){
    var reversalredemption = this.build();

    reversalredemption.authorizationCode= "xxx",
    reversalredemption.orders[0].orderId= "xxx",
    reversalredemption.orders[0].reversalValue= "xxx"
    
    return reversalredemption;
};
            
//module.exports = ReversalRedemptionfactory;