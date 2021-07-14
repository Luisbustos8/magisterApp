import React from 'react';


import './Layout.css';

function Layout({ children }) {
  return (
    <div className="layout">
      <main className="layout-main bordered">
        <section className="layout-content">{children}</section>
      </main>
      <footer className="layout-footer bordered">© 2021 Prueba Técnica Magister</footer>
    </div>
  );
}

export default Layout;