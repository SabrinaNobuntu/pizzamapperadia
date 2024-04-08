const express = require("express");
const cors = require("cors"); 
const app = express();

var corsOptions = { 
  origin: "http://localhost:8081" 
}; 

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.a3mav.mongodb.net/curso-javascript?retryWrites=true&w=majority');

// simple route
app.get("/", (req, res) => { 
  res.json({ message: "Welcome to application." }); 
}); 

//Declara CartaoConsumo rotas
require("./routes/cartaoConsumo.routes")(app); 

//Declara Cliente rotas
require("./routes/cliente.routes")(app); 

//Declara CadastroCliente rotas
require("./routes/cadastroCliente.routes")(app); 

//Declara CartaoCliente rotas
require("./routes/cartaoCliente.routes")(app); 

//Declara Categoria rotas
require("./routes/categoria.routes")(app); 

//Declara Cozinha rotas
require("./routes/cozinha.routes")(app); 

//Declara Endereco rotas
require("./routes/endereco.routes")(app); 

//Declara Garcon rotas
require("./routes/garcon.routes")(app); 

//Declara ItemPedido rotas
require("./routes/itemPedido.routes")(app); 

//Declara Menu rotas
require("./routes/menu.routes")(app); 

//Declara Opcional rotas
require("./routes/opcional.routes")(app); 

//Declara Pagamento rotas
require("./routes/pagamento.routes")(app); 

//Declara Pedido rotas
require("./routes/pedido.routes")(app); 

//Declara Produto rotas
require("./routes/produto.routes")(app); 

//Declara TipoPagamento rotas
require("./routes/tipoPagamento.routes")(app); 

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`);
});
