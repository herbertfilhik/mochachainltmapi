'use strict';

var Orderfactory = function(){

};


Orderfactory.prototype.build = function()
{

    var order = {
                    "channelType": "",
	                "vendorOrderId": "",
                    "customer": {
                        "name": "",
                        "documentNumber": "",
                        "rg": "",
                        "email": "",
                        "personType": "",
                        "genderType": "",
                        "birthDate": "",
                        "phones": [
                            {
                                "areaCode": "",
                                "number": "",
                                "type": ""
                            }]
                    },
                    "shipping": {
                        "street": "",
                        "number": "",
                        "complement": "",
                        "district": "",
                        "city": "",
                        "state": "",
                        "zipCode": "",
                        "reference": ""
                    },
                    "items":[{
                        "productId": "",
                        "vendorSkuId": "",
                        "skuId": "",
                        "name": "",
                        "quantity": 0,
                        "category": {
                            "id": "",
                            "name": ""
                        },
                        "imageUrl": "",
                        "price": {
                            "from": 0,
                            "for": 0
                        },
                        "vendor": {
                            "id": ""
                        }
                    }]
                };

    return address;
}
Shippingfactory.prototype.buildDefault = function(){
    var order = this.build();
    var currentdate = new Date();

    order.customer.name = "CLOUD LOYALTY"+currentdate.getMonth()+currentdate.getDay()+currentdate.getHours()+currentdate.getMinutes()+currentdate.getTime();
    order.customer.documentNumber = new Date().getTime().toString();
    order.customer.email = "qa@grupoltm.com.br";
    order.customer.birthDate = "1986-10-18T00:00:00+00:00";
    order.customer.genderType = "MALE";
    order.customer.personType = "INDIVIDUAL";
    order.customer.phones[0].areaCode = "11";
    order.customer.phones[0].number = "34744900";
    order.customer.phones[0].type = "HOME";
    order.shipping.street = "Alamenda Rio Negro";
    order.shipping.number = "585";
    order.shipping.complement = "7 andar";
    order.shipping.district = "Barueri";
    order.shipping.city = "São Paulo";
    order.shipping.state = "SP";
    order.shipping.zipCode = "06454000";
    order.shipping.reference = "Próxima ao shopping";
    order.items[0].productId = config.PRODUCTS[0].productid;
    order.items[0].vendorSkuId = config.PRODUCTS[0].originalid;
    order.items[0].skuId = config.PRODUCTS[0].sku;
    order.items[0].name = config.PRODUCTS[0].name;
    order.items[0].quantity = 1;
    order.items[0].category.id = config.PRODUCTS[0].categoryid;
    order.items[0].imageUrl = "";
    order.items[0].price.from = config.PRODUCTS[0].price.from;
    order.items[0].price.to = config.PRODUCTS[0].price.to;
    order.items[0].vendor.id = config.PRODUCTS[0].vendorid;    
    return order;
};