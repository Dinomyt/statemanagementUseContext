import { Dispatch } from "react";
import React from "react";
import { AuthAction } from "../reducers/authReducer";

interface LoginContextType {
    user: string;
    Dispatch: Dispatch<AuthAction>
}

const LoginContext = React.createContext<LoginContextType>({} as LoginContextType);


export default LoginContext;