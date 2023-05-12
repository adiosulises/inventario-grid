import React from "react";

//const data = [];

export function FormEntrada() {
  return (
    <>
      <form className="row" action="">
        <div className="col-12">
          <label htmlFor="vendibleNombre" className="form-label">
            Producto
          </label>
          <input
            type="text"
            className="form-control"
            id="vendibleNombre"
            disabled
          />
        </div>
        <div className="col-12">
          <label htmlFor="vendibleDesc" className="form-label">
            Descripción
          </label>
          <input
            type="text"
            className="form-control"
            id="vendibleDesc"
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
    </>
  );
}
