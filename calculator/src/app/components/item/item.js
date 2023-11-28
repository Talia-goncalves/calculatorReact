// Item.js
import React from 'react';

const Item = ({ item, onDelete }) => (
  <div className="card">
    <p>Nome: {item.nome}</p>
    <p>Valor: {item.valor}</p>
    <p>Tipo: {item.tipo}</p>
    <p>Pago por: {item.pagoPor}</p>
    <p>Data: {item.data}</p>
    <button onClick={onDelete}>Excluir</button>
  </div>
);

export default Item;
