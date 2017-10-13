'use strict';
    
var PutReversalRedemptionfactory = function(){

};
PutReversalRedemptionfactory.prototype.build = function()
{

  var putreversalredemption = {        

        authorizationCode: "42ddcc00-f27f-419e-ba5f-ada050d0c564",
        orders: [
          {
            orderId: 3890006,
            reversalValue: 0.01,
            items: [
              {
                itemType: null,
                code: null,
                value: null,
                quantity: null
              }
            ],
            message: null,
          }
        ],
        userId: null
  };

    return putreversalredemption;
}


PutReversalRedemptionfactory.prototype.buildDefault = function(){
    var putreversalredemption = this.build();
    
    putreversalredemption.authorizationCode= "42ddcc00-f27f-419e-ba5f-ada050d0c564";
    //"orders": [
      //{
        putreversalredemption.orders[0].orderId= 3890006;
        putreversalredemption.orders[0].reversalValue= 1.00;
        //items= [
          //{
            putreversalredemption.orders[0].items[0].itemType= 1;
            putreversalredemption.orders[0].items[0].code= "string";
            putreversalredemption.orders[0].items[0].value= 0;
            putreversalredemption.orders[0].items[0].quantity= 0;
          //}
        //],
        putreversalredemption.orders[0].message= "string";
      //}
    //],
    putreversalredemption.userId= 0;
    
    return putreversalredemption;
};
            
//module.exports = PutReversalRedemptionfactory;