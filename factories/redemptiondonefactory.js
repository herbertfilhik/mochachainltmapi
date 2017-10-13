'use strict';

var RedemptionDonefactory = function(){

};
RedemptionDonefactory.prototype.build = function()
{

    var redemptiondone = {        

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

    return redemptiondone;
}

RedemptionDonefactory.prototype.buildDefault = function(){
    var redemptiondone = this.build();

    redemptiondone.parentOrderId= 3734896;
    redemptiondone.participantId= "14124177";
    redemptiondone.conversionRate= 100.0;
    redemptiondone.campaignId= "30207";
    redemptiondone.shippingTypeId= 1;
    //payments": [
      //{
        redemptiondone.payments[0].campaignConversionRate= 0; 
        redemptiondone.payments[0].paymentType= 2; 
        redemptiondone.payments[0].total= 11; 
        redemptiondone.payments[0].cardNumber= null; 
        redemptiondone.payments[0].cardHolder= null; 
        redemptiondone.payments[0].cardHolderCPF= null; 
        redemptiondone.payments[0].cardExpirationMonthDate= null; 
        redemptiondone.payments[0].cardExpirationYearDate= null; 
        redemptiondone.payments[0].numberOfPayments= 0; 
        redemptiondone.payments[0].securityCode= null; 
        redemptiondone.payments[0].catalogId= 0; 
        redemptiondone.payments[0].ignoreApportionment= true; 
        redemptiondone.payments[0].cardExpirationDate= "2017-09-12T19:16:14.883Z"; 
        redemptiondone.payments[0].paymentMethod= 6; 
        redemptiondone.payments[0].brokerId= null; 
        redemptiondone.payments[0].transactionType= 0; 
        redemptiondone.payments[0].paymentPlanId= 0; 
        redemptiondone.payments[0].isExternalCash= true;
      //}
    //],
    //"orders": [
      //{
        redemptiondone.orders[0].campaignConversionRate= 0;
        redemptiondone.orders[0].orderId= 3890006;
        redemptiondone.orders[0].vendorId= 60;
        redemptiondone.orders[0].conversionRate= 100.0;
        redemptiondone.orders[0].vendorOrderId= "string";
        redemptiondone.orders[0].amount= 11.0;
        redemptiondone.orders[0].shippingValue= 0.0;
        redemptiondone.orders[0].shippingTypeId= 1;
        redemptiondone.orders[0].orderType= 1;
        redemptiondone.orders[0].redemptionStatus= 1;
        redemptiondone.orders[0].descriptionRedeem= "teste";
        //"items": [
          //{
            redemptiondone.orders[0].items[0].itemType= 1;
            redemptiondone.orders[0].items[0].code= "teste";
            redemptiondone.orders[0].items[0].value= 0;
            redemptiondone.orders[0].items[0].quantity= 0;
          //}
        //],
        //"products": [
          //{
            redemptiondone.orders[0].products[0].id= "42b4fd8214bb481494de";
            redemptiondone.orders[0].products[0].name= "Tablet DL Tab Kids Branco com Tela de 7- 8GB- 2 Cameras- Wi-Fi- Suporte a Modem 3G- Android 4.4- Processador Quad-Core e Capa Protetora Laranja";
            redemptiondone.orders[0].products[0].category= "Computadores e Notebooks";
            redemptiondone.orders[0].products[0].partnerName= "DL";
            redemptiondone.orders[0].products[0].estimatedDeliveryDate= "2017-09-20T14:17:17.1512858+00:00";
            redemptiondone.orders[0].products[0].unitPrice= 11.0;
            redemptiondone.orders[0].products[0].quantity= 1;
            redemptiondone.orders[0].products[0].partnerId= "60";
            redemptiondone.orders[0].products[0].partnerTypeId= 1;
            redemptiondone.orders[0].products[0].parameters= null;
            //"configuration": [
              //{
                redemptiondone.orders[0].products[0].configuration[0].key= "1";
                redemptiondone.orders[0].products[0].configuration[0].value= "1";
              //}
            //]
          //}
        //],
        redemptiondone.orders[0].currentConversionRate= 0;
        redemptiondone.orders[0].orderAmount= 0;
        redemptiondone.orders[0].orderPoints= 0;
        redemptiondone.orders[0].shippingPoints= 0;
      //}
    //],
    //"participant": {
      redemptiondone.participant.catalogId= 40210;
      redemptiondone.participant.name= "Herbert Lima_QA_AUTOMACAO";	
      redemptiondone.participant.login= "herbert.lima";
      redemptiondone.participant.cnpj= "null";
      redemptiondone.participant.cpf= "31022743821";
      redemptiondone.participant.rg= null;
      redemptiondone.participant.companyName= null;
      redemptiondone.participant.expeditionDate= "2017-09-12T19:16:14.884Z";
      redemptiondone.participant.issuing= null;
      redemptiondone.participant.stateIssuing= null;
      redemptiondone.participant.bornDate= "1983-11-03T00:00:00";
      redemptiondone.participant.genderTypeId= "1";
      redemptiondone.participant.zipCode= "06454000";
      redemptiondone.participant.street= "Alameda Rio Negro";
      redemptiondone.participant.neighborhood= "Alphaville Industrial";
      redemptiondone.participant.city= "Barueri";
      redemptiondone.participant.state= "SP";
      redemptiondone.participant.number= "585";
      redemptiondone.participant.complement= "bloco c 11 andar teste";
      //"emails": [
        //{
          redemptiondone.participant.emails[0].emailType= 1;
          redemptiondone.participant.emails[0].emailAddress= "herbert.lima@ltm.digital";
        //}
      //],
      //"phones": [
        //{
          redemptiondone.participant.phones[0].phoneType= 2;
          redemptiondone.participant.phones[0].ddd= "11";
          redemptiondone.participant.phones[0].phoneNumber= "11111111";
        //}
      //],
      redemptiondone.participant.updateDate= "2017-09-12T19:16:14.884Z";
      redemptiondone.participant.insertDate= "2017-09-12T19:16:14.884Z";
    //},
    //"orderShipping": {
      redemptiondone.orderShipping.name= "Endereço de cadastro";
      redemptiondone.orderShipping.login= "herbert.lima";
      redemptiondone.orderShipping.cnpj= null;
      redemptiondone.orderShipping.cpf= "31022743821";
      redemptiondone.orderShipping.rg= "408231117";
      redemptiondone.orderShipping.companyName= null;
      redemptiondone.orderShipping.expeditionDate= "2017-09-12T19:16:14.884Z";
      redemptiondone.orderShipping.issuing= null;
      redemptiondone.orderShipping.stateIssuing= null;
      redemptiondone.orderShipping.bornDate= "2017-09-12T19:16:14.884Z";
      redemptiondone.orderShipping.genderTypeId= "1";
      redemptiondone.orderShipping.zipCode= "06454000";
      redemptiondone.orderShipping.street= "Alameda Rio Negro";
      redemptiondone.orderShipping.neighborhood= "Alphaville Industrial";
      redemptiondone.orderShipping.city= "Barueri";
      redemptiondone.orderShipping.state= "SP";
      redemptiondone.orderShipping.number= "585";
      redemptiondone.orderShipping.complement= "bloco c 11 andar teste";
      //"emails": [
        //{
          redemptiondone.orderShipping.emails[0].emailType= 1;
          redemptiondone.orderShipping.emails[0].emailAddress= "herbert.lima@ltm.digital";
        //}
      //],
      //"phones": [
        //{
          redemptiondone.orderShipping.phones[0].phoneType= 1;
          redemptiondone.orderShipping.phones[0].ddd= "11";
          redemptiondone.orderShipping.phones[0].phoneNumber= "11112222";
        //}
      //],
      redemptiondone.orderShipping.updateDate= "2017-09-12T19:16:14.884Z";
      redemptiondone.orderShipping.insertDate= "2017-09-12T19:16:14.884Z";
    //},
    //"authentication": {
      redemptiondone.authentication.validationCode= null;
      redemptiondone.authentication.authenticationType= 1;
      redemptiondone.authentication.isResend= false;
    //},
    //"application": {
      redemptiondone.application.applicationId= "b5bd33f2-5e38-425e-9432-78b01afd19c6";
      redemptiondone.application.ip= "189.44.200.218";
      redemptiondone.application.serverIP= "100.106.140.72";
      redemptiondone.application.serverName= "hml-marketplace-api.webpremios.com.br";
      redemptiondone.application.browser= "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36";
    //},
    redemptiondone.isDecimalCash= true;

    return redemptiondone;
};
//module.exports = RedemptionDonefactory;