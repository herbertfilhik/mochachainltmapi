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
                vendorOrderI: null,
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
        
    redemption.parentOrderId= "3000";
    redemption.participantId= "13738177";
    redemption.conversionRate= "1";
    redemption.campaignId= "30207";
    redemption.shippingTypeId= "1";
    redemption.payments[0].campaignConversionRate= "0";
    redemption.payments[0].paymentType= "1";
    redemption.total= "10.00";
    redemption.cardNumber= "0000000000000001";
    redemption.cardHolder= "Teste Teste";
    redemption.cardHolderCPF= "219.969.318-06";
    redemption.cardExpirationMonthDate= "01";
    redemption.cardExpirationYearDate= "2020";
    redemption.numberOfPayments= "12";
    redemption.securityCode= "123";
    redemption.catalogId= "2";
    redemption.ignoreApportionment= "true";
    redemption.cardExpirationDate= "2017-09-11T14=25=41.139Z";
    redemption.paymentMethod= "6";
    redemption.brokerId= "997";
    redemption.transactionType= "1";
    redemption.paymentPlanId= "0";
    redemption.taxType= "1";
    redemption.description= "teste";
    redemption.amount= "10.00";
    redemption.isPercentage= "true";
    redemption.isExternalCash= "true";
    redemption.campaignConversionRate= "1";
    redemption.orderId= "3001";
    redemption.vendorId= "1";
    redemption.conversionRate= "1";
    redemption.vendorOrderId= "1";
    redemption.amount= "10.00";
    redemption.shippingValue= "0.00";
    redemption.shippingTypeId= "1";
    redemption.orderType= "1";
    redemption.redemptionStatus= "1";
    redemption.descriptionRedeem= "teste";
    redemption.key= "teste";
    redemption.value= "1"
    redemption.itemType= "1";
    redemption.code= "teste123";
    redemption.value= "10.00";
    redemption.quantity= "1";
    redemption.id= "123";
    redemption.name= "teste";
    redemption.category= "teste";
    redemption.partnerName= "teste";
    redemption.estimatedDeliveryDate= "2017-09-11T14=25=41.139Z";
    redemption.unitPrice= "10.00";
    redemption.quantity= "1";
    redemption.partnerId= "teste";
    redemption.partnerTypeId= "1";
    redemption.parameters= "teste";
    redemption.key= "teste";
    redemption.value= "teste"
    redemption.currentConversionRate= "1";
    redemption.orderAmount= "10.00";
    redemption.orderPoints= "100";
    redemption.shippingPoints= "100";
    redemption.catalogId= "2";
    redemption.name= "Herbert Lima";
    redemption.login= "herbert.lima";
    redemption.cnpj= "47645472000165";
    redemption.cpf= "31022743821";
    redemption.rg= "408231117";
    redemption.companyName= "teste";
    redemption.expeditionDate= "2017-09-11T14=25=41.139Z";
    redemption.issuing= "SSP";
    redemption.stateIssuing= "SP";
    redemption.bornDate= "2017-09-11T14=25=41.139Z";
    redemption.genderTypeId= "M";
    redemption.zipCode= "123";
    redemption.street= "123";
    redemption.neighborhood= "123";
    redemption.city= "Barueri";
    redemption.state= "SP";
    redemption.number= "580";
    redemption.complement= "teste";
    redemption.emailType= "1";
    redemption.emailAddress= "string";
    redemption.phoneType= "1";
    redemption.ddd= "string";
    redemption.phoneNumber= "string";
    redemption.updateDate= "2017-09-11T14=25=41.140Z";
    redemption.insertDate= "2017-09-11T14=25=41.140Z";
    redemption.name= "string";
    redemption.login= "string";
    redemption.cnpj= "string";
    redemption.cpf= "string";
    redemption.rg= "string";
    redemption.companyName= "string";
    redemption.expeditionDate= "2017-09-11T14=25=41.140Z";
    redemption.issuing= "string";
    redemption.stateIssuing= "string";
    redemption.bornDate= "2017-09-11T14=25=41.140Z";
    redemption.genderTypeId= "string";
    redemption.zipCode= "string";
    redemption.street= "string";
    redemption.neighborhood= "string";
    redemption.city= "string";
    redemption.state= "string";
    redemption.number= "string";
    redemption.complement= "string";
    redemption.emailType= "1";
    redemption.emailAddress= "herbert.lima@ltm.digital";
    redemption.phoneType= "1";
    redemption.ddd= "11";
    redemption.phoneNumber= "22223333";
    redemption.updateDate= "2017-09-11T14=25=41.140Z";
    redemption.insertDate= "2017-09-11T14=25=41.140Z";
    redemption.validationCode= "teste";
    redemption.authenticationType= "1";
    redemption.isResend= "true";
    redemption.applicationId= "1";
    redemption.ip= "127.0.0.1";
    redemption.serverIP= "127.0.0.1";
    redemption.serverName= "LTM";
    redemption.browser= "Chrome";
    redemption.isDecimalCash= "true";

    return redemption;
};
module.exports = Redemptionfactory;