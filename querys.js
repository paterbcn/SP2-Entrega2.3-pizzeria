//Llista quants productes de tipus “Begudes”. s'han venut en una determinada localitat.
db.products
  .aggregate([
    {
      $lookup: {
        from: "sales",
        localField: "_id",
        foreignField: "sale_detail.id_product",
        as: "producSale",
      },
    },
    {
      $unwind: "$producSale",
    },
    {
      $lookup: {
        from: "stores",
        localField: "producSale.id_store",
        foreignField: "_id",
        as: "prodStore",
      },
    },

    {
      $unwind: "$prodStore",
    },
    {
      $match: { category: "bebidas", "prodStore.adress.city": "madrid" },
    },

    {
      $project: {
        producto: "$name",
        category: "$category",
        city: "$prodStore.adress.city",
      },
    },
  ])
  .itcount();

  // Llista quantes comandes ha efectuat un determinat empleat/da.
  db.sales.find({employee:ObjectId("642160b3f6cb3f8a9437aae5")}).count()

  