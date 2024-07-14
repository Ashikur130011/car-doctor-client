import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../firebase/firebase.init';
import { createContext, useEffect, useState } from "react";

const auth = getAuth(app);

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState()

    const createUser = (email, password) => {
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)

    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //State Observer
    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
                setUser(currentUser)
                setLoading(false)
            
            })
            return () => {
                return unSubscribe()
            } 
    },[])

    const logout = () => {
        setLoading(true) 
        return signOut(auth)
    }


    const authInfo = {
        createUser,
        loginUser,
        user,
        logout,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;