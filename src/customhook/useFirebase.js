import { getAuth, createUserWithEmailAndPassword,updateProfile,signInWithEmailAndPassword,onAuthStateChanged,signOut} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialize from "../firebase/firebase.initialize";


firebaseInitialize();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [successMessage, setSuccessMessage] = useState('')

    const auth = getAuth();

    const updateNavigate = (navigate,location) => {
        const replace = location?.state?.from || '/home'
        navigate(replace, {
            replace: true,
        })
    }

    const register = (userName,email,mobileNumber,password,navigate,location) => {
        createUserWithEmailAndPassword(auth, email,password)
        .then((result) => {
            // const newUser = {email,name: userName,mobileNumber};
            setUser(result.user);
            updateProfile(auth.currentUser, {
                displayName: userName,
                phoneNumber: mobileNumber,
            })            
            updateNavigate(navigate,location)
        })
        .catch((error) => {
            console.log(error.message);
        })
    }

    const login = (userEmail, password,navigate,history) => {
        signInWithEmailAndPassword(auth,userEmail,password)
        .then((result) => {
            setUser(result.user);
            updateNavigate(navigate,history);
        })
        .catch((error) => console.log(error.message));
    }

    const logOut = () => {
        signOut(auth)
        .then((result) => {
            setSuccessMessage('succefully log out');
        })
        .catch((error) => {
            console.log(error.message);
        })
    }
    
    useEffect(() => {
        const unsubscribe =onAuthStateChanged(auth,(user) => {
            if(user) {
                setUser(user);
            }
            else {
                setUser({});
            }
        })

        return unsubscribe;
        
    },[auth])


    return {
        register,
        user,
        login,
        logOut,
    }

}

export default useFirebase;