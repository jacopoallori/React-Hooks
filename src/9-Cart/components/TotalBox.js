import React from "react";

const TotalBox = () => {
  return (
    <section className="total-section section-center">
      <div className="card">
        <header className="card-header">
          <h4>Carrello</h4>
        </header>
        <hr/>
        <div className="card-content">
          <h4>0 €</h4>
        </div>
        <hr/>
        <footer className="card-footer">
          <button className="btn btn-selector">
            CheckOut
          </button>
        </footer>
      </div>
    </section>);
};

export default TotalBox;