import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/navbar";
import News from "./components/Main/News/News";
import Music from "./components/Main/Music/Music";
import Settings from "./components/Main/Settings/Settings";
import Footer from "./components/Footer/footer";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Main/Dialogs/DialogsContainer";
import UsersContainer from "./components/Main/Users/UsersContainer";
import ProfileContainer from "./components/Main/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/headerContainer";
import Login from "./components/Login/Login";

function App(props) {

  return (
      <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <main>
              <Route path={'/profile/:userId?'} render={ () => <ProfileContainer />} />

              <Route path={'/dialogs'} render={ () => <DialogsContainer
                  store={props.store} />} />
              <Route path={'/users'} render={ () => <UsersContainer />} />

              <Route path={'/news'} render={ () => <News />} />
              <Route path={'/music'} render={ () => <Music />} />
              <Route path={'/settings'} render={ () => <Settings />} />
              <Route path={'/login'} render={ () => <Login />} />

          </main>
          <Footer />
      </div>
  );
}

export default App;
