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
                taxes: [
                  {
                    taxType: null,
                    description: null,
                    amount: null,
                    isPercentage: null
                  }
                ],
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
                attributes: 
                  {
                    key: null,
                    value: null
                  }
                ,
                items: 
                  {
                    itemType: null,
                    code: null,
                    value: null,
                    quantity: null
                  }
                ,
                products: 
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
                    configuration: 
                      {
                        key: null,
                        value: null
                      },
                    
                  }
                ,
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
              emails: 
                {
                  emailType: null,
                  emailAddress: null
                }
              ,
              phones: 
                {
                  phoneType: null,
                  ddd: null,
                  phoneNumber: null
                }
              ,
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
              emails: 
                {
                  emailType: null,
                  emailAddress: null
                }
              ,
              phones: 
                {
                  phoneType: null,
                  ddd: null,
                  phoneNumber: null
                }
              ,
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
        
    redemption.parentOrderId= "3000";
    redemption.participantId= "13738177";
    redemption.conversionRate= "1";
    redemption.campaignId= "30207";
    redemption.shippingTypeId= "1";
    redemption.payments[0].campaignConversionRate= "0";
    redemption.payments[0].paymentType= "1";
    redemption.payments[0].total= "10.00";
    redemption.payments[0].cardNumber= "0000000000000001";
    redemption.payments[0].cardHolder= "Teste Teste";
    redemption.payments[0].cardHolderCPF= "219.969.318-06";
    redemption.payments[0].cardExpirationMonthDate= "01";
    redemption.payments[0].cardExpirationYearDate= "2020";
    redemption.payments[0].numberOfPayments= "12";
    redemption.payments[0].securityCode= "123";
    redemption.payments[0].catalogId= "2";
    redemption.payments[0].ignoreApportionment= "true";
    redemption.payments[0].cardExpirationDate= "2017-09-11T14=25=41.139Z";
    redemption.payments[0].paymentMethod= "6";
    redemption.payments[0].brokerId= "997";
    redemption.payments[0].transactionType= "1";
    redemption.payments[0].paymentPlanId= "0";
    redemption.payments[0].taxes[0].taxType= "1";
    redemption.payments[0].taxes[0].description= "teste";
    redemption.payments[0].taxes[0].amount= "10.00";
    redemption.payments[0].taxes[0].isPercentage= "true";
    redemption.payments[0].isExternalCash= "true";
    redemption.orders[0].campaignConversionRate= "1";
    redemption.orders[0].orderId= "3001";
    redemption.orders[0].vendorId= "1";
    redemption.orders[0].conversionRate= "1";
    redemption.orders[0].vendorOrderId= "1";
    redemption.orders[0].amount= "10.00";
    redemption.orders[0].shippingValue= "0.00";
    redemption.orders[0].shippingTypeId= "1";
    redemption.orders[0].orderType= "1";
    redemption.orders[0].redemptionStatus= "1";
    redemption.orders[0].descriptionRedeem= "teste";
    redemption.orders[0].attributes.key= "teste";
    redemption.orders[0].attributes.value= "1"
    redemption.orders[0].items.itemType= "1";
    redemption.orders[0].items.code= "teste123";
    redemption.orders[0].items.value= "10.00";
    redemption.orders[0].items.quantity= "1";
    redemption.orders[0].products.id= "123";
    redemption.orders[0].products.name= "teste";
    redemption.orders[0].products.category= "teste";
    redemption.orders[0].products.partnerName= "teste";
    redemption.orders[0].products.estimatedDeliveryDate= "2017-09-11T14=25=41.139Z";
    redemption.orders[0].products.unitPrice= "10.00";
    redemption.orders[0].products.quantity= "1";
    redemption.orders[0].products.partnerId= "teste";
    redemption.orders[0].products.partnerTypeId= "1";
    redemption.orders[0].products.parameters= "teste";
    redemption.orders[0].products.configuration.key= "teste";
    redemption.orders[0].products.configuration.value= "teste";
    redemption.orders[0].currentConversionRate= "1";
    redemption.orders[0].orderAmount= "10.00";
    redemption.orders[0].orderPoints= "100";
    redemption.orders[0].shippingPoints= "100";
    redemption.participant.catalogId= "2";
    redemption.participant.name= "Herbert Lima";
    redemption.participant.login= "herbert.lima";
    redemption.participant.cnpj= "47645472000165";
    redemption.participant.cpf= "31022743821";
    redemption.participant.rg= "408231117";
    redemption.participant.companyName= "teste";
    redemption.participant.expeditionDate= "2017-09-11T14=25=41.139Z";
    redemption.participant.issuing= "SSP";
    redemption.participant.stateIssuing= "SP";
    redemption.participant.bornDate= "2017-09-11T14=25=41.139Z";
    redemption.participant.genderTypeId= "M";
    redemption.participant.zipCode= "123";
    redemption.participant.street= "123";
    redemption.participant.neighborhood= "123";
    redemption.participant.city= "Barueri";
    redemption.participant.state= "SP";
    redemption.participant.number= "580";
    redemption.participant.complement= "teste";
    redemption.participant.emails.emailType= "1";
    redemption.participant.emails.emailAddress= "teste";
    redemption.participant.phones.phoneType= "1";
    redemption.participant.phones.ddd= "teste";
    redemption.participant.phones.phoneNumber= "teste";
    redemption.participant.updateDate= "2017-09-11T14=25=41.140Z";
    redemption.participant.insertDate= "2017-09-11T14=25=41.140Z";
    redemption.orderShipping.name= "teste";
    redemption.orderShipping.login= "teste";
    redemption.orderShipping.cnpj= "teste";
    redemption.orderShipping.cpf= "teste";
    redemption.orderShipping.rg= "teste";
    redemption.orderShipping.companyName= "teste";
    redemption.orderShipping.expeditionDate= "2017-09-11T14=25=41.140Z";
    redemption.orderShipping.issuing= "teste";
    redemption.orderShipping.stateIssuing= "teste";
    redemption.orderShipping.bornDate= "2017-09-11T14=25=41.140Z";
    redemption.orderShipping.genderTypeId= "teste";
    redemption.orderShipping.zipCode= "teste";
    redemption.orderShipping.street= "teste";
    redemption.orderShipping.neighborhood= "teste";
    redemption.orderShipping.city= "teste";
    redemption.orderShipping.state= "teste";
    redemption.orderShipping.number= "teste";
    redemption.orderShipping.complement= "teste";
    redemption.orderShipping.emails.emailType= "1";
    redemption.orderShipping.emails.emailAddress= "herbert.lima@ltm.digital";
    redemption.orderShipping.phones.phoneType= "1";
    redemption.orderShipping.phones.ddd= "11";
    redemption.orderShipping.phones.phoneNumber= "22223333";
    redemption.orderShipping.updateDate= "2017-09-11T14=25=41.140Z";
    redemption.orderShipping.insertDate= "2017-09-11T14=25=41.140Z";
    redemption.authentication.validationCode= "teste";
    redemption.authentication.authenticationType= "1";
    redemption.authentication.isResend= "true";
    redemption.application.applicationId= "1";
    redemption.application.ip= "127.0.0.1";
    redemption.application.serverIP= "127.0.0.1";
    redemption.application.serverName= "LTM";
    redemption.application.browser= "Chrome";
    redemption.isDecimalCash= "true";

    return redemption;
};
module.exports = Redemptionfactory;