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

    finishredemption.authorizationCode= "a3c5f9fc-b460-4369-94a5-ac572b163762";
    finishredemption.isOffline= true;
    //orders= //[
      //{
        finishredemption.orders[0].campaignConversionRate= 0;
        finishredemption.orders[0].orderId= 3889907;
        finishredemption.orders[0].vendorId= 60;
        finishredemption.orders[0].conversionRate= 100.0;
        finishredemption.orders[0].vendorOrderId= "string";
        finishredemption.orders[0].amount= 11.0;
        finishredemption.orders[0].shippingValue= 0;
        finishredemption.orders[0].shippingTypeId= 1;
        finishredemption.orders[0].orderType= 1;
        finishredemption.orders[0].redemptionStatus= 3;
        finishredemption.orders[0].descriptionRedeem= "string";
        //"attributes"= [
          //{
            finishredemption.orders[0].attributes[0].key= "string";
            finishredemption.orders[0].attributes[0].value= "string";
          //}
        //];
        //"items"= [
          //{
            finishredemption.orders[0].items[0].itemType= 1;
            finishredemption.orders[0].items[0].code= "string";
            finishredemption.orders[0].items[0].value= 0;
            finishredemption.orders[0].items[0].quantity= 0;
          //}
        //],
        //"products"= [
          //{
            finishredemption.orders[0].products[0].id= "3410c151e6ca4167a670";
            finishredemption.orders[0].products[0].name= "Notebook Dell Inspiron I14-5448-C25 com Intel® Core™ i7-5500U- 8GB- 1TB- 8GB SSD- Leitor de Cartoes- HDMI- Placa Grafica de 2GB- LED 14- e Windows 10";
            finishredemption.orders[0].products[0].category= "Computadores e Notebooks";
            finishredemption.orders[0].products[0].partnerName= "Casas Bahia";
            finishredemption.orders[0].products[0].estimatedDeliveryDate= "2017-09-12T19:16:14.885Z";
            finishredemption.orders[0].products[0].unitPrice= 11.0;
            finishredemption.orders[0].products[0].quantity= 1;
            finishredemption.orders[0].products[0].partnerId= "60";
            finishredemption.orders[0].products[0].partnerTypeId= 1;
            finishredemption.orders[0].products[0].parameters= null;
            //"configuration"= [
              //{
                finishredemption.orders[0].products[0].configuration[0].key= "string";
                finishredemption.orders[0].products[0].configuration[0].value= "string";
              //}
            //]
          //}
        //];
        finishredemption.orders[0].currentConversionRate= 0;
        finishredemption.orders[0].orderAmount= 0;
        finishredemption.orders[0].orderPoints= 0;
        finishredemption.orders[0].shippingPoints= 0;
      //}
    //];
    finishredemption.confirmedOrders= [0];
    finishredemption.declinedOrders= [0];    

    return finishredemption;
};
            
//module.exports = FinishRedemptionfactory;