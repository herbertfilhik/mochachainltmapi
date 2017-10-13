'use strict';

/*var chai = require('chai')
var BankingService = require('../services/bankingService.js');
var Redemptionsfactory = require('../factories/Redemptionsfactory.js');
var FinishRedemptionfactory = require('../factories/FinishRedemptionfactory.js');
var ReversalRedemptionfactory = require('../factories/ReversalRedemptionfactory.js');
var PutReversalRedemptionfactory = require('../factories/PutReversalRedemptionfactory.js');
var Creditfactory = require('../factories/Creditfactory.js');
var RedemptionDoneFactory = require('../factories/RedemptionDoneFactory.js');
var SuccessFinishRedemptionFactory = require('../factories/successfinishredemptionfactory.js');
var CancelRedemptionsFactory = require('../factories/cancelredemptions.js');
var TransferFactory = require('../factories/transferfactory.js');
var TransferOnlineFactory = require('../factories/transferonlinefactory.js');
var creditParticipantOnlineFactory = require('../factories/creditParticipantOnlinefactory.js');
var expect = chai.expect;
*/
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
             //console.log(responsebalancebylogin.response.body);
             
        }).catch(function(responseerrbalancebylogin) {
            //console.log(console.log(responseerrbalancebylogin.response.body));
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

        //console.log(reversalredemption);

        return banking.reversalredemption(reversalredemption).then(function(responsereversalredemption){
            expect(responsereversalredemption, 'Deve retornar 400 para a chamada').to.have.status(config.util.HTTP.BAD_REQUEST);                                       
        }).catch(function(responseerrreversalredemption) {
            expect(responseerrreversalredemption, 'Deve retornar 400 para a Reversal Redemption').to.have.status(config.util.HTTP.BAD_REQUEST);
        });

    //console.log(reversalredemption);

    });

    //API Release Points PUT
    it('Deve retornar 200 para a Release Points', function() {
    
        var banking = new BankingService(this);
        var body = {
            campaignId:30207,
            orderId:3629883
        }
        return banking.releasepoints(body,config.CAMPAIGN_ID,config.USERS[0].userid).then(function(response){
            //console.log(config.util.OK);
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

                            //Validar a Efetivação do Resgate
                            return banking.postredemptiondone(redemptiondone).then(function(responseredemptiondone){
                                expect(responseredemptiondone, 'Deve retornar o código 200 no retorno da chamada').to.have.status(config.util.HTTP.OK);
                                finishredemption.authorizationCode = responseredemptiondone.body.authorizationCode;                        
                                //console.log(responseredemptiondone);
                                //console.log(finishredemption);
                                expect(responseredemptiondone.body.approved, 'Deve exibir exibir False').to.equal(config.REDEMPTIONDONE[0].approved);    
                                expect(responseredemptiondone.body.statusDescription, 'Deve exibir exibir False').to.equal(config.REDEMPTIONDONE[0].statusDescription);

                                //Validar a Finalização de Resgate
                                /*return banking.putredemption(finishredemption).then(function(responseredemptionfinish){
                                    //console.log(responseredemptionfinish);
                                    expect(responseredemptionfinish, 'Deve retornar o código 200 no retorno da chamada').to.have.status(config.util.HTTP.OK);                                
                                    expect(responseredemptionfinish.body.statusDescription, 'Deve exibir exibir o statusDescription').to.equal(config.REDEMPTIONFINISH[0].statusDescription);
                                    //console.log(responseredemptionfinish.body.statusDescription);
                                })*/
                            })
                        })
                    })
                })
            })        
        })
    });


    it('Deve impedir o sistema de realizar um reversal (estorno) com valor excedido', function() {

        var banking = new BankingService(this);   

        var putreversalredemptionfactory = new PutReversalRedemptionfactory(this);
        var putreversalredemption = putreversalredemptionfactory.buildDefault();

        //Realiza GET para visualizar os dados da Redemption
        
        return banking.getRedemptionsforreversal(config.REDEMPTIONFORREVERSAL[0].authorizationCode).then(function(responseforreversalredemption){
             expect(responseforreversalredemption, 'Deve retornar 200 para a chamada').to.have.status(config.util.HTTP.OK);              
             //console.log(responseforreversalredemption.body);
             expect(responseforreversalredemption.body.campaignId, 'Deve retornar a campaignId').to.equal(config.REDEMPTIONFORREVERSAL[0].campaignId);
             expect(responseforreversalredemption.body.parentOrderId, 'Deve retornar a parentOrderId').to.equal(config.REDEMPTIONFORREVERSAL[0].parentOrderId);
             expect(responseforreversalredemption.body.orders[0].orderId, 'Deve retornar a campaignId').to.equal(config.REDEMPTIONFORREVERSAL[0].orderId);             
             //console.log(responseforreversalredemption.body.campaignId);
             //console.log(responseforreversalredemption.body.parentOrderId);
             //console.log(responseforreversalredemption.body.orders[0].orderId);
             
             //Realizar PUT para realizar Reversal da Redemption
                 return banking.putredemptionreversal(putreversalredemption).then(function(responseputredemptionreversal){
                 expect(responseputredemptionreversal, 'Deve retornar 200 para a chamada').to.have.status(config.util.HTTP.OK);
                 //console.log(responseputredemptionreversal.body);
                 expect(responseputredemptionreversal.body.authorizationCode, 'Deve ser o mesmo authorizationCode entre GET e PUT').to.equal(config.REDEMPTIONFORREVERSAL[0].authorizationCode);
                 //console.log(responseputredemptionreversal.body)
                 //console.log(responseputredemptionreversal.body.statusDescription);
                 expect(responseputredemptionreversal.body.statusDescription, 'Deve retornar o status Error xxx').to.equal(config.PUTFORREVERSALREDEMPTION[0].statusDescription);   
                 expect(responseputredemptionreversal.body.orders[0].orderId, 'Deve retornar o orderId').to.equal(config.PUTFORREVERSALREDEMPTION[0].orderId);   
                 //console.log(responseputredemptionreversal.body.authorizationCode);
                 //console.log(responseputredemptionreversal.body.statusDescription);
                 //console.log(responseputredemptionreversal.body.orders[0].orderId);    
            })
        })
    });

    //Validar não autorização de pagamento
    it('Deve impedir que um pagamento não autorizado seja realizado', function() {
        var banking = new BankingService(this);
        var successfinishputredemption  = new SuccessFinishRedemptionFactory(this);
        var successfinishredemption =  successfinishputredemption.buildDefault();

        //console.log(finishredemption);
        return banking.putsuccessfinishredemption(successfinishredemption).then(function(responsefinishredemption){
            expect(responsefinishredemption, 'Deve retornar 400 para a chamada').to.have.status(config.util.HTTP.BAD_REQUEST);
        }).catch(function(responseerrfinishredemption) {
            expect(responseerrfinishredemption, 'Deve retornar 400 para a chamada').to.have.status(config.util.HTTP.BAD_REQUEST);
            expect(responseerrfinishredemption.response.body.statusDescription, 'Deve retornar mensagem de erro').to.equal(config.FINISHREDEMPTIONSTATUSDESCRIPTION);                                       
            //console.log(responseerrfinishredemption.response.body.statusDescription);
        });
    });

    //Validar Get Balance Live  
    it('Deve obter Balance Live', function() {
        var banking = new BankingService(this);       
        return banking.getBalance(config.CAMPAIGN_ID,config.USERS[0].userid,config.VENDORID).then(function(response){
             expect(response, 'Deve retornar 200 para a chamada').to.have.status(config.util.HTTP.OK);                          
             expect(response.body.projectId).to.be.equal(config.CAMPAIGN_ID);             
             //console.log(response.body.projectId);
             //console.log(config.CAMPAIGN_ID);

             expect(response.body.userid).to.be.equal(config.VENDORID);             
             //console.log(response.vendorid);
             //console.log(config.VENDORID);

        });
    });

    //Validar Get AuthorizationOrderDetail  
    it('Deve obter AuthorizationOrderDetail', function() {
        var banking = new BankingService(this);       
        return banking.getAuthorizationOrderDetail(config.ORDERIDFORAUTHORIZATIONORDERDETAIL).then(function(response){
             expect(response, 'Deve retornar 200 para a chamada').to.have.status(config.util.HTTP.OK);                    
             //console.log(response.body);
             //console.log(response.body.orderId);
             //console.log(response.body.vendorId);
             //console.log(response.body.participantAccountHolderId);
             //expect(response.body.orderId, 'Deve retornar o orderId informado na chamada').to.equal(config.ORDERIDFORAUTHORIZATIONORDERDETAIL);
             //expect(response.body.vendorId, 'Deve retornar o vendorId').to.equal(config.VENDORIDFORAUTHORIZATIONORDERDETAIL);
             //expect(response.body.participantAccountHolderId, 'Deve retornar o participantAccountHolderId').to.equal(config.PARTICIPANTACCOUNTHOLDERIDFORAUTHORIZATIONORDERDETAIL);             
        });
    });

    //Validar Cancelamento de Resgate  
    it('Deve realizar o cancelamento do resgate', function() {
        var banking = new BankingService(this);
        var cancelredemptionsfactory  = new CancelRedemptionsFactory(this);
        var redemptionscancel =  cancelredemptionsfactory.buildDefault();

        //console.log(redemptionscancel);

        return banking.putredemptionscancel(redemptionscancel).then(function(responseredemptionscancel){
            //console.log(responseredemptionscancel);
            expect(responseredemptionscancel, 'Deve retornar 200 para a chamada').to.have.status(config.util.HTTP.OK);            
        })        
    });

    //Validar authorizationDetail  
    it('Deve ser possível visualizar authorizationDetail', function() {
        var banking = new BankingService(this);

        return banking.putauthorizationdetail(config.CAMPAIGNIDAUTHDET, config.ORDERIDAUTHDET).then(function(responseauthorizationdetail){
            //console.log(responseauthorizationdetail);
            expect(responseauthorizationdetail, '', 'Deve retornar 400 para a chamada').to.have.status(config.util.HTTP.BAD_REQUEST);            
        }).catch(function(responseerrauthorizationdetail) {
            expect(responseerrauthorizationdetail, 'Deve retornar 400 para a chamada').to.have.status(config.util.HTTP.BAD_REQUEST);
            //console.log(responseerrauthorizationdetail.response.body.statusDescription);
        });        
    });

    //Validar Get balanceOrigin  
    it('Deve obter balanceOrigin', function() {
        var banking = new BankingService(this);       
        return banking.getbalanceOrigin(config.CAMPAIGN_ID,config.USERS[0].userid).then(function(responsebalanceorigin){
             expect(responsebalanceorigin, 'Deve retornar 200 para a chamada').to.have.status(config.util.HTTP.OK);                          
             expect(responsebalanceorigin.body.projectId).to.be.equal(config.CAMPAIGN_ID);             
             //console.log(response.body.projectId);
             //console.log(config.CAMPAIGN_ID);
             //console.log(response.vendorid);
             //console.log(config.VENDORID);
        });
    });

    //Validar Get balanceOnHold  
    it('Deve obter balanceOnHold', function() {
        var banking = new BankingService(this);       
        return banking.getbalanceOnHold(config.CAMPAIGN_ID,config.USERS[0].userid).then(function(responsebalanceOnHold){
             expect(responsebalanceOnHold, 'Deve retornar 200 para a chamada').to.have.status(config.util.HTTP.OK);                          
        });
    });

    //Validar transfer  
    it('Deve impedir realização de transfer com dados inválidos', function() {
        var banking = new BankingService(this);
        var transferfactory  = new TransferFactory(this);
        var transfer =  transferfactory.buildDefault();
        
        return banking.posttransfer(transfer).then(function(responsetransfer){
            expect(responsetransfer, 'Deve retornar 404').to.have.status(config.util.HTTP.NOT_FOUND);                                       
        }).catch(function(responseerrtransfer) {
            expect(responseerrtransfer, 'Deve retornar 404').to.have.status(config.util.HTTP.NOT_FOUND);
        });
    });

    //Validar transferonline  
    it('Deve impedir realização de transferonline com dados inválidos', function() {
        var banking = new BankingService(this);
        var transferonlinefactory  = new TransferOnlineFactory(this);
        var transferonline =  transferonlinefactory.buildDefault();
        
        return banking.posttransferonline(transferonline).then(function(responsetransferonline){
            expect(responsetransferonline, 'Deve retornar 404').to.have.status(config.util.HTTP.NOT_FOUND);                                       
        }).catch(function(responseerrtransferonline) {
            expect(responseerrtransferonline, 'Deve retornar 404').to.have.status(config.util.HTTP.NOT_FOUND);
        });
    });    

    //Validar creditParticipantOnline  
    it('Deve impedir realização de creditParticipantOnline com dados inválidos', function() {
        var banking = new BankingService(this);
        var creditParticipantOnlinefactory  = new creditParticipantOnlineFactory(this);
        var creditParticipantOnline =  creditParticipantOnlinefactory.buildDefault();
        
        return banking.postcreditParticipantOnline(creditParticipantOnline).then(function(responsecreditParticipantOnline){
            expect(responsecreditParticipantOnline, 'Deve retornar 200').to.have.status(config.util.HTTP.OK);                                       
        });
    });    

    //Validar flush (limpa cache)  
    it('Deve realizar flush com successo', function() {
        var banking = new BankingService(this);

        return banking.postflush(config.FLUSH).then(function(responseFlush){
            //console.log(responseFlush);
            expect(responseFlush, 'Deve retornar 200 para a chamada').to.have.status(config.util.HTTP.OK);            
        })
    });      
    
    //Validar status transaction  
    it('Deve retornar mensagem de erro informando que os inputs são inválidos para (Status Transaction)', function() {
        var banking = new BankingService(this);

        return banking.getstatusTransaction(config.CAMPAIGNID, config.TOKEN, config.EXTERNALCODE).then(function(responsestatusTransaction){
            //console.log(responsestatusTransaction);
            expect(responsestatusTransaction, 'Deve retornar 404 para a chamada').to.have.status(config.util.HTTP.NOT_FOUND);            
        }).catch(function(responseerrstatusTransaction) {
            expect(responseerrstatusTransaction, 'Deve retornar 404 para a chamada').to.have.status(config.util.HTTP.NOT_FOUND);
        });
    });          

    //Validar retorno do saldo híbrido  
    it('Deve retornar (Balance Hybrid)', function() {
        var banking = new BankingService(this);

        return banking.getbalancehybrid(config.CAMPAIGNIDHYBRID, config.PARTICIPANTIDHYBRID, config.HYBRIDCAMPAIGNHYBRID).then(function(responsebalancehybrid){
            //console.log(responsebalancehybrid);
            expect(responsebalancehybrid, 'Deve retornar 200 para a chamada').to.have.status(config.util.HTTP.OK);            
        })
    });          

}); 