'use strict';
    
var SuccessFinishRedemptionFactory = function(){

};
SuccessFinishRedemptionFactory.prototype.build = function()
{

  var successfinishredemption = {        
    
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

    return successfinishredemption;
}

SuccessFinishRedemptionFactory.prototype.buildDefault = function(){
    var successfinishredemption = this.build();

    //{
      successfinishredemption.authorizationCode= "94aec5df-42cc-49f3-8a40-777a474c37aa";
      successfinishredemption.isOffline= true;
      //"orders= [
        //{
          successfinishredemption.campaignConversionRate= 0;
          successfinishredemption.orderId= 0;
          successfinishredemption.vendorId= 0;
          successfinishredemption.conversionRate= 0;
          successfinishredemption.vendorOrderId= "string";
          successfinishredemption.amount= 0;
          successfinishredemption.shippingValue= 0;
          successfinishredemption.shippingTypeId= 1;
          successfinishredemption.orderType= 1;
          successfinishredemption.redemptionStatus= 1;
          successfinishredemption.descriptionRedeem= "string";
          //"attributes= [
            //{
              successfinishredemption.key= "string";
              successfinishredemption.value= "string";
            //}
          //];
          //"items= [
            //{
              successfinishredemption.itemType= 1;
              successfinishredemption.code= "string";
              successfinishredemption.value= 0;
              successfinishredemption.quantity= 0;
            //}
          //];
          //"products= [
            //{
              successfinishredemption.id= "string";
              successfinishredemption.name= "string";
              successfinishredemption.category= "string";
              successfinishredemption.partnerName= "string";
              successfinishredemption.estimatedDeliveryDate= "2017-09-15T13=58=48.766Z";
              successfinishredemption.unitPrice= 0;
              successfinishredemption.quantity= 0;
              successfinishredemption.partnerId= "string";
              successfinishredemption.partnerTypeId= 0;
              successfinishredemption.parameters= "string";
              //"configuration= [
                //{
                  successfinishredemption.key= "string";
                  successfinishredemption.value= "string";
                //}
             // ]
            //}
          //];
          successfinishredemption.currentConversionRate= 0;
          successfinishredemption.orderAmount= 0;
          successfinishredemption.orderPoints= 0;
          successfinishredemption.shippingPoints= 0;
        //}
      //];
      successfinishredemption.confirmedOrders= [0];
      successfinishredemption.declinedOrders= [0];
    //}

    return successfinishredemption;
};
            
//module.exports = SuccessFinishRedemptionFactory;