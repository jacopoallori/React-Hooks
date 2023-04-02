import React from "react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

const SingleHoliday = ({
  titolo,
  durata,
  descrizione,
  prezzo,
  img,
  next,
  prev
}) => {
  return (
  <div className="holiday-cointaner">
    <img src={img} alt={titolo} className="img"/>
    <div className="holiday-info">
      <h4>{titolo}</h4>
      <p>{descrizione}</p>
      <div className="holiday-cost">
        <small>{durata}</small>
        <h5 style={{color: "var(--primary-blue)"}}>
          {""}
          {(prezzo/100).toFixed(2)} E
        </h5>
      </div>
      <div className="btn-group">
        <button className="btn btn-reset" onClick={prev}>
          <GrFormPreviousLink className="icon" />
        </button>
        <button className="btn btn-reset" onClick={next}>
          <GrFormNextLink className="icon" />
        </button>
      </div>
    </div>
  </div>
  )
};

export default SingleHoliday;