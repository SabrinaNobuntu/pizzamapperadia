var mongoose = require('mongoose'); 
var Schema = mongoose.Schema;

module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      nomeMenu: String,
      descricaoMenu: String,
      preco: Number,
        produto: {type: Schema.Types.ObjectId, ref: 'Produto'}, 
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Menu = mongoose.model("menu", schema);
  return Menu;
};
