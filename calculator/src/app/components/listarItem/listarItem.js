// ListaItens.js
import React from 'react';
import Item from '../item/item';

const ListaItens = ({ items, tipo, onDeleteItem, onDeleteLista, calculateTotal }) => (
  <div>
    <h3>{tipo === 'despesa' ? 'Despesas' : 'Entradas'}</h3>
    {items
      .filter((item) => item.tipo === tipo)
      .map((item, index) => (
        <Item key={index} item={item} onDelete={() => onDeleteItem(index)} />
      ))}
    <p>Total {tipo === 'despesa' ? 'Despesas' : 'Entradas'}: {calculateTotal(tipo)}</p>
    <button onClick={() => onDeleteLista(tipo)}>Excluir Lista de {tipo === 'despesa' ? 'Despesas' : 'Entradas'}</button>
  </div>
);

export default ListaItens;
