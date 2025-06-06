import { useEffect, useState } from "react";
import AuthContext from "../contexts/auth.context";
import { Protected } from "../services/api/authService";

const AuthProvider = ({ children }) => {
  const [isLoggedInUser, setIsLoggedInUser] = useState(null);

  const checkIfUserIsLoggedIn = async () => {
    try {
      const response = await Protected();
      // console.log(response);
      setIsLoggedInUser(true);
    } catch (err) {
      setIsLoggedInUser(false);
    }
  };

  useEffect(() => {
    checkIfUserIsLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedInUser, setIsLoggedInUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
