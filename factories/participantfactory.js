'use strict';

var Participantfactory = function(){

};
Participantfactory.prototype.build = function()
{

    var participant = {        
        clientId: null,
        catalogId: null,        
        profileId: null,                
        name:null,
        documentNumber:null,        
        rg:null,
        status:null,
        username:null,
        password:null,
        maritalStatus:null,
        personType:null,
        genderType:null,
        birthDate:null,
        emails:[{
            email:null,
            type:null
        }],
        phones:[{
            areaCode:null,
            number:null,
            type:null
        },
        {
            areaCode:null,
            number:null,
            type:null
        },
        {
            areaCode:null,
            number:null,
            type:null
        }],                
        address:{
            street:null,            
            number:null,
            complement:null,
            district:null,
            city:null,
            state:null,
            zipCode:null,
            reference:null
        }        
    };

    return participant;
}
Participantfactory.prototype.buildDefault = function(){
    var participant = this.build();
    
    participant.clientId = "88";
    participant.catalogId = "40281";    
    participant.profileId = "50637";        
    participant.name = "CloudLoyalt API User Test";
    participant.documentNumber = new Date().getTime().toString();
    participant.rg = "225545236";    
    participant.status ="ACTIVE";
    participant.username="";
    participant.password="123456";
    participant.maritalStatus="MARRIED";
    participant.personType = "INDIVIDUAL";
    participant.genderType = "MALE";
    participant.birthDate = "1989-02-07T00:00:00+00:00";
    participant.emails[0].email="testeqa@teste.com";
    participant.emails[0].type="PERSONAL";        
    participant.phones[0].areaCode="11";
    participant.phones[0].number="45875478";
    participant.phones[0].type="HOME";  
    participant.phones[1].areaCode="11";
    participant.phones[1].number="45875478";
    participant.phones[1].type="COMMERCIAL";      
    participant.phones[2].areaCode="11";
    participant.phones[2].number="45875478";
    participant.phones[2].type="CELLULAR";      
    participant.address.street = "Rua teste Stub";    
    participant.address.number = "54";
    participant.address.complement = "apto 45";
    participant.address.district = "Bairro de teste";
    participant.address.city = "Cidada de Teste";
    participant.address.state = "SP";
    participant.address.zipCode = "30320150";

    return participant;
};