import { FC } from "react";
import { NavBar } from "../../../widgets/NavBar";

const Layout: FC = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
