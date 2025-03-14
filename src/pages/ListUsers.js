import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

import Nav from "../components/Nav.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Home from "../components/Home.js";
import Sidebar from "../components/Sidebar";
import TitleList from "../components/TitleUsuarios";
import ListaUsers from "../components/ListaUsers.js";


const ListUsers = () => {
  return (
    <div>
      <div className="mobile-search">
        <form action="/" className="search-form">
          <img src="/img/svg/search.svg" alt="search" className="svg" />
          <input
            className="form-control me-sm-2 box-shadow-none"
            type="search"
            placeholder="Buscar..."
            aria-label="Search"
          />
        </form>
      </div>
      <div className="mobile-author-actions"></div>
      <header className="header-top">
        <nav className="navbar navbar-light">
          <div className="navbar-left">
            <div className="logo-area">
              <a className="navbar-brand" href="index.html">
                <img className="dark" src="/img/logo-white.png" alt="logo" />
                <img className="light" src="/img/logo-white.png" alt="logo" />
              </a>
              <a href="#" className="sidebar-toggle">
                <img
                  className="svg"
                  src="/img/svg/align-center-alt.svg"
                  alt="img"
                />
              </a>
            </div>
            <div className="top-menu">
              
            </div>
          </div>
          {/* <!-- ends: navbar-left --> */}

          <div className="navbar-right">{/* <!-- navigation nav.js --> */}<Nav /></div>
          {/* <!-- ends: .navbar-right --> */}
        </nav>
      </header>
      <main className="main-content">
        <div className="sidebar-wrapper">
          <div className="sidebar sidebar-collapse" id="sidebar">
            <Sidebar />
          </div>
        </div>

        <div className="contents">
          
          {/* <!-- Home.js --> */}


          <div class="crm mb-25">
            <div class="container-fluid">
               <div class="row ">

                                 

                  <div class="col-lg-12">

                    <TitleList/>

                  </div>
                  
                  <div class="col-lg-12">
                    <ListaUsers/>
                  </div>
                 
               </div>
              
            </div>
         </div>
          
          </div>
        <Footer />
        {/* <!-- Footer.js --> */}
      </main>
      <div id="overlayer">
        <div className="loader-overlay">
          <div className="dm-spin-dots spin-lg">
            <span className="spin-dot badge-dot dot-primary"></span>
            <span className="spin-dot badge-dot dot-primary"></span>
            <span className="spin-dot badge-dot dot-primary"></span>
            <span className="spin-dot badge-dot dot-primary"></span>
          </div>
        </div>
      </div>
      <div className="overlay-dark-sidebar"></div>
      <div className="customizer-overlay"></div>
    </div>
  );
};

export default ListUsers;
