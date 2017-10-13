'use strict';
var basic;
var env;

//var chai = require('chai')  , chaiHttp = require('chai-http');




var Util = function(that) {
    chai.use(chaiHttp);
    this.that = that;    
};

Util.prototype.getEnv = function() {
    return env;
};

Util.prototype.getHeaderFormUrlEncoded = function(token) {
    var header = this.getDefaultHeader(token);

    header[config.util.CONTENT_TYPE] = config.util.ContentType.FORM_URL_ENCODED;

    return header;
};

Util.prototype.getUrls = function() {
    return config.urls.environment;
};

Util.prototype.getHeaderJson = function(token) {
    var header = this.getDefaultHeader(token);
    
    //header[config.util.CONTENT_TYPE] = config.util.ContentType.JSON;

    return header;
};

Util.prototype.getOAuthHeader = function() {
    var header = {};
    header.Authorization = config.util.BASIC + basic;
    header[config.util.ACCEPT] = config.util.ContentType.ACCEPT;
    header[config.util.CONTENT_TYPE] = config.util.ContentType.FORM_URL_ENCODED;
    return header;
};

Util.prototype.getInvalidOAuthHeader = function() {
    var header = {};    
    header[config.util.ACCEPT] = config.util.ContentType.ACCEPT;
    header[config.util.CONTENT_TYPE] = config.util.ContentType.FORM_URL_ENCODED;
    return header;
};


Util.prototype.getDefaultHeader = function(token) {
    var header = config.util.DEFAULT_HEADER;
    
    
    return header;
};

Util.prototype.getUrl = function(baseUrl, header, url) {console.log(header);console.log(baseUrl);console.log(url);
    return chai.request(baseUrl)
        .get(url)
        .set(header);
};

Util.prototype.postUrl = function(baseUrl, body, header, url) {
    return chai.request(baseUrl).post(url)
        .set(header)        
        .send(body);
};

Util.prototype.deleteUrl = function(baseUrl, body, header, url) {
    return chai.request(baseUrl)
        .del(url)
        .set(header)
        .send(body);
};

Util.prototype.putUrl = function(baseUrl, body, header, url) {
    return chai.request(baseUrl)
        .put(url)
        .set(header)
        .send(body);
};

Util.prototype.timeout = function(miliseconds) {
    this.that.timeout(miliseconds);
};

function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

//module.exports = Util;