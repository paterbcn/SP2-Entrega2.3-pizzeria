db.createCollection("sales", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "sales Object Validation",
      required: ["date", "id_customer", "id_tienda", "pickup", "sale_detail"],
      properties: {
        date: {
          bsonType: "date",
          description: "'date' must be a string and is required",
        },
        id_customer: {
          bsonType: "objectId",
          description: "'id_customer' must be a objectId and is required",
        },
        id_tienda: {
          bsonType: "objectId",
          description: "'id_tienda' must be a objectId and is required",
        },
        pickup: {
          bsonType: "string",
          enum: ["delivery", "store"],
          description: "'pickup' must be 'delivery' or 'store' and is required",
        },
        sale_detail: {
          bsonType: "array",
          items: {
            bsonType: "object",
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
            phone: {
              bsonType: "number",
              description: "'phone' must be a number and is required",
            },
            deliv_worker: {
              bsonType: "string",
              description: "'deliv_worker' must be a string and is required",
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
