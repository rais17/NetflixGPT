import React, { useState } from "react";
import Input from "./Input";
import { checkValidation } from "../Utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { updateProfile } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { USER_LOGO } from "../Utils/constant";

const Auth = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMessage, setErrMessage] = useState(null);
  const [authData, setAuthData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuthData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const isDataValid = checkValidation(authData);
    setErrMessage(isDataValid);
    if (isDataValid !== null) return;
    
    if (isSignInForm) {
      signInWithEmailAndPassword(auth, authData.email, authData.password)
        .catch((error) => {
          setErrMessage(error.code + ":- " + error.message);
        });
    } else {
      createUserWithEmailAndPassword(auth, authData.email, authData.password)
        .then(() => {
          updateProfile(auth.currentUser, {
            displayName: authData.name,
            photoURL: USER_LOGO
          })
            .catch((error) => {
              setErrMessage(error.message);
            });
        })
        .catch((error) => {
          setErrMessage(error.code + ":- " + error.message);
        });
    }
  };

  return (
    <div className="relative z-10 w-full">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col max-w-md gap-10 px-8 py-16 mx-auto mt-20 bg-black sm:px-16 md:py-20 bg-opacity-60"
      >
        <h1 className="-mb-3 font-sans text-3xl font-medium text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <div className="w-full space-y-4">
          {!isSignInForm && (
            <Input
              name="name"
              type="text"
              placeholder="Enter your name"
              value={authData.name}
              onChange={handleChange}
            />
          )}
          <Input
            name="email"
            type="email"
            placeholder="Enter your email"
            value={authData.email}
            onChange={handleChange}
          />
          <Input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={authData.password}
            onChange={handleChange}
          />

          <p className="font-sans text-base font-medium text-red-700">
            {errMessage}
          </p>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full rounded-md bg-[#E50914] p-3 font-sans text-base font-semibold text-white"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <div className="flex flex-wrap items-center gap-2 xxs:max-sm:justify-center">
          <h1 className="font-sans text-base font-normal text-[#737373]">
            {isSignInForm ? "New To NetflixGPT ? " : "Already registered ?"}
          </h1>
          <button
            onClick={() => setIsSignInForm((prev) => !prev)}
            className="font-sans text-base font-normal text-white"
          >
            {isSignInForm ? "Sign Up Now" : "Sign In Now"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Auth;
