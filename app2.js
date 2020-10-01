const obtenerCerveza = require("./library2");


obtenerCerveza().then(Data => {
    Data.forEach(cerveza => {
        console.log("id" + cerveza.product_id);
        console.log("Nombre: " + cerveza.name);
        console.log("Precio: " + cerveza.price);
        console.log("Categoria: " + cerveza.category);
        console.log("estilo: " + cerveza.style);
        console.log("tipo: " + cerveza.type);
        console.log("Cervecera: " + cerveza.brewer);
        console.log("Pais" + cerveza.country);
        console.log("en venta: " + cerveza.on_sale);
        
    });

}).catch((e)=>{
    console.log("Error: "+ e);
});