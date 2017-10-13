'use strict';

var Redemptionfactory = function(){

};
Redemptionfactory.prototype.build = function()
{

    var redemption = {        

      parentOrderId: null,
      participantId: null,
      conversionRate: null,
      campaignId: null,
      shippingTypeId: null,
      payments: [
        {
          campaignConversionRate: null,
          paymentType: null,
          total: null,
          cardNumber: null,
          cardHolder: null,
          cardHolderCPF: null,
          cardExpirationMonthDate: null,
          cardExpirationYearDate: null,
          numberOfPayments: null,
          securityCode: null,
          catalogId: null,
          ignoreApportionment: null,
          cardExpirationDate: null,
          paymentMethod: null,
          brokerId: null,
          transactionType: null,
          paymentPlanId: null,
          isExternalCash: null
        }
      ],
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
      participant: {
        catalogId: null,
        name: null,	
        login: null,
        cnpj: null,
        cpf: null,
        rg: null,
        companyName: null,
        expeditionDate: null,
        issuing: null,
        stateIssuing: null,
        bornDate: null,
        genderTypeId: null,
        zipCode: null,
        street: null,
        neighborhood: null,
        city: null,
        state: null,
        number: null,
        complement: null,
        emails: [
          {
            emailType: null,
            emailAddress: null
          }
        ],
        phones: [
          {
            phoneType: null,
            ddd: null,
            phoneNumber: null
          }
        ],
        updateDate: null,
        insertDate: null
      },
      orderShipping: {
        name: null,
        login: null,
        cnpj: null,
        cpf: null,
        rg: null,
        companyName: null,
        expeditionDate: null,
        issuing: null,
        stateIssuing: null,
        bornDate: null,
        genderTypeId: null,
        zipCode: null,
        street: null,
        neighborhood: null,
        city: null,
        state: null,
        number: null,
        complement: null,
        emails: [
          {
            emailType: null,
            emailAddress: null
          }
        ],
        phones: [
          {
            phoneType: null,
            ddd: null,
            phoneNumber: null
          }
        ],
        updateDate: null,
        insertDate: null
      },
      authentication: {
        validationCode: null,
        authenticationType: null,
        isResend: null
      },
      application: {
        applicationId: null,
        ip: null,
        serverIP: null,
        serverName: null,
        browser: null
      },
      isDecimalCash: null
      
  };

  return redemption;
}

Redemptionfactory.prototype.buildDefault = function(){
    var redemption = this.build();

    redemption.parentOrderId= "xxx";
    redemption.participantId= "xxx";
    redemption.conversionRate= "xxx";
    redemption.campaignId= "xxx";
    redemption.shippingTypeId= 1;
    //payments": [
      //{
        redemption.payments[0].campaignConversionRate= 0; 
        redemption.payments[0].paymentType= 2; 
        redemption.payments[0].total= 11; 
        redemption.payments[0].cardNumber= null; 
        redemption.payments[0].cardHolder= null; 
        redemption.payments[0].cardHolderCPF= null; 
        redemption.payments[0].cardExpirationMonthDate= null; 
        redemption.payments[0].cardExpirationYearDate= null; 
        redemption.payments[0].numberOfPayments= 0; 
        redemption.payments[0].securityCode= null; 
        redemption.payments[0].catalogId= 0; 
        redemption.payments[0].ignoreApportionment= true; 
        redemption.payments[0].cardExpirationDate= "2017-09-12T19:16:14.883Z"; 
        redemption.payments[0].paymentMethod= 6; 
        redemption.payments[0].brokerId= null; 
        redemption.payments[0].transactionType= 0; 
        redemption.payments[0].paymentPlanId= 0; 
        redemption.payments[0].isExternalCash= true;
      //}
    //],
    //"orders": [
      //{
        redemption.orders[0].campaignConversionRate= 0;
        redemption.orders[0].orderId= 3889907;
        redemption.orders[0].vendorId= 60;
        redemption.orders[0].conversionRate= 100.0;
        redemption.orders[0].vendorOrderId= "string";
        redemption.orders[0].amount= 11.0;
        redemption.orders[0].shippingValue= 0.0;
        redemption.orders[0].shippingTypeId= 1;
        redemption.orders[0].orderType= 1;
        redemption.orders[0].redemptionStatus= 1;
        redemption.orders[0].descriptionRedeem= "teste";
        //"items": [
          //{
            redemption.orders[0].items[0].itemType= 1;
            redemption.orders[0].items[0].code= "teste";
            redemption.orders[0].items[0].value= 0;
            redemption.orders[0].items[0].quantity= 0;
          //}
        //],
        //"products": [
          //{
            redemption.orders[0].products[0].id= "3410c151e6ca4167a670";
            redemption.orders[0].products[0].name= "Notebook Dell Inspiron I14-5448-C25 com Intel® Core™ i7-5500U- 8GB- 1TB- 8GB SSD- Leitor de Cartoes- HDMI- Placa Grafica de 2GB- LED 14- e Windows 10";
            redemption.orders[0].products[0].category= "Computadores e Notebooks";
            redemption.orders[0].products[0].partnerName= "Casas Bahia";
            redemption.orders[0].products[0].estimatedDeliveryDate= "2017-09-12T19:16:14.883Z";
            redemption.orders[0].products[0].unitPrice= 11.0;
            redemption.orders[0].products[0].quantity= 1;
            redemption.orders[0].products[0].partnerId= "60";
            redemption.orders[0].products[0].partnerTypeId= 1;
            redemption.orders[0].products[0].parameters= null;
            //"configuration": [
              //{
                redemption.orders[0].products[0].configuration[0].key= "1";
                redemption.orders[0].products[0].configuration[0].value= "1";
              //}
            //]
          //}
        //],
        redemption.orders[0].currentConversionRate= 0;
        redemption.orders[0].orderAmount= 0;
        redemption.orders[0].orderPoints= 0;
        redemption.orders[0].shippingPoints= 0;
      //}
    //],
    //"participant": {
      redemption.participant.catalogId= 40210;
      redemption.participant.name= "Herbert Lima_QA_AUTOMACAO";	
      redemption.participant.login= "herbert.lima";
      redemption.participant.cnpj= "null";
      redemption.participant.cpf= "31022743821";
      redemption.participant.rg= null;
      redemption.participant.companyName= null;
      redemption.participant.expeditionDate= "2017-09-12T19:16:14.884Z";
      redemption.participant.issuing= null;
      redemption.participant.stateIssuing= null;
      redemption.participant.bornDate= "1983-11-03T00:00:00";
      redemption.participant.genderTypeId= "1";
      redemption.participant.zipCode= "06454000";
      redemption.participant.street= "Alameda Rio Negro";
      redemption.participant.neighborhood= "Alphaville Industrial";
      redemption.participant.city= "Barueri";
      redemption.participant.state= "SP";
      redemption.participant.number= "585";
      redemption.participant.complement= "bloco c 11 andar teste";
      //"emails": [
        //{
          redemption.participant.emails[0].emailType= 1;
          redemption.participant.emails[0].emailAddress= "herbert.lima@ltm.digital";
        //}
      //],
      //"phones": [
        //{
          redemption.participant.phones[0].phoneType= 2;
          redemption.participant.phones[0].ddd= "11";
          redemption.participant.phones[0].phoneNumber= "11111111";
        //}
      //],
      redemption.participant.updateDate= "2017-09-12T19:16:14.884Z";
      redemption.participant.insertDate= "2017-09-12T19:16:14.884Z";
    //},
    //"orderShipping": {
      redemption.orderShipping.name= "Endereço de cadastro";
      redemption.orderShipping.login= "herbert.lima";
      redemption.orderShipping.cnpj= null;
      redemption.orderShipping.cpf= "31022743821";
      redemption.orderShipping.rg= "408231117";
      redemption.orderShipping.companyName= null;
      redemption.orderShipping.expeditionDate= "2017-09-12T19:16:14.884Z";
      redemption.orderShipping.issuing= null;
      redemption.orderShipping.stateIssuing= null;
      redemption.orderShipping.bornDate= "2017-09-12T19:16:14.884Z";
      redemption.orderShipping.genderTypeId= "1";
      redemption.orderShipping.zipCode= "06454000";
      redemption.orderShipping.street= "Alameda Rio Negro";
      redemption.orderShipping.neighborhood= "Alphaville Industrial";
      redemption.orderShipping.city= "Barueri";
      redemption.orderShipping.state= "SP";
      redemption.orderShipping.number= "585";
      redemption.orderShipping.complement= "bloco c 11 andar teste";
      //"emails": [
        //{
          redemption.orderShipping.emails[0].emailType= 1;
          redemption.orderShipping.emails[0].emailAddress= "herbert.lima@ltm.digital";
        //}
      //],
      //"phones": [
        //{
          redemption.orderShipping.phones[0].phoneType= 1;
          redemption.orderShipping.phones[0].ddd= "11";
          redemption.orderShipping.phones[0].phoneNumber= "11112222";
        //}
      //],
      redemption.orderShipping.updateDate= "2017-09-12T19:16:14.884Z";
      redemption.orderShipping.insertDate= "2017-09-12T19:16:14.884Z";
    //},
    //"authentication": {
      redemption.authentication.validationCode= null;
      redemption.authentication.authenticationType= 1;
      redemption.authentication.isResend= false;
    //},
    //"application": {
      redemption.application.applicationId= "b5bd33f2-5e38-425e-9432-78b01afd19c6";
      redemption.application.ip= "189.44.200.218";
      redemption.application.serverIP= "100.106.140.72";
      redemption.application.serverName= "hml-marketplace-api.webpremios.com.br";
      redemption.application.browser= "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36";
    //},
    redemption.isDecimalCash= true;

    return redemption;
};
//module.exports = Redemptionfactory;