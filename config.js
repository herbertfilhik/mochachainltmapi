config = {
    "env": { 
        "local" : {
            
        },
        "dev" : {
            
        },
        "hml" : {
          "urlBanking": "https://hml-banking-api.webpremios.com.br:443/v1"

        },

        "pp" : {
          
        },
        "prd" : {
          "urlBanking": "https://banking-api.webpremios.com.br/v1"
        }
    },

    "BALANCEACCOUNT":[
        {
            loyaltyBalanceCampaign: [
                {
                    projectId: 30207,
                    projectName: "Marketplace Fase 1 PILOTO",
                    balance: "93499",
                    currencyBalance: "934.99",
                    conversionRate: "100",
                    accountType: "1",
                    accountTypeId: "1",
                    accountHolderId: 2022853631,
                    accountId: 12996939,
                    vendorId: null,
                    vendorName: null,
                    originAccountHolderId: "0"
                }
            ],
            loyaltyStampedBalanceCampaign: [],
            loyaltyOnHoldBalanceCampaign: [],
            projectId: 30207,
            balanceCampaigns: "93499",
            stampedBalanceCampaigns: "0",
            totalBalanceCampaigns: "93499",
            currencyBalanceCampaigns: "934.99",
            currencyStampedBalanceCampaigns: "0",
            totalCurrencyBalanceCampaigns: "934.99",
            onHoldBalanceCampaigns: "0",
            currencyOnHoldBalanceCampaigns: "0",
            stampedBalanceAllowed: false
        }
    ],

    "BALANCELOGIN":[
        {
            loyaltyBalanceCampaign: [
                {
                    projectId: 30207,
                    projectName: "Marketplace Fase 1 PILOTO",
                    balance: "93499",
                    currencyBalance: "934.99",
                    conversionRate: "100",
                    accountType: "1",
                    accountTypeId: "1",
                    accountHolderId: 2022853631,
                    accountId: 12996939,
                    vendorId: null,
                    vendorName: null,
                    originAccountHolderId: "0"
                }
            ],
            loyaltyStampedBalanceCampaign: [],
            loyaltyOnHoldBalanceCampaign: [],
            projectId: 30207,
            balanceCampaigns: "93499",
            stampedBalanceCampaigns: "0",
            totalBalanceCampaigns: "93499",
            currencyBalanceCampaigns: "934.99",
            currencyStampedBalanceCampaigns: "0",
            totalCurrencyBalanceCampaigns: "934.99",
            onHoldBalanceCampaigns: "0",
            currencyOnHoldBalanceCampaigns: "0",
            stampedBalanceAllowed: false
        }
    ],    

    "REDEMPTIONDONE":[
        {
            approved: true,
            channel: 1,
            authorizationCode: null,
            status: 1,
            statusDescription: "Locked",
            orderStatus: []
        }
    ],

    "REDEMPTIONFINISH":[
        {
            apportionments: [],
            authorizationCode: "eb376e37-62f9-4fdb-bf37-ea022dec7426",
            status: 9,
            statusDescription: "Canceled",
            orderStatus: []
        }
    ],

    "CAMPAIGNIDAUTHDET": "xxx",
    "ORDERIDAUTHDET": "xxx",


    "EXTRACTACCOUNT":[
        {
            insertDate: "2017-09-05T14:12:47.157",
            accountHolderId: 2022853631,
            creditBalance: 100000,
            creditCurrencyBalance: 1000,
            debitBalance: 0,
            debitCurrencyBalance: 0,
            redeemBalance: 6501,
            redeemCurrencyBalance: 65.01,
            expiredBalance: 0,
            expiredCurrencyBalance: 0,
            lockedBalance: 0,
            lockedCurrencyBalance: 0
        }
    ],

    "BANKACCOUNTEXTRACT":[
        {
            insertDate: "0001-01-01T00:00:00",
            accountHolderId: 2022853631,
            creditBalance: 100000,
            creditCurrencyBalance: 1000,
            debitBalance: 0,
            debitCurrencyBalance: 0,
            redeemBalance: 6501,
            redeemCurrencyBalance: 65.01,
            expiredBalance: 0,
            expiredCurrencyBalance: 0,
            lockedBalance: 0,
            lockedCurrencyBalance: 0
        }
    ],
    

    "REDEMPTIONFORREVERSAL":[
        {
            authorizationCode: "42ddcc00-f27f-419e-ba5f-ada050d0c564",
            campaignId: '30207',
            parentOrderId: 3734896,
            orderId: 3890006 
        }
    ],

    "PUTFORREVERSALREDEMPTION":[
        {
            statusDescription: "Error",
            orderId: 3890006
            
        }

    ],

    "FLUSH":02,

    "CAMPAIGNIDHYBRID": 123, 
    "PARTICIPANTIDHYBRID": 123, 
    "HYBRIDCAMPAIGNHYBRID": 123,	    

    "CAMPAIGNID": 123,
    "TOKEN": 123,
    "EXTERNALCODE": 123,

    "ORDERIDFORAUTHORIZATIONORDERDETAIL": 3890006,
    "VENDORIDFORAUTHORIZATIONORDERDETAIL": 60,
    "PARTICIPANTACCOUNTHOLDERIDFORAUTHORIZATIONORDERDETAIL": 14124177,

    "REDEMPTIONSTATUSDESCRIPTION": "Declined",

    "FINISHREDEMPTIONSTATUSDESCRIPTION": "It's not possible to confirm an unauthorized payment: 94aec5df-42cc-49f3-8a40-777a474c37aa",

    "VENDORID": 60,

    "USERS":[{ username: 'herbert.lima', userid: 14124177 }],
    "USERS_INVALID":[{ username_invalid: 'XXX', userid_invalid: 'XXX' }],  
    "MESSAGE_INVALID": 'An error has occurred.',            
    "CAMPAIGN_ID": 30207,
    "CAMPAIGN_ID_INVALID": 'XXX',
    "REDEMPTIONS": '92A49D86-18A6-4C03-9A6C-E22051583964',
    "DATETOEXPIRE": '2017-12-31',
    "INVALIDDATETOEXPIRE": '0000-00-00',
    "INVALIDFORMATDATETOEXPIRE": '2017-13-32',
    "DATEFROM": '2017-01-01',
    "DATETO": '2017-12-31',
    "CASHREVERSAL": '999999',
    "util": {
        "HTTP": {
            "OK": 200,
            "CREATED": 201,
            "ACCEPTED": 202,
            "NO_CONTENT": 204,
            "BAD_REQUEST": 400,
            "UNAUTHORIZED": 401,
            "FORBIDDEN": 403,
            "NOT_FOUND": 404,
            "METHOD_NOT_ALLOWED": 405,
            "UNPROCESSABLE_ENTITY": 422,
            "INTERNAL_ERROR": 500                        
        },
        "HIGH_SECONDS": 500000,
        "DEFAULT_SECONDS": 100000,
        "CONTENT_TYPE": "Content-Type",
        "ACCEPT":"Accept",
        "BEARER": "Bearer ",
        "BASIC": "Basic ",
        "ContentType": {
            "JSON": "application/json",
            "FORM_URL_ENCODED": "application/x-www-form-urlencoded; charset=UTF-8",
            "ACCEPT":"application/json"
        },
        "DEFAULT_HEADER": { 
            "headers": { 
                "Accept": "application/json",
                "Content-Type": "application/json; charset=utf-8"               
            }
        }
    }    
};

//module.exports = config;