const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema(
  {
    nomeUsuario: {
      type: String,
      trim: true,
    },
    dadosUsuario: {
      emailUsuario: {
        type: String,
        trim: true,
      },
      senhaUsuario: {
        type: String,
        trim: true,
      },
    },
    contatosUsuario: [
      {
        nomeContato: {
          type: String,
          trim: true,
        },
        emailContato: {
          type: String,
          trim: true,
        },
        telefoneContato: {
          type: String,
          trim: true,
        },
      },
    ],
  },
  { versionKey: false }
);

module.exports = mongoose.model('Usuario', UsuarioSchema);
