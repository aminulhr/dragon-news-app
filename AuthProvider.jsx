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
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const ubsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("user state change", currentuser);
      setUser(currentuser);
      setLoading(false);
    });
    return () => {
      ubsubscribe();
    };
  }, []);
  const authInfo = {
    loading,
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
