import React, { useState } from "react";
import { useForm } from "../hooks/useForm";

export const Form = ({ setBusquedaLetra }) => {
  const [error, setError] = useState(false);

  const { formValues, handleInputChange, reset } = useForm({
    artista: "",
    cancion: "",
  });
  const { artista, cancion } = formValues;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (artista.trim() === "" || cancion.trim() === "") {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 4000);
      return;
    }
    setError(false);
    setBusquedaLetra(formValues);
    reset();
  };
  return (
    <div className="bg-info">
      {error && (
        <p className="alert alert-danger text-center p-2">
          Todos los Campos son Obligatorios
        </p>
      )}
      <div className="container">
        <div className="row">
          <form
            onSubmit={handleSubmit}
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
          >
            <fieldset>
              <legend className="text-center">
                Buscar letras de Canciones
              </legend>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artista</label>
                    <input
                      type="text"
                      name="artista"
                      placeholder="Nombre del Artista"
                      className="form-control"
                      onChange={handleInputChange}
                      value={artista}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Cancion</label>
                    <input
                      type="text"
                      name="cancion"
                      placeholder="Nombre de la Cancion"
                      className="form-control"
                      onChange={handleInputChange}
                      value={cancion}
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary float-right">
                Buscar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};
