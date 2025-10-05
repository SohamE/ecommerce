import { Link } from "react-router";
import Search from "../Search";
import UserButton from "../UserButton";

const Header = () => {
  return (
    <header>
      <div className="py-2 border-t-1 border-b-1 border-light-gray">
        <div className="container text-dark-gray">
          <div className="flex items-center justify-between text-small font-[500]">
            <div className="col1 w-[50%]">
              {/* @todo: Make it configurable */}
              Get up to 50% off new season styles, limited time only
            </div>
            <div className="col2 w-[50%] flex item-center justify-end">
              <ul className="flex justify-evenly gap-3">
                <li className="">
                  <Link to="#" className="link">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="#" className="link">
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="header py-4 border-b-1 border-light-gray">
        <div className="container flex items-center justify-between">
          <div className="col1 w-[25%]">
            <Link to="/">
              <img src="/logo.jpg" alt="logo" />
            </Link>
          </div>
          <div className="col2 w-[40%]">
            <Search />
          </div>
          <div className="col3 w-[25%] flex justify-around items-center">
            <UserButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
