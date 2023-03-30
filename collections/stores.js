use('pizzeria');
db.stores.drop();


db.createCollection("stores", {
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

const store1 ={
    name:"tienda1",
    adress:{
        street:"calle2",
        number:199,
        floor:"10",
        city:"barcelona",
        pc:080002
    },
    Employees:[{
        name:"empleado1",
        surname:"apempleado2",
        NIF:"444444444a",
        phone: 99999999,
        job_description:"delivery"
    },
    {
        name:"empleado2",
        surname:"apempleado3",
        NIF:"455555a",
        phone: 96666699,
        job_description:"chef"
    },
]
}

const store2 ={
    name:"tienda2",
    adress:{
        street:"calle3",
        number:99,
        floor:"10",
        city:"madrid",
        pc:080002
    },
    Employees:[{
        name:"empleado3",
        surname:"apempleado3",
        NIF:"444444444a",
        phone: 99999999,
        job_description:"delivery"
    },
    {
        name:"empleado10",
        surname:"apempleado10",
        NIF:"455555a",
        phone: 96666699,
        job_description:"chef"
    },
]
}

const store3 ={
    name:"tienda3",
    adress:{
        street:"calle4",
        number:933,
        floor:"10",
        city:"sevilla",
        pc:080002
    },
    Employees:[{
        name:"empleado99",
        surname:"apempleado99",
        NIF:"444444444a",
        phone: 99999999,
        job_description:"delivery"
    },
    {
        name:"empleado88",
        surname:"apempleado88",
        NIF:"455555a",
        phone: 96666699,
        job_description:"chef"
    },
]
}

db.stores.insertMany([store1,store2,store3])