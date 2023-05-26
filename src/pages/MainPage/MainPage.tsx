import { Link } from "react-router-dom";

type Props = {};

const MainPage = (props: Props) => {
  return (
    <div>
      MainPage
      <Link to={"/about"}>About</Link>
    </div>
  );
};
export default MainPage;
