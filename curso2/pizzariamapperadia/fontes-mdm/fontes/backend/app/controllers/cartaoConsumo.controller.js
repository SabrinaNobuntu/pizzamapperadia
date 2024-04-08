const db = require("../../models");
const CartaoConsumo = db.cartaoConsumo;

validaCamposRequeridosCartaoConsumo = (req) => {
    const camposRequeridosEmpty = new Array();
    if (!req.body.numeroCartao) {
        camposRequeridosEmpty.push("numeroCartao");
    }
    if (!req.body.clientes) {
        camposRequeridosEmpty.push("clientes");
    }
    return camposRequeridosEmpty;
}

// Cria e salva um novo documento para a entidade CartaoConsumo
exports.create = (req, res) => {
    // Validate request
    if (!req.body.numeroCartao) {
        res.status(400).send({ message: "Conteúdo não pode ser vazio!" });
        return;
    }

    // Validate required fields
    const camposRequeridosEmpty = validaCamposRequeridosCartaoConsumo(req);
    if (camposRequeridosEmpty.length > 0) {
        res.status(400).send({ message: "Campos requeridos ("+camposRequeridosEmpty.join(",") + ") não podem ser vazios!" });
        return;
    }

    // Create a CartaoConsumo
    const cartaoConsumo = new CartaoConsumo({
        numeroCartao: req.body.numeroCartao ? req.body.numeroCartao : null,
        clientes: req.body.clientes ? req.body.clientes.id : null
    });

    // Save CartaoConsumo in the database
    cartaoConsumo
        .save(cartaoConsumo)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Ocorreu um erro de servidor ao tentar salvar CartaoConsumo."
            });
        });
};

// Procura por todas as entidades do tipo CartaoConsumo
exports.findAll = (req, res) => {
    var condition = {};

    CartaoConsumo.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algum erro desconhecido ocorreu ao buscar CartaoConsumo."
        });
      });
};

// Busca a entidade CartaoConsumo por id
exports.findOne = (req, res) => {
    const id = req.params.id; 

    CartaoConsumo.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "A entidade CartaoConsumo com id " + id + " não encontrada!" });
        else res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Erro desconhecido ocorreu ao buscar a entidade CartaoConsumo com o id " + id + "."
        });
      });
};

// Altera uma entidade CartaoConsumo
exports.update = (req, res) => {

    // Validate required fields
    const camposRequeridosEmpty = validaCamposRequeridosCartaoConsumo(req);
    if (camposRequeridosEmpty.length > 0) {
        res.status(400).send({ message: "Campos requeridos ("+camposRequeridosEmpty.join(",") + ") não podem ser vazios!" });
        return;
    }

    const id = req.params.id;

    CartaoConsumo.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `A entidade CartaoConsumo com id ${id} não encontrada, por isso não pode ser atualizada!`
          });
        } else res.send({ message: `A entidade CartaoConsumo com id ${id} foi alterada com sucesso.` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Erro desconhecido ocorreu ao alterar a entidade CartaoConsumo com o id " + id + "."
        });
      });
};

// Remove a entidade CartaoConsumo por id
exports.delete = (req, res) => {

    const id = req.params.id;

    CartaoConsumo.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `A entidade CartaoConsumo com id ${id} não encontrada, por isso não pode ser excluida!`
          });
        } else {
          res.send({
            message: `A entidade CartaoConsumo com id ${id} foi excluída com sucesso.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Erro desconhecido ocorreu ao excluir a entidade CartaoConsumo com o id " + id + "."
        });
      });
};

// Exclui todos os registros da entidade CartaoConsumo
exports.deleteAll = (req, res) => {

    CartaoConsumo.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} ${data.deletedCount > 1 ? '' : 'CartaoConsumo'}  foram excluídas!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algum erro desconhecido ocorreu ao excluir todas as entidades CartaoConsumo."
        });
      });
};

exports.findCustom = (req, res) => { 
  findCustom(req, res, Orders); 
};
