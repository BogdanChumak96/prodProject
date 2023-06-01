import { FC } from "react";
import { NavBar } from "../../../widgets/NavBar";
import { Sidebar } from "../../../widgets/Sidebar";
import styles from "./Layout.module.scss";

const Layout: FC = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className="content-page">
        <Sidebar />
        <div className="page-wrapper">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
