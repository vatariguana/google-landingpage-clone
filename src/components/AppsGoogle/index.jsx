import React from "react";
import "./index.css";
import Account from "../../assets/account.png";
import google from "../../assets/google.png";
import maps from "../../assets/maps.png";
import youtube from "../../assets/youtube.png";
import play from "../../assets/play.png";
import noticias from "../../assets/noticias.png";
import gmail from "../../assets/gmail.png";
import meet from "../../assets/meet.png";
import chat from "../../assets/chat.png";
import contactos from "../../assets/contactos.png";
import drive from "../../assets/drive.png";
import calendario from "../../assets/calendario.png";
import traductor from "../../assets/traductor.png";
import fotos from "../../assets/fotos.png";
import duo from "../../assets/duo.png";
import shooping from "../../assets/shooping.png";
const AppsGoogle = () => {
  return (
    <div className="apps-container">
      <div className="row">
        <div className="col-4 app-individual">
          <img alt="Account" src={Account} />
          <span>Cuenta</span>
        </div>
        <div className="col-4 app-individual">
          <img alt="google" src={google} />
          <span>Busqueda</span>
        </div>
        <div className="col-4 app-individual">
          <img alt="maps" src={maps} />
          <span>Maps</span>
        </div>
      </div>
      <div className="row">
        <div className="col-4 app-individual">
          <img alt="youtube" src={youtube} />
          <span>Youtube</span>
        </div>
        <div className="col-4 app-individual">
          <img alt="play" src={play} />
          <span>Play</span>
        </div>
        <div className="col-4 app-individual">
          <img alt="noticias" src={noticias} />
          <span>Noticias</span>
        </div>
      </div>
      <div className="row">
        <div className="col-4 app-individual">
          <img alt="gmail" src={gmail} />
          <span>Gmail</span>
        </div>
        <div className="col-4 app-individual">
          <img alt="meet" src={meet} />
          <span>Meet</span>
        </div>
        <div className="col-4 app-individual">
          <img alt="chat" src={chat} />
          <span>Chat</span>
        </div>
      </div>
      <div className="row">
        <div className="col-4 app-individual">
          <img alt="contactos" src={contactos} />
          <span>Contactos</span>
        </div>
        <div className="col-4 app-individual">
          <img alt="drive" src={drive} />
          <span>Drive</span>
        </div>
        <div className="col-4 app-individual">
          <img alt="calendario" src={calendario} />
          <span>Calendario</span>
        </div>
      </div>
      <div className="row">
        <div className="col-4 app-individual">
          <img alt="traductor" src={traductor} />
          <span>Traductor</span>
        </div>
        <div className="col-4 app-individual">
          <img alt="fotos" src={fotos} />
          <span>Fotos</span>
        </div>
        <div className="col-4 app-individual">
          <img alt="duo" src={duo} />
          <span>Duo</span>
        </div>
      </div>
      <div className="row">
        <div className="col-4 app-individual">
          <img alt="shooping" src={shooping} />
          <span>Shopping</span>
        </div>
      </div>
    </div>
  );
};

export default AppsGoogle;
