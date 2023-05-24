import { useState } from "react";
import React from "react";

export function FormEntrada3({
  selectedItem,
  handleClose2,
  updateImnuebles,
}) {
  const handleSaveChanges = (event) => {
    event.preventDefault();
    console.log(checkboxValue)
    console.log(report)
    
   updateImnuebles(selectedItem.id, checkboxValue,report);
   /* if (checkboxValue) {
      add(
        selectedItem.nombre,
        selectedItem.id,
        checkboxValue,
        report
      );
      
    } else {
      delet(selectedItem.id);
      
    }*/

    handleClose2();
  };

  const [checkboxValue, setCheckboxValue] = useState(selectedItem.afectado);
  const [report, setReporte] = useState("");

  const handleCheckboxChange = (event) => {
    setCheckboxValue(event.target.checked);
    console.log("inmueble")
     
  };
  const handleReporteChange = (event) => {
    setReporte(event.target.value);
    
    console.log(report);
  };
 
  console.log(checkboxValue);
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
          value={selectedItem["proveedores.nombre"]}
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
          Precio
        </label>
        <input
          type="text"
          className="form-control"
          id="vendibleCant"
          disabled
          value={selectedItem.precio}
        />
      </div>
      <div className="col-6">
        <label htmlFor="cant" className="form-label">
          Marcar como afectado
        </label>
        <div class="input-group-text">
          <input
            class="form-check-input mt-0"
            type="checkbox"
            checked={checkboxValue}
            onChange={handleCheckboxChange}
            aria-label="Checkbox for following text input"
          />
        </div>
      </div>
      <div className="col-6">
        <label htmlFor="vendibleReporte" className="form-label">
          Falla
        </label>
        <input
          type="text"
          className="form-control"
          id="vendibleReporte"
          onChange={handleReporteChange}
        />
      </div>

      <div className="mt-3 col-12">
        <button className="btn btn-primary btn-block w-100">
          Guardar Cambios
        </button>
      </div>
    </form>
  );
}
