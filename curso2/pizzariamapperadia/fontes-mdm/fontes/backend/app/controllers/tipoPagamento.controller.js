const db = require("../../models");
const TipoPagamento = db.tipoPagamento;

validaCamposRequeridosTipoPagamento = (req) => {
    const camposRequeridosEmpty = new Array();
    if (!req.body.tipoPagamento) {
        camposRequeridosEmpty.push("tipoPagamento");
    }
    return camposRequeridosEmpty;
}

// Cria e salva um novo documento para a entidade TipoPagamento
exports.create = (req, res) => {
    // Validate request
    if (!req.body.tipoPagamento) {
        res.status(400).send({ message: "Conteúdo não pode ser vazio!" });
        return;
    }

    // Validate required fields
    const camposRequeridosEmpty = validaCamposRequeridosTipoPagamento(req);
    if (camposRequeridosEmpty.length > 0) {
        res.status(400).send({ message: "Campos requeridos ("+camposRequeridosEmpty.join(",") + ") não podem ser vazios!" });
        return;
    }

    // Create a TipoPagamento
    const tipoPagamento = new TipoPagamento({
        tipoPagamento: req.body.tipoPagamento ? req.body.tipoPagamento : null,
    });

    // Save TipoPagamento in the database
    tipoPagamento
        .save(tipoPagamento)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Ocorreu um erro de servidor ao tentar salvar TipoPagamento."
            });
        });
};

// Procura por todas as entidades do tipo TipoPagamento
exports.findAll = (req, res) => {
    var condition = {};

    TipoPagamento.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algum erro desconhecido ocorreu ao buscar TipoPagamento."
        });
      });
};

// Busca a entidade TipoPagamento por id
exports.findOne = (req, res) => {
    const id = req.params.id; 

    TipoPagamento.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "A entidade TipoPagamento com id " + id + " não encontrada!" });
        else res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Erro desconhecido ocorreu ao buscar a entidade TipoPagamento com o id " + id + "."
        });
      });
};

// Altera uma entidade TipoPagamento
exports.update = (req, res) => {

    // Validate required fields
    const camposRequeridosEmpty = validaCamposRequeridosTipoPagamento(req);
    if (camposRequeridosEmpty.length > 0) {
        res.status(400).send({ message: "Campos requeridos ("+camposRequeridosEmpty.join(",") + ") não podem ser vazios!" });
        return;
    }

    const id = req.params.id;

    TipoPagamento.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `A entidade TipoPagamento com id ${id} não encontrada, por isso não pode ser atualizada!`
          });
        } else res.send({ message: `A entidade TipoPagamento com id ${id} foi alterada com sucesso.` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Erro desconhecido ocorreu ao alterar a entidade TipoPagamento com o id " + id + "."
        });
      });
};

// Remove a entidade TipoPagamento por id
exports.delete = (req, res) => {

    const id = req.params.id;

    TipoPagamento.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `A entidade TipoPagamento com id ${id} não encontrada, por isso não pode ser excluida!`
          });
        } else {
          res.send({
            message: `A entidade TipoPagamento com id ${id} foi excluída com sucesso.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Erro desconhecido ocorreu ao excluir a entidade TipoPagamento com o id " + id + "."
        });
      });
};

// Exclui todos os registros da entidade TipoPagamento
exports.deleteAll = (req, res) => {

    TipoPagamento.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} ${data.deletedCount > 1 ? '' : 'TipoPagamento'}  foram excluídas!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algum erro desconhecido ocorreu ao excluir todas as entidades TipoPagamento."
        });
      });
};

exports.findCustom = (req, res) => { 
  findCustom(req, res, Orders); 
};
