use('pizzeria');
db.sales.drop();


db.createCollection("sales", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "sales Object Validation",
      required: ["date", "id_customer", "id_store", "pickup", "sale_detail","employee"],
      properties: {
        date: {
          bsonType: "date",
          description: "'date' must be a string and is required",
        },
        id_customer: {
          bsonType: "objectId",
          description: "'id_customer' must be a objectId and is required",
        },
        id_store: {
          bsonType: "objectId",
          description: "'id_store' must be a objectId and is required",
        },
        pickup: {
          bsonType: "string",
          enum: ["delivery", "store"],
          description: "'pickup' must be 'delivery' or 'store' and is required",
        },employee: {
          bsonType: "objectId",
          description: "'employee' must be a objectid and is required",
        },
        total_sale: {
          bsonType: "number",
          description: "'total_sale' must be a number and is required",
        },
        sale_detail: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ["id_product","quantity"],
            properties: {
              id_product: {
                bsonType: "objectId",
                description: "'id_product' must be a objectId and is required",
              },
              quantity: {
                bsonType: "number",
                description: "'quantity' must be a number and is required",
              },
            },
          },
        },
        delivery_detail: {
          bsonType: "object",
          required: ["adress","phone","deliv_worker","deliv_date"],
          properties: {
            adress: {
              bsonType: "object",
              required: ["street","number","pc","city"],
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
                  description: "'floor' must be a string",
                },
                door: {
                  bsonType: "string",
                  description: "'door' must be a string ",
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
              description: "'phone' must be a number and is required",
            },
            deliv_worker: {
              bsonType: "objectId",
              description: "'deliv_worker' must be a objectId and is required",
            },
            deliv_date: {
              bsonType: "date",
              description: "'deliv_date' must be a date and is required",
            },
          },
        },
      },
    },
  },
});


const sale1 = {
  date: new Date(),
  id_customer: ObjectId("642153299216c6c22f0aa877"),
  id_store: ObjectId("64215d6560c0c02597ae3571"),
  pickup: "delivery",
  employee:ObjectId("64215d6560c0c02597ae3571"),
  total_sale: 100,
  sale_detail: [
    {
      id_product: ObjectId("642155d1545c6699fd25082b"),
      quantity: 1,
    },
    {
      id_product: ObjectId("642155d1545c6699fd25082c"),
      quantity: 1,
    },
  ],
  delivery_detail: {
    adress:{
      street: "primera1",
      number: 23,
      floor: "a",
      door: "3",
      city: "barcelona",
      pc: 08002,
   
},
  phone: 9898989,
  deliv_worker: ObjectId("64215d6560c0c02597ae3571"),
  deliv_date: new Date(),
  },
};

const sale2 = {
  date: new Date(),
  id_customer: ObjectId("642153299216c6c22f0aa878"),
  id_store: ObjectId("64215d6560c0c02597ae3572"),
  pickup: "store",
  employee:ObjectId("64215d6560c0c02597ae3571"),
  total_sale: 100,
  sale_detail: [
    {
      id_product: ObjectId("642155d1545c6699fd25082d"),
      quantity: 2,
    },
    {
      id_product: ObjectId("642155d1545c6699fd25082d"),
      quantity: 2,
    },
  ],
  
};

const sale3 = {
  date: new Date(),
  id_customer: ObjectId("641d878b3533d91dfe7d4fc9"),
  id_store: ObjectId("64215d6560c0c02597ae3573"),
  pickup: "delivery",
  employee:ObjectId("64215d6560c0c02597ae3571"),
  total_sale: 100,
  sale_detail: [
    {
      id_product: ObjectId("642155d1545c6699fd25082c"),
      quantity: 2,
    },
  
  ],
  delivery_detail: {
    adress:{
      street: "segunda",
      number: 11,
      floor: "a",
      door: "3",
      city: "barcelona",
      pc: 08001,
   
},
  phone: 9898989,
  deliv_worker: ObjectId("64215d6560c0c02597ae3571"),
  deliv_date: new Date(),
  },
};

db.sales.insertMany([sale1,sale2,sale3])
