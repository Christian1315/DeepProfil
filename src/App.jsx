import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './pages/HomePage';
import Inscription from "./pages/InscriptionPage";
import AdminLayout from "./pages/AdminLayout.jsx";
import ReinitializePassword from "./pages/account/ReinitializePassword";
import DemandReinitializePassword from "./pages/account/DemandReinitializePassword";

import Footer from "./components/Footer";

import "./assets/css/style.css";
import "./assets/css/bootstrap.min.css";
// import "./assets/css/bootstraps-icons.min.css";
import "./assets/css/admin.css";
import "./assets/css/animate.css";

import "./assets/js/popper.min.js";
import "./assets/js/bootstrap.min.js";

import Friends from './components/Dashboard/Friends.jsx';
import Index from './components/Dashboard/Index.jsx';
import Chats from './components/Dashboard/Chats.jsx';
import Notifications from './components/Dashboard/Notifications.jsx';
import News from './components/Dashboard/News.jsx';
import Groups from './components/Dashboard/Groups.jsx';
import MyAccount from './components/Dashboard/MyAccount.jsx';
// import NotificationsDetail from './components/Dashboard/NotificationsDetail.jsx';

function App() {
  return (
    <>
      <div className="container-fluid bg-light">
        <div className="row">
          <div className="col-md-12">
            <BrowserRouter>
              {/* <Header /> */}
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/inscription" element={<Inscription />} />
                <Route path="/reinitialize-password-demand" element={<DemandReinitializePassword />} />
                <Route path="/reinitialize-password" element={<ReinitializePassword />} />

                <Route path="/my-account" element={<AdminLayout component={<MyAccount />} icon={<i className="bi bi-gear mx-2"></i>} title={"Gestion de compte"}  />} />

                <Route path="/admin" element={<AdminLayout component={<Index />} title={"Bienvenu sur DeepProfil"}  />} />
                <Route path="/friends" element={<AdminLayout component={<Friends />} icon={<i className="bi bi-people mx-2"></i>} title={"Mes ami(e)s"} />} />
                <Route path="/news" element={<AdminLayout component={<News />} icon = {<i className="bi bi-megaphone mx-2"></i>} title={"Annonces"} />} />
                <Route path="/chats" element={<AdminLayout component={<Chats />} icon={<i className="bi bi-chat-quote mx-2"></i>} title={"Conversations"} />} />
                <Route path="/notifications" element={<AdminLayout component={<Notifications />} icon={<i className="bi bi-bell mx-2"></i>} title={"Notifications"} />} />
                {/* <Route path="/notification-detail" element={<AdminLayout component={<NotificationsDetail notification={} />} icon={<i className="bi bi-bell mx-2"></i>} title={"Notifications"} />} /> */}
                <Route path="/groups" element={<AdminLayout component={<Groups />} icon={<i className="bi bi-collection mx-2"></i>} title={"Groupes d'amis"} />} />
              </Routes>
              <Footer />
            </BrowserRouter>
          </div>
        </div>
      </div >
    </>
  )
}

export default App
