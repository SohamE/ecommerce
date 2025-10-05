import { Link } from "react-router";
import useAuthContext from "../../hooks/useAuthContext";

const UserButton = () => {
  const { authState } = useAuthContext();

  if (authState.isAuthenticated) {
    return (
      <div className="">
        <button>
          <Link to="/logout" className="link mr-2">
            Logout
          </Link>
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
