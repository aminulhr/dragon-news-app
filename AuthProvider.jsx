import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "./firebase.config";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const ubsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("user state change", currentuser);
      setUser(currentuser);
    });
    return () => {
      ubsubscribe();
    };
  }, []);

  const logOut = () => {
    return signOut(auth)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  const authInfo = {
    user,
    createUser,
    logOut,
    signIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
      {/* <h1>Context Api</h1> */}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
