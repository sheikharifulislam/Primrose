import React,{createContext} from 'react';
import useFirebase from '../customhook/useFirebase';

export const AuthContext = createContext()

const FirebaseProvider = ({children}) => {
    const allContext = useFirebase();  
    return (
       <AuthContext.Provider value={allContext}>
           {children}
       </AuthContext.Provider>
    );
};

export default FirebaseProvider;