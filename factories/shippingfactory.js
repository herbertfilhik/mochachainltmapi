'use strict';

var Shippingfactory = function(){

};
Shippingfactory.prototype.build = function()
{

    var address = {
                    "customer": {
                        "name": "",
                        "documentNumber": "",
                        "email": "",
                        "birthDate": "",
                        "genderType": "",
                        "personType": "",
                        "phones": [
                            {
                                "areaCode": "",
                                "number": "",
                                "type": ""
                            }]
                    },
                    "address": {
                        "street": "",
                        "number": "",
                        "complement": "",
                        "district": "",
                        "city": "",
                        "state": "",
                        "zipCode": "",
                        "reference": ""
                    }
                };

    return address;
}
Shippingfactory.prototype.buildDefault = function(){
    var shipping = this.build();
    var currentdate = new Date();

    shipping.customer.name = "CLOUD LOYALTY"+currentdate.getMonth()+currentdate.getDay()+currentdate.getHours()+currentdate.getMinutes()+currentdate.getTime();
    shipping.customer.documentNumber = new Date().getTime().toString();
    shipping.customer.email = "qa@grupoltm.com.br";
    shipping.customer.birthDate = "1986-10-18T00:00:00+00:00";
    shipping.customer.genderType = "MALE";
    shipping.customer.personType = "INDIVIDUAL";
    shipping.customer.phones[0].areaCode = "11";
    shipping.customer.phones[0].number = "34744900";
    shipping.customer.phones[0].type = "HOME";
    shipping.address.street = "Alamenda Rio Negro";
    shipping.address.number = "585";
    shipping.address.complement = "7 andar";
    shipping.address.district = "Barueri";
    shipping.address.city = "São Paulo";
    shipping.address.state = "SP";
    shipping.address.zipCode = "06454000";
    shipping.address.reference ="Próxima ao shopping";

    return shipping;
};