import React from "react";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";

export function btnSalidas() {
  return (
    <>
      <button
        type="button"
        class="btn btn-danger"
        data-bs-toggle="modal"
        data-bs-target="#salida"
      >
        Salidas
      </button>

      <div
        class="modal fade"
        id="salida"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Salida
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
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
