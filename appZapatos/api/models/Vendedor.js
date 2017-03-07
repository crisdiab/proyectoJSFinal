/**
 * Vendedor.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre: {
      type: 'string',

    },
    cedula: {
      type: 'string',
      defaultsTo: '111-222-3333'
    },
    clientes: {
      collection: 'usuario',
      via: 'idVendedor'
    }
  }
};

