import React, { useState, useEffect } from "react";
import axios from "axios";
import { Cancion } from "./components/Cancion";
import { Form } from "./components/Form";
import { Info } from "./components/Info";

function App() {
  const [busquedaLetra, setBusquedaLetra] = useState({});
  const [letra, setLetra] = useState("");
  const [info, setInfo] = useState({});
  const { artista, cancion } = busquedaLetra;

  useEffect(() => {
    if (Object.keys(busquedaLetra).length === 0) return;

    (async () => {
      const url = `https://api.lyrics.ovh/v1/${encodeURI(artista)}/${encodeURI(
        cancion
      )}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      const [
        {
          data: { lyrics },
        },
        {
          data: { artists },
        },
      ] = await Promise.all([axios(url), axios(url2)]);

      if (artists === null) return;

      setLetra(lyrics);
      setInfo(artists[0]);
    })();
  }, [busquedaLetra]);

  return (
    <>
      <Form setBusquedaLetra={setBusquedaLetra} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info info={info} />
          </div>

          <div className="col-md-6">
            <Cancion letra={letra} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
