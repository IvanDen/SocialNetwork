import React from 'react';
import './App.css';
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/navbar";
import Profile from "./components/Main/Profile/profile";
import News from "./components/Main/News/News";
import Music from "./components/Main/Music/Music";
import Settings from "./components/Main/Settings/Settings";
import Footer from "./components/Footer/footer";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Main/Dialogs/DialogsContainer";
import UsersContainer from "./components/Main/Users/UsersContainer";

function App(props) {

  return (
      <div className="app-wrapper">
          <Header />
          <Navbar />
          <main>
              <Route path={'/profile'} render={ () => <Profile />} />

              <Route path={'/dialogs'} render={ () => <DialogsContainer
                  store={props.store} />} />
              <Route path={'/users'} render={ () => <UsersContainer />} />

              <Route path={'/news'} render={ () => <News />} />
              <Route path={'/music'} render={ () => <Music />} />
              <Route path={'/settings'} render={ () => <Settings />} />

          </main>
          <Footer />
      </div>
  );
}

export default App;
