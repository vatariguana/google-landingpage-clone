import React from "react";
import "./index.css";
const PreferenciasMobile = () => {
  return (
    <div className="contenedorPreferenciasM d-hide">
      <div className="contenedor-all-preferenciasM">
        <div className="contenedor-itemM">
          <a
            className="a-probandoM"
            href="https://www.google.com/preferences?hl=es-419&fg=1"
          >
            Configuracion de búsqueda
          </a>
        </div>
        <div className="contenedor-itemM">
          <a
            className="a-probandoM"
            href="https://www.google.com/advanced_search?hl=es-419&fg=1"
          >
            Búsqueda Avanzada
          </a>
        </div>
        <div className="contenedor-itemM">
          <a
            className="a-probandoM"
            href="https://myaccount.google.com/yourdata/search?utm_source=googlemenu&fg=1"
          >
            Tus datos en la Búsqueda
          </a>
        </div>
        <div className="contenedor-itemM">
          <a
            className="a-probandoM"
            href="https://myactivity.google.com/product/search?utm_source=google&hl=es-419&fg=1"
          >
            Historial de Búsqueda
          </a>
        </div>
        <div className="contenedor-itemM">
          <a
            className="a-probandoM"
            href="https://support.google.com/websearch/?visit_id=637882325857265137-28655353&hl=es-419&rd=2#topic=3378866"
          >
            Buscar en la ayuda
          </a>
        </div>
        <div className="contenedor-itemM">
          <a className="a-probandoM" href="/#">
            Comentario
          </a>
        </div>
      </div>
    </div>
  );
};

export default PreferenciasMobile;
