const rp = require("request-promise");

function obtenerCerveza(product_id){

    var lista ={
        uri: "http://ontariobeerapi.ca/products/" + product_id,
        json:true
    }

    return rp(lista);

}

module.exports = obtenerCerveza;