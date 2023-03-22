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
