import { useEffect } from "react";
import "./App.css";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import HeaderComponentV2 from "./HeaderComponentV2";
import NavbarComponent from "./NavbarComponent";
import PhotoGalleryComponent from "./PhotoGalleryComponent";
import VideoGalleryComponent from "./VideoGalleryComponent";

function App() {
  return (
    <div className="App">
      <HeaderComponentV2 />
      <HeaderComponent />
      <NavbarComponent />
      <PhotoGalleryComponent />
      <VideoGalleryComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
