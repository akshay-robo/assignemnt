import { useEffect } from "react";
import "./App.css";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import HeaderComponentV2 from "./HeaderComponentV2";
import PhotoGalleryComponent from "./PhotoGalleryComponent";
import VideoGalleryComponent from "./VideoGalleryComponent";
import { Route, Switch, Redirect } from "react-router-dom";
import FavouritiesComponent from "./FavouritiesComponent";
import NavbarComponent from "./NavbarComponent";

export const Routes = () => {
  return (
    <div className="App">
      <HeaderComponentV2 />
      <HeaderComponent />
      <NavbarComponent />
      <Switch>
        <Route exact path="/">
          <Redirect to="/photos" />
        </Route>
        <Route exact path="/photos" component={PhotoGalleryComponent} />
        <Route exact path="/videos" component={VideoGalleryComponent} />
        <Route exact path="/favorities" component={FavouritiesComponent} />
      </Switch>
      <FooterComponent />
    </div>
  );
};
