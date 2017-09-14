'use strict';

var chai = require('chai')
var BankingService = require('../services/bankingService.js');
var Redemptionsfactory = require('../factories/Redemptionsfactory.js');
var FinishRedemptionfactory = require('../factories/FinishRedemptionfactory.js');
var ReversalRedemptionfactory = require('../factories/ReversalRedemptionfactory.js');
var Creditfactory = require('../factories/Creditfactory.js');
var RedemptionDoneFactory = require('../factories/RedemptionDoneFactory.js');
var expect = chai.expect;

describe('Testes na Api do Banking', function() {

    before('setup', function() {
           
    });  

    //API Balance
    it('Deve obter saldo do participante', function() {
       var banking = new BankingService(this);       
       return banking.getBalance(config.CAMPAIGN_ID,config.USERS[0].userid).then(function(response){
            expect(response, 'Deve retornar 200 para a chamada').to.have.status(config.util.HTTP.OK);                          
            expect(response.body.projectId).to.be.eq(config.CAMPAIGN_ID);
       });
    });

    //API Balance - Inválido
    it('Deve impedir obter saldo do participante pois a Campanha e Participante são inválidos', function(){
        var banking = new BankingService(this);       
        return banking.getBalanceInvalid(config.CAMPAIGN_ID_INVALID,config.USERS_INVALID[0].userid_invalid).then(function(response){
             expect(response,'Deve impedir obter saldo do participante pois a Campanha e Participante são inválidos').to.have.status(config.util.HTTP.NOT_FOUND);                          
             //expect(response.body.projectId).to.be.eq(config.CAMPAIGN_ID_INVALID);
        }).catch(function(responseerr) {
            expect(responseerr, 'Deve impedir obter saldo do participante pois a Campanha e Participante são inválidos').to.have.status(config.util.HTTP.NOT_FOUND);
        });
    });

    //API Balance by Login
    it('Deve obter saldo do participante pelo login informado', function() {
        var banking = new BankingService(this);       
        return banking.getBalanceLogin(config.CAMPAIGN_ID,config.USERS[0].username).then(function(response){
             expect(response, 'Deve retornar 200 para a chamada').to.have.status(config.util.HTTP.OK);                          
             expect(response.body.projectId).to.be.eq(config.CAMPAIGN_ID);
        });
     });

    //API Balance by Login - Inválido
    it('Deve impedir obter saldo do participante pelo login devido a inserção de login inválido', function() {
        var banking = new BankingService(this);       
        return banking.getBalanceLoginInvalid(config.CAMPAIGN_ID_INVALID,config.USERS_INVALID[0].username_invalid).then(function(responsebalancebylogin){
             expect(responsebalancebylogin, 'Deve retornar 404 para a chamada pois o Login é inválido').to.have.status(config.util.HTTP.NOT_FOUND);                          
             //expect(response.body.message).to.be.eq(config.MESSAGE_INVALID);
             console.log(responsebalancebylogin.response.body);
             
        }).catch(function(responseerrbalancebylogin) {
            console.log(console.log(responseerrbalancebylogin.response.body));
            expect(responseerrbalancebylogin, 'Deve retornar 404 para a chamada pois o Login é inválido').to.have.status(config.util.HTTP.NOT_FOUND);
        });
     });

     //API Redemptions
     it('Deve obter informações sobre os resgates realizados', function() {
        var banking = new BankingService(this);       
        return banking.getRedemptions(config.REDEMPTIONS).then(function(response){
             expect(response, 'Deve retornar 200 para a chamada').to.have.status(config.util.HTTP.OK);                                       
        }).catch(function(responseerr) {
            expect(responseerr, 'Deve obter informações sobre os resgates realizados').to.have.status(config.util.HTTP.OK);
        });
     });

     //API Transaction To Expire
     it('Deve obter informações sobre as transações a expirar', function() {
        var banking = new BankingService(this);       
        return banking.getTransToExpire(config.CAMPAIGN_ID,config.USERS[0].userid,config.DATETOEXPIRE).then(function(response){
             expect(response, 'Deve retornar 200 para a chamada').to.have.status(config.util.HTTP.OK);                                       
        }).catch(function(responseerr) {
            expect(responseerr, 'Deve obter informações sobre as transações a expirar').to.have.status(config.util.HTTP.OK);
        });
     }); 
     
     //API Transaction To Expire com data inválida (0000-00-00)
     it('Deve impedir a obtenção de informações sobre as transações a expirar (0000-00-00)', function() {
        var banking = new BankingService(this);       
        return banking.getTransToExpireDateInvalid(config.CAMPAIGN_ID,config.USERS[0].userid,config.INVALIDDATETOEXPIRE).then(function(response){
             expect(response, 'Deve retornar 400 para a chamada').to.have.status(config.util.HTTP.BAD_REQUEST);                                       
        }).catch(function(responseerr) {
            expect(responseerr, 'Deve impedir a obtenção de informações sobre as transações a expirar (0000-00-00)').to.have.status(config.util.HTTP.BAD_REQUEST);
        });
     }); 

     //API Transaction To Expire com data inválida (2017-13-32)
     it('Deve impedir a obtenção de informações sobre as transações a expirar (2017-13-32)', function() {
        var banking = new BankingService(this);       
        return banking.getTransToExpireDateInvalidFormat(config.CAMPAIGN_ID,config.USERS[0].userid,config.INVALIDFORMATDATETOEXPIRE).then(function(response){
             expect(response, 'Deve retornar 200 para a chamada').to.have.status(config.util.HTTP.BAD_REQUEST);                                       
        }).catch(function(responseerr) {
            expect(responseerr, 'Deve impedir a obtenção de informações sobre as transações a expirar (2017-13-32)').to.have.status(config.util.HTTP.BAD_REQUEST);
        });
     });     
    
     //API Account Statement
     it('Deve retornar 404 para a api Account Statement', function() {
        var banking = new BankingService(this);       
        return banking.getAccountStatement(config.CAMPAIGN_ID,config.USERS[0].userid,config.DATEFROM,config.DATETO).then(function(response){
             expect(response, 'Deve retornar 404 para a chamada').to.have.status(config.util.HTTP.NOT_FOUND);                                       
        }).catch(function(responseerr) {
            expect(responseerr, 'Deve retornar 404 para a api Account Statement').to.have.status(config.util.HTTP.NOT_FOUND);
        });
     });     

     //API Get Parameter Value
     it('Deve retornar 200 para a api Get Parameter Value', function() {
        var banking = new BankingService(this);       
        return banking.getParameterValue(config.CAMPAIGN_ID).then(function(response){
             expect(response, 'Deve retornar 200 para a chamada').to.have.status(config.util.HTTP.OK);                                       
        }).catch(function(responseerr) {
            expect(responseerr, 'Deve retornar 200 para a api Get Parameter Value').to.have.status(config.util.HTTP.OK);
        });
     });

     //API CashReversal
     it('Deve retornar 200 para a api CashReversal', function() {
        var banking = new BankingService(this);       
        return banking.getCashReversal(config.CASHREVERSAL).then(function(response){
             expect(response, 'Deve retornar 200 para a chamada').to.have.status(config.util.HTTP.OK);                                       
        }).catch(function(responseerr) {
            expect(responseerr, 'Deve retornar 200 para a api CashReversal').to.have.status(config.util.HTTP.OK);
        });
     });

     //API Redemptions
     it('Deve retornar 200 para a api Redemption', function() {
        var banking = new BankingService(this);       
        return banking.getCashReversal(config.CASHREVERSAL).then(function(response){
             expect(response, 'Deve retornar 200 para a chamada').to.have.status(config.util.HTTP.OK);                                       
        }).catch(function(responseerr) {
            expect(responseerr, 'Deve retornar 200 para a api Redemption').to.have.status(config.util.HTTP.OK);
        });
     });

     //API Redemptions POST
     it('Deve retornar 404 para a Redemption pois foi informada uma campanha inválida', function() {
        var banking = new BankingService(this);
        var redemptionsfactory  = new Redemptionsfactory(this);
        var redemption =  redemptionsfactory.buildDefault();

        //console.log(redemption);
        return banking.postredemption(redemption).then(function(responseredemption){
            //console.log(redemption);
            expect(responseredemption, 'Deve retornar 404 para a Redemption pois foi informada uma campanha inválida').to.have.status(config.util.HTTP.NOT_FOUND);                                       
        }).catch(function(responseerrredemption) {
            //console.log(redemption);
            //console.log(responseerrredemption);
            expect(responseerrredemption, 'Deve retornar 404 para a Redemption pois foi informada uma campanha inválida').to.have.status(config.util.HTTP.NOT_FOUND);
        });
     });

     //API finishRedemption PUT
     it('Deve retornar 400 para a FinishRedemption', function() {
        var banking = new BankingService(this);
        var finishredemptionfactory  = new FinishRedemptionfactory(this);
        var finishredemption =  finishredemptionfactory.buildDefault();

        //console.log(finishredemption);
        return banking.putredemption(finishredemption).then(function(responsefinishredemption){
            expect(responsefinishredemption, 'Deve retornar 400 para a chamada').to.have.status(config.util.HTTP.BAD_REQUEST);                                       
        }).catch(function(responseerrfinishredemption) {
            expect(responseerrfinishredemption, 'Deve retornar 400 para a FinishRedemption').to.have.status(config.util.HTTP.BAD_REQUEST);
        });

        //console.log(finishredemption);

     });

    //API Reversal Redemption PUT
    it('Deve retornar 400 para a Reversal Redemption', function() {
        var banking = new BankingService(this);
        var reversalredemptionfactory  = new ReversalRedemptionfactory(this);
        var reversalredemption =  reversalredemptionfactory.buildDefault();

        console.log(reversalredemption);

        return banking.reversalredemption(reversalredemption).then(function(responsereversalredemption){
            expect(responsereversalredemption, 'Deve retornar 400 para a chamada').to.have.status(config.util.HTTP.BAD_REQUEST);                                       
        }).catch(function(responseerrreversalredemption) {
            expect(responseerrreversalredemption, 'Deve retornar 400 para a Reversal Redemption').to.have.status(config.util.HTTP.BAD_REQUEST);
        });

    console.log(reversalredemption);

    });

    //API Release Points PUT
    it('Deve retornar 200 para a Release Points', function() {
    
        var banking = new BankingService(this);
        var body = {
            campaignId:30207,
            orderId:3629883
        }
        return banking.releasepoints(body,config.CAMPAIGN_ID,config.USERS[0].userid).then(function(response){
            console.log(config.util.OK);
            expect(response, 'Deve retornar 200 na chamada').to.have.status(config.util.HTTP.OK);                                       
        })
        
        //.catch(function(responseerr) {
            //console.log(responseerr);
          //  expect(responseerr, 'Deve retornar 200 para a Release Points').to.have.status(config.util.OK);
        //});
        
    });

    it('Deve impedir a finalização de resgate já realizado', function() {
        var banking = new BankingService(this);

        var creditfactory  = new Creditfactory(this);
        var credit =  creditfactory.buildDefault();    

        var redemptiondonefactory = new RedemptionDoneFactory(this);
        var redemptiondone = redemptiondonefactory.buildDefault();

        var finishredemptionfactory = new FinishRedemptionfactory(this);
        var finishredemption = finishredemptionfactory.buildDefault();


        //Valida o Balanço do Participante
        return banking.getBalance(config.CAMPAIGN_ID,config.USERS[0].userid).then(function(response){
            expect(response, 'Deve retornar o código 200 no retorno da chamada').to.have.status(config.util.HTTP.OK);
            //expect(response.body.projectId).to.equal(Number(config.BALANCEACCOUNT[0].projectId));
            expect(response.body.loyaltyBalanceCampaign[0].projectId, 'Deve exibir exibir o loyaltyBalanceCampaign projectId').to.equal(config.BALANCEACCOUNT[0].loyaltyBalanceCampaign[0].projectId);
            expect(response.body.loyaltyBalanceCampaign[0].projectName, 'Deve exibir exibir o projectName').to.equal(config.BALANCEACCOUNT[0].loyaltyBalanceCampaign[0].projectName);
            expect(response.body.loyaltyBalanceCampaign[0].accountHolderId, 'Deve exibir exibir o accountHolderId').to.equal(config.BALANCEACCOUNT[0].loyaltyBalanceCampaign[0].accountHolderId);
            expect(response.body.loyaltyBalanceCampaign[0].accountId, 'Deve exibir exibir o accountId').to.equal(config.BALANCEACCOUNT[0].loyaltyBalanceCampaign[0].accountId);
            expect(response.body.projectId, 'Deve exibir exibir o projectId').to.equal(config.BALANCEACCOUNT[0].projectId);
      
            //Valida o extrato do participante
            return banking.getExtract(config.CAMPAIGN_ID,config.USERS[0].userid).then(function(responseextract){
                expect(responseextract, 'Deve retornar o código 200 no retorno da chamada').to.have.status(config.util.HTTP.OK);
                expect(responseextract.body.accountHolderId, 'Deve exibir exibir o accountHolderId').to.equal(config.EXTRACTACCOUNT[0].accountHolderId);
                //console.log(credit);

                //Credita accountHolderId
                return banking.postCredit(credit).then(function(responsecredit){
                    expect(responsecredit, 'Deve retornar o código 200 no retorno da chamada').to.have.status(config.util.HTTP.OK);                    
                    expect(responsecredit.body).to.equal(true);                    
                    //console.log(response);
                    
                    //Validar o BankAccount Extract
                    return banking.getBankAccountExtract(config.CAMPAIGN_ID,config.USERS[0].userid).then(function(AccountExtract){
                        expect(AccountExtract, 'Deve retornar o código 200 no retorno da chamada').to.have.status(config.util.HTTP.OK);                    
                        //console.log(response);
                        expect(AccountExtract.body.accountHolderId, 'Deve exibir exibir o accountHolderId').to.equal(config.BANKACCOUNTEXTRACT[0].accountHolderId);

                       //Validar o balance by Login
                        return banking.getBalanceLogin(config.CAMPAIGN_ID,config.USERS[0].username).then(function(AccountExtract){
                            expect(AccountExtract, 'Deve retornar o código 200 no retorno da chamada').to.have.status(config.util.HTTP.OK);                    
                            //console.log(response);
                            expect(response.body.loyaltyBalanceCampaign[0].projectId, 'Deve exibir exibir o projectId').to.equal(config.BALANCELOGIN[0].loyaltyBalanceCampaign[0].projectId);
                            expect(response.body.loyaltyBalanceCampaign[0].projectName, 'Deve exibir exibir o projectName').to.equal(config.BALANCELOGIN[0].loyaltyBalanceCampaign[0].projectName);
                            expect(response.body.loyaltyBalanceCampaign[0].accountHolderId, 'Deve exibir exibir o accountHolderId').to.equal(config.BALANCELOGIN[0].loyaltyBalanceCampaign[0].accountHolderId);
                            expect(response.body.loyaltyBalanceCampaign[0].accountId, 'Deve exibir exibir o accountId').to.equal(config.BALANCELOGIN[0].loyaltyBalanceCampaign[0].accountId);
                            expect(response.body.projectId, 'Deve exibir exibir o projectId').to.equal(config.BALANCELOGIN[0].projectId);

                            //Validar o cancelamento de Resgate
                            return banking.postredemptiondone(redemptiondone).then(function(responseredemptiondone){
                                expect(responseredemptiondone, 'Deve retornar o código 200 no retorno da chamada').to.have.status(config.util.HTTP.OK);
                                finishredemption.authorizationCode = responseredemptiondone.body.authorizationCode;                        
                                //console.log(responseredemptiondone);
                                //console.log(finishredemption);
                                expect(responseredemptiondone.body.approved, 'Deve exibir exibir o xxx').to.equal(config.REDEMPTIONDONE[0].approved);    
                                
                                //Validar a Finalização de Resgate
                                return banking.putredemption(finishredemption).then(function(responseredemptionfinish){
                                    //console.log(responseredemptionfinish);
                                    expect(responseredemptionfinish, 'Deve retornar o código 200 no retorno da chamada').to.have.status(config.util.HTTP.OK);                                
                                    expect(responseredemptionfinish.body.statusDescription, 'Deve exibir exibir o statusDescription').to.equal(config.REDEMPTIONFINISH[0].statusDescription);
                                    //console.log(responseredemptionfinish.body.statusDescription);
                                })
                            })
                        })
                    })
                })
            })        
        })
    });
});     