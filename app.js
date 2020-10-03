const obtenerCerveza = require("./library");


obtenerCerveza(2139068).then(data => {
    //Data.forEach(cerveza => {
        console.log("Nombre: " + data.name);
        console.log("Imagen: " + data.image_url);
        console.log("Precio: " + data.price);
        console.log("Categoria: " + data.category);
        console.log("estilo: " + data.style);
        console.log("tipo: " + data.type);
        console.log("Cervecera: " + data.brewer);
        console.log("Pais" + data.country);
        console.log("en venta: " + data.on_sale);
        
    /*});*/

}).catch((e)=>{
    console.log("Error: "+ e);
});

//cuando intento traer una sola cerveza me tira que Data.forEach no es una function
