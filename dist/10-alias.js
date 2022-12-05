"use strict";
(() => {
    let userId;
    function greeting(parametro) {
        return typeof parametro === "string"
            ? console.log("myTextIs (+)>", parametro.toLocaleLowerCase()) : null;
    }
    ;
    //? Literal types
    let shirtSize;
    shirtSize = "S"; ////ok
    shirtSize = "M"; ////ok
    let Sizes;
    function greet(parametro1, parametro2) {
        return typeof parametro1 === "string"
            ? console.log("Ropa: (+)>", `usuario: ${parametro1.toLocaleLowerCase()}`, `tamaño: ${parametro2}`)
            : null;
    }
    ;
    greet("Nicolas", "2XL");
    greet("Molina", "LA");
})();
