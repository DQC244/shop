import { createContext, useReducer,useEffect } from "react";
import AuthReducer from "./AuthReducer";


const init_state = {
    root:JSON.parse(localStorage.getItem("root"))||null,
    isFetching:false,
    error:false,
}

export const AuthContext=createContext(init_state);

export const AuthContextProvider =({children})=>{
    const [state,dispatch] =useReducer(AuthReducer,init_state);
    useEffect(()=>{
        localStorage.setItem("root",JSON.stringify(state.root))
    },[state.root])

    return(
        <AuthContext.Provider
            value={{
                root:state.root,
                isFetching:state.isFetching,
                error:state.error,
                dispatch
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}