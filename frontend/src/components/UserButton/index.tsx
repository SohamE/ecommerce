import { Link } from "react-router";

const UserButton = () => {
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
