import { useContext} from 'react';
import LoginContext from '../contexts/loginContext';

const Login  = () => {
  
// const [username, setUsername] = useState<string>('Jose!');
// const  [user, dispatch] = useReducer(authReducer, '')
const {user,Dispatch} = useContext(LoginContext);

  // Handle login
  const handleLogin = () => {
    Dispatch({type:'LOGIN', username:'Neng!'})
  }
  // Handle logout
  const handleLogout = () => {
    Dispatch({type:"LOGOUT"})
};
  

  return (
    <div className="container mt-5">
      {user ? (
          <div className='d-flex justify-content-between'>
          <p style={{ color: 'blue', padding: '10px' }}>Hello {user}</p>
          <button className="btn btn-danger" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      ) : (
          <button className="btn btn-primary" onClick={handleLogin}>
          Log In
        </button>
      )}
    </div>
  );
};

export default Login;