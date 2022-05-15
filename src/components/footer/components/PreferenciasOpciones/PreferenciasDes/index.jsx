import React from "react";
import "./index.css";
const Preferencias = () => {
  return (
    <div className="contenedorPreferencias m-hide">
      <div className="contenedor-all-preferencias">
        <div className="contenedor-item">
          <a
            className="a-probando"
            href="https://www.google.com/preferences?hl=es-419&fg=1"
          >
            Configuración de búsqueda
          </a>
        </div>
        <div className="contenedor-item">
          <a
            className="a-probando"
            href="https://www.google.com/advanced_search?hl=es-419&fg=1"
          >
            Búsqueda avanzada
          </a>
        </div>
        <div className="contenedor-item">
          <a
            className="a-probando"
            href="https://myaccount.google.com/yourdata/search?utm_source=googlemenu&fg=1&pli=1"
          >
            Tus datos en la Búsqueda
          </a>
        </div>
        <div className="contenedor-item">
          <a
            className="a-probando"
            href="https://myactivity.google.com/product/search?utm_source=google&hl=es-419&fg=1"
          >
            Historial de Búsqueda
          </a>
        </div>
        <div className="contenedor-item">
          <a
            className="a-probando"
            href="https://support.google.com/websearch/?visit_id=637881709997235390-3880048065&hl=es-419&rd=2#topic=3378866"
          >
            Buscar en la ayuda
          </a>
        </div>
        <div className="contenedor-item">
          <a className="a-probando" href="/#">
            Enviar comentarios
          </a>
        </div>
        <div className="contenedor-item">
          <a className="a-probando" href="https://www.google.com/?pccc=1">
            Tema oscuro:Desactivado
          </a>
        </div>
      </div>
    </div>
  );
};

export default Preferencias;
