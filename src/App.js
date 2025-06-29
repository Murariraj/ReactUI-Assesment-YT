import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Youtubeheader from "./Header/Youtubeheader";
import Asidebar from "./Youtube_Navbar/Asidebar";
import Headerbar from "./Youtube-Header2/Headerbar";
import Videocards from "./YoutubeCards/Videocards";

function App() {
  return (
    <>
      <Youtubeheader />
      <Asidebar />
      <Headerbar />
      <Videocards />
    </>
  );
}

export default App;
