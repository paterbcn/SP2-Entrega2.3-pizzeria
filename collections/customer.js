db.createCollection("customers", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            title: "customer Object Validation",
            required: ["name", "surname", "adress", "phone"],
            properties: {
                name: {
                    bsonType: "string",
                    description: "'name' must be a string and is required",
                },
                surname: {
                    bsonType: "string",
                    description: "'surname' must be a strint and is required",
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
                phone: {
                    bsonType: "number",
                    description: "'phone' must be a string and is required"
                },
            },
        },
    },
});


const cust1 = {
    name:"cliente1",
    surname:"Apcliente1",
    adress:{
        street:"calle1",
        number:100,
        floor:"10",
        city:"barcelona",
        pc:080001
    },
    phone:999999999
}

const cust2 = {
    name:"cliente2",
    surname:"Apcliente2",
    adress:{
        street:"calle2",
        number:200,
        floor:"10",
        city:"barcelona",
        pc:080001
    },
    phone:96666666
}

const cust3 = {
    name:"cliente3",
    surname:"Apcliente3",
    adress:{
        street:"calle3",
        number:300,
        floor:"10",
        city:"barcelona",
        pc:080001
    },
    phone:333333333
}