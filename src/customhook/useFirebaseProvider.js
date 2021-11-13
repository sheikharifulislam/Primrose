import { useContext } from "react";
import  {AuthContext}  from "../context/FirebaseProvider";


const useFirebaseProvider = () => {
    return useContext(AuthContext);
};

export default useFirebaseProvider;