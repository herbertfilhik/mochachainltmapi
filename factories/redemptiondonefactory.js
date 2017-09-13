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

    redemptiondone.parentOrderId= "3734804";
    redemptiondone.participantId= "14124177";
    redemptiondone.conversionRate= "100redemptiondone.0";
    redemptiondone.campaignId= "30207";
    redemptiondone.shippingTypeId= "1";
    redemptiondone.campaignConversionRate= "0";
    redemptiondone.paymentType= "2";
    redemptiondone.total= "11";
    redemptiondone.cardNumber= "null";
    redemptiondone.cardHolder= "null";
    redemptiondone.cardHolderCPF= "null";
    redemptiondone.cardExpirationMonthDate= "null";
    redemptiondone.cardExpirationYearDate= "null";
    redemptiondone.numberOfPayments= "0";
    redemptiondone.securityCode= "null";
    redemptiondone.catalogId= "0";
    redemptiondone.ignoreApportionment= "true";
    redemptiondone.cardExpirationDate= "2017-09-12T19=16=14redemptiondone.883Z";
    redemptiondone.paymentMethod= "6";
    redemptiondone.brokerId= "null";
    redemptiondone.transactionType= "0";
    redemptiondone.paymentPlanId= "0";
    redemptiondone.isExternalCash= "true";
    redemptiondone.campaignConversionRate= "0";
    redemptiondone.orderId= "3889907";
    redemptiondone.vendorId= "60";
    redemptiondone.conversionRate= "100redemptiondone.0";
    redemptiondone.vendorOrderId= "string";
    redemptiondone.amount= "11redemptiondone.0";
    redemptiondone.shippingValue= "0redemptiondone.0";
    redemptiondone.shippingTypeId= "1";
    redemptiondone.orderType= "1";
    redemptiondone.redemptionStatus= "1";
    redemptiondone.descriptionRedeem= "teste";
    redemptiondone.itemType= "1";
    redemptiondone.code= "teste";
    redemptiondone.value= "0";
    redemptiondone.quantity= "0";
    redemptiondone.id= "3410c151e6ca4167a670";
    redemptiondone.name= "Notebook Dell Inspiron I14-5448-C25 com Intel® Core™ i7-5500U- 8GB- 1TB- 8GB SSD- Leitor de Cartoes- HDMI- Placa Grafica de 2GB- LED 14- e Windows 10";
    redemptiondone.category= "Computadores e Notebooks";
    redemptiondone.partnerName= "Casas Bahia";
    redemptiondone.estimatedDeliveryDate= "2017-09-12T19=16=14redemptiondone.883Z";
    redemptiondone.unitPrice= "11redemptiondone.0";
    redemptiondone.quantity= "1";
    redemptiondone.partnerId= "60";
    redemptiondone.partnerTypeId= "1";
    redemptiondone.parameters= "null";
    redemptiondone.key= "1";
    redemptiondone.value= "1";
    redemptiondone.currentConversionRate= "0";
    redemptiondone.orderAmount= "0";
    redemptiondone.orderPoints= "0";
    redemptiondone.shippingPoints= "0";
    redemptiondone.catalogId= "40210";
    redemptiondone.name= "Herbert Lima_QA_AUTOMACAO";	
    redemptiondone.login= "herbertredemptiondone.lima";
    redemptiondone.cnpj= "null";
    redemptiondone.cpf= "31022743821";
    redemptiondone.rg= "null";
    redemptiondone.companyName= "null";
    redemptiondone.expeditionDate= "2017-09-12T19=16=14redemptiondone.884Z";
    redemptiondone.issuing= "null";
    redemptiondone.stateIssuing= "null";
    redemptiondone.bornDate= "1983-11-03T00=00=00";
    redemptiondone.genderTypeId= "1";
    redemptiondone.zipCode= "06454000";
    redemptiondone.street= "Alameda Rio Negro";
    redemptiondone.neighborhood= "Alphaville Industrial";
    redemptiondone.city= "Barueri";
    redemptiondone.state= "SP";
    redemptiondone.number= "585";
    redemptiondone.complement= "bloco c 11 andar teste";
    redemptiondone.emailType= "1";
    redemptiondone.emailAddress= "herbertredemptiondone.lima@ltmredemptiondone.digital";
    redemptiondone.phoneType= "2";
    redemptiondone.ddd= "11";
    redemptiondone.phoneNumber= "11111111";
    redemptiondone.updateDate= "2017-09-12T19=16=14redemptiondone.884Z";
    redemptiondone.insertDate= "2017-09-12T19=16=14redemptiondone.884Z";
    redemptiondone.name= "Endereço de cadastro";
    redemptiondone.login= "herbertredemptiondone.lima";
    redemptiondone.cnpj= "null";
    redemptiondone.cpf= "31022743821";
    redemptiondone.rg= "408231117";
    redemptiondone.companyName= "null";
    redemptiondone.expeditionDate= "2017-09-12T19=16=14redemptiondone.884Z";
    redemptiondone.issuing= "null";
    redemptiondone.stateIssuing= "null";
    redemptiondone.bornDate= "2017-09-12T19=16=14redemptiondone.884Z";
    redemptiondone.genderTypeId= "1";
    redemptiondone.zipCode= "06454000";
    redemptiondone.street= "Alameda Rio Negro";
    redemptiondone.neighborhood= "Alphaville Industrial";
    redemptiondone.city= "Barueri";
    redemptiondone.state= "SP";
    redemptiondone.number= "585";
    redemptiondone.complement= "bloco c 11 andar teste";
    redemptiondone.emailType= "1";
    redemptiondone.emailAddress= "herbertredemptiondone.lima@ltmredemptiondone.digital";
    redemptiondone.phoneType= "1";
    redemptiondone.ddd= "11";
    redemptiondone.phoneNumber= "11112222";
    redemptiondone.updateDate= "2017-09-12T19:16:14redemptiondone.884Z";
    redemptiondone.insertDate= "2017-09-12T19:16:14redemptiondone.884Z";
    redemptiondone.validationCode= "null";
    redemptiondone.authenticationType= "1";
    redemptiondone.isResend= "false";
    redemptiondone.applicationId= "b5bd33f2-5e38-425e-9432-78b01afd19c6";
    redemptiondone.ip= "189.44.200.218";
    redemptiondone.serverIP= "100.106.140.72";
    redemptiondone.serverName= "hml-marketplace-api.webpremios.com.br";
    redemptiondone.browser= "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36";
    redemptiondone.isDecimalCash= "true";

    return redemptiondone;
};
module.exports = RedemptionDonefactory;