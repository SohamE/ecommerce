import { Link } from "react-router";
import useAuthContext from "../../hooks/useAuthContext";

const UserButton = () => {
  const { logout, user } = useAuthContext();

  if (user) {
    return (
      <div className="">
        <button onClick={logout} className="link mr-2">
          Logout
        </button>
      </div>
    );
  }
  return (
    <div className="">
      <button>
        <Link to="/login" className="link mr-2">
          Login
        </Link>
      </button>{" "}
      /{" "}
      <button>
        <Link to="/register" className="link ml-2">
          Register
        </Link>
      </button>
    </div>
  );
};

export default UserButton;
