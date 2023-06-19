import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import HomePage from './components/HomePage'
import SellPage from './components/SellPage'
import ItemsDetail from "./components/ItemsDetail";


import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";

// const [isLoaded, setIsLoaded] = useState(false);

// useEffect(() => {
//   dispatch(thunk here).then(() => setIsLoaded(true));
// }, [dispatch]);

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>

          <Route path="/login" >
            <LoginFormPage />
          </Route>

          <Route path = '/sell'>
            <SellPage/>
          </Route>

          <Route path="/signup">
            <SignupFormPage />
          </Route>

          <Route  exact path ='/items/:itemId'>
          <ItemsDetail/>
          </Route>

          <Route path = '/'>
            <HomePage/>
          </Route>

        </Switch>
      )}
    </>
  );
}

export default App;
