const rp = require("request-promise");

var lista ={
    uri:"http://ontariobeerapi.ca/products",
    json:true
}

function obtenerCerveza(){
    return rp(lista);
}

module.exports = obtenerCerveza;