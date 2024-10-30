import { ReactNode, useReducer } from "react";
import LoginContext from "./authContext"

interface Props {
    children: ReactNode;
}

interface LoginAction {
  type:'LOGIN';
  username:string;
}

interface LogoutAction {
  type:'LOGOUT';
}

export type AuthAction = LoginAction | LogoutAction;


const authReducer = (state:string,action:AuthAction): string => {
  if(action.type === 'LOGIN') return action.username;
  if(action.type === 'LOGOUT') return '';
  return state;
}

const AuthProvider = ({children}: Props) => {

    const  [user, loginDispatch] = useReducer(authReducer, '');

  return (
   <LoginContext.Provider value={{user,Dispatch: loginDispatch}}>
    {children}
   </LoginContext.Provider>
  )
}

export default AuthProvider