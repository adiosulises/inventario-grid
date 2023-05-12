import React from "react";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { FormEntrada } from "./FormEntrada.jsx";

export function ModalBoton() {
  return (
    <>
      <div className="d-flex flex-column">
        <button
          type="button"
          class="btn btn-primary mb-3"
          data-bs-toggle="modal"
          data-bs-target="#entrada"
        >
          Entradas/Salidas
        </button>

        <button
          type="button"
          class="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#nuevoItem"
        >
          Nuevo
        </button>
      </div>

      {/* modal entradas/salidas */}

      <div
        class="modal fade"
        id="entrada"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Entrada
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
            <FormEntrada></FormEntrada>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button type="button" class="btn btn-primary">
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* modal nuevo item */}

      <div
        class="modal fade"
        id="nuevoItem"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Nuevo Item
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button type="button" class="btn btn-primary">
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
