import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "./firebase";

const AuthContext = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {authUser ? (
        <>
          <p>{`Signed in as ${authUser.email}`}</p>
          <button onClick={userSignOut}>Sign Out</button>
        </>
      ) : (
        <p>Signed Out</p>
      )}
    </div>
  );
};

export default AuthContext;

// import React, { useContext, useState, useEffect } from "react"
// import { auth } from "../firebase"

// const AuthContext = React.createContext()

// export function useAuth() {
//     return useContext(AuthContext)
// }
// export function AuthProvider({ children }) {
//     const [currentUser, setCurrentUser] = useState()
//     const [loading, setLoading] = useState(true)

//     function signup(email, password) {
//         return auth.createUserWithEmailAndPassword(email, password)
//     }

//     function login(email, password) {
//         return auth.signInWithEmailAndPassword(email, password)
//     }

//     function logout() {
//         return auth.signOut()
//     }

//     function resetPassword(email) {
//         return auth.sendPasswordResetEmail(email)
//     }

//     function updateEmail(email) {
//         return currentUser.updateEmail(email)
//     }

//     function updatePassword(password) {
//         return currentUser.updatePassword(password)
//     }

//     useEffect(() => {
//         const unsubscribe = auth.onAuthStateChanged(user => {
//             setCurrentUser(user)
//             setLoading(false)
//         })
//         return unsubscribe}, [])

//     const value = { currentUser }

//     return (
//         <AuthContext.Provider value={value}>
//             {children}
//         </AuthContext.Provider>
//     )
// }