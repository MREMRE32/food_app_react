import { getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInOut } from "./animations";
import { validateUserJWTToken } from "./api";
import { app } from "./config/firebase.config";
import { Dashboard, Login, Main } from "./containers";
import { setUserDetails } from "./context/actions/userActions";

const App = () => {
  const firebaseAuth = getAuth(app);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    firebaseAuth.onAuthStateChanged((cred) => {
      if (cred) {
        cred.getIdToken().then((token) => {
          validateUserJWTToken(token).then((data) => {
            dispatch(setUserDetails(data));
          });
        });
      }
      setInterval(() => {
        setIsLoading(false);
      }, 3000);
    });
  }, []);
  return (
    <div className="w-screen min-h-screen h-auto flex flex-col items-center justify-center">
      {/*isLoading && (
        <motion.div
          {...fadeInOut}
          className="fied z-50 insert-0 bg-lightOverlay backdrop-blur-md flex items-center justify-center w-full"
        >
          Loading...
        </motion.div>
      )*/}
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
