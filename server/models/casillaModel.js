'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CasillaSchema = new Schema({
  mapa: {
    type: String,
    Required: 'Mapa al que pertenece'
  },
  coorX: {
    type: Number,
    Required: 'Coordenada X'
  },
  coorY: {
    type: Number,
    Required: 'Coordenada Y'
  },
  tipo: {
    type: {
      type: String,
      enum: ['pradera', 'bosque', 'montania', 'costa', 'desierto', 'ruinas']
    },
    default: ['pradera']
  },
  comida: {
    type: Number,
    default: 1
  },
  madera: {
    type: Number,
    default: 1
  },
  piedra: {
    type: Number,
    default: 1
  },
  metal: {
    type: Number,
    default: 1
  },
  planos: {
    type: Number,
    default: 1
  }
});


module.exports = mongoose.model('Casillas', CasillaSchema);