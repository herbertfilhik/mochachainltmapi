'use strict';
    
var FinishRedemptionfactory = function(){

};
FinishRedemptionfactory.prototype.build = function()
{

  var finishredemption = {        

      authorizationCode: null,
      isOffline: null,
      orders: [
        {
          campaignConversionRate: null,
          orderId: null,
          vendorId: null,
          conversionRate: null,
          vendorOrderId: null,
          amount: null,
          shippingValue: null,
          shippingTypeId: null,
          orderType: null,
          redemptionStatus: null,
          descriptionRedeem: null,
          attributes: [
            {
              key: null,
              value: null
            }
          ],
          items: [
            {
              itemType: null,
              code: null,
              value: null,
              quantity: null
            }
          ],
          products: [
            {
              id: null,
              name: null,
              category: null,
              partnerName: null,
              estimatedDeliveryDate: null,
              unitPrice: null,
              quantity: null,
              partnerId: null,
              partnerTypeId: null,
              parameters: null,
              configuration: [
                {
                  key: null,
                  value: null
                }
              ]
            }
          ],
          currentConversionRate: null,
          orderAmount: null,
          orderPoints: null,
          shippingPoints: null
        }
      ],
      confirmedOrders: [
        null
      ],
      declinedOrders: [
        null
      ]

    };

    return finishredemption;
}


FinishRedemptionfactory.prototype.buildDefault = function(){
    var finishredemption = this.build();

    finishredemption.authorizationCode= null,
    finishredemption.isOffline= null,
    finishredemption.campaignConversionRate= null,
    finishredemption.orderId= null,
    finishredemption.vendorId= null,
    finishredemption.conversionRate= null,
    finishredemption.vendorOrderId= null,
    finishredemption.amount= null,
    finishredemption.shippingValue= null,
    finishredemption.shippingTypeId= null,
    finishredemption.orderType= null,
    finishredemption.redemptionStatus= null,
    finishredemption.descriptionRedeem= null,
    finishredemption.key= null,
    finishredemption.value= null
    finishredemption.itemType= null,
    finishredemption.code= null,
    finishredemption.value= null,
    finishredemption.quantity= null
    finishredemption.id= null,
    finishredemption.name= null,
    finishredemption.category= null,
    finishredemption.partnerName= null,
    finishredemption.estimatedDeliveryDate= null,
    finishredemption.unitPrice= null,
    finishredemption.quantity= null,
    finishredemption.partnerId= null,
    finishredemption.partnerTypeId= null,
    finishredemption.parameters= null,
    finishredemption.key= null,
    finishredemption.value= null
    finishredemption.currentConversionRate= null,
    finishredemption.orderAmount= null,
    finishredemption.orderPoints= null,
    finishredemption.shippingPoints= null
    finishredemption.confirmedOrders= [null],
    finishredemption.declinedOrders= [null]    

    return finishredemption;
};
            
module.exports = FinishRedemptionfactory;