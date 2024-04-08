module.exports = app => {
    const cadastroCliente = require("../app/controllers/cadastroCliente.controller.js"); 
    const checkIfDateIsOlder = require("../app/middleware/checkIfDateIsOlder.middleware.js"); 

    const db = require("../models/index.js"); 
    const CadastroCliente = db.cadastroCliente; 

    var router = require("express").Router(); 

    // Create a new CadastroCliente 
    router.post("/", cadastroCliente.create); 
    // Retrieve all cadastroCliente 
    router.get("/", cadastroCliente.findAll); 
    // Retrieve a single CadastroCliente with id 
    router.get("/:id", cadastroCliente.findOne); 
    // Update a CadastroCliente with id 
    router.put("/:id", checkIfDateIsOlder(CadastroCliente), cadastroCliente.update); 
    // Delete a CadastroCliente with id 
    router.delete("/:id", cadastroCliente.delete); 
    // Create a new CadastroCliente 
    router.delete("/", cadastroCliente.deleteAll); 
    app.use('/api/cadastroCliente', router); 
  }; 
