'use strict';

var chai = require('chai')
var BankingService = require('../services/bankingService.js');
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

    //API Balance
    it('Não deve obter saldo do participante pois a Campanha e Participante são inválidos', function(){
        var banking = new BankingService(this);       
        return banking.getBalance(config.CAMPAIGN_ID_INVALID,config.USERS_INVALID[0].userid_invalid).then(function(response){
             expect(response).to.have.status(config.util.HTTP.OK);                          
             expect(response.body.projectId).to.be.eq(config.CAMPAIGN_ID_INVALID);
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


});
   