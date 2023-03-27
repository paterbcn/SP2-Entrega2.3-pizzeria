const product = {
    name:"producto1",
    descript:"este es un producto numero 1",
    category:"pizzas",
    subcategory:"margarita"
}

const customer = {
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
const store ={
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

const sale = {
  date: new Date(),
  id_customer: ObjectId("642153299216c6c22f0aa877"),
  id_tienda: ObjectId("6419ef8c74ee91135bbe90c7"),
  pickup: "delivery",
  sale_detail: [
    {
      id_product: ObjectId("6419ef8c74ee91135bbe90c7"),
      quantity: 5,
    },
    {
      id_product: ObjectId("6419f08e5e98de51109b0b4a"),
      quantity: 3,
    },
  ],
  delivery_detail: {
    street: "primera1",
    number: 23,
    floor: "a",
    door: "3",
    city: "barcelona",
    pc: 08002,
    phone: 9898989,
    deliv_worker: "juan perez",
    deliv_date: new Date(),
  },
};


const sale = {
  date: new Date(),
  id_customer: ObjectId("6419ef8c74ee91135bbe90c7"),
  id_tienda: ObjectId("6419ef8c74ee91135bbe90c7"),
  pickup: "delivery",
  sale_detail: [
    {
      id_product: ObjectId("6419ef8c74ee91135bbe90c7"),
      quantity: 5,
    },
    {
      id_product: ObjectId("6419f08e5e98de51109b0b4a"),
      quantity: 3,
    },
  ],
  delivery_detail: {
    street: "primera1",
    number: 23,
    floor: "a",
    door: "3",
    city: "barcelona",
    pc: 08002,
    phone: 9898989,
    deliv_worker: "juan perez",
    deliv_date: new Date(),
  },
};

