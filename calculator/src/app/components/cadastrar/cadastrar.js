"use client"
// Cadastrar.js
import React, { useState } from 'react';
import Formulario from '../formulario/formulario';
import ListaItens from '../listarItem/listarItem';
import "./cadastrar.css"

const Cadastrar = () => {
  const [items, setItems] = useState([]);

  const handleFormSubmit = (formData) => {
    setItems([...items, formData]);
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleDeleteLista = (tipo) => {
    const updatedItems = items.filter((item) => item.tipo !== tipo);
    setItems(updatedItems);
  };

  const calculateTotal = (tipo) => {
    const filteredItems = items.filter((item) => item.tipo === tipo);
    return filteredItems.reduce((total, item) => total + parseFloat(item.valor), 0);
  };

  return (
    <div className='tudo'>
      <h3 className='titulo'>Cadastrar</h3>
      <Formulario onFormSubmit={handleFormSubmit} />
      <div>
        <h2>Itens Cadastrados</h2>
        <div className="listas">
          <div>
            <h3>Despesas</h3>
            <ListaItens
              items={items}
              tipo="despesa"
              onDeleteItem={handleDeleteItem}
              onDeleteLista={handleDeleteLista}
              calculateTotal={calculateTotal}
            />
          </div>
          <div>
            <h3>Entradas</h3>
            <ListaItens
              items={items}
              tipo="entrada"
              onDeleteItem={handleDeleteItem}
              onDeleteLista={handleDeleteLista}
              calculateTotal={calculateTotal}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cadastrar;
