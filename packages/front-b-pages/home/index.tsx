import { useDispatch } from "react-redux";
import { fetchAppInitialize } from "@front/entities/auth";

const Home = () => {
  const dispatch = useDispatch();

  const onLogin = () => {
    dispatch(fetchAppInitialize());
  };

  return (
    <div>
      <header>
        <p>Home</p>
        <button className="underline">Login</button>
      </header>
    </div>
  );
};

export default Home;
