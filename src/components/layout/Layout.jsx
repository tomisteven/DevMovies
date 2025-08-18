import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Outlet />{" "}
        {/* con outlet renderizo los componentes hijos de las rutas anidadas */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
