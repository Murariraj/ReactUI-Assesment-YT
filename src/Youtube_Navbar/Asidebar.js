import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
function Asidebar() {
    return (
        <div>
            <aside style={{
                width: "260px",
                height: "90vh",
                backgroundColor: "white",
                color: "white",
                padding: "10px",
                position: "fixed",
                left: "0",
                top: "87px",
                overflowY: "auto",


            }}>



                <button style={{ position: "absolute", top: "0px", width: "260px", left: '0px', height: "40px", borderRadius: "10px", backgroundColor: "transparent", fontSize: "20px", border: "none", paddingRight: "65px" }}><i class="bi bi-house-door-fill" style={{ paddingRight: "50px", fontSize: "20px" }}></i>Home</button>
                <button style={{ position: "absolute", top: "39px", width: "260px", left: '0px', height: "40px", borderRadius: "10px", backgroundColor: "transparent", fontSize: "20px", border: "none", paddingRight: "71px" }}><i class="bi bi-camera-reels" style={{ paddingRight: "50px", fontSize: "20px" }}></i>Reels</button>
                <button style={{ position: "absolute", top: "78px", width: "260px", left: '0px', height: "40px", borderRadius: "10px", backgroundColor: "transparent", fontSize: "20px", border: "none" }}><i class="bi bi-heart-fill" style={{ paddingRight: "50px", fontSize: "20px" }}></i>Subscriptions</button>

                {/*partition*/}

                <hr style={{ position: "absolute", top: "117px", width: "240px", left: "10px", border: "1px solid black" }} />

                <button style={{ position: "absolute", top: "156px", width: "260px", left: '0px', height: "40px", borderRadius: "10px", backgroundColor: "transparent", fontSize: "20px", border: "none", paddingRight: "65px" }}> <b style={{ fontSize: "18px", paddingRight: '53px' }}>You   <i class="bi bi-chevron-right" style={{ paddingLeft: "15px" }}></i></b> </button>
                <button style={{ position: "absolute", top: "195px", width: "260px", left: '0px', height: "40px", borderRadius: "10px", backgroundColor: "transparent", fontSize: "20px", border: "none", paddingRight: "71px" }}><i class="bi bi-clock-history" style={{ paddingRight: "45px", fontSize: "20px" }}></i>History</button>
                <button style={{ position: "absolute", top: "234px", width: "260px", left: '0px', height: "40px", borderRadius: "10px", backgroundColor: "transparent", fontSize: "20px", border: "none", paddingRight: "71px" }}><i class="bi bi-music-note-list" style={{ paddingRight: "45px", fontSize: "20px" }}></i>Playlist</button>
                <button style={{ position: "absolute", top: "273px", width: "260px", left: '0px', height: "40px", borderRadius: "10px", backgroundColor: "transparent", fontSize: "20px", border: "none", paddingRight: "40px" }}><i class="bi bi-camera-video" style={{ paddingRight: "45px", fontSize: "20px" }}></i>Your Video</button>
                <button style={{ position: "absolute", top: "312px", width: "260px", left: '0px', height: "40px", borderRadius: "10px", backgroundColor: "transparent", fontSize: "20px", border: "none", paddingRight: "35px" }}><i class="bi bi-clock" style={{ paddingRight: "45px", fontSize: "20px" }}></i>Watch Later</button>
                <button style={{ position: "absolute", top: "351px", width: "260px", left: '0px', height: "40px", borderRadius: "10px", backgroundColor: "transparent", fontSize: "20px", border: "none", paddingRight: "30px" }}><i class="bi bi-hand-thumbs-up" style={{ paddingRight: "45px", fontSize: "20px" }}></i>Liked Videos</button>

                {/*partition*/}

                <hr style={{ position: "absolute", top: "390px", width: "240px", left: "10px", border: "1px solid black" }} />

                <h6 style={{ position: "absolute", top: "410px", width: "260px", left: '0px', height: "40px", borderRadius: "10px", backgroundColor: "transparent", fontSize: "20px", border: "none", paddingLeft: "30px", paddingTop: "7px", color: "black" }}>Subscriptions</h6>

                <button style={{ position: "absolute", top: "468px", width: "260px", left: '0px', height: "40px", borderRadius: "10px", backgroundColor: "transparent", fontSize: "20px", border: "none", paddingRight: "30px", display: "flex", gap: "30px" }}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/TV9TeluguLogo.jpg/640px-TV9TeluguLogo.jpg" alt="Tv9 news" style={{ width: "30px", height: "30px", borderRadius: "50%", marginLeft: "24px" }} />Tv9 24/7 </button>

                <button style={{ position: "absolute", top: "507px", width: "260px", left: '0px', height: "40px", borderRadius: "10px", backgroundColor: "transparent", fontSize: "20px", border: "none", paddingRight: "30px", display: "flex", gap: "30px" }}><img src="https://upload.wikimedia.org/wikipedia/commons/1/1d/V6_News.jpg" alt="Tv9 news" style={{ width: "30px", height: "30px", borderRadius: "50%", marginLeft: "24px" }} />V6 24/7 </button>

                <button style={{ position: "absolute", top: "546px", width: "260px", left: '0px', height: "40px", borderRadius: "10px", backgroundColor: "transparent", fontSize: "20px", border: "none", paddingRight: "30px", display: "flex", gap: "30px" }}><img src="https://upload.wikimedia.org/wikipedia/commons/2/28/Aaj_tak_logo.png" alt="Tv9 news" style={{ width: "30px", height: "30px", borderRadius: "50%", marginLeft: "24px" }} />Aaj tak 24/7 </button>

                <button style={{ position: "absolute", top: "585px", width: "260px", left: '0px', height: "40px", borderRadius: "10px", backgroundColor: "transparent", fontSize: "20px", border: "none", paddingRight: "30px", display: "flex", gap: "30px" }}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Disney%2B_logo.svg/2560px-Disney%2B_logo.svg.png" alt="Tv9 news" style={{ width: "30px", height: "30px", borderRadius: "50%", marginLeft: "24px" }} />Disney </button>

                <button style={{ position: "absolute", top: "624px", width: "260px", left: '0px', height: "40px", borderRadius: "10px", backgroundColor: "transparent", fontSize: "20px", border: "none", paddingRight: "30px", display: "flex", gap: "30px" }}><img src="https://upload.wikimedia.org/wikipedia/commons/8/80/Star_maa_logo_2023.png" alt="Tv9 news" style={{ width: "30px", height: "30px", borderRadius: "50%", marginLeft: "24px" }} />Star Maa </button>

                {/*partition*/}
                <hr style={{ border: "1px solid black", width: "240px", position: "absolute", top: "663px" }} />

                <h6 style={{ position: "absolute", top: "702px", fontSize: "20px", left: "32px", color: "black" }}>Explore</h6>

                <button style={{ position: "absolute", top: "741px", width: "260px", height: "40px", borderRadius: "10px", backgroundColor: "transparent", fontSize: "20px", border: "none", paddingRight: "40px", gap: "35px", display: "flex" }}><i class="bi bi-fire" style={{ fontSize: "20px", paddingLeft: "30px" }}></i>Trending</button>

                <button style={{ position: "absolute", top: "780px", width: "260px", height: "40px", borderRadius: "10px", backgroundColor: "transparent", fontSize: "20px", border: "none", paddingRight: "40px", gap: "35px", display: "flex" }}><i class="bi bi-bag" style={{ fontSize: "20px", paddingLeft: "30px" }}></i>Shopping</button>

                <button style={{ position: "absolute", top: "819px", width: "260px", height: "40px", borderRadius: "10px", backgroundColor: "transparent", fontSize: "20px", border: "none", paddingRight: "40px", gap: "35px", display: "flex" }}><i class="bi bi-music-note" style={{ fontSize: "20px", paddingLeft: "30px" }}></i>Music</button>


                <button style={{ position: "absolute", top: "858px", width: "260px", height: "40px", borderRadius: "10px", backgroundColor: "transparent", fontSize: "20px", border: "none", paddingRight: "40px", gap: "35px", display: "flex" }}><i class="bi bi-film" style={{ fontSize: "20px", paddingLeft: "30px" }}></i>Film</button>

                <button style={{ position: "absolute", top: "897px", width: "260px", height: "40px", borderRadius: "10px", backgroundColor: "transparent", fontSize: "20px", border: "none", paddingRight: "40px", gap: "35px", display: "flex" }}><i class="bi bi-broadcast" style={{ fontSize: "20px", paddingLeft: "30px" }}></i>Live</button>

                <button style={{ position: "absolute", top: "936px", width: "260px", height: "40px", borderRadius: "10px", backgroundColor: "transparent", fontSize: "20px", border: "none", paddingRight: "40px", gap: "35px", display: "flex" }}><i class="bi bi-controller" style={{ fontSize: "20px", paddingLeft: "30px" }}></i>Gaming</button>

                <button style={{ position: "absolute", top: "975px", width: "260px", height: "40px", borderRadius: "10px", backgroundColor: "transparent", fontSize: "20px", border: "none", paddingRight: "40px", gap: "35px", display: "flex" }}><i class="bi bi-newspaper" style={{ fontSize: "20px", paddingLeft: "30px" }}></i>News</button>

                <button style={{ position: "absolute", top: "1014px", width: "260px", height: "40px", borderRadius: "10px", backgroundColor: "transparent", fontSize: "20px", border: "none", paddingRight: "40px", gap: "35px", display: "flex" }}><i class="bi bi-bicycle" style={{ fontSize: "20px", paddingLeft: "30px" }}></i>Sport</button>

                <button style={{ position: "absolute", top: "1053px", width: "260px", height: "40px", borderRadius: "10px", backgroundColor: "transparent", fontSize: "20px", border: "none", paddingRight: "40px", gap: "35px", display: "flex" }}><i class="bi bi-mic" style={{ fontSize: "20px", paddingLeft: "30px" }}></i>Podcast</button>

                <hr style={{ border: "1px solid black", width: "240px", position: "absolute", top: "1092px" }} />

                <button style={{ position: "absolute", top: "1131px", width: "260px", height: "40px", borderRadius: "10px", backgroundColor: "transparent", fontSize: "20px", border: "none", paddingRight: "40px", gap: "35px", display: "flex" }}><i class="bi bi-gear" style={{ fontSize: "20px", paddingLeft: "30px" }}></i>Setting</button>

                <button style={{ position: "absolute", top: "1170px", width: "260px", height: "40px", borderRadius: "10px", backgroundColor: "transparent", fontSize: "20px", border: "none", paddingRight: "40px", gap: "35px", display: "flex" }}><i class="bi bi-flag" style={{ fontSize: "20px", paddingLeft: "30px" }}></i>Report History</button>

                <button style={{ position: "absolute", top: "1209px", width: "260px", height: "40px", borderRadius: "10px", backgroundColor: "transparent", fontSize: "20px", border: "none", paddingRight: "40px", gap: "35px", display: "flex" }}><i class="bi bi-question-circle" style={{ fontSize: "20px", paddingLeft: "30px" }}></i>Help</button>

                <button style={{ position: "absolute", top: "1248px", width: "260px", height: "40px", borderRadius: "10px", backgroundColor: "transparent", fontSize: "20px", border: "none", paddingRight: "40px", gap: "35px", display: "flex" }}><i class="bi bi-envelope" style={{ fontSize: "20px", paddingLeft: "30px" }}></i>Send feedback</button>

            </aside>
        </div>
    )

}


const style = document.createElement("style");
style.innerHTML = `
    button:hover {
        background-color: gray !important;
    }
`;
document.head.appendChild(style);
export default Asidebar;