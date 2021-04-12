import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import loginImg from "../../../images/loginImg.png";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../../App";
import { useHistory, useLocation } from "react-router";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [loggedInUser,setLoggedInUser] = useContext(UserContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    console.log("Clicked");

    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email }
        setLoggedInUser(signedInUser)
        storeAuthToken()
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const storeAuthToken = ()=> {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
      sessionStorage.setItem('token',idToken);
      history.replace(from);
    }).catch(function(error) {
      // Handle error
    });
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="login container">
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-6 shadow-sm p-4">
          <div>
            <h5 className="text-center">Login </h5>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label class="form-label" htmlFor="name">
                  Usr Name
                </label>
                <input
                  name="name"
                  className="form-control"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span style={{ color: "red" }}>This field is required</span>
                )}
              </div>

              <div className="mb-3">
                <label class="form-label" htmlFor="password">
                  Usr Password
                </label>
                <input
                  name="password"
                  className="form-control"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span style={{ color: "red" }}>This field is required</span>
                )}
              </div>
              <input className="form-control btn-primary" type="submit" />
            </form>
          </div>

          <div className="text-center">
            <p>or</p>
            <button onClick={handleGoogleSignIn} className="btn btn-info">
              Continue with google
            </button>
          </div>
        </div>

        <div className="col-md-6 d-none d-md-block align-self-end ">
          <img className="img-fluid" src={loginImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
