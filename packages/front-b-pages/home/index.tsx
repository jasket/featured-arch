import { fetchAppInitialize } from "@front/entities/auth";
import { useAppDispatch } from "@front/entities";

const Home = () => {
  const dispatch = useAppDispatch();

  const onLogin = () => {
    dispatch(fetchAppInitialize());
  };

  return (
    <div>
      <header>
        <p>Home</p>
        <button className="underline" onClick={onLogin}>
          Login
        </button>
      </header>
    </div>
  );
};

export default Home;
