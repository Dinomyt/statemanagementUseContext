import { useContext } from "react";
import LoginContext from "../contexts/loginContext";

const useAuth = () => useContext(LoginContext);
export default  useAuth