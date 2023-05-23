import React ,{useState}from 'react'

export  function FormAgregar({ aggProducto, handleClose2 }) {
  //estados para cada uno de los valores
  const [nombre, setNombre] = useState("");
  const [proveedor, setProveedor] = useState("");
  const [precio, setPrecio] = useState(0);
  const [cantidad, setCantidad] = useState(0);
  const [maximo, setMaximo] = useState(0);
  const [minimo, setMinimo] = useState(0);
  const [categoria, setCategoria] = useState("Equipo");

  const handleGuardar = (event) => {
    event.preventDefault();
    console.log("Nombre:", nombre);
    console.log("Proveedor:", proveedor);
    console.log("Precio:", precio);
    console.log("Cantidad:", cantidad);
    console.log("Maximo:", maximo);
    console.log("Minimo:", minimo);
    console.log("Categoria:", categoria);
    aggProducto(nombre, proveedor, precio, cantidad, maximo, minimo, categoria);
    handleClose2();
  };
  return (
    <form className="row" onSubmit={handleGuardar}>
      <div className="col-12">
        <label htmlFor="nombre" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          className="form-control"
          id="nombrevendibles"
          onChange={(event) => setNombre(event.target.value)}
        />
      </div>
      <div className="col-12">
        <label htmlFor="proveedor" className="form-label">
          Proveedor
        </label>
        <input
          type="text"
          className="form-control"
          id="proveedor"
          onChange={(event) => setProveedor(event.target.value)}
        />
      </div>
      <div className="col-6">
        <label htmlFor="precio" className="form-label">
          Precio
        </label>
        <input
          type="number"
          name="cant"
          className="form-control"
          id="precio"
          placeholder="0"
          min={15}
          onChange={(event) => setPrecio(event.target.value)}
        />
      </div>
      <div className="col-6">
        <label htmlFor="cantidad" className="form-label">
          Cantidad
        </label>
        <input
          type="number"
          name="cantidad"
          className="form-control"
          id="cantidad"
          placeholder="0"
          min={1}
          onChange={(event) => setCantidad(event.target.value)}
        />
      </div>
      <div className="col-6">
        <label htmlFor="maximo" className="form-label">
          Maximo
        </label>
        <input
          type="number"
          name="maximo"
          className="form-control"
          id="maximo"
          placeholder="0"
          min={0}
          onChange={(event) => setMaximo(event.target.value)}
        />
      </div>
      <div className="col-6">
        <label htmlFor="minimo" className="form-label">
          Minimo
        </label>
        <input
          type="number"
          name="minimo"
          className="form-control"
          id="minimo"
          placeholder="0"
          min={0}
          onChange={(event) => setMinimo(event.target.value)}
        />
      </div>
      <div className="col-6">
        <label htmlFor="categoria" className="form-label">
          categoria
        </label>
        <select
          class="form-select"
          aria-label="Default select example"
          onChange={(event) => setCategoria(event.target.value)}
        >
          <option selected>Equipo</option>
          <option value="1">Comida</option>
        </select>
      </div>
      <div className="mt-3 col-12">
        <button className="btn btn-primary btn-block w-100">Guardar</button>
      </div>
    </form>
  );
}
