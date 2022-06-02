import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
// import { useDispatch, useSelector } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { authActionCreators } from './store';
import { Invitation } from "./bookings/Invitation";

function App() {
  // const dispatch = useDispatch();
  // const { login,fetchSermon, logout} = bindActionCreators(authActionCreators, dispatch);

  useEffect(() => {
    //fetchSermon();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Invitation />} />
      </Routes>
    </>
  );
}

export default App;
