
import './App.css';
import LoginPage from "./components/LoginPage/LoginPage";
import SearchPage from "./components/SearchPage/SearchPage";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHistory } from 'react-router';


function App() {
  const store = useSelector(store => store);
  const history = useHistory();
  if (!store.auth.auth) {
    history.push('/LoginPage')
  } else {
    history.push('/SearchPage')
  }
  return (
    <>
      <Route path="/SearchPage" render={() => <SearchPage />} />
      <Route path="/LoginPage" render={() => <LoginPage />} />

    </>
  );
}

export default App;
