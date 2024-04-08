module.exports = app => {
    const cartaoCliente = require("../app/controllers/cartaoCliente.controller.js"); 
    const checkIfDateIsOlder = require("../app/middleware/checkIfDateIsOlder.middleware.js"); 

    const db = require("../models/index.js"); 
    const CartaoCliente = db.cartaoCliente; 

    var router = require("express").Router(); 

    // Create a new CartaoCliente 
    router.post("/", cartaoCliente.create); 
    // Retrieve all cartaoCliente 
    router.get("/", cartaoCliente.findAll); 
    // Retrieve a single CartaoCliente with id 
    router.get("/:id", cartaoCliente.findOne); 
    // Update a CartaoCliente with id 
    router.put("/:id", checkIfDateIsOlder(CartaoCliente), cartaoCliente.update); 
    // Delete a CartaoCliente with id 
    router.delete("/:id", cartaoCliente.delete); 
    // Create a new CartaoCliente 
    router.delete("/", cartaoCliente.deleteAll); 
    app.use('/api/cartaoCliente', router); 
  }; 
