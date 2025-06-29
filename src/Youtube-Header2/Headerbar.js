import React from "react";
import "./Headerbar.css";
function Headerbar() {
    return (
        <div style={{ border: "1px solid white", width: "81%", marginLeft: "330px", marginTop: "60px", height: "50px", zIndex: "1000", position: "fixed", backgroundColor: "white" }}>

            <button className="murarii">All</button>
            <button className="murarii">Music</button>
            <button className="murarii">Tax deduction</button>
            <button className="murarii">T-series</button>
            <button className="murarii">Tamil cinema</button>
            <button className="murarii">jukebox</button>
            <button className="murarii">Indian pop music </button>
            <button className="murarii">Pod cast</button>
            <button className="murarii">Lo-fi</button>
            <button className="murarii">A.R.Rehman</button>
            <button className="murarii">New to you</button>
            <button className="murarii">Music</button>
            <button className="murarii">Sports</button>
            <button className="murarii">cricket</button>
            <button className="murarii">football</button>



        </div>
    );
}

export default Headerbar;