import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



const video = [
    {
        imgSrc: "https://i.ytimg.com/vi/wSjGGPnKv5I/maxresdefault.jpg",
        title: "Tenu Sang Rakhna - Jigra | Alia Bhatt | Vedang Raina | Arijit Singh | Achint, Anumita | Varun"
    },

    {
        imgSrc: "https://webneel.com/daily/sites/default/files/images/daily/08-2018/2-india-movie-poster-design-hindi-bjirao-mastani.jpg",
        title: "With You - AP Dhillon (Official Music Video)"
    },

    {
        imgSrc: "https://sundayguardianlive.com/wp-content/uploads/2018/02/padmavati-vivek%20gumaste.jpg",
        title: "Padmaavat - Deepika Padukone - Bollywood Hindi Movie Poster - Canvas Prints"
    },
    {
        imgSrc: "https://img.mensxp.com/media/content/2018/Jun/bollywood-movie-posters-copied-from-hollywood-1400x653-1528897924.jpg",
        title: "TIGER-3 [2023] Drama/Mystery"

    },
    {
        imgSrc: "https://c8.alamy.com/comp/F762X4/indian-bollywood-hindi-film-movie-poster-of-bol-bachchan-a-rohit-shetty-F762X4.jpg",
        title: "Tenu Sang Rakhna - Jigra | Alia Bhatt | Vedang Raina | Arijit Singh | Achint, Anumita | Varun"

    },
    {
        imgSrc: "https://c8.alamy.com/comp/A9XAEG/bollywood-movie-posters-on-outdoor-billboards-new-delhi-uttar-pradesh-A9XAEG.jpg",
        title: "Aaya Re Toofan | Chhaava | Vicky K, Rashmika M | A. R. Rahman, Vaishali S., Irshad Kamil, Kshitij P"

    },
    {
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaXhknhIexpRl8mM1nmlYtQqraoIB2pvh9qA&s",
        title: "Tenu Sang Rakhna - Jigra | Alia Bhatt | Vedang Raina | Arijit Singh | Achint, Anumita | Varun"

    },
    {
        imgSrc: "https://c8.alamy.com/comp/F762X7/indian-bollywood-hindi-film-movie-poster-of-ek-tha-tiger-salman-khan-F762X7.jpg",
        title: "Tenu Sang Rakhna - Jigra | Alia Bhatt | Vedang Raina | Arijit Singh | Achint, Anumita | Varun"

    },

    {
        imgSrc: "https://wp.scoopwhoop.com/wp-content/uploads/2021/01/644b881d-9cb0-4ea4-a34c-28ad6d4738a2.jpg",
        title: "Tenu Sang Rakhna - Jigra | Alia Bhatt | Vedang Raina | Arijit Singh | Achint, Anumita | Varun"
    },
    {
        imgSrc: "https://www.koimoi.com/wp-content/new-galleries/2016/02/kapoor-and-sons-movie-posters.jpg",
        title: "Aaya Re Toofan | Chhaava | Vicky K, Rashmika M | A. R. Rahman, Vaishali S., Irshad Kamil, Kshitij P"
    },
    {
        imgSrc: "https://www.koimoi.com/wp-content/new-galleries/2015/11/ghayal-once-again-movie-poster-3.jpg",
        title: "Tenu Sang Rakhna - Jigra | Alia Bhatt | Vedang Raina | Arijit Singh | Achint, Anumita | Varun"
    },
    {
        imgSrc: "https://media5.bollywoodhungama.in/wp-content/uploads/2020/08/Pathaan-01-165x165.jpg",
        title: "Tenu Sang Rakhna - Jigra | Alia Bhatt | Vedang Raina | Arijit Singh | Achint, Anumita | Varun"
    },
];


function Rendervideocard() {

    return video.map(function (video, index) {
        return (
            <div key={index} className="card" style={{ width: "438px", height: "350px", marginRight: "45px", marginTop: "100px" }}>
                <img src={video.imgSrc} alt="Trailer" style={{ height: "250px", width: "438px" }} />
                <h5 className="p-2">{video.title}</h5>
            </div>
        );
    }
    );

}


function Videocards() {


    return (
        <div style={{ display: "flex" }}>
            <div className="d-flex flex-wrap justify-content-center" style={{ marginTop: "30px", maxWidth: "3000px", marginLeft: "320px" }}>
                {Rendervideocard()}



            </div>
        </div>

    );
}


export default Videocards;