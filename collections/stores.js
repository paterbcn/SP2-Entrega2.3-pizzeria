db.createCollection("store", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            title: "customer Object Validation",
            required: ["name", "adress", "Employees"],
            properties: {
                name: {
                    bsonType: "string",
                    description: "'name' must be a string and is required",
                },
                adress: {
                    bsonType: "object",
                    required: ['street', 'number', "city", "pc"],
                    properties: {
                        street: {
                            bsonType: "string",
                            description: "'street' must be a string and is required",
                        },
                        number: {
                            bsonType: "number",
                            description: "'number' must be a number and is required",
                        },
                        floor: {
                            bsonType: "string",
                            description: "'floor' must be a string and is required",
                        },
                        door: {
                            bsonType: "string",
                            description: "'door' must be a string and is required",
                        },
                        city: {
                            bsonType: "string",
                            description: "'city' must be a string and is required",
                        },
                        pc: {
                            bsonType: "number",
                            description: "'pc' must be a number and is required",
                        },
                    },
                },
                Employees: {
                    bsonType: "array",
                    items: {
                        bsonType: "object",
                        required:["name","surname","NIF","phone","job_description"],
                        properties: {
                            name: {
                                bsonType: "string",
                                description: "'name' must be a string and is required",
                            },
                            surname: {
                                bsonType: "string",
                                description: "'surname' must be a string and is required",
                            },
                            NIF: {
                                bsonType: "string",
                                description: "'NIF' must be a string and is required",
                            },
                            phone: {
                                bsonType: "number",
                                description: "'phone' must be a number and is required",
                            },
                            job_description: {
                                bsonType: "string",
                                enum: ["delivery", "chef"],
                                description: "'job_description' must be 'delivery' or 'chef' and  is required",
                            },
                        },
                    },
                },
            },
        },
    },
},
);