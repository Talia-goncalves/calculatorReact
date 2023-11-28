// Formulario.js
import React, { useState } from 'react';

const Formulario = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    nome: '',
    valor: '',
    tipo: 'despesa',
    pagoPor: '',
    data: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(formData);
    setFormData({
      nome: '',
      valor: '',
      tipo: 'despesa',
      pagoPor: '',
      data: '',
    });
  };

  return (
    <div className="bloco">
      <form onSubmit={handleSubmit}>
          <br />
          <label>
            Nome:
            <input type="text" name="nome" value={formData.nome} onChange={handleChange} />
          </label>
          <br /><br/>

          <label>
            Valor:
            <input type="number" name="valor" value={formData.valor} onChange={handleChange} />
          </label>
          <br /><br/>

          <label>
            Tipo:
            <select name="tipo" value={formData.tipo} onChange={handleChange}>
              <option value="despesa">Despesa</option>
              <option value="entrada">Entrada</option>
            </select>
          </label>
          <br /><br/>

          <label>
            Pago por:
            <input type="text" name="pagoPor" value={formData.pagoPor} onChange={handleChange} />
          </label>
          <br /><br/>

          <button type="submit">Enviar</button>
        </form>
    </div>
  );
};

export default Formulario;
