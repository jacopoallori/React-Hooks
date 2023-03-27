import React from "react";

import data from "./data";
import { useState } from "react";
import List from "./List";

function Appuntamenti(){
    const [people , setPeople] = useState(data);

    const reloadAllItem = () => {
        setPeople(data);
    }
    const removeItem = (id) =>{
        console.log("elimino");
        setPeople( (oldValue) => {
            return oldValue.filter((value) => value.id !== id)
        });
    } 


    return(
        <section>
            <div className="container">
                <h2 style={{ color: "var(--bg--blue)" }}>Prossimi incontri</h2>
                <div className="people-list">
                    <List data={people} removeItem={removeItem}/>
                </div>
                <div className="btn-group">
                    <button className="btn btn-reset" onClick={reloadAllItem}>Reload</button>
                    <button className="btn btn-delete" onClick={() => setPeople([])}>Delete all</button>
                </div>
            </div>

        </section>
    );
}

export default Appuntamenti;