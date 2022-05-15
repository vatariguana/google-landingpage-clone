import React, { useState } from "react";
import Preferencias from "../PreferenciasOpciones";

const FooterDesktop = () => {
  const [showPreferencias, setShowPreferencias] = useState(false);
  const onClickPreferencias = () => {
    setShowPreferencias(!showPreferencias);
  };
  return (
    <>
      <div className="col-6 m-hide">
        <div className="contenedor-izquierda">
          <div className="row">
            <div className="col-3 items-izquierda">
              <a href="https://about.google/?utm_source=google-EC&utm_medium=referral&utm_campaign=hp-footer&fg=1">
                Sobre Google
              </a>
            </div>
            <div className="col-3 items-izquierda">
              <a href="https://ads.google.com/intl/es-419_ec/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">
                Publicidad
              </a>
            </div>
            <div className="col-3 items-izquierda">
              <a href="https://smallbusiness.withgoogle.com/intl/es-419/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google&utm_medium=ep&utm_campaign=google_hpbfooter&utm_content=google_hpbfooter&gmbsrc=ww-ww-et-gs-z-gmb-s-z-u~sb-g4sb_srvcs-u&c=EC#!/">
                Negocios
              </a>
            </div>
            <div className="col-3 items-izquierda">
              <a href="https://www.google.com/search/howsearchworks/?fg=1">
                Cómo funciona la busqueda
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-6 m-hide">
        <div className="contenedor-derecha">
          <div className="row">
            <div className="col-4 items-derecha">
              <a href="https://policies.google.com/privacy?hl=es-419&fg=1">
                Privacidad
              </a>
            </div>
            <div className="col-4 items-derecha">
              <a href="https://policies.google.com/terms?hl=es-419&fg=1">
                Condiciones
              </a>
            </div>
            <div className="col-4 items-derecha">
              <a onClick={onClickPreferencias} href="/#">
                Preferencias
              </a>
              {showPreferencias && <Preferencias />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterDesktop;
