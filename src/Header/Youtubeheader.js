import React from "react";

function Youtubeheader() {
    return (
        <div style={{ marginLeft: "20px", display: "flex", zIndex: "1000", position: "fixed", top: "0", left: "0", width: "100%", backgroundColor: "white" }}>
            <i className="bi bi-list" style={{ fontSize: "44px" }}></i>
            <i class="bi bi-youtube" style={{ color: "red", fontSize: "44px", marginLeft: "20px" }}></i>
            <b style={{
                marginLeft: "20px", fontSize: "28px", position: "absolute", top: "10px", left: "115px"
            }}>YouTube</b>
            <input type="text" placeholder="Search" style={{ position: "absolute", left: "27%", width: "40%", top: "15px", height: '45px', borderRadius: "20px", paddingLeft: "20px" }}></input>
            <i class="bi bi-search" style={{ fontSize: "24px", position: "absolute", top: "20px", left: "65%" }}></i>
            <i class="bi bi-mic" style={{ fontSize: "24px", position: "absolute", top: "20px", left: "68%", border: "none", borderRadius: "25px", backgroundColor: "#f1f1f1" }}></i>
            <button style={{ border: "none", color: "gray", borderRadius: "20px", position: "absolute", top: "15px", left: "85%", fontSize: "24px", width: "130px" }}>
                <span style={{ fontFamily: "fantasy", fontSize: "20px", color: "black" }}><b style={{ fontSize: "30px" }}>+</b> Create</span>
            </button>
            <i class="bi bi-bell" style={{ fontSize: "24px", position: "absolute", top: "20px", left: "93%" }}></i>
            <i class="bi bi-person-circle" style={{ fontSize: "34px", position: "absolute", top: "13px", left: "96%" }}></i>


        </div>
    )
}

export default Youtubeheader;