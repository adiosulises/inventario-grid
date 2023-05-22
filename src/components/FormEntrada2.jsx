import { useState } from "react";
import React from "react";

export function FormEntrada2({ selectedItem, handleClose, add,updateRentable,delet}) {


  const handleSaveChanges = (event) => {
    event.preventDefault();
   
    if(checkboxValue){
      
      add(selectedItem.nombre, selectedItem.id, checkboxValue,selectedItem.usuario);
     // updateRentable(selectedItem.id, checkboxValue);
      
        
    }else {
      delet(selectedItem.id);
      updateRentable(selectedItem.id, checkboxValue);
      
    }
   
   handleClose();
  };
  
   const [checkboxValue, setCheckboxValue] = useState(selectedItem.afectado);
   
   const handleCheckboxChange = (event) => {
     setCheckboxValue(event.target.checked);
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
          value={selectedItem.Cantidad}
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
      

      <div className="mt-3 col-12">
        <button className="btn btn-primary btn-block w-100">
          Guardar Cambios
        </button>
      </div>
    </form>
  );
}
