import { useContext } from "react";
import LoginContext from "./authContext";

const useAuth = () => useContext(LoginContext);
export default  useAuth