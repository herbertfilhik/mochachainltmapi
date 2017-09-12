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

    reversalredemption.authorizationCode= "8a77fb8e-a109-4424-857d-e908580e869a",
    reversalredemption.orderId= "9066059",
    reversalredemption.reversalValue= "0.0"
    
    return reversalredemption;
};
            
module.exports = ReversalRedemptionfactory;