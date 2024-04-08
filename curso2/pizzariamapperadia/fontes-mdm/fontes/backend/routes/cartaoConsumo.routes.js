module.exports = app => {
    const cartaoConsumo = require("../app/controllers/cartaoConsumo.controller.js"); 
    const checkIfDateIsOlder = require("../app/middleware/checkIfDateIsOlder.middleware.js"); 

    const db = require("../models/index.js"); 
    const CartaoConsumo = db.cartaoConsumo; 

    var router = require("express").Router(); 

    // Create a new CartaoConsumo 
    router.post("/", cartaoConsumo.create); 
    // Retrieve all cartaoConsumo 
    router.get("/", cartaoConsumo.findAll); 
    // Retrieve a single CartaoConsumo with id 
    router.get("/:id", cartaoConsumo.findOne); 
    // Update a CartaoConsumo with id 
    router.put("/:id", checkIfDateIsOlder(CartaoConsumo), cartaoConsumo.update); 
    // Delete a CartaoConsumo with id 
    router.delete("/:id", cartaoConsumo.delete); 
    // Create a new CartaoConsumo 
    router.delete("/", cartaoConsumo.deleteAll); 
    app.use('/api/cartaoConsumo', router); 
  }; 
