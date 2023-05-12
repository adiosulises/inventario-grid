import React from "react";

export const Modal = ({ item, visible, onClose }) => {
  if (!visible) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <form className="row" action="">
          <div className="col-12">
            <label htmlFor="vendibleNombre" className="form-label">
              Producto
            </label>
            <input
              type="text"
              className="form-control"
              id="vendibleNombre"
              value={item.nombre} readOnly
              disabled
            />
          </div>
          <div className="col-12">
            <label htmlFor="vendiblePrecio" className="form-label">
              Precio
            </label>
            <input
              type="number"
              className="form-control"
              id="vendiblePrecio"
              value={item.precio} readOnly
              disabled
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
              value={item.cantidad} readOnly
              disabled
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
            />
          </div>
        </form>
        <button className="btn btn-primary" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default Modal;
