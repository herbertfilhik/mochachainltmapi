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
                "Content-Type": "application/json"               
            }
        }
    }
};


module.exports = config;