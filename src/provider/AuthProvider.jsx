import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../firebase/FIrebase.init";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signinUser =(email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    onAuthStateChanged( auth, (currentUser) => {
        if(currentUser){
            console.log("user successfully signed ", currentUser);
            setUser(currentUser);
        }else{
            console.log("None user signed");
            setUser(null)
        }
    });
    const name = 'mahim';
    const authInfo = {
        name,
        user,
        createUser,
        signinUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;