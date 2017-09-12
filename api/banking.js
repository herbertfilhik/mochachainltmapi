'use strict';

var chai = require('chai')
var BankingService = require('../services/bankingService.js');
var Redemptionsfactory = require('../factories/Redemptionsfactory.js');
var FinishRedemptionfactory = require('../factories/FinishRedemptionfactory.js');
var ReversalRedemptionfactory = require('../factories/ReversalRedemptionfactory.js');
var expect = chai.expect;

describe('Testes na Api do Banking', function() {

    before('setup', function() {
           
    });  

    //API Balance
    it('Deve obter saldo do participante', function() {
       var banking = new BankingService(this);       
       return banking.getBalance(config.CAMPAIGN_ID,config.USERS[0].userid).then(function(response){
            expect(response).to.have.status(config.util.HTTP.OK);                          
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
             expect(response).to.have.status(config.util.HTTP.OK);                          
             expect(response.body.projectId).to.be.eq(config.CAMPAIGN_ID);
        });
     });

    //API Balance by Login - Inválido
    it('Deve impedir obter saldo do participante pelo login devido ao input inválido de dados', function() {
        var banking = new BankingService(this);       
        return banking.getBalanceLoginInvalid(config.CAMPAIGN_ID_INVALID,config.USERS_INVALID[0].username_invalid).then(function(response){
             expect(response).to.have.status(config.util.HTTP.NOT_FOUND);                          
             //expect(response.body.message).to.be.eq(config.MESSAGE_INVALID);
        }).catch(function(responseerr) {
            expect(responseerr, 'Deve impedir obter saldo do participante pois a Campanha e Participante são inválidos').to.have.status(config.util.HTTP.NOT_FOUND);
        });
     });

     //API Redemptions
     it('Deve obter informações sobre os resgates realizados', function() {
        var banking = new BankingService(this);       
        return banking.getRedemptions(config.REDEMPTIONS).then(function(response){
             expect(response).to.have.status(config.util.HTTP.OK);                                       
        }).catch(function(responseerr) {
            expect(responseerr, 'Deve obter informações sobre os resgates realizados').to.have.status(config.util.HTTP.OK);
        });
     });

     //API Transaction To Expire
     it('Deve obter informações sobre as transações a expirar', function() {
        var banking = new BankingService(this);       
        return banking.getTransToExpire(config.CAMPAIGN_ID,config.USERS[0].userid,config.DATETOEXPIRE).then(function(response){
             expect(response).to.have.status(config.util.HTTP.OK);                                       
        }).catch(function(responseerr) {
            expect(responseerr, 'Deve obter informações sobre as transações a expirar').to.have.status(config.util.HTTP.OK);
        });
     }); 
     
     //API Transaction To Expire com data inválida (0000-00-00)
     it('Deve impedir a obtenção de informações sobre as transações a expirar (0000-00-00)', function() {
        var banking = new BankingService(this);       
        return banking.getTransToExpireDateInvalid(config.CAMPAIGN_ID,config.USERS[0].userid,config.INVALIDDATETOEXPIRE).then(function(response){
             expect(response).to.have.status(config.util.HTTP.BAD_REQUEST);                                       
        }).catch(function(responseerr) {
            expect(responseerr, 'Deve impedir a obtenção de informações sobre as transações a expirar (0000-00-00)').to.have.status(config.util.HTTP.BAD_REQUEST);
        });
     }); 

     //API Transaction To Expire com data inválida (2017-13-32)
     it('Deve impedir a obtenção de informações sobre as transações a expirar (2017-13-32)', function() {
        var banking = new BankingService(this);       
        return banking.getTransToExpireDateInvalidFormat(config.CAMPAIGN_ID,config.USERS[0].userid,config.INVALIDFORMATDATETOEXPIRE).then(function(response){
             expect(response).to.have.status(config.util.HTTP.BAD_REQUEST);                                       
        }).catch(function(responseerr) {
            expect(responseerr, 'Deve impedir a obtenção de informações sobre as transações a expirar (2017-13-32)').to.have.status(config.util.HTTP.BAD_REQUEST);
        });
     });     
    
     //API Account Statement
     it('Deve retornar 404 para a api Account Statement', function() {
        var banking = new BankingService(this);       
        return banking.getAccountStatement(config.CAMPAIGN_ID,config.USERS[0].userid,config.DATEFROM,config.DATETO).then(function(response){
             expect(response).to.have.status(config.util.HTTP.NOT_FOUND);                                       
        }).catch(function(responseerr) {
            expect(responseerr, 'Deve retornar 404 para a api Account Statement').to.have.status(config.util.HTTP.NOT_FOUND);
        });
     });     

     //API Get Parameter Value
     it('Deve retornar 200 para a api Get Parameter Value', function() {
        var banking = new BankingService(this);       
        return banking.getParameterValue(config.CAMPAIGN_ID).then(function(response){
             expect(response).to.have.status(config.util.HTTP.OK);                                       
        }).catch(function(responseerr) {
            expect(responseerr, 'Deve retornar 200 para a api Get Parameter Value').to.have.status(config.util.HTTP.OK);
        });
     });

     //API CashReversal
     it('Deve retornar 200 para a api CashReversal', function() {
        var banking = new BankingService(this);       
        return banking.getCashReversal(config.CASHREVERSAL).then(function(response){
             expect(response).to.have.status(config.util.HTTP.OK);                                       
        }).catch(function(responseerr) {
            expect(responseerr, 'Deve retornar 200 para a api CashReversal').to.have.status(config.util.HTTP.OK);
        });
     });

     //API Redemptions
     it('Deve retornar 200 para a api CashReversal', function() {
        var banking = new BankingService(this);       
        return banking.getCashReversal(config.CASHREVERSAL).then(function(response){
             expect(response).to.have.status(config.util.HTTP.OK);                                       
        }).catch(function(responseerr) {
            expect(responseerr, 'Deve retornar 200 para a api CashReversal').to.have.status(config.util.HTTP.OK);
        });
     });

     //API Redemptions POST
     it('Deve retornar 404 para a Redemption', function() {
        var banking = new BankingService(this);
        var redemptionsfactory  = new Redemptionsfactory(this);
        var redemption =  redemptionsfactory.buildDefault();

        console.log(redemption);

        return banking.postredemption().then(function(response){
            expect(response).to.have.status(config.util.NOT_FOUND);                                       
        }).catch(function(responseerr) {
            expect(responseerr, 'Deve retornar 404 para a Redemption').to.have.status(config.util.NOT_FOUND);
        });

        console.log(redemption);

     });

     //API finishRedemption PUT
     it('Deve retornar 404 para a FinishRedemption', function() {
        var banking = new BankingService(this);
        var finishredemptionfactory  = new FinishRedemptionfactory(this);
        var finishredemption =  finishredemptionfactory.buildDefault();

        console.log(finishredemption);

        return banking.putredemption().then(function(response){
            expect(response).to.have.status(config.util.NOT_FOUND);                                       
        }).catch(function(responseerr) {
            expect(responseerr, 'Deve retornar 404 para a FinishRedemption').to.have.status(config.util.NOT_FOUND);
        });

        console.log(finishredemption);

     });

    //API Reversal Redemption PUT
    it('Deve retornar 404 para a Reversal Redemption', function() {
        var banking = new BankingService(this);
        var reversalredemptionfactory  = new ReversalRedemptionfactory(this);
        var reversalredemption =  reversalredemptionfactory.buildDefault();

        console.log(reversalredemption);

        return banking.reversalredemption().then(function(response){
            expect(response).to.have.status(config.util.NOT_FOUND);                                       
        }).catch(function(responseerr) {
            expect(responseerr, 'Deve retornar 404 para a Reversal Redemption').to.have.status(config.util.NOT_FOUND);
    });

    console.log(reversalredemption);

    });

}); 