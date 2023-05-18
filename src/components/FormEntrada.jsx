import { useState } from "react";
import React from "react";

export function FormEntrada({ selectedItem, handleClose, updateCantidad }) {
  const [newCantidad, setNewCantidad] = useState(0);

  const handleSaveChanges = (event) => {
    event.preventDefault();
    updateCantidad(
      selectedItem.id,
      Number(selectedItem.cantidad) + newCantidad
    );
    handleClose();
  };
  const handleChangeCantidad = (event) => {
    setNewCantidad(parseInt(event.target.value));
  };

  return (
    <form className="row" action="" onSubmit={handleSaveChanges}>
      <div className="col-12">
        <label htmlFor="vendibleNombre" className="form-label">
          Producto
        </label>
        <input
          type="text"
          className="form-control"
          id="vendibleNombre"
          disabled
          value={selectedItem.nombre}
        />
      </div>
      <div className="col-12">
        <label htmlFor="vendibleDesc" className="form-label">
          Proveedor
        </label>
        <input
          type="text"
          className="form-control"
          id="vendibleDesc"
          disabled
          value={selectedItem.proveedor}
        />
      </div>
      <div className="col-6">
        <label htmlFor="vendibleCant" className="form-label">
          Cantidad Actual
        </label>
        <input
          type="text"
          className="form-control"
          id="vendibleCant"
          disabled
          value={selectedItem.cantidad}
        />
      </div>
      <div className="col-6">
        <label htmlFor="cant" className="form-label">
          Entrada/Salida
        </label>
        <input
          type="number"
          name="cant"
          className="form-control"
          id="vendibleNum"
          placeholder="0"
          onChange={handleChangeCantidad}
        />
      </div>
      <div className="mt-3 col-12">
        <button className="btn btn-danger btn-block w-100" onClick={handleClose}>Cerrar</button>
      </div>
      <div className="mt-3 col-12">
        <button className="btn btn-primary btn-block w-100">Guardar Cambios</button>
      </div>
    </form>
  );
}
