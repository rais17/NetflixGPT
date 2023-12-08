import React, { Suspense, useEffect } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Utils/firebase";
import { addUser, removeUser } from "./Utils/Slices/userSlice";
import { useDispatch } from "react-redux";
import Header from "./Components/Header";
import ShimmerMovies from "./Utils/Shimmer/ShimmerMovies";
import ShimmerVideo from "./Utils/Shimmer/ShimmerVideo";

// Lazy load the pages
const Authentication = React.lazy(() => import("./Pages/Authentication"));
const Browse = React.lazy(() => import("./Pages/Browse"));
const GPT = React.lazy(() => import("./Pages/GPT"));
const MoviesDetails = React.lazy(() => import("./Pages/MoviesDetails"));

function App() {
const dispatch = useDispatch();
const navigate = useNavigate();

useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { name, email, uid, photoURL } = user;
      dispatch(addUser({ name, email, uid, photoURL }));
      navigate("/browse");
    } else {
      dispatch(removeUser());
      navigate("/");
    }
  });
}, []);

  return (
    <div className="w-full">
      <Header />
      <Suspense
        fallback={
          <div className="w-screen min-h-screen bg-black">
            <ShimmerVideo />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Authentication />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/GPT" element={<GPT />} />
          <Route path="/moviesdetails/:id" element={<MoviesDetails />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
