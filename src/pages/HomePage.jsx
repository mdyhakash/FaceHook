import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
const HomePage = () => {
  const { auth } = useAuth();
  console.log(auth);
  return (
    <div>
      <p>Homepage</p>
      <Link to="/me">Go to profile</Link>
    </div>
  );
};

export default HomePage;
