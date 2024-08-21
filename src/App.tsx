/* eslint-disable jsx-a11y/anchor-is-valid */
// src/App.tsx
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="wrapper">
      {/* Navbar */}
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" href="#" role="button">
              <i className="fas fa-bars"></i>
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="/" className="nav-link">Home</a>
          </li>
        </ul>
      </nav>

      {/* Sidebar */}
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="/" className="brand-link">
          <span className="brand-text font-weight-light">My App</span>
        </a>

        <div className="sidebar">
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column">
              <li className="nav-item">
                <a href="/dashboard" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p>Dashboard</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/register" className="nav-link">
                  <i className="nav-icon fas fa-user-plus"></i>
                  <p>Register</p>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Content Wrapper */}
      <div className="content-wrapper">
        <section className="content">
          <div className="container-fluid">
            {/* Place your content here */}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="main-footer">
        <strong>Copyright © 2024 <a href="#">My App</a>.</strong>
        All rights reserved.
      </footer>
    </div>
  );
};

export default App;
