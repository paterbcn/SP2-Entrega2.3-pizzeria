db.createCollection("products", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            title: "products Object Validation",
            required: ["name", "descript", "category", "subcategory"],
            properties: {
                name: {
                    bsonType: "string",
                    description: "'name' must be a string and is required",
                },
                descript: {
                    bsonType: "string",
                    description: "'descript' must be a strint and is required",
                },
                category: {
                    bsonType: "string",
                    enum: ['pizzas', 'hambuerguesas', 'bebidas'],
                    description: "must be 'pizzas','hambuerguesas','bebidas' and is required",
                },
                subcategory: {
                    bsonType: "string",
                    description: "'Subcategory' must be a string and is required"
                },
            },
        },
    },
});
const product1 = {
    name:"producto",
    descript:"este es un producto numero 1",
    category:"pizzas",
    subcategory:"margarita"
}

const product2 = {
    name:"producto2",
    descript:"este es un producto numero 2",
    category:"hambuerguesas",
    subcategory:"carne"
    
}

const product3 = {
    name:"producto1",
    descript:"este es un producto numero 1",
    category:"bebidas",
    subcategory:"refresco"
}