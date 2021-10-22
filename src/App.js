import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { Fragment } from "react";
import UserProfile from "./components/UserProfile";
import {useSelector} from 'react-redux';

function App() {

  const isLoggedIn = useSelector((state)=> state.auth.isLoggedIn);

  return (
    <Fragment>
      <Header />
      {isLoggedIn ? <UserProfile/> : <Auth />}
      <Counter />
    </Fragment>
  );
}

export default App;
